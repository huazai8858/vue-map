<template lang="html">
  <div class="">
      <table border="1" id="tab">
        <tr>
          <th>id</th>
          <th>门店</th>
          <th>地区</th>
        </tr>
        <tr v-for="item in showList">
          <td>{{item.shop_id}}</td>
          <td>{{item.main_shop_name}}</td>
          <td>{{item.branch_shop_name}}</td>
        </tr>
      </table>
  </div>
</template>

<script type="text-javaScript">
export default {
  data(){
    return{
      showList:[]
    }
  },
  mounted(){

    this.$ajax({
        url:"https://pamilu.cn/goods.php/Coupon/ajaxGetShopInfos?token=399e552cdf62f2bb4e1a2b8bad61419f",
        type:'POST',
        dataType:"json"
    }).then((res)=>{
        this.showList = res.data.data.shoplist
        console.log(this.showList);
        // let tab = document.getElementById("tab");
        // tab.style.display = "block";
    },(error)=>{
      console.log(error);
    })
  },
  methods:{



  }

}
</script>

<style lang="css" scoped>
table{
  /*width: 40px;*/
  margin: 0 auto;
  /*display: none;*/
}

</style>
