<template>
    <div class = "contont">
        <div class="box">
            <div class="layui-tab" lay-allowClose="true">
                <ul class="layui-tab-title">
                    <div class="arrow">
                    <i class="layui-icon layui-icon-prev"></i> 
                        </div> 
                    <div class="home_page">
                        <h3>首页</h3>
                        </div>  
                    <li class="layui-this">定时任务</li>
                    <!-- <li>字典管理</li> -->
                    <div class="refresh">
                        <i class="layui-icon layui-icon-refresh">刷新</i>
                    </div>
                    <div class="operation">
                        <h4>页签操作</h4><span></span>
                    </div>
                    <div class="right_arrow">
                        <i class="layui-icon layui-icon-next"></i>
                    </div>
                </ul>
            </div>
        </div>
        <div class = "frame">
            <div class = "search">
                <span>登录地址:</span>
                <input type = "text" placeholder="" style = "margin-top:20px; margin-left: 22px;height:42px;width:296px;border:1px solid #dddddd;border-radius:8px;"/>
            </div>
            <div class = "reset">
                <span>操作人员:</span>
                <input type = "text" placeholder="" style = "margin-top:20px;margin-left: 22px;height:42px;width:296px;border:1px solid #dddddd;border-radius:8px;"/>
            </div>
            <div class="layui-inline">
      <label class="layui-form-label"><span>任务状态</span></label>
      <div class="layui-input-inline">
        <select name="modules" lay-verify="required" lay-search="" style = "margin-top:20px;margin-left: 22px;height:42px;width:296px;border:1px solid #dddddd;border-radius:8px;">
          <option value="">所有</option>
          <option value="1">正常</option>
          <option value="2">暂停</option>
        </select>
      </div>
    </div>
            <button class="layui-btn layui-btn-radius">
                <i class = "layui-icon layui-icon-search"></i>
                <span>搜索</span>
            </button>
            <button class="layui-btn layui-btn-radius layui-btn-warm">
                <i class = "layui-icon layui-icon-refresh"></i>
                <span>重置</span>
            </button>
        </div>
        <table class="layui-hide" id="test" lay-filter="test"></table>
 
        <script type="text/html" id="toolbarDemo">
        <div class="layui-btn-container">
            <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
        </div>
        </script>
    </div>
</template>

<script scoped>
export default {
    data(){
        return{

        }
    },
    mounted(){
        layui.use('table', function(){
        var table = layui.table;
        
        table.render({
            elem: '#test'
            ,url:'http://localhost:3000/datas'
            ,toolbar: '#toolbarDemo'
            ,cols: [[
            {type:'radio'}
            ,{field:'id', width:130, title: '任务编号', sort: true}
            ,{field:'username', width:135, title: '任务名称'}
            ,{field:'sex', width:140, title: '任务组名', sort: true}
            ,{field:'city', width:180, title: '方法名称'}
            // ,{field:'sign', title: '签名', minWidth: 100}
            ,{field:'experience', width:150, title: '方法参数', sort: true}
            ,{field:'score', width:200, title: '执行表达式', sort: true}
            ,{field:'classify', width:200, title: '任务状态'}
            ,{field:'wealth', width:240, title: '创建时间', sort: true}
            ,{field:'wealth', width:240, title: '操作', sort: true}            ]]
            ,page: true
        });
        
        //头工具栏事件
        table.on('toolbar(test)', function(obj){
            var checkStatus = table.checkStatus(obj.config.id); //获取选中行状态
            switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;  //获取选中行数据
                layer.alert(JSON.stringify(data));
            break;
            };
        });
    });
  }
}
</script>

<style scoped>
.contont{
    background: #f3f3f4;
}
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
.frame{
    width:100%;
    height:84px;
    margin-top: 30px;
    display: flex;
    border:1px solid #d6d6d7;
}
.search{
    display: flex;
    line-height: 84px;
    margin-left: 22px;
}
.search span{
    display: block;
    font-size: 18px;
    color:#4c4c4c;
}
.reset{
    display: flex;
    line-height: 84px;
    margin-left: 22px;
}
.layui-form-label{
    display: flex;
    line-height: 64px;
    margin-left: 22px
}
.layui-form-label span{
    display: block;
    font-size: 18px;
    color:#4c4c4c;
}
.reset span{
    display: block;
    font-size: 18px;
    color:#4c4c4c;
}
.frame .layui-btn-radius{
    width:92px;
    height:42px;
    background: #1ab394;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 22px;
    border:none;
}
/* .frame .btn1 i{
     color:#ffffff;
    font-size: 18px;
}
.frame .btn1 span{
    display: block;
    color:#ffffff;
    font-size: 18px;
} */
.frame .layui-btn-warm{
    width:92px;
    height:42px;
    background: #f8ac59;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 22px;
    border:none;
}
</style>
