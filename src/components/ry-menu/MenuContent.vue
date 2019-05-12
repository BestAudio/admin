
<template>
<div>
    <div class="box">
        <div class="layui-tab" lay-allowClose="true">
            <ul class="layui-tab-title">
                <div class="arrow">
                <i class="layui-icon layui-icon-prev"></i> 
                    </div> 
                <div class="home_page">
                    <h3>首页</h3>
                    </div>  
                <li class="layui-this" style="font-size:13px;color:#676a6c">菜单管理</li>
                <li style="font-size:13px;color:#676a6c">部门管理</li>
                <div class="refresh">
                    <i class="layui-icon layui-icon-refresh">刷新</i>
                </div>
                <div class="operation" @click="asd">
                    <h4 >页签操作</h4><span></span>
                </div>
                <div class="right_arrow">
                    <i class="layui-icon layui-icon-next"></i>
                </div>
            </ul>
            <div class="close"  v-show="reveal">
                <a class="current" href="#">关闭当前</a>
                <a class="current" href="#">关闭其他</a>
                <a class="current" href="#">全部关闭</a>
                <a class="current" href="#">全屏显示</a>
            </div>

        </div>
    </div>
    <ul class="menu-ul">
        <li class="menu-li">
            <div class="layui-form-item">
                <label class="layui-form-label">菜单名称:</label>
                <div class="layui-input-block">
                <input type="text" name="title" required  lay-verify="required" autocomplete="off" class="layui-input">
                </div>
            </div>
        </li>
        <li class="menu-li">
            <div class="layui-form-item">
                <label class="layui-form-label">菜单状态:</label>
                <div class="layui-input-block">
                <select name="city" lay-verify="required">
                    <option value="0">所有</option>
                    <option value="1">显示</option>
                    <option value="2">隐藏</option>
                </select>
                </div>
            </div>
        </li>
        <li class="menu-li">
            <a href="#" class="menu-top-li-a">
                <i class="layui-icon layui-icon-search"></i>搜索   
            </a>
            <a href="#" class="menu-top-li-b">
                <i class="layui-icon layui-icon-refresh-3"></i>重置  
            </a>
        </li>
    </ul>
    <div class="menu-count">
        <div class="btn-panel">
            <div class="btn-left">
                <fieldset class="layui-elem-field site-demo-button">
                <div>
                    <button @click="Add" class=" layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel"><i class="layui-icon layui-icon-add-1"></i> 新增</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalele"><i class="layui-icon layui-icon-edit"></i> 修改</button>
                    <button class="layui-btn layui-btn-sm layui-btn-normal layui-btn-normalel layui-btn-normalels"><i class="layui-icon layui-icon-shrink-right"></i> 展开/折叠</button>
                </div>
                </fieldset>
            </div>
            <div class="btn-right">
                <i class="layui-icon layui-icon-refresh-1"></i>
                <i class="layui-icon layui-icon-align-center"></i>
            </div>   
        </div>
        <table class="table" cellspacing="0">
            <thead>
                <tr>
                    <td style="width:36px;text-align:center">
                    </td>
                    <td style="width:241.6px;text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">菜单名称</span>
                    </td>
                    <td style="width:120.8px;text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">排序</span>
                    </td>
                    <td style="width:180px;text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">请求地址</span>
                    </td>
                    <td style="width:120px;text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">类型</span>
                    </td>
                    <td style="width:120px;text-align:center">
                        <span style="font-size:12px;color:#676a6c">可见</span>
                    </td>
                    <td style="width:180px;text-indent:10px">
                        <span style="font-size:12px;color:#676a6c">权限标识</span>
                    </td>
                    <td style="width:240.8px;text-align:center">
                        <span style="font-size:12px;color:#676a6c">操作</span>
                    </td>
                </tr>
            </thead>
            <tr>
                <td style="text-align:center">
                    <input  type="radio" value="1" name="a">
                </td>
                <td style="text-indent:10px;color:#676a6c;">
                    <span style="font-size:12px;">
                        <i class="layui-icon layui-icon-right"></i>  
                    </span>
                    <i class="layui-icon layui-icon-set-fill"></i>
                    系统管理
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c">1</span>
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c">#</span>
                </td>
                <td style="text-indent:10px">
                    <!-- <span style="font-size:12px;color:#676a6c">目录</span> -->
                    <div class="normal1">目录</div>
                </td>
                <td>
                    <div class="normal">显示</div>
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c"></span>
                </td>
                <td>
                    <div style="color:#676a6c;margin-left:103px;margin-right:100px;background:#F5F5F5;">
                        <i class="layui-icon layui-icon-set-fill"></i>
                        <i class="layui-icon layui-icon-down"></i>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="text-align:center">
                    <input  type="radio" value="1" name="a">
                </td>
                <td style="text-indent:10px;color:#676a6c;">
                    <span style="font-size:12px;">
                        <i class="layui-icon layui-icon-right"></i>  
                    </span>
                    <i class="layui-icon layui-icon-video"></i>
                    系统监控
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c">2</span>
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c">#</span>
                </td>
                <td style="text-indent:10px">
                    <div class="normal1">目录</div>
                </td>
                <td>
                    <div class="normal">显示</div>
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c"></span>
                </td>
                <td>
                    <div style="color:#676a6c;margin-left:103px;margin-right:100px;background:#F5F5F5;">
                        <i class="layui-icon layui-icon-set-fill"></i>
                        <i class="layui-icon layui-icon-down"></i>
                    </div>
                </td>
            </tr>
            <tr>
                <td style="text-align:center">
                    <input  type="radio" value="1" name="a">
                </td>
                <td style="text-indent:10px;color:#676a6c;">
                    <span style="font-size:12px;">
                        <i class="layui-icon layui-icon-right"></i>  
                    </span>
                    <i class="layui-icon layui-icon-align-center"></i>
                    系统工具
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c">3</span>
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c">#</span>
                </td>
                <td style="text-indent:10px">
                    <div class="normal1">目录</div>
                </td>
                <td>
                    <div class="normal">显示</div>
                </td>
                <td style="text-indent:10px">
                    <span style="font-size:12px;color:#676a6c"></span>
                </td>
                <td>
                    <div style="color:#676a6c;margin-left:103px;margin-right:100px;background:#F5F5F5;">
                        <i class="layui-icon layui-icon-set-fill"></i>
                        <i class="layui-icon layui-icon-down"></i>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    

