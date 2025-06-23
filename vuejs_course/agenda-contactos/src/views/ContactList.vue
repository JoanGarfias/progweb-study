<script>
    import { db } from '@/firebase.config.js';
    import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

    export default {
        name: 'ContactList',
        data(){
            return{
                contacts: [
                ]
            }
        },
        async created(){
            await this.getContacts();
        },
        methods: {
            toggleDetails(contact) {
                contact.expanded = !contact.expanded;
            },
            async getContacts(){
                const contactCollectionRef = collection(db, 'contacts');
                const snapshot = await getDocs(contactCollectionRef);
                this.contacts = snapshot.docs.map(doc => ({ 
                    id: doc.id, 
                    ...doc.data(),
                    expanded: false 
                }));
            },
            async deleteContact(contactId) {
                if(confirm(`¿Seguro que deseas eliminar el contacto?`)){
                    await deleteDoc(doc(db, 'contacts', contactId));
                    this.contacts = this.contacts.filter(c => c.id !== contactId);
                }
            }
        },
    }
</script>


<template>
    <div class="contact-list-container">
        <h1>Mis Contactos</h1>
        <div class="contact-list">
            <div v-for="contact in contacts" :key="contact.id" class="contact-card">
                <div class="card-header">
                    <div class="contact-info">
                        <h2>{{ contact.name }}</h2>
                        <p>{{ contact.email }}</p>
                    </div>
                    <div class="card-actions">
                        <RouterLink :to="'/editar-contacto/' + contact.id" class="action-btn edit-btn">Editar</RouterLink>
                        <button @click="toggleDetails(contact)" class="action-btn details-btn">
                            {{ contact.expanded ? 'Ver menos' : 'Ver más' }}
                        </button>
                        <button @click="deleteContact(contact.id)" class="action-btn delete-btn">Eliminar</button>
                    </div>
                </div>
                <div v-if="contact.expanded" class="contact-details">
                    <p><strong>Teléfono:</strong> {{ contact.phone }}</p>
                    <p><strong>Notas:</strong> {{ contact.note }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-list-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    color: var(--tx-primary);
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.contact-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-card {
    background-color: var(--bg-section);
    border: 1px solid #333;
    border-radius: 8px;
    padding: 1.5rem;
    transition: box-shadow 0.2s, border-color 0.2s;
}

.contact-card:hover {
    border-color: #4a90e2;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.contact-info h2 {
    margin: 0 0 0.25rem 0;
    font-size: 1.5rem;
    color: var(--tx-acento);
}

.contact-info p {
    margin: 0;
    color: #aaa;
}

.card-actions {
    display: flex;
    gap: 0.75rem;
}

.action-btn {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #333;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
    text-decoration: none;
    font-size: 0.9rem;
    text-align: center;
}

.action-btn.edit-btn {
    background-color: #4a90e2;
}

.action-btn.edit-btn:hover {
    background-color: #357ABD;
}

.action-btn.details-btn:hover {
    background-color: #444;
}

.action-btn.delete-btn {
    background-color: #e24a4a;
}

.action-btn.delete-btn:hover {
    background-color: #b83232;
}

.contact-details {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #333;
}

.contact-details p {
    margin: 0.5rem 0;
}
</style>