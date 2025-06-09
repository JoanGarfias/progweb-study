<script>

export default {
    setup () {
        const addProduct = () => {
            
        }
    },
    data(){
        return {
            newProduct: {
                name: '',
                price: 0,
                description: ''
            }
        }
    },
    inject: ['products'],
    methods: {
        addProduct(){
            const p = {
                id: this.products.length + 1,
                name: this.newProduct.name,
                price: parseFloat(this.newProduct.price),
                description: this.newProduct.description
            };
            this.$emit('addProduct', p);
        }
    }
}
</script>

<template>
    <h2>Agrega un nuevo producto</h2>
    <form class="add-product-form">
    <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" required>
    </div>

    <div class="form-group">
        <label for="price">Precio</label>
        <input type="number" id="price" required>
    </div>

    <div class="form-group">
        <label for="description">Descripción</label>
        <input type="text" id="description" required>
    </div>

    <button type="submit" class="add-product-btn" @click="addProduct">Agregar producto</button>
    </form>

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
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.description }}</td>
                    <td>
                        <button class="edit-btn" @click="editProduct(product.id)">Editar</button>
                        <button class="delete-btn" @click="deleteProduct(product.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>


table{
    width: 100%;
    border-collapse: collapse;
    background-color: #0a0a0a;
    color: #eaeaea;
    font-family: 'Inter', 'Segoe UI', sans-serif;
  }

thead {
    background-color: #111;
}

th, td {
    padding: 1rem;
    text-align: left;
}

tbody tr {
    border-bottom: 1px solid #222;
    transition: background-color 0.2s;
}

tbody tr:hover {
    background-color: #1a1a1a;
}

.edit-btn{
    background-color: transparent;
    color: #facc15;
    border-color: #facc15
}
.edit-btn:hover {
    background-color: #1f1f1f;
}

.delete-btn{
    background-color: transparent;
    color: #ef4444;
    border-color: #ef4444;
}
.delete-btn:hover {
    background-color: #1f1f1f;
}



.add-product-form {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 1rem;
    background-color: #111;
    padding: 1.5rem;
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    color: #eaeaea;
    max-width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .form-group label {
    font-size: 0.8rem;
    color: #aaa;
  }

  .form-group input {
    background-color: #1a1a1a;
    border: 1px solid #333;
    color: #eaeaea;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    font-size: 0.9rem;
    min-width: 160px;
  }

  .form-group input:focus {
    outline: none;
    border-color: #fff;
  }

  .add-product-btn {
    background-color: #fff;
    color: #111;
    border: none;
    padding: 0.65rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    height: fit-content;
    transition: background 0.2s ease-in-out;
  }

  .add-product-btn:hover {
    background-color: #eaeaea;
  }

  @media (max-width: 768px) {
    .add-product-form {
      flex-direction: column;
      align-items: stretch;
    }

    .form-group {
      width: 100%;
    }

    .add-product-btn {
      width: 100%;
    }
  }


</style>