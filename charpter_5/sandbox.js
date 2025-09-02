// object literal

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

//console.log(blogs);


// let user = {
//     name: "Chris",
//     age: 30,
//     email: 'example@email.com',
//     location: 'USA',
//     blogs: [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ],
//     login: function() {
//         console.log('the user logged in');
//     },
//     logout: function() {
//         console.log('the user logged out');
//     },
//     logBlogs: function() {
//         //console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         });
//     }
// };

// user.logBlogs();
// console.log(this);

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

// console.log(user);
// console.log(user.name);

// //user.age = 35;
// console.log(user.age);

// console.log(user['email']);
// user['name'] = 'chris';

// console.log(user['location']);
// const key = 'location';
// console.log(user[key]);

// console.log(typeof user);

// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random number
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

// primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
let userOne = { name: 'ryu', age: 30 };
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);
