// import { createClient } from '@supabase/ssr';
// import {PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL} from '$env/static/public';
// import { json } from '@sveltejs/kit';

// export const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)


// // Promises

// const wait = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("resolved!");
//     }, 3000);
// });

// wait.then(value => {
//     console.log("Hi")
// });

// // Async Await

// async function myFunction2() {

// };

// const myFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     console.log(jsonUserData);

//     const userEmails = jsonUserData.map( user => {
//         return user.email;
//     });
//     console.log(userEmails);

//     return jsonUserData;
// }