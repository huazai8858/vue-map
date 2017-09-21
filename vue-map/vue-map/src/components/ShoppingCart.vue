<template lang="html">
  <table border="1">
    <tr>
      <th>书名</th>
      <th>作者</th>
      <th>价格</th>
      <th>个数</th>
      <th>总价</th>
    </tr>
    <tr v-for = "(item,index) in shoppingList">
      <td>{{item.book}}</td>
      <td>{{item.author}}</td>
      <td>{{item.price}}</td>
      <td><input type="button" @click="shopSub(index)" value="-">{{item.count}}<input type="button" @click="shopAdd(index)" value="+"></td>
      <td>{{item.Total}}</td>

    </tr>

  </table>
</template>

<script type="text-javaScript">
export default {
  data(){
    return{
      shoppingList:[
        {book:"初衷",author:"华",price:50,count:1,Total:50},
        {book:"灭世",author:"上",price:30,count:1,Total:30},
        {book:"绝世",author:"玩",price:40,count:1,Total:40},
        {book:"神偷奶爸",author:"吖",price:80,count:1,Total:80},
        {book:"生存",author:"秒",price:100,count:1,Total:100}
      ]
    }
  },
  methods:{
    shopAdd(index){
      console.log(index)
      if(this.shoppingList[index].count>=1){
        this.shoppingList[index].count ++
        this.shoppingList[index].Total = this.shoppingList[index].price * this.shoppingList[index].count
      }
    },
    shopSub(index){
      if(this.shoppingList[index].count>=2){
        this.shoppingList[index].count --
        this.shoppingList[index].Total = this.shoppingList[index].price * this.shoppingList[index].count
      }

    }
  }
}
</script>

<style lang="css" scoped>
table{
  margin: 0 auto;
}
th,td{

}
</style>
