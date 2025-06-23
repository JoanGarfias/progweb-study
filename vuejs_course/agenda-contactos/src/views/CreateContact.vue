<script>
    import { db } from '@/firebase.config.js';
    import { collection, addDoc } from 'firebase/firestore';

    export default {
        name: 'CreateContact',
        data(){
            return{
                contact: {
                    name: '',
                    phone: '',
                    email: '',
                    note: ''
                },
                buttonText: 'Guardar Contacto',
            }
        },
        methods: {
            saveContact(){
                console.log(this.contact);
                this.buttonText = 'Guardando...';

                // Aquí iría la lógica para guardar el contacto
                const contactCollectionRef = collection(db, 'contacts');
                addDoc(contactCollectionRef, this.contact)
                .then(() => {
                    console.log('Contacto guardado correctamente');
                    this.buttonText = 'Contacto guardado correctamente';
                    setTimeout(() => {
                        this.buttonText = 'Guardar Contacto';
                    }, 2000);
                    this.contact = {
                        name: '',
                        phone: '',
                        email: '',
                        note: ''
                    }
                })
                .catch((error) => {
                    console.error('Error al guardar el contacto:', error);
                    this.buttonText = "Error al guardar el contacto";
                });
            }
        }
    }
</script>

<template>
    <div class="create-contact-container">
        <h1>Crear Nuevo Contacto</h1>
        <form @submit.prevent="saveContact">
            <div class="form-group">
                <label for="nameContact">Nombre</label>
                <input type="text" id="nameContact" v-model="contact.name" placeholder="Ej: Juan Pérez" />
            </div>
            <div class="form-group">
                <label for="phoneContact">Teléfono</label>
                <input type="tel" id="phoneContact" v-model="contact.phone" placeholder="Ej: 123-456-7890"/>
            </div>
            <div class="form-group">
                <label for="emailContact">Email</label>
                <input type="email" id="emailContact" v-model="contact.email" placeholder="Ej: juan.perez@correo.com"/>
            </div>
            <div class="form-group">
                <label for="noteContact">Notas</label>
                <input type="text" id="noteContact" v-model="contact.note" placeholder="Notas adicionales"/>
            </div>
            <button type="submit">{{ buttonText }}</button>
        </form>
    </div>
</template>

<style scoped>
    .create-contact-container {
        max-width: 600px;
        margin: 2rem auto;
        padding: 2rem;
        background-color: var(--bg-section);
        border-radius: 8px;
    }

    h1 {
        color: var(--tx-primary);
        text-align: center;
        margin-bottom: 2rem;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    form label{
        color: var(--tx-primary);
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }

    form input{
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #333;
        border-radius: 4px;
        background-color: #111;
        color: var(--tx-primary);
        box-sizing: border-box;
    }

    form input:focus {
        outline: none;
        border-color: #4a90e2;
    }

    button {
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        background-color: #4a90e2;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #357ABD;
    }
</style>