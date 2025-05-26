<script>
import { reactive } from 'vue';
import { ref } from 'vue';

export default{
    
    data(){

        return {
            iva: ref(0),
            descuento: ref(0),
            total: ref(0),
            newEntry: {
                cantidad: "",
                descripcion: 0,
                precio: 0,
            },
            lista: reactive([
                {
                    cantidad: 1,
                    descripcion: "Coca",
                    precio: 100,
                    subtotal: 100,
                },
                {
                    cantidad: 2,
                    descripcion: "Galletas",
                    precio: 200,
                    subtotal: 400,
                }
            ])
        }
    },
    methods: {
        add() {
            if (this.newEntry.cantidad && this.newEntry.descripcion && this.newEntry.precio) {
                const subtotal = this.newEntry.cantidad * this.newEntry.precio;
                this.lista.push({
                    cantidad: this.newEntry.cantidad,
                    descripcion: this.newEntry.descripcion,
                    precio: this.newEntry.precio,
                    subtotal: subtotal
                });
                this.newEntry = { cantidad: "", descripcion: "", precio: "" };
            } else {
                alert("Por favor, completa todos los campos.");
            }
        },
        remove(index){
            if(confirm("¿Estás seguro de eliminar este producto?")){
                this.lista.splice(index, 1);
            }
        },
    },
    components(){

    },
    computed: {
        pagosCalculados() {
            let total = 0;
            let suma = 0;
            this.lista.forEach(item => {
                total += item.subtotal;
            });
            suma = total;
            const iva = total * 0.10; // 16% IVA
            const descuento = total * 0.20; // 20% Descuento
            return {
                suma: suma.toFixed(2),
                iva: iva.toFixed(2),
                descuento: descuento.toFixed(2),
                total: (total - descuento).toFixed(2)
            };
        }
    },
}

</script>

<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="jumbotron">Caja registradora</h1>
                    <table class="table table-stripped">
                        <thead>
                            <tr></tr>
                            <tr>
                                <th style="width:40px">Cantidad</th>
                                <th>Descripción</th>
                                <th style="width:200px">Precio</th>
                                <th style="width: 100px"></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" class="form-control" v-model="newEntry.cantidad" placeholder="Cantidad">
                                </td>
                                <td>
                                    <input type="text" class="form-control" v-model="newEntry.descripcion" placeholder="Descripción">
                                </td>
                                <td>
                                    <input type="text" class="form-control" v-model="newEntry.precio" placeholder="Precio">
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success btn-block" @click="add()">Agregar</button>
                                </td>
                            </tr>

                            <tr v-for="(item, index) in lista" :key="index">
                                <td>
                                    <button type="button" class="btn btn-danger btn-xs" @click="remove(index)">
                                        <i class="glyphicon glyphicon-trash"></i>
                                    </button>
                                </td>
                                <td>{{ item.cantidad }}</td>
                                <td>{{ item.descripcion }}</td>
                                <td>{{ item.precio }}</td>
                                <td>{{ item.subtotal }}</td>
                            </tr>

                            <tr v-if="lista.length <= 0">
                                <td></td>
                                <td></td>
                                <td>No hay productos</td>
                                <td></td>
                            </tr>

                        </tbody>


                        <tfoot>
                            <tr class="text-danger">
                                <td></td>
                                <td class="text-right">Suma</td>
                                <td>{{ pagosCalculados.suma }}</td>
                                <td></td>
                            </tr>

                            <tr class="text-danger">
                                <td></td>
                                <td class="text-right">IVA</td>
                                <td>{{ pagosCalculados.iva }}</td>
                                <td></td>
                            </tr>

                            <tr class="text-success">
                               <td></td>
                               <td class="text-right">20% Descuento</td>
                               <td>{{ pagosCalculados.descuento }}</td>
                               <td></td> 
                            </tr>

                            <tr class="text-info">
                                <td></td>
                                <td class="text-right">Total</td>
                                <td>{{ pagosCalculados.total }}</td>
                                <td></td>
                            </tr>

                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 55px;
}
</style>
