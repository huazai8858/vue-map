<template>
  <div class="hello">
    <div class="Margin">
      <div class="display">
        <input type="text"id="input" v-model="text" placeholder="不能超过4个字" max="5"><button type="button" name="button" @click = "add">添加</button>
      </div>
      <table border="1">
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
        <tr v-for = "(item,index) in list">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.sex==1?"男":"女"}}</td>
          <td>{{item.age}}</td>
          <td><input class="btn" type="button" value="删除" @click="remove(index)"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script type="text-javaScript">
export default {
  name: 'hello',
  data(){
  		return {
  			text: "",
        checked:true,
        list:[
          {name:'张三',sex:1,age:26,flage:true},
          {name:'岳云鹏',sex:1,age:29,flage:false},
          {name:'赵丽颖',sex:0,age:18,flage:false},
          {name:'江疏影',sex:0,age:18,flage:false},
          {name:'沙小憋',sex:1,age:15,flage:false},
          {name:'王阿马',sex:1,age:12,flage:false}
        ]
  		}
  },
  methods:{
    add(){
      if(this.text !=""){
        var msg = this.text
        var objItem = {}
        objItem = {name:msg,sex:this.random(2,0),age:this.random(60,18),flage:"flase"}
        this.list.push(objItem)
      }else{
        alert("请输入姓名")
      }
    },
    random(num,num1){
        return parseInt(Math.random()*(num-num1)+num1)
    },
    remove(index){
      this.list.splice(index,1)
    }

    }
  }
</script>
<style scoped>

#input{
  width: 260px;
  height: 20px;
  padding-left: 5px;
}
button{
  height: 25px;
  padding-bottom:  21px;
}
table{
margin: 0 auto;
}
td,th{
  padding: 5px 10px;
}
</style>
