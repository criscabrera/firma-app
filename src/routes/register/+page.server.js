import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
// import { fail } from 'assert';
/** @type {import('./$types').Actions} */

export const actions = {
    register: async ({request, locals}) => {
        const body = Object.fromEntries(await request.formData())
        console.log(body)

        const {data, error: err} = locals.supabase.auth.signUp({
            email: body.email,
            password: body.password
        })

        console.log(body)
        console.log(data)

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid email or password'
                })
            }
            return fail (500, {
                error: 'Server error. Please try again later.'
            })
        }

        throw redirect (303, '/')
    }
};