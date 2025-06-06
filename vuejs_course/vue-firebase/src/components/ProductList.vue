<template>
    <div class="product-list-container">
        <h1>Lista de productos</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>{{ order.name }}</td>
                    <td>{{ order.price }}</td>
                    <td>{{ order.description }}</td>
                    <td>
                        <button @click="editProduct(order.id)">Editar</button>
                        <button @click="deleteProduct(order.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <button>Agregar un nuevo producto</button>
        <div v-if="showAddProduct || selectedProduct" class="product-form">
            <h2>{{ selectedProduct ? 'Editar Producto' : 'Agregar Producto' }}</h2>
            <form @submit.prevent="saveProduct">
                <label for="name">Nombre:</label>
                <input type="text" v-model="product.name" id="name" required>

                <label for="price">Precio:</label>
                <input type="number" v-model="product.price" id="price" required>

                <label for="description">Descripción:</label>
                <textarea v-model="product.description" id="description" required></textarea>

                <button type="submit">{{ selectedProduct ? 'Actualizar' : 'Agregar' }}</button>
                <button type="button" @click="cancelEdit">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>