import { error, redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code'); //as string
	const next = url.searchParams.get('next') ?? '/';


  //new code
  const user = await supabase.auth.getUser();
	console.log('user', user.data.user);
	const session = await supabase.auth.getSession();
	console.log('session', session.data.session);
	console.log(code);
  //end of new code

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      throw redirect(303, `/${next.slice(1)}`);
    }
  }

  // return the user to an error page with instructions
  // redirect(303, '/auth/auth-code-error');
  error(400, 'Something went wrong validating your credentials')
};