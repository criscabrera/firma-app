// import type { Actions } from './$types'
/** @type {import('./$types').Actions} */



export const actions = {
	default: async (event) => {
    const { request, url, locals: { supabase } } = event
		const formData = await request.formData()
		const email = formData.get('email') //as string
		const password = formData.get('password') //as string
    // ...
	}
}

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