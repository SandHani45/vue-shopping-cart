<template>
   <div>
       <b-col>
           <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
       </b-col>
   </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    components:{
        appStock:Stock
    },
    computed:{
        stocks(){ 
            console.log(this.$store.getters.stocks)
            return this.$store.getters.stocks;
        }
    }
}
</script>