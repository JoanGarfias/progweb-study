<template>
    <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
        <RouterLink to="/">
            <svg id="logo" class="d-inline-block align-text-top" fill="#fff" width="30px" height="24px" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg"><path id="secondary" d="M3.29,9.09,8.2,14H11V11.2L6.09,6.29a1,1,0,0,0-1.4,0l-1.4,1.4A1,1,0,0,0,3.29,9.09Z" style="fill: rgb(44, 169, 188); stroke-width: 2;"></path><path id="primary" d="M9,3H19a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V18" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary-2" data-name="primary" d="M3.29,7.69l1.4-1.4a1,1,0,0,1,1.4,0L11,11.2V14H8.2L3.29,9.09A1,1,0,0,1,3.29,7.69ZM19,8h2m-2,4h2m-2,4h2" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></svg>
            <h3>Agenda de contactos en Vue</h3>
        </RouterLink>
    </nav>
</template>

<script>
</script>

<style scoped>
    #logo{
        background-color: #fff;
    }

    a{
        color: white;
        text-decoration: none;
    }

    nav{
        display: flex;
        flex-direction: row;
        background-color: var(--bg-section);
        margin-bottom: 4rem;
    }
    nav a{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        margin: 0 auto;
    }
</style>