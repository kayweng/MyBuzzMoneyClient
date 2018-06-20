<template>
  <div :class="selectClasses">
    <slot name="label">
      <span style="display:block;" v-if="label">
        <label  class="control-label" :class="labelClasses">
          {{ label }}
        </label>
      </span>
    </slot>
    <el-select ref="ddlXXX" v-model="fieldModelValue" placeholder="Select">
      <el-option
        v-for="(item, index) in items"
        :key="index" 
        :label="item.label"
        :value="item.value">
        <span class="country">{{ item.label }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<style scoped>
  .country {
    float: left;
  }
</style>


<script>
  export default {
    name: 'simple-select',
    props: {
      id: String,
      items: Array,
      label: String,
      value: String,
      labelClasses: {
        type: String,
        default: 'medium'
      },
      selectClasses: {
        type: String,
        default: ''
      }
    },
    computed: {
      fieldModelValue: {
        get () {
          return this.value
        },
        set (newValue) {
          this.$emit('changed', newValue)
        }
      }
    }
  }
</script>
