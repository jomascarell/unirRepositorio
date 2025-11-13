// function saludar (nombre, callback) {
//     console.log('Hola ' + nombre);
// }
//
// saludar ('Pedro', () => console.log('Bienvenido a Clase!'));
//
// function login (username, password, callback) {
//     setTimeout(()=>{
//         console.log('Usuario Autentificado');
//         callback({id: 1, name: username});
//     }, 1000);
// }
//
// function gestUserData (user, callback) {
//     setTimeout(()=>{
//         console.log('Datos del Usuario Obtenidos');
//         callback({...user, age: 30});
//     }, 1000);
// }
//
//
// function getUserPosts(user, callback) {
//     setTimeout(()=>{
//         console.log('Post del Usuario', user);
//         callback({...user, age:30});
//     }, 1000);
// }

// console.log('Inicio de la aplicación');
//
// setTimeout(() => {
//     console.log('Dentro del TimeOut')
// }, 0)
//
// Promise.resolve().then(() =>{
//     console.log('Dentro del Primer Then');
// });
//
// console.log('Fin');