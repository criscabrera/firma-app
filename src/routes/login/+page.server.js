import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect} from '@sveltejs/kit';
/** @type {import('./$types').Actions} */


export const actions = {
    login: async ({request, locals}) => {
        const formData = await request.formData()

        const email = formData.get('email')
        const password = formData.get('password')

        console.log('apunto de validar el login')

        const {error} = await locals.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        console.log('validó el login')

        if (error) {
            if (error.status === 400) {
                return fail(400, {
                    message: 'Invalid credentials!',
                    values: {email},
                })
            }

            return fail(500, {
                message: 'We had a problem logging you in! Try again?',
                values: {email}, 
            })
        }
        console.log('validó el login y justo antes de redirigir')
        redirect (303, '/')
    }
}