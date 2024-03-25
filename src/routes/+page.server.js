// import type { Actions } from './$types'
/** @type {import('./$types').Actions} */

import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const user = await locals.supabase.auth.getUser()
	return { user: user.data.user}
}


export const actions = {
	default: async (event) => {
    const { request, url, locals: { supabase } } = event
		const formData = await request.formData()
		const email = formData.get('email') //as string
		const password = formData.get('password') //as string
    // ...
	},
	//en caso de que sea un form (POST) el botón de logout
	// logout: async ({ locals }) => {
	// 	await locals.supabase.auth.signOut()
	// 	redirect(303, "/")
	// }
};

// export const actions = {
// 	default: async ({request, url, locals: {supabase}}) => {
// 		const formData = await request.formData();
// 		const validation = 
		
// 		const { data, error } = await supabase.auth.signInWithOtp({
// 			email: 'example@email.com',
// 			options: {
// 			  // set this to false if you do not want the user to be automatically signed up
// 			  shouldCreateUser: false,
// 			  emailRedirectTo: `${url.origin}/welcome`,
// 			},
// 		  })
// 	}
// }