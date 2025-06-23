<script>
    export default {
        
    }
</script>

<template>
    <div class="home-container">
        <header class="home-header">
            <h1>Tu Agenda de Contactos</h1>
            <p>Gestiona tus contactos de forma fácil y rápida.</p>
        </header>
        <main class="secciones">
            <RouterLink to="/crear-contacto" class="card-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"/></svg>
                <h3>Crear Contacto</h3>
                <p>Añade una nueva persona a tu lista.</p>
            </RouterLink>

            <RouterLink to="/contactos" class="card-link">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="currentColor"><path d="M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z"/></svg>
                <h3>Mis Contactos</h3>
                <p>Busca y edita tus contactos existentes.</p>
            </RouterLink>
        </main>
    </div>
</template>

<style scoped>
    .home-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        color: var(--tx-primary);
        max-width: 900px;
        margin: 2rem auto;
    }

    .home-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .home-header h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: var(--tx-primary);
    }

    .home-header p {
        font-size: 1.2rem;
        color: var(--tx-primary);
    }

    .secciones{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        width: 100%;
    }

    .card-link {
        background-color: var(--bg-section);
        border: 1px solid #333;
        border-radius: 8px;
        padding: 2rem;
        text-decoration: none;
        color: var(--tx-primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }

    .card-link:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        border-color: #4a90e2;
    }

    .card-link svg {
        margin-bottom: 1rem;
        color: #4a90e2;
    }

    .card-link h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--tx-acento);
    }

    .card-link p {
        font-size: 1rem;
        color: var(--tx-primary);
    }
</style>