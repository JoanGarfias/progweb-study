<script>
    import { useRoute } from 'vue-router';
    import { db } from '@/firebase.config.js';
    import { doc, getDoc, updateDoc } from 'firebase/firestore';

    export default {
        name: 'EditContact',
        data(){
            return{
                contact: {
                    name: '',
                    phone: '',
                    email: '',
                    note: ''
                },
                contactId: '',
                buttonText: 'Guardar Contacto',
                loading: false,
                error: ''
            }
        },
        methods: {
            async loadContact(){
                try {
                    const docRef = doc(db, 'contacts', this.contactId);
                    const docSnap = await getDoc(docRef);
                    if(docSnap.exists()){
                        this.contact = { ...docSnap.data() };
                    } else {
                        this.error = 'Contacto no encontrado';
                    }
                } catch (e) {
                    this.error = 'Error al cargar el contacto';
                }
            },
            async saveContact(){
                this.buttonText = 'Guardando...';
                this.loading = true;
                this.error = '';
                try {
                    const docRef = doc(db, 'contacts', this.contactId);
                    await updateDoc(docRef, this.contact);
                    this.buttonText = 'Contacto guardado';
                    setTimeout(() => {
                        this.buttonText = 'Guardar Contacto';
                    }, 2000);
                } catch (e) {
                    this.error = 'Error al guardar el contacto';
                    this.buttonText = 'Error al guardar';
                } finally {
                    this.loading = false;
                }
            }
        },
        mounted(){
            const route = useRoute();
            this.contactId = route.params.id;
            this.loadContact();
        }
    }
</script>

<template>
    <div class="create-contact-container">
        <h1>Editando Contacto</h1>
        <form @submit.prevent="saveContact">
            <div v-if="error" class="error-msg">{{ error }}</div>
            <div class="form-group">
                <label for="nameContact">Nombre</label>
                <input type="text" id="nameContact" v-model="contact.name" placeholder="Ej: Juan Pérez" :disabled="loading" />
            </div>
            <div class="form-group">
                <label for="phoneContact">Teléfono</label>
                <input type="tel" id="phoneContact" v-model="contact.phone" placeholder="Ej: 123-456-7890" :disabled="loading"/>
            </div>
            <div class="form-group">
                <label for="emailContact">Email</label>
                <input type="email" id="emailContact" v-model="contact.email" placeholder="Ej: juan.perez@correo.com" :disabled="loading"/>
            </div>
            <div class="form-group">
                <label for="noteContact">Notas</label>
                <input type="text" id="noteContact" v-model="contact.note" placeholder="Notas adicionales" :disabled="loading"/>
            </div>
            <button type="submit" :disabled="loading">{{ buttonText }}</button>
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

    button[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    button:hover:not([disabled]) {
        background-color: #357ABD;
    }

    .error-msg {
        color: #e24a4a;
        background: #2a0000;
        padding: 0.75rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        text-align: center;
    }
</style>