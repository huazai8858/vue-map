<template>
  <div>
    <div id="allmap"></div>
  </div>
</template>
<style>
  #allmap{
    width: 100%;height:700px;margin:0 auto;font-family:"微软雅黑";
  }
</style>
<script>
export default {
  mounted () {
    // window['init']=function(){
      var map = new BMap.Map("allmap");
       map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
       map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
       map.setCurrentCity("银川");          // 设置地图显示的城市 此项是必须设置的
       map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // }
  },
  methods:{


  }
}
</script>
