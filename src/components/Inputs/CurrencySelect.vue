<template>
  <div>
    <slot name="label">
      <span style="display:block;" v-if="label">
        <label  class="control-label" :class="labelClasses">
          {{ label }}
        </label>
      </span>
    </slot>
    <el-select v-model="fieldModelValue" placeholder="Select">
      <el-option
        v-for="(item, index) in currencies"
        :key="index" 
        :label="item.currency_code"
        :value="item.currency_code">
        <span style="float: left">{{ item.country }}</span>
        <span style="float: right; color: #8492a6; font-size: 12px">{{ item.currency_code }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    props: {
      label: String,
      value: String,
      labelClasses: {
        type: String,
        default: 'medium'
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
