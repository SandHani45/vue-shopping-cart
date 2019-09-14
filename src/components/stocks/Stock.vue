<template>
    <b-row>
        <b-col cols="2">
            <div class="panel panel-success">
            <div class="panel-title">
                {{stock.name}}
            <small>(price: {{stock.price}})</small>
            </div>
        </div>
        </b-col>
        <b-col cols="3">
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" 
                        @click="buyStock"
                         >BUY</button>
                </div>
            </div>
        </b-col>
    </b-row>
</template>
<script>
export default {
    props:['stock'],
    data(){
        return {
            quantity:0
        }        
    },
    methods:{
        buyStock(){
            const order = {
                stockId : this.stock.id,
                stockPrice:this.stock.price,
                quantity:this.quantity,
                price:this.stock.price*this.quantity
            };
            console.log(order);
            this.quantity = 0;
        }
    }
}
</script>
<style  scoped>
    .panel-body{
        display :flex
    }
</style>