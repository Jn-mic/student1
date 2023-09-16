 
 function sum(){ 
    let total=0;
    for(let i =0; i<arguments.length; i++){
        total += arguments[i];
    };
    console.log('sum;', total )
    };

sum(2,9)
// calling a function using parenthesis

function greet(id){
console.log( 'Hello' + id , ' how are you doing' );
};
greet('meru')

// calling a function - using call() fn

 function square(m){
    return m *m;
 }
 let results = square.call(this, 9);
 console.log(results);

// 3. using apply() in calling a function

function gret(salute, viva){
    console.log(`Mambo, ${salute} how is ${viva}?`)
}
let nyeri = ['Odunga', 'Cj'];
gret.apply(null,nyeri);

//4 bind() method

 function greet(name){
    console.log(`Hello, ${name}! `);
 }
 const greetJames = greet.bind(null, 'James, how are you today?');

 greetJames()



 const car= {
    'name':'BMW',
    'speed': '140 KMPH',
    'drive': function(){
        console.log(this.name   + '  runs at '  + this.speed);
    }
 }

 car.drive();


 
