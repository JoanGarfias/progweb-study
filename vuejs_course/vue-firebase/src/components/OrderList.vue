<template>
    <div class="product-list-container">
        <h1>Lista de ordenes</h1>
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
                        <button @click="deleteOrder(order.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
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