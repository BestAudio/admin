<template>
<div class = "contont">
<!-- 导航开始 -->
    <div class="box">
        <div class="layui-tab" lay-allowClose="true">
            <ul class="layui-tab-title">
                <div class="arrow">
                <i class="layui-icon layui-icon-prev"></i> 
                    </div> 
                <div class="home_page">
                    <h3>首页</h3>
                    </div>  
                <li class="layui-this">在线用户</li>
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
        <!-- 导航结束 -->
    <div class = "frame">
        <div class = "search">
            <span>登录地址:</span>
            <input type = "text" placeholder="" style = "margin-top:20px; margin-left: 22px;height:42px;width:296px;border:1px solid #dddddd;border-radius:8px;"/>
        </div>
        <div class = "reset">
            <span>操作人员:</span>
            <input type = "text" placeholder="" style = "margin-top:20px;margin-left: 22px;height:42px;width:296px;border:1px solid #dddddd;border-radius:8px;"/>
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
    <!-- 登录信息 开始 -->

    <table class="layui-hide" id="test" lay-filter="test"></table>
    <script type="text/html" id="toolbarDemo">
        <div class="layui-btn-container">
            <button class="layui-btn layui-btn-sm" lay-event="getCheckData" style = "background:#f59da6"><i class = "layui-icon layui-icon-delete">强退</i></button>
            <!-- <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
            <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
            <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
            <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button> -->
        </div>
    </script>
    <script type="text/html" id="barDemo">
        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </script>

    <!-- <div class = "record">
        <div class = "back">
            <ul class="back-left">
                <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-close-fill">强退</i></a></li>
            </ul>
            <ul class="back-right">
                <li class="right_one"><a href=""><i class = "layui-icon layui-icon-search"></i></a></li>
                <li class="right_one"><a href=""><i class = "layui-icon layui-icon-refresh"></i></a></li>
                <li class="right_one"><a href=""><i class = "layui-icon layui-icon-list"></i></a></li>
                <li class="right_four">
                    <a href="javascript:;">
                        <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-table"></i></a></li>
                    </a>
                    <dl class="layui-nav-child">
                    <dd><input type = "checkbox"/><a href="">序号</a></dd>
                    <dd><input type = "checkbox"/><a href="">会话编号</a></dd>
                    <dd><input type = "checkbox"/><a href="">登录名称</a></dd>
                    <dd><input type = "checkbox"/><a href="">部门名称</a></dd>
                    <dd><input type = "checkbox"/><a href="">主机</a></dd>
                    <dd><input type = "checkbox"/><a href="">登录地点</a></dd>
                    <dd><input type = "checkbox"/><a href="">浏览器</a></dd>
                    <dd><input type = "checkbox"/><a href="">操作系统</a></dd>
                    <dd><input type = "checkbox"/><a href="">会话状态</a></dd>
                    <dd><input type = "checkbox"/><a href="">登录时间</a></dd>
                    <dd><input type = "checkbox"/><a href="">最后访问时间</a></dd>
                    <dd><input type = "checkbox"/><a href="">操作</a></dd>
                    </dl>
                </li>
                <li class="right_four" style = "border:none;">
                    <a href="javascript:;">
                    <li class="layui-nav-item"><a href=""><i class = "layui-icon layui-icon-download-circle"></i></a></li>
                    </a>
                    <dl class="layui-nav-child">
                    <dd><input type = "checkbox"/><a href="">csv</a></dd>
                    <dd><input type = "checkbox"/><a href="">TxT</a></dd>
                    <dd><input type = "checkbox"/><a href="">Word</a></dd>
                    <dd><input type = "checkbox"/><a href="">Excel</a></dd>
                    </dl>
                </li>
            </ul>
        </div>
        <ul class = "record_head">
            <li>
                <input type = "checkbox"/>
            </li>
            <li>
                <span>序号</span>
            </li>
            <li>
                <span>会话编号</span>
            </li>
            <li>
                <span>登录名称</span>
            </li>
            <li>
                <span>部门名称</span>
            </li>
            <li>
                <span>主机</span>
            </li>
            <li>
                <span>登录地点</span>
            </li>
            <li>
                <span>浏览器</span>
            </li>
            <li>
                <span>操作系统</span>
            </li>
            <li>
                <span>会话状态</span>
            </li>
            <li>
                <span>登录时间</span>
            </li>
            <li>
                <span>最后访问时间</span>
            </li>
            <li>
                <span>操作</span>
            </li>
        </ul>
        <div>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>1</span>
                </li>
                <li>
                    <span>025f0754-dd11-4726-a23c-afc54929c322</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>223.255.14.236</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:51:48</span>
                </li>
                <li>
                    <span>2019-05-09 20:00:51</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
            <ul class = "record_text">
                <li>
                    <input type = "checkbox"/>
                </li>
                <li>
                    <span>2</span>
                </li>
                <li>
                    <span>05d97aff-90dc-4a43-8370-bfff709c8061</span>
                </li>
                <li>
                    <span>admin</span>
                </li>
                <li>
                    <span>研发部门</span>
                </li>
                <li>
                    <span>59.109.145.177</span>
                </li>
                <li>
                    <span>北京 北京</span>
                </li>
                <li>
                    <span>Chrome</span>
                </li>
                <li>
                    <span>Windows 10</span>
                </li>
                <li>
                    <button>
                        <span>在线</span>
                    </button>
                </li>
                <li>
                    <span>2019-05-09 19:31:10</span>
                </li>
                <li>
                    <span>2019-05-09 19:33:26</span>
                </li>
                <li class="layui-nav-item">
                    <button>
                        <i class = "layui-icon layui-icon-close-fill">强退</i>
                    </button>
                </li>
            </ul>
        </div>
        <ul class = "record_foot">
            <ul class = "foot_page">
                <li>
                    <span>第 1 到 10 条，共 36 条记录。</span>
                </li>
                <li>
                    <select>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                </li>
                <li>
                    <span>条记录每页</span>
                </li>
            </ul>
            <ul class = "foot_num">
                <li>
                    <a href = "#"><i class = "layui-icon layui-icon-prev"></i></a>
                </li>
                <li>
                    <a href = "#"><i>1</i></a>
                </li>
                <li>
                    <a href = "#"><i>2</i></a>
                </li>
                <li>
                    <a href = "#"><i>3</i></a>
                </li>
                <li>
                    <a href = "#"><i>4</i></a>
                </li>
                <li>
                    <a href = "#"><i>5</i></a>
                </li>
                <li>
                    <a href = "#"><i>6</i></a>
                </li>
                <li style = "border:none;">
                    <a href = "#"><i class = "layui-icon layui-icon-next"></i></a>
                </li>
            </ul>
        </ul>
    </div> -->

     <!-- 登录信息 结束 -->
