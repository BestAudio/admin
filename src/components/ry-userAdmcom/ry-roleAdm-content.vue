<template>
<div class="countBox">
  <div class="countTwoBoxs">
      <ryUserAdmContentLeft></ryUserAdmContentLeft>
      <ryRoleAdmContentRight></ryRoleAdmContentRight>
  </div>
</div>
</template>
<script>
import ryUserAdmContentLeft from './ry-userAdm-content-left';
import ryRoleAdmContentRight from './ry-roleAdm-content-right';
export default {
name:"RyUserAdm",
components:{
        ryUserAdmContentLeft,
        ryRoleAdmContentRight

    },
data() {
    return {

    }
},  
}
</script>
<style scoped>
/* 内容主体区域 */
.countBox{
  width:100%;
}
/* 表格操作 */
.countTwoBoxs{
  width:100%;
  display:flex;
}
</style>

