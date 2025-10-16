class Imc {
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;

        function calcImc(){
            return (weight / (height**2)).toFixed(2);
        }

        function display() {
            let imc = calcImc();
            console.log(`${name} (${weight}kg, ${height}m) a un IMC de : ${imc}`)
        }
    }

}

let list = [
    new Imc('Dante', 90, 1.88),
    new Imc('Link', 61, 1.75),
    new Imc('Sylvanas', 58, 1.78),
    new Imc('Ellie', 58, 1.66)
]
list.forEach((person) => person.display()); 
    
