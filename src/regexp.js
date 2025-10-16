
const mail = document.getElementById('mail');
const pwd = document.getElementById('pwd');
const msg = document.getElementById('msg');

const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexCharDecimal = /\d/;
const regexCharSpecial = /[-$&@!]/;

// console.log(regexMail.test('bonjouuur'));
// console.log(regexMail.test(`<script>alert('Mouahahaha')</script>`));
// console.log(regexMail.test('bonjour@'));
// console.log(regexMail.test('bonjour@mail.fr'));

mail.addEventListener('keyup', (e) => {
    if (regexMail.test(e.target.value)){
        mail.classList.add("bg-success", "outline-success");
    } else {
        mail.classList.add("bg-red-500", "outline-red-500");
    }
});

pwd.addEventListener('keyup', (e) => {
    let testEntry = e.target.value;
    let errors = [];
    msg.classList.remove("border-2","border-red-500", "border-green-500", "border-solid");

    if(testEntry.length < 6){
        errors.push("- Le mot de passe est trop court. (6 à 8 caractères)");
    }
    if (testEntry.length > 8){
        errors.push("- Le mot de passe est trop long. (6 à 8 caractères)");
    }
    if(!testEntry.match(regexCharDecimal)){
        errors.push("- Le mot de passe doit contenir un chiffre.");
    } 
    if(!testEntry.match(regexCharSpecial)){
        errors.push("- Le mot de passe doit contenir un caractère spécial : - $ & @ !");
    }
   
    if(errors.length > 0){
        msg.classList.add("border-2","border-red-500", "border-solid");
        msg.innerHTML = errors.join('<br>');

    } else if (testEntry.length > 0){
        msg.classList.add("border-2","border-green-500","border-solid");
        msg.innerHTML = "Mot de passe valide";
    } else {
        msg.innerHTML = ""
    }
   
});