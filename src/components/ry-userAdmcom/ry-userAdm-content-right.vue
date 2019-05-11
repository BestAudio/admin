<template>
<div class="countTwoBoxsRight">
    <div class="countTwoBox">
        <ul class="countTwoBox01">
            <li>
                登录名称：<input class="countTwoBox01Input" type="text"/>
            </li>
            <li>
                手机号码：<input class="countTwoBox01Input" type="text"/>
            </li>
            <li>
                用户状态：<select name="countSelect" class="countTwoBox01Select">
                            <option value>所有</option>
                            <option value="0">正常</option>
                            <option value="1">停用</option>
                        </select>
            </li>
        </ul>
        <ul class="countTwoBox01">
            <li class="countTwoBox01TimeLi">
                创建时间：<input type="text" class="layui-input" id="test1" placeholder="开始时间"/>
                -<input type="text" class="layui-input" id="test2" placeholder="结束时间"/>
            </li>
            <li>
                <button class="layui-btn layui-btn-radius"><i class="layui-icon layui-icon-search">搜索</i></button>
                <button class="layui-btn layui-btn-radius layui-btn-warm"><i class="layui-icon layui-icon-refresh-1">重置</i></button>
            </li>
        </ul>
    </div>
    <ryUserAdmContentBottom></ryUserAdmContentBottom>
</div>
</template>
<script>
import ryUserAdmContentBottom from './ry-userAdm-content-bottom';
export default {
name:"RyUserAdm",
components:{
    ryUserAdmContentBottom
},
data() {
    return {

    }
},
mounted() {
    layui.use('laydate', function(){
    var laydate = layui.laydate;
  
  //执行一个laydate实例
    laydate.render({
      elem: '#test1'
    });
    laydate.render({
      elem: '#test2'
    })
  });
}
    
}
</script>
<style scoped>
.countTwoBoxsRight{
  width:84%;
  background:#f8f5f5;
}
.countTwoBox{
  width:94%;
  height:100px;
  border:1px solid #dbd7d7;
  margin:20px 3% 10px 3%;
  border-radius:10px;
  font-size:14px;
  background:white;
}
.countTwoBox01{
  width:100%;
  height:50px;
  display:flex;
  align-items:center;
}
.countTwoBox01 li{
  width:28%;
  margin-left:10px;
  display:flex;
  line-height:30px;
  font-size:14px;
}
.countTwoBox01Input{
  width:70%;
  height:30px;
  border:1px solid #dbd7d7;
}
.countTwoBox01Select{
  width:60%;
  height:30px;
  border:1px solid #dbd7d7;
}
.layui-input{
  width:35%;
  height:30px;
  border:1px solid #dbd7d7;
}
.countTwoBox01 .countTwoBox01TimeLi{
    width:35%;
}
.layui-btn{
  height:30px;
  line-height:30px;
}
.layui-btn i{
  font-size:12px;
  line-height:30px;
}
</style>

