<script>
import { reactive } from 'vue';
import { ref } from 'vue';

export default{
    
    data(){

        return {
            porPagar: ref(0),
            pagado: ref(0),
            total: ref(0),
            newEntry: {
                name: "",
                amount: 0
            },
            lista: reactive([
                {
                    name: "Lavandería",
                    amount: 500,
                    paid: false,
                },
                {
                    name: "Servicios",
                    amount: 300,
                    paid: true,
                },
            ])
        }
    },
    methods: {
        add() {
            if(this.newEntry.name && this.newEntry.amount > 0){
                this.lista.push({
                    id: this.lista.length + 1,
                    name: this.newEntry.name,
                    amount: parseFloat(this.newEntry.amount),
                    paid: false
                });
                this.newEntry.name = "";
                this.newEntry.amount = 0;
            } else {
                alert("Por favor, completa todos los campos.");
            }
        },
        remove(index){
            if(confirm("¿Estás seguro de eliminar esta deuda?")){
                this.lista.splice(index, 1);
            }
        },
        changeStatePaid(item){
            item.paid = !item.paid;
        },
    },
    components(){

    },
    computed: {
        pagosCalculados() {
            let pagado = 0;
            let porPagar = 0;

            for (const item of this.lista) {
            if (item.paid) pagado += item.amount;
            else porPagar += item.amount;
            }

            return {
            pagado,
            porPagar,
            total: pagado + porPagar
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
                    <h1 class="jumbotron">Lista de deudas</h1>
                    <table class="table table-stripped">
                        <thead>
                            <tr>
                                <th style="width:40px"></th>
                                <th>Descripción</th>
                                <th style="width:200px">Monto</th>
                                <th style="width: 100px">¿Cancelado?</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" class="form-control" v-model="newEntry.name" placeholder="Descripción de la deuda">
                                </td>
                                <td>
                                    <input type="text" class="form-control" v-model="newEntry.amount" placeholder="Monto de la deuda">
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
                                <td>{{ item.name }}</td>
                                <td>{{ item.amount }}</td>
                                <td class="text-center" :title="item.paid ? 'Si' : 'No'">
                                    <button class="btn btn-default btn-sm" :class="{'btn-success': item.paid}" @click="changeStatePaid(item)">
                                        <i v-if="item.paid" class="glyphicon glyphicon-ok"></i>
                                        <i v-if="!item.paid" class="glyphicon glyphicon-remove"></i>
                                    </button>
                                </td>
                            </tr>

                            <tr v-if="lista.length <= 0">
                                <td></td>
                                <td></td>
                                <td>No hay deudas</td>
                                <td></td>
                            </tr>

                        </tbody>


                        <tfoot>
                            <tr class="text-danger">
                                <td></td>
                                <td class="text-right">Por pagar</td>
                                <td>{{ pagosCalculados.porPagar }}</td>
                                <td></td>
                            </tr>

                            <tr class="text-success">
                               <td></td>
                               <td class="text-right">Pagado</td>
                               <td>{{ pagosCalculados.pagado }}</td>
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