</div>
</template>

<script>
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
            ,url:'http://localhost:3000/data'
            ,toolbar: '#toolbarDemo'
            ,title: '用户数据表'
            ,cols: [[
                {type: 'checkbox', fixed: 'left'}
                ,{field:'id', title:'序号', width:80, fixed: 'left', unresize: true, sort: true}
                ,{field:'username', title:'会话编号', width:180, edit: 'text'}
                ,{field:'email', title:'登录名称', width:150, edit: 'text', templet: function(res){
                    return '<em>'+ res.email +'</em>'
                }}
                ,{field:'sex', title:'部门名称', width:130, edit: 'text', sort: true}
                ,{field:'city', title:'主机', width:80}
                ,{field:'sign', title:'登录地点'}
                ,{field:'experience', title:'浏览器', width:80, sort: true}
                ,{field:'ip', title:'操作系统', width:120}
                ,{field:'logins', title:'会话状态', width:100, sort: true}
                ,{field:'joinTime', title:'登录时间', width:120}
                ,{fixed: 'right', title:'最后访问时间', toolbar: '#barDemo', width:150}
                ,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:80}
                ]]
            ,page: true
        });
        
        //头工具栏事件
        table.on('toolbar(test)', function(obj){
            var checkStatus = table.checkStatus(obj.config.id);
            switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
            break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
            break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选': '未全选');
            break;
            };
        });
        
        //监听行工具事件
        table.on('tool(test)', function(obj){
            var data = obj.data;
            //console.log(obj)
            if(obj.event === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del();
                layer.close(index);
            });
            } else if(obj.event === 'edit'){
            layer.prompt({
                formType: 2
                ,value: data.email
            }, function(value, index){
                obj.update({
                email: value
                });
                layer.close(index);
            });
            }
        });
    })
                
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
/* .frame .btn2 i{
     color:#ffffff;
    font-size: 18px;
}
.frame .btn2 span{
    display: block;
    color:#ffffff;
    font-size: 18px;
} */
/* 
.record{
    width:100%;
    height:100%;
    background: #ffffff;
    border:1px solid #d6d6d7;
}
.back{
    width:100%;
    height:88px;
    display: flex;
    justify-content: space-between;
}
.back-left{
    width:90px;
    height:45px;
    background: #f59da6;
    text-align: center;
    line-height: 45px;
    border-radius: 8px;
    margin-top: 26px;
    margin-left: 22px;
}
.back-left i{
    color:#ffffff;
    font-size: 18px;

}
.back-right{
    display: flex;
    width:328px;
    height:46px;
    border:2px solid #c2c2c2;
    border-radius: 5px;
    margin:22px 22px 0 0;
}
.right_one{
    width:56px;
    height:46px;
    border-right:1px solid #c2c2c2;
    text-align: center;
    line-height: 46px;
}
.right_one i{
    color:#676a6c;
    font-size: 20px;
    font-weight: 600;
}
.right_four{
    width:74px;
    height:46px;
    border-right:1px solid #c2c2c2;
    text-align: center;
    line-height: 46px;
}
.right_four i{
    color:#676a6c;
    font-size: 20px;
    font-weight: 600;
}
.record_head{
    width:98.7%;
    height:60px;
    display: flex;
    margin:15px 22px 0 22px;
    background: #eff3f8;
}
.record_head li span{
    display: block;
    color:#676a6c;
    font-size: 20px;
}
.record_head li:nth-child(1){
    width:64px;
    height:60px;
    text-align: center;
    line-height: 70px;
}
.record_head li:nth-child(1) input{
    width:20px;
    height:20px;
}
.record_head li:nth-child(2){
    width:80px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(3){
    width:510px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(4){
    width:175px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(5){
    width:130px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(6){
    width:204px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(7){
    width:140px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(8){
    width:200px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(9){
    width:182px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(10){
    width:120px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(11){
    width:266px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(12){
    width:280px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_head li:nth-child(13){
    width:100px;
    height:60px;
    text-align: center;
    line-height: 60px;
}
.record_text{
    width:98.7%;
    height:56px;
    display: flex;
    margin:15px 22px 0 22px;
    border-bottom: 1px solid #cccccc;
}

.record_text li span{
    display: block;
    color:#676a6c;
    font-size: 16px;
}
.record_text li:nth-child(1){
    width:64px;
    height:56px;
    text-align: center;
    line-height: 65px;
}
.record_text li:nth-child(1) input{
    width:20px;
    height:20px;
}
.record_text li:nth-child(2){
    width:80px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(3){
    width:510px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(4){
    width:175px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(5){
    width:130px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(6){
    width:204px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(7){
    width:140px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(8){
    width:200px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(9){
    width:182px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(10){
    width:120px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(10) button{
    width:54px;
    height:28px;
    background: #1ab394;
    line-height: 28px;
    border-radius: 20px;
    border:none;
}
.record_text li:nth-child(10) button span{
    display: block;
    color:#ffffff;
    font-size: 16px;
    font-weight: 600;
}
.record_text li:nth-child(11){
    width:266px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(12){
    width:280px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(13){
    width:100px;
    height:56px;
    text-align: center;
    line-height: 56px;
}
.record_text li:nth-child(13) button{
    width:72px;
    height:34px;
    background: #ed5565;
    border-radius: 20px;
    border:none;
}
.record_text li:nth-child(13) button i{
    font-size: 16px;
    color:#ffffff;
}

.record_foot{
    width:100%;
    height:60px;
    display: flex;
    justify-content: space-between;
}
.foot_page{
    display: flex;
    margin:20px;
} 
.foot_page span{
    display: block;
    color:#676a6c;
    font-size: 16px;
}
.foot_page select{
    width:50px;
    height:30px;
}
.foot_num{
    display: flex;
    width:378px;
    height:46px;
    border:2px solid #e7e7e7;
}
.foot_num li{
    width:45px;
    height:45px;
    border-right:2px solid #e7e7e7;
    line-height: 45px;
    text-align: center;
}
.foot_num li i{
    font-size: 15px;
    color:#787a7c;
} */
</style>