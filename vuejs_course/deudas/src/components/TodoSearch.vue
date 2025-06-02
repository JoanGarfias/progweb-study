<script>

export default {
    data(){
        return {
            query: '',
            isSearching: false,
        }
    },
    methods : {
        changeStateSearching(){
            this.isSearching = !this.isSearching;
        },
        queryChange(){
            console.log("Hola");
            this.$emit('queryChange', this.query);
        }
    }
}
</script>

<template>
    <div id="todoSearch">
        <input type="text" class="searchInput" v-show="isSearching" v-model="query" v-on:input="queryChange"/>
        <img class="icon" src="../assets/icons/Search.svg" v-show="!isSearching" @click="changeStateSearching"/>
        <img class="icon" src="../assets/icons/Close.svg" v-show="isSearching" @click="changeStateSearching"/>
    </div>
</template>

<style scoped>
.icon{
    width: 48px;
    height: 48px;
}

#todoSearch{
    display: flex;
    flex-direction: row;
}

.searchInput{
    outline: none;
    border: solid 1px #ccc;
    margin: 0 auto;
    min-width: 300px;
    color: #000;
}

</style>