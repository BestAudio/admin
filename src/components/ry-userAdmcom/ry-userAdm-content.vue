<template>
<div class="countBox">
  <!-- <ryUserAdmContentHeader></ryUserAdmContentHeader> -->
  <div class="countTwoBoxs">
      <ryUserAdmContentLeft></ryUserAdmContentLeft>
      <ryUserAdmContentRight></ryUserAdmContentRight>
  </div>
</div>
</template>
<script>
// import ryUserAdmContentHeader from './ry-userAdm-content-header';
import ryUserAdmContentLeft from './ry-userAdm-content-left';
import ryUserAdmContentRight from './ry-userAdm-content-right';
export default {
name:"RyUserAdm",
components:{
        // ryUserAdmContentHeader,
        ryUserAdmContentLeft,
        ryUserAdmContentRight

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

