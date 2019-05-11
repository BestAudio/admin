<template>
  <div>
    <div class="layui-layout layui-layout-admin">
      <ryOnlineusershead/>
    <div class="layui-body">
      <!-- 内容主体区域 -->
      <div style="padding: 15px;">
        <router-view/>
        <!-- <ryOnlineusersContent/> -->
      </div>
    </div>
  <div class="layui-footer">
    <!-- 底部固定区域 -->
   
  </div>
</div>
</div>
</template>

<script>
import ryOnlineusershead from "../components/Onlineusers/ry-Onlineusers-head"
import ryOnlineusersContent from "../components/Onlineusers/ry-Onlineusers-content"
import rytimertaskContent from "../components/timertask/ry-timertask-content"
export default {
  components:{
    ryOnlineusershead,
    ryOnlineusersContent,
    rytimertaskContent
    },
      mounted(){
        layui.use('element', function(){
        var element = layui.element;
      })
    }
  
}
</script>

<style>
  body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
body{
	font-family: "微软雅黑",Arial;
}
ul,ol{
	list-style:none;
}
img{
	border: 0;
}
a{
	text-decoration: none;
}



</style>
