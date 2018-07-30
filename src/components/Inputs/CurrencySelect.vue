<template>
  <div :class="selectClasses">
    <slot name="label">
      <label class="control-label" :class="labelClasses" v-if="label">
        {{ label }}
      </label>
    </slot>
    <el-select v-model="fieldModelValue" placeholder="Select">
      <el-option
        v-for="(item, index) in currencies"
        :key="index" 
        :label="item.currency_code"
        :value="item.currency_code">
        <span class="currency-country">{{ item.country }}</span>
        <span class="currency-code">{{ item.currency_code }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<style scoped>
  .currency-country {
    float: left;
  }

  .currency-code {
    float: right;
    color: #8492a6;
    font-size: 12px;
  }
</style>

<script>
  export default {
    name: 'currency-select',
    props: {
      label: String,
      value: String,
      labelClasses: {
        type: String,
        default: 'standard-label inline-block'
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
