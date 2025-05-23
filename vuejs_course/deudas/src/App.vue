<script>
import { reactive } from 'vue';

export default{
    
    data(){
        return {
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
    components(){

    }
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
                                    <input type="text" class="form-control">
                                </td>
                                <td>
                                    <input type="text" class="form-control">
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success btn-block">Agregar</button>
                                </td>
                            </tr>

                            <tr v-for="item in lista" :key="item.id">
                                <td>
                                    <button type="button" class="btn btn-danger btn-xs">
                                        <i class="glyphicon glyphicon-trash"></i>
                                    </button>
                                </td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.amount }}</td>
                                <td class="text-center" :title="item.paid ? 'Si' : 'No'">
                                    <button class="btn btn-default btn-sm" :class="{'btn-success': item.paid}">
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
                                <td>0</td>
                                <td></td>
                            </tr>

                            <tr class="text-success">
                               <td></td>
                               <td class="text-right">Pagado</td>
                               <td>0</td>
                               <td></td> 
                            </tr>

                            <tr class="text-info">
                                <td></td>
                                <td class="text-right">Total</td>
                                <td>0</td>
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