</div>  

</template>

<script>
export default {
    name:'rymeun',
    data () {
        return {
            reveal:false
        }
    },
     methods:{
            asd:function(){
                this.reveal=!this.reveal;
            },
            Add(){
            layui.use('layer', function(){
              var layer = layui.layer;
              layer.open({
                    type: 2,
                    title: 'iframe',
                    fix: false,
                    maxmin: true,
                    shadeClose: true,
                    shade: 0.3,
                    area: ['1000px', '700px'],
                    content: 
                    'https://www.baidu.com',
                    end: function () {
                    }
                });
                layer.close(index)
            });
            }
    },
    mounted() {
       
    }
}
</script>
<style scoped>
 .box{
    width:100%;
    height:40px;
    background:#fafafa;
    border-bottom: 3px solid #e7eaec;
}
.layui-tab{
    margin: 0px!important;
}
.arrow{
    width:40px;
    height: 40px;
    float: left;
    text-align: center;
    line-height: 40px;
    border: 1px solid #eeeeee;
}
.arrow:hover{
    background:#f2f2f2;
}
.arrow .layui-icon-prev{
   color: #999999;
   font-size: 14px;
}
.home_page{
    width:57px;
    height:40px;
    background:#fafafa;
    float: left;
    line-height: 40px;
    text-align:center;
}
.home_page:hover{
    background: #f2f2f2;
}
.home_page h3{
    font-size:14px;
    color:#999999;
}
.right_arrow{
    width:40px;
    height:40px;
    float: right;
    line-height:40px;
    text-align: center;
    border: 1px solid #eeeeee;
}
.right_arrow .layui-icon-next{
    color: #999999;
    font-size: 14px;
}
.right_arrow:hover{
    background: #f2f2f2;
}
.operation{
    width:80px;
    height:40px;
    float: right;
    line-height: 40px;
    text-indent:3px;
    position: relative;
    border: 1px solid #eeeeee;
}
.operation span{
    width: 0px;
    height: 0px;
    border:5px solid transparent;
    border-top-color: #999999;
    position: absolute;
    top: 18px;
    left:62px;
}
.operation h4{
    font-size:14px;
    color:#999999;
}
.operation:hover{
    background: #f2f2f2;
}
.refresh{
    width:60px;
    height:40px;
    float: right;
    line-height: 40px;
    text-indent:10px;
}
.refresh .layui-icon-refresh{
    font-size:14px;
    color:#999999;
}
.refresh:hover{
    background:#f2f2f2; 
}

