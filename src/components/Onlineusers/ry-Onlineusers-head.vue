<template>
<div>
     <div class="layui-header" id = "layui-header">
        <div class="layui-logo">
        <span>RuoYi</span>
        </div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-shrink-right"></i></a></li>
        <li class="layui-nav-item"><a href="">商品管理</a></li>
        <li class="layui-nav-item"><a href="">用户</a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">其它系统</a>
            <dl class="layui-nav-child">
            <dd><a href="">邮件管理</a></dd>
            <dd><a href="">消息管理</a></dd>
            <dd><a href="">授权管理</a></dd>
            </dl>
        </li>
        </ul>
        <ul class="layui-nav layui-layout-right">
        <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-video"></i>视频教程</a></li>
        <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-help"></i>开发文档</a></li>
        <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-layer"></i>全屏显示</a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">
                <img src="../../assets/img/profile.png" class="layui-nav-img"/>若依
            </a>
            <dl class="layui-nav-child">
            <dd><a href="">个人中心</a></dd>
            <dd><a href="">修改密码</a></dd>
            <dd><a href="">退出登录</a></dd>
            </dl>
        </li>
        <li class="layui-nav-item"><a href="">退了</a></li>
        </ul>
    </div>
    <div class="layui-side layui-bg-black">
            <div class="layui-side-scroll">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
                <ul class = "layui-navtop">
                    <div class = "navtop" style = "display:flex;">
                        <div class = "top_img">
                            <a href= "#">
                                <img src = "../../assets/img/profile.png"/>
                            </a>
                        </div>
                        <div class = "top_txt">
                            <span>admin</span>
                            <ul style = "display:flex;">
                                <li>
                                    <a href = "#">
                                    <i class = "layui-icon layui-icon-radio" style = "color:#1c84c6;">在线</i>
                                    </a>
                                </li>
                                <li>
                                    <a href = "#">
                                    <i class = "layui-icon layui-icon-close-fill"  style = "color:#fff;">注销</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ul>
                <ul class="layui-nav layui-nav-tree"  lay-filter="test">
                    <li class="layui-nav-item layui-nav-itemed">
                        <a class="" href="javascript:;">主页</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;">了解若依</a></dd>
                            <!-- <dd><a href="javascript:;">列表二</a></dd>
                            <dd><a href="javascript:;">列表三</a></dd>
                            <dd><a href="">超链接</a></dd> -->
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a href="javascript:;">系统管理</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;">用户管理</a></dd>
                            <dd><a href="javascript:;">角色管理</a></dd>
                            <dd><a href="javascript:;">菜单管理</a></dd>
                            <dd><a href="javascript:;">部门管理</a></dd>
                            <dd><a href="javascript:;">岗位管理</a></dd>
                            <dd><a href="javascript:;">字典管理</a></dd>
                            <dd><a href="javascript:;">参数设置</a></dd>
                            <dd><a href="javascript:;">通知公告</a></dd>
                            <li class="layui-nav-item">
                                <a href="javascript:;">日志管理</a>
                                <dl class="layui-nav-child">
                                <dd><a href="javascript:;">操作日志</a></dd>
                                <dd><a href="javascript:;">登录日志</a></dd>
                                </dl>
                            </li>
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a class="" href="javascript:;">系统监控</a>
                        <dl class="layui-nav-child">
                            <dd><router-link to="/">在线用户</router-link></dd>
                            <dd><router-link to="/rytimertaskcontent">定时任务</router-link></dd>
                            <dd><a href="javascript:;">数据监控</a></dd>
                            <dd><a href="javascript:;">服务监控</a></dd>
                        </dl>
                    </li>
                    <li class="layui-nav-item">
                        <a class="" href="javascript:;">系统工具</a>
                        <dl class="layui-nav-child">
                            <dd><a href="javascript:;">表单构建</a></dd>
                            <dd><a href="javascript:;">代码生成</a></dd>
                            <dd><a href="javascript:;">系统接口</a></dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#layui-header{
  background: #3c8dbc;
}
.layui-logo{
  text-align: center;
}
.layui-logo span{
  display: block;
  font-size: 20px;
  color:#ffffff;
}
.navtop img{
  display: block;
  width:45px;
  height:45px;
  border-radius: 50%;
  padding:20px 5px;
}
.top_txt{
  padding:20px 5px;
}
.top_txt i{
  padding-left: 5px;
}
</style>
