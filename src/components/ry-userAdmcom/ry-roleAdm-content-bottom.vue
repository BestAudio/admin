<template>
<div class="countTwoBoxsBottom">
    <RyUserAdmContentBottomone></RyUserAdmContentBottomone>
    <div class="countTwoBoxsBottomTwo">
        <table class="t">
            <thead>
                <tr>
                    <td width="4%">
                        <input type="checkbox"/>
                    </td>
                    <td width="8%">用户ID</td>
                    <td width="10%">登录名称</td>
                    <td width="9%">用户名称</td>
                    <td width="9%">部门</td>
                    <td width="13%">手机</td>
                    <td width="9%">用户状态</td>
                    <td width="18%">创建时间</td>
                    <td width="20%">操作</td>
                </tr>
            </thead>
            <tr>
                <td>
                    <input type="checkbox"/>
                </td>
                <td>1</td>
                <td>admin</td>
                <td>若依</td>
                <td>研发部门</td>
                <td>13720789192</td>
                <td></td>
                <td>2018-03-16 11:33:00</td>
                <td style="display:flex">
                    <a class="leftA leftAs" href="#" style="background:#1c84c6"><i class="layui-icon layui-icon-add-1">新增</i></a>
                    <a class="leftA leftAs" href="#" style="background:#1dc5a3"><i class="layui-icon layui-icon-form">修改</i></a>
                    <a class="leftA leftAs" href="#" style="background:#ef6776"><i class="layui-icon layui-icon-close">删除</i></a>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>
<script>
import RyUserAdmContentBottomone from "./ry-userAdm-content-bottomone";
export default {
name:"RyUserAdm",
components:{
       RyUserAdmContentBottomone
    },
data() {
    return {

    }
}   
}
</script>
<style scoped>
.countTwoBoxsBottom{
  width:94%;
  margin:20px 3% 10px 3%;
  border-radius:10px;
  font-size:14px;
  background:white;
  border:1px solid #dbd7d7;
}
/* table */
.countTwoBoxsBottomTwo{
    width:98%;
    margin:5px 1% 5px 1%;
    border-radius:10px;
    font-size:14px;
}
.t{
    width:100%;
    min-height:80px;
}
.t thead{
    height:40px;
    background:#eff3f8;
    border-bottom:1px solid rgb(179, 177, 177);
}
.t tr{
    height:40px;
    border-bottom:1px solid rgb(197, 196, 196);
}
.t td{
    text-align:center;
}
.leftAs{
    width:48px;
    height:22px;
    margin-top:10px;
}
.leftAs i{
    font-size:10px;
    line-height:22px;
    color:white;
}
</style>

