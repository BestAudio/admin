<template>
  <div class="countHeaderBox">
    <button class="countHeaderBoxLeft">
      <i class="layui-icon layui-icon-prev"></i>
    </button>
    <nav class="countHeaderBoxNav">
      <div class="countHeaderBoxNavBox">
        <a href="#">首页</a>
      </div>
    </nav>
    <button class="countHeaderBoxRight">
      <i class="layui-icon layui-icon-next"></i>
    </button>
    <div class="countHeaderBoxSlect">
      页面操作<i class="layui-icon layui-icon-triangle-d"></i>
    </div>
    <a href="#" class="countHeaderBoxA">
      <i class="layui-icon layui-icon-refresh">刷新</i>
    </a>
  </div>
</template>
<script>
export default {
name:"RyUserAdm",
data() {
    return {

    }
}   
}
</script>
<style scoped>
/* header */
.countHeaderBox{
  width:100%;
  height:42px;
  background: white;
  line-height: 40px;
  display:flex;
  border:1px solid #ebe9e9;
}
.countHeaderBox button{
  width:3.43%;
  height:42px;
  border:1px solid #ebe9e9;
  background:white;
}
.countHeaderBox button:hover{
  cursor:pointer;
  background:rgb(216, 224, 228);
}
.countHeaderBox button i{
  color:rgb(206, 204, 204);
}
.countHeaderBoxNav{
  width:80%;
  height:42px;
}
.countHeaderBoxNavBox{
  width:100%;
  height:42px;
  display:flex;
}
.countHeaderBoxNavBox a{
  display:block;
  height:40px;
  text-align:center;
  padding:0px 15px;
  background:white;
  border:1px solid #ebe9e9;
  color:rgb(156, 156, 156);
  font-size:14px;
}
.countHeaderBoxSlect{
  width:8%;
  height:42px;
  background:white;
  line-height:42px;
  text-align:center;
  color:rgb(156, 156, 156);
}
.layui-icon-triangle-d{
  font-size:14px;
}
.countHeaderBoxA{
  display:block;
  width:5%;
  height:40px;
  text-align:center;
  background:white;
  border:1px solid #ebe9e9;
}
.countHeaderBoxA i{
  color:rgb(156, 156, 156);
  font-size:14px;
}
</style>

