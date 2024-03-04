<script>
    /** @type {import('./$types').PageData} */
    
    export let data
    let { supabase } = data
    $: ({ supabase } = data)

    let photo_url = 'https://i.pravatar.cc/150?img=12';
    let name = 'Cristian Cabrera';
    let job = 'Fullstack Developer';
    let department = 'Engineering';
    let company = 'Firma';
    let email = 'cris@getfirma.com';
    let website = 'www.cris.com';
    let phone = '+56 9 7568 3856';
    let company_address = 'San Sebastián 2965, Las Condes';

    // copy function 👇
    function copyTable() {
    try {
      const el = document.createElement('div');
      el.innerHTML = document.querySelector('.email-signature').innerHTML;
      document.body.appendChild(el);
      const range = document.createRange();
      range.selectNode(el);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      document.body.removeChild(el);
      alert("Signature copied!");
    } catch (err) {
      console.error("Failed to copy table: ", err);
    }
    }

console.log(data);
</script>

<h1>Firma - Team Email Signature 📬</h1>
{#if data.session}
     <p>You are logged as {data.session.user.email}</p>
{:else}
     <p>You are not logged in!</p>
     <p><a href="/login">Log in here</a></p> 
{/if}
<div>
    <!-- signature preview 👇 -->
    <div class="email-signature">
        <!-- signature template preview -->
        <table>
            <tr>
                <td style="border-right:1pt solid;vertical-align:top;">
                    <!-- left column with image -->
                    <table>
                        <tr>
                            <!-- email sender image -->
                            <td style="text-align: center; padding: 0px 18px 0px 0px;">
                                <!-- svelte-ignore a11y-img-redundant-alt -->
                                <img src="{photo_url}" style="border-radius: 50%; min-width: 98px;" alt="Email sender photo" width="98px" height="98px">
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="padding: 0px 0px 0px 18px;">
                    <!-- right column with text -->
                    <table>
                        <tr>
                            <!-- full name -->
                            <td class="name">
                                {name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <td class="job">
                                            <!-- job title -->
                                            {job}
                                        </td>
                                        <td class="department">
                                            <!-- department -->
                                            {department}
                                        </td>
                                        <td class="company">
                                            <!-- company -->
                                            {company}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <!-- this just adds spacing between texts -->
                                <table>
                                    <tr>
                                        <td >@</td>
                                        <!-- add class: "email" to this -->
                                        <td class="email"><a href="mailto:{email}">{email}</a></td>
                                    </tr>
                                    <tr>
                                        <td >A</td>
                                        <!-- add class: "address" to this -->
                                        <td class="company_address">{company_address}</td>
                                    </tr>
                                    <tr>
                                        <td >W</td>
                                        <!-- add class: "web" to this -->
                                        <td class="website"><a href="https://{website}">{website}</a></td>
                                    </tr>
                                    <tr>
                                        <td >T</td>
                                        <!-- add class: "phone" to this -->
                                        <td class="phone"><a href="tel:{phone}">{phone}</a></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="">
    <button class="" on:click={copyTable}>Copy signature</button>
</div>