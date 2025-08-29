// // for loops
// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// } 
// let i = 0;
// while (i < 5) {
//     console.log('in loop:', i);
//     i++;
// }

// do...while loops
// let i = 5;

// do {
//     console.log('in loop:', i);
//     i++;
// } while (i < 5);

//if statements
// const age = 20;
// if (age > 20) {
//     console.log('you are over 20 years old');
// }
// if (age === 20) {
//     console.log('you are 20 years old');
// }
// if (age < 20) {
//     console.log('you are under 20 years old');
// }

// const ninjas = ['shaun', 'mario', 'luigi', 'chun-li'];
// if (ninjas.length > 3) {
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ssw0rd1234';
// if (password.length >= 12 && password.includes('@')) 
//     console.log('that password is mighty strong');


// const password = 'p@ss';
// if (password.length >= 8 || password.includes('@')) 
//     console.log('that password is strong enough');
// else
//     console.log('that password is not long enough');

// logical NOT operator (!)
// let user = false;
// if (!user) {
//     console.log('you must be logged in to continue');
// }
// console.log(!true);
// console.log(!false);    

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) 
//     if (scores[i] === 0) {
//         continue;
//     }
//     console.log('your score:', scores[i]);
//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }

// switch statements
// const grade = 'D';

// switch(grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got a B!');            
//         break;
//     case 'C':
//         console.log('you got a C!');
//         break;
//     case 'D':
//         console.log('you got a D!');    
//         break;  
//     case 'E':
//         console.log('you got an E!');    
//         break;  
//     default:
//         console.log('not a valid grade');        
// }

// use if statements for ranges of values
// if (grade === 'A') {
//     else if (grade === 'B') {
//         console.log('you got an A!');
//     } else if (grade === 'C') {
//         console.log('you got a B!');
//     } else if (grade === 'D') {
//         console.log('you got a C!');
//     } else if (grade === 'E') {
//         console.log('you got a D!');
//     } else {
//         console.log('you failed!');
//     }   

// variables & block scope
let age = 30;
if (true) {
    let age = 40;
    let name = 'shaun';
    console.log('inside 1st code block:', age, name);
    if (true) {
        let age = 50;
        console.log('inside 2nd code block:', age);
        console.log('inside 2nd code block:', name);
    }
}
console.log('outside code block:', age, name);
