<template>
  <div class="reg-page">
    <el-form :model="form" label-width="150px" >
      <el-form-item label="搜索">
          <input v-focus />
      </el-form-item>
      <el-form-item label="只能输入数字">
          <input v-number-only />
      </el-form-item>
      <el-form-item label="只能输入金额">
          <input v-money-only />
      </el-form-item>
      <el-form-item label="只能输入手机号">
          <input v-phone-only  meta-value=""/>
      </el-form-item>
      <el-form-item label="只能输入银行卡">
          <input v-bank-only  meta-value=""/>
      </el-form-item>
      <el-form-item label="只能输入正负整数">
          <input v-pn-int />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  //pattern="\d*"
  data () {
    return {
      form: {
        input1: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .reg-page {
    width: 100%;
    height: 100%;
  }
</style>
