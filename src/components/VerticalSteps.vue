<template>
  <el-container direction="vertical" class="container-fluid">
    <el-header v-if="title">
      <h5 :class="primaryTextClass" class="center">{{title}}</h5>
    </el-header>
    <el-main v-if="deviceType !== 'mobile'">
      <el-row class="vstep" v-if="items" v-for="(item, index) in items" :key="prefixChar + index">
        <label @mouseover="$emit('mouseover', index)" @mouseleave="$emit('mouseleave')">
          <el-col class="col-2">
            <label :class="primaryTextClass" class="label-circle">{{index + 1}}</label>
          </el-col>
          <el-col class="col-10">
            <h5 :class="primaryTextClass" class="bolder">{{item.title}}</h5>
            <p :class="secondaryTextClass">{{item.message}}</p>
          </el-col>
        </label>
      </el-row>
    </el-main>
    <el-main v-else>
      <el-row class="vstep" v-if="items" v-for="(item, index) in items" :key="prefixChar + index">
        <label>
          <h5 :class="primaryTextClass" class="bolder">{{index + 1}}. {{item.title}}</h5>
          <small :class="secondaryTextClass">{{item.message}}</small>
        </label>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
  .vstep > label:hover{
    cursor: pointer;
    border-radius: 10px;
    background-color: #2E86C1;
  }

  .vstep > label{
    vertical-align: middle;
    padding: 14px;
    margin: 0;
  }

  div.el-col{
    min-height: 120px;
    height: 120px;
    max-height: 120px;
  }
</style>

<script>
  export default {
    name: 'vertical-steps',
    props: {
      prefixChar: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      },
      primaryTextClass: {
        type: String,
        default: 'white bold'
      },
      secondaryTextClass: {
        type: String,
        default: 'whitesmoke italic'
      }
    }
  }
</script>
