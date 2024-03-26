import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */


export const actions = {
    signUp: async ({request, locals}) => {
        const formData = await request.formData()

        const email = formData.get('email')
        const password = formData.get('password')

        const {error} = await locals.supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            if (error.status === 400) {
                return fail(400, {
                    message: error.message,
                    values: {email},
                })
            }

            return fail(500, {
                message: error.message ?? 
                "We had a problem creating an account for ${email}. Try again?",
                values: {email}, 
            })
        }

        return {email}

    }
}