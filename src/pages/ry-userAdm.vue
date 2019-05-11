<template>
<div class="layui-layout layui-layout-admin">
  <div class="layui-header headerBgColor">
    <div class="layui-logo logoFont">RuoYi</div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
    <ul class="layui-nav layui-layout-left">
      <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon layui-icon-spread-left"></i></a></li>
      <!-- <li class="layui-nav-item"><a href="">商品管理</a></li>
      <li class="layui-nav-item"><a href="">用户</a></li>
      <li class="layui-nav-item">
        <a href="javascript:;">其它系统</a>
        <dl class="layui-nav-child">
          <dd><a href="">邮件管理</a></dd>
          <dd><a href="">消息管理</a></dd>
          <dd><a href="">授权管理</a></dd>
        </dl>
      </li> -->
    </ul>
    <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-video">&nbsp;视频教程</i></a></li>
        <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-help">开发文档</i></a></li>
        <li class="layui-nav-item"><a href=""><i class="layui-icon layui-icon-snowflake">&nbsp;全屏显示</i></a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">
            <img src="../assets/img/userImg.jpg" class="layui-nav-img">
            码强
            </a>
            <dl class="layui-nav-child">
                <dd><a href=""><i class="layui-icon layui-icon-username">&nbsp;个人中心</i></a></dd>
                <dd><a href=""><i class="layui-icon layui-icon-util">&nbsp;修改密码</i></a></dd>
                <dd><a href=""><i class="layui-icon layui-icon-spread-left">&nbsp;退出登录</i></a></dd>
            </dl>
        </li>
    </ul>
  </div>
  <div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
      <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
      <ul class="layui-nav layui-nav-tree"  lay-filter="test">
        <li class="admin">
            <div class="admin_left">
                <img src="../assets/img/userImg.jpg"/>
            </div>
            <div class="admin_right">
                <div class="admin_top"><h3>admin</h3></div>
                <div class="admin_bottom">
                    <a href=""><i class="layui-icon layui-icon-circle-dot">&nbsp;<span>在线</span></i></a>
                    <a class="logout" href=""><i class="layui-icon layui-icon-spread-left">&nbsp;<span>注销</span></i></a>
                </div>
            </div>
        </li>
        <li class="layui-nav-item layui-nav-itemed">
          <a href="javascript:;"><i class="layui-icon layui-icon-home">&nbsp;<span>主页</span></i></a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">了解若依</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;"><i class="layui-icon layui-icon-form">&nbsp;<span>系统管理</span></i></a>
          <dl class="layui-nav-child">
            <dd><router-link to="/RyUserAdmContent">用户管理</router-link></dd>
            <dd><router-link to="/RyRoleAdmContent">角色管理</router-link></dd>
            <dd><a href="javascript:;">菜单管理</a></dd>
            <dd><a href="javascript:;">部门管理</a></dd>
            <dd><a href="javascript:;">岗位管理</a></dd>
            <dd><a href="javascript:;">字典管理</a></dd>
            <dd><a href="javascript:;">参数设置</a></dd>
            <dd><a href="javascript:;">通知公共</a></dd>
            <a class="dayAdminBox" href="javascript:;">日志管理</a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;">操作日志</a></dd>
                <dd><a href="javascript:;">登录日志</a></dd>
            </dl>
          </dl>
        </li>
        <li class="layui-nav-item layui-nav-itemed">
          <a class="" href="javascript:;"><i class="layui-icon layui-icon-video">&nbsp;<span>系统监控</span></i></a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">在线用户</a></dd>
            <dd><a href="javascript:;">定时任务</a></dd>
            <dd><a href="javascript:;">数据监控</a></dd>
            <dd><a href="javascript:;">服务监控</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:;"><i class="layui-icon layui-icon-set">&nbsp;<span>系统工具</span></i></a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">表单构建</a></dd>
            <dd><a href="javascript:;">代码生成</a></dd>
            <dd><a href="javascript:;">系统接口</a></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
  <div class="layui-body">
    <!-- 内容头部 -->
    <ryUserAdmContentHeader></ryUserAdmContentHeader>
    <!-- 内容主体区域 -->
    <!-- <RyUserAdmContent></RyUserAdmContent> -->
    <router-view>

    </router-view>
  </div>
  <div class="flexFooter">
    <!-- 底部固定区域 -->
    © 2019 RuoYi Copyright
  </div>
</div>
</template>
<script>
import ryUserAdmContentHeader from '../components/ry-userAdmcom/ry-userAdm-content-header';
import RyUserAdmContent from '../components/ry-userAdmcom/ry-userAdm-content';
import RyRoleAdmContent from '../components/ry-userAdmcom/ry-roleAdm-content';
export default {
name:"RyUserAdm",
components:{
        ryUserAdmContentHeader,
        RyUserAdmContent,
        RyRoleAdmContent
    },
data() {
    return {

    }
},
mounted() {
    layui.use('element', function(){
    var element = layui.element;
  
    })
}
    
}
</script>
<style scoped>
/* header */
.headerBgColor{
    background:#3c8dbc;
}
.layui-icon-spread-left{
    font-size:18px;
}
.logoFont{
    font-size:22px;
    color:white;
    background:#367fa9;
}
.layui-nav-child i{
    font-size:12px;
}
/* 左侧菜单栏 */
.admin{
    width: 100%;
    height:75px;
    background: #2f4050;
    padding-left: 19px;
    padding-top: 18px;
    display: flex;
}
.admin_left{
    width:45px;
    height:45px;
    /* background: yellow; */
    border-radius: 50%;
}
.admin_left img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.admin_right{
    width:110.73px;
    height:43.8px;
    /* background: greenyellow; */
    margin-left: 10px;
}
.admin_right h3{
    font-size:14px;
    color:#deffff;
}
.admin_bottom{
    margin-top: 8px;
}
.admin_bottom .logout{
    margin-left: 5px;
}
.admin_bottom .layui-icon-circle-dot{
    color:#1c84c6;
}
.admin_bottom .layui-icon-spread-left{
    font-size:12px;
    color:#ed535e;
}
.admin_bottom span{
    color: white;
    font-size: 12px;
}
.layui-nav-child dd a{
    padding:0px 40px;
}
.layui-nav-tree .layui-nav-child a{
    padding:0px 40px;
}

/* 底部 */
.flexFooter{
  position:fixed;
  right:0px;
  bottom:0px;
  width:83%;
  height: 44px;
  text-align:right;
  border-top:1px solid rgb(218, 217, 217);
  line-height: 44px;
  padding: 0 15px;
  background-color: #eee;
}
</style>

