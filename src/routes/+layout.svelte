<script>
    import { invalidateAll } from "$app/navigation";
    // import {supabaseClient} from "$lib/supabase";
    export let data;
    import { onMount } from "svelte";
    // import "../app.css";
	
    console.log(data.supabase);

    onMount(() => {
        const {
            data: { subscription }
        } = data.supabase.auth.onAuthStateChange(() => {
            invalidateAll();
        })

        return () => {
            subscription.unsubsribe();
        };
    });

</script>
<a href="/">Home</a>
<a href="/login">Login</a>
<a href="/signup">Sign Up</a>
<div>
    <slot></slot>
</div>