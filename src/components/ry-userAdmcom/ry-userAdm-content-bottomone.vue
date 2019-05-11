<template>
<div class="countTwoBoxsBottomOne">
    <div class="bottomOneLeft">
        <a class="leftA" href="#" style="background:#1c84c6"><i class="layui-icon layui-icon-add-1">新增</i></a>
        <a class="leftA" href="#" style="background:#1dc5a3"><i class="layui-icon layui-icon-form">修改</i></a>
        <a class="leftA" href="#" style="background:#ef6776"><i class="layui-icon layui-icon-close">删除</i></a>
        <a class="leftA" href="#" style="background:#23c6c8"><i class="layui-icon layui-icon-up">导入</i></a>
        <a class="leftA" href="#" style="background:#f8ac59"><i class="layui-icon layui-icon-down">导出</i></a>
    </div>
    <div class="bottomOneRight">
        <button class="rightBtn">
            <i class="layui-icon layui-icon-search"></i>
        </button>
        <button class="rightBtn">
            <i class="layui-icon layui-icon-refresh-1"></i>
        </button>
        <button class="rightBtn">
            <i class="layui-icon layui-icon-form"></i>
        </button>
        <button class="rightBtn rightBtns">
            <i class="layui-icon layui-icon-app"></i>
            <i class="layui-icon layui-icon-triangle-d"></i>
        </button>
    </div>
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
.countTwoBoxsBottomOne{
    width:98%;
    height:54px;
    margin-left:1%;
    display:flex;
    justify-content:space-between;
}
.bottomOneLeft{
    width:36%;
    height:54px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.leftA{
    display:block;
    width:58px;
    height:30px;
    border-radius:5px;
    text-align:center;
}
.leftA i{
    font-size:12px;
    color:white;
    line-height:30px;
}
.bottomOneRight{
    width:20%;
    height:54px; 
    display:flex;
    align-items:center;
}
.rightBtn{
    width:40px;
    height:34px;
    border:1px solid rgb(175, 174, 174);
    background:white;
    cursor: pointer;
}
.rightBtn:hover{
    background:rgb(199, 245, 205);
}
.rightBtn i{
    color:rgb(88, 88, 88);
    font-weight:600;
}
.rightBtns{
    width:52px;
    height:34px;
}
.layui-icon-triangle-d{
    font-size:12px;
    color:rgb(156, 152, 152);
}
</style>

