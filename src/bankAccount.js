let accountsListDOM = document.getElementById('accountsList');
    let newLi = document.createElement("li");

    const alert = document.querySelector('.alert');
    let alertMsg = document.querySelector('#alert-msg');

    const credit = document.querySelector('#credit');
    const withdrawal = document.querySelector('#withdrawal');
    const transfer = document.querySelector('#transfer');

    const select = document.querySelectorAll('.select');

       class BankAccount {
            constructor(customer){
                this.customer = customer;
                this.sold = 0;
            }

            credit(n) {
                this.sold += n;
            }

            withdrawal(n) {
                
                if(n <= this.sold){
                    this.sold -= n;
                } else {
                    throw new Error(`Erreur: Solde trop bas pour retirer ${n} €.`);
                }

            }

            transfer(n, customerToCredit){
                if(n <= this.sold){
                    this.withdrawal(n);
                    customerToCredit.credit(n);
                } else {
                    throw new Error(`Erreur: Solde trop bas pour effectuer un virement ${n} €.`);  
                }
            }

       }

       //account list
       const accounts = {
            Alex: new BankAccount("Alex"),
            Clovis: new BankAccount("Clovis"),
            Marco: new BankAccount("Marco"),
            Lena : new BankAccount("Lena")
       };

        //add each customer name
        function addCustomerInList(e){
             for(let key in accounts) {
                e.innerHTML += `<option name='customer'>${key}</option>`;
            };
        }

       //init each select list 
       select.forEach((e)=> addCustomerInList(e))

       //initial sold for each one
       for (let key in accounts) accounts[key].credit(1000);


        //credit account 
       credit.addEventListener('submit', (e)=>{
            e.preventDefault();

            const formData = new FormData(credit);

            let customer = formData.get('creditSelect');
            let amount = +formData.get('creditAmount');

            try {
                accounts[customer].credit(amount);
                alert.classList.remove('alert-error')
                alert.classList.add('alert-success');
                alertMsg.innerHTML = `Le compte de ${customer} a été crédité de ${amount} €.`
            }  catch(error) {
                alert.classList.remove('alert-success');
                alert.classList.add('alert-error')
                alertMsg.innerHTML = error.message;
            } finally {
                alert.classList.remove('hidden');
                updateAccountSolds();
            }

       });

       //withdrawal account
       withdrawal.addEventListener('submit', (e)=>{
            e.preventDefault();

            const formData = new FormData(withdrawal);

            let customer = formData.get('withdrawalSelect');
            let amount = +formData.get('withdrawalAmount');

            try {
                accounts[customer].withdrawal(amount);
                alert.classList.add('alert-success');
                alertMsg.innerHTML = `Le compte de ${customer} a été débité de ${amount} €.`
            }  catch(error) {
                alert.classList.add('alert-error')
                alertMsg.innerHTML = error.message;
            } finally {
                alert.classList.remove('hidden');
                updateAccountSolds();
            }

         
       });

       //transfer
       transfer.addEventListener('submit', (e)=>{
            e.preventDefault();

            const formData = new FormData(transfer);

            let customerExp = formData.get('customerExp');
            let customerDest = formData.get('customerDest');
            let amount = +formData.get('transferAmount');

            try {
                accounts[customerExp].transfer(amount, accounts[customerDest]);
                alert.classList.add('alert-success');
                alertMsg.innerHTML = `Le compte de ${customerExp} a transféré ${amount} € vers le compte de ${customerDest}`;
            }  catch(error) {
                alert.classList.add('alert-error')
                alertMsg.innerHTML = error.message;
            } finally {
                alert.classList.remove('hidden');
                updateAccountSolds();
            }
       });


       //update account solds
       function updateAccountSolds(){
            for (let key in accounts) {
                document.querySelector(`.account-${key}`).innerHTML = `${accounts[key].sold} €`;
            }
       }

       //display account solds
       for (let key in accounts) {
            let newLi = document.createElement("li");
            newLi.classList.add("w-100","p-5", "flex","flex-col", "items-center","bg-success", "mb-5","rounded");
            newLi.innerHTML = `
                <div>${key}</div>
                <div class="text-xs uppercase font-semibold opacity-60 account-${key}">${accounts[key].sold} €</div>
            `;

            accountsListDOM.appendChild(newLi);
       }