.menu-ul{
    display: flex;
    width: 96%;
    background: #fff;
    border-radius: 6px;
    margin: 10px 2%;
    padding-top: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
}
.menu-li{
    color: #333;
    margin: 5px 15px 0px 0px;
}
.layui-input{
    border: 1px solid #ddd;
    border-radius: 4px;
    background: transparent;
    outline: none;
    height: 30px;
    width: 200px;
    padding-left: 5px;
}
.layui-input-block select{
    border: 1px solid #ddd;
    border-radius: 4px;
    background: transparent;
    outline: none;
    height: 30px;
    width: 200px;
}
.menu-top-li a{
    font-size: 12px;
}
.menu-top-li-a{
    border-radius: 50px;
    background-color: #1ab394;
    border-color: #1ab394;
    color: #FFFFFF;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    cursor: pointer;
    text-align: center;
}
.menu-top-li-b{
    border-radius: 50px;
    background-color: #f8ac59;
    border-color: #f8ac59;
    color: #FFFFFF;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    cursor: pointer;
    text-align: center
}
.menu-count{
    width: 96%;
    background: #fff;
    border-radius: 6px;
    margin: 10px 2%;
    padding-top: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0,.2);
    
}
.layui-btn+.layui-btn{
    margin-left: 0px!important;
}
.btn-panel{
    display: flex;
    justify-content: space-between;
}
.btn-left{
    width:277px;
    margin-left: 10px;
}
.layui-elem-field{
    border:none!important;
}
.btn-left span{
    font-size:14px;
    color:white;
}
.layui-btn-normalel{
    background: #1c84c6!important;
}
.btn-left .layui-btn{
    border-radius:4px;
    height:33.6px;
    line-height: 33.6px;
    font-size: 12px;
}
.layui-icon-add-1{
    font-size: 12px!important;
}
.layui-btn-normalele{
    background-color: #1ab394!important;
}
.layui-btn-normalels{
    background-color: #23c6c8!important;
}
.btn-right{
    background:white;
    border: 1px solid #c2c2c2;
    border-radius: 3px;
    display:flex;
    margin-right: 12px;
    height: 33px;
}
.btn-right i{
    width:42.725px;
    display: block;
    text-align: center;
    line-height: 34.59px;
    cursor: pointer;
}
.btn-right i:hover{
    background: #bababa;
    color: white;
}
.btn-right i:nth-child(2){
    border-left: 1px solid #c2c2c2;
}
.table{
    width:98%;
    height: 40px;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 5px;
    border-radius: 3px;
}
thead{
    background:#eff3f8;
}
td{
    height: 40px;
    }
tr{
    height: 40px;
    border-bottom: 1px solid #cccccc;
}
.normal{
    width: 34px;
    height:21px;
    background:#1ab394;
    border-radius:10px;
    margin-left: 31.2px;
    color: white;
    font-size: 12px;
    text-align: center;
    line-height: 21px;
}
.normal1{
    width: 44px;
    height:21px;
    background:#1c84c6;
    color: white;
    font-size: 12px;

    line-height: 21px;
}
.edit{
    width:60px;
    height:27px;
    background:#1c84c6;
    border: 1px solid #1c84c6;
    border-radius: 4px;
    color:white;
    font-size: 12px;
}
.edit:nth-child(1){
    margin-left: 42px;
}
.edit:nth-child(2){
      background:#ed5565;
      border: 1px solid #ed5565;
}
.layui-icon-edit{
    font-size: 12px;
}
.current{
    width:116px;
    height:39px;
    display:block;
    font-size:12px;
    color:#333333;
    text-align: center;
    line-height: 39px;
    border-radius: 4px;
    margin-left:3%;
    margin-bottom: 3%;
    margin-top: 3%;
}
.current:hover{
    background:#cccccc; 
}
.close{
    width:123px;
    height:180px;
    background:white;
    position: absolute;
    top: 42px;
    right:60px;
}

</style>
