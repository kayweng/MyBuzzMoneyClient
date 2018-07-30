<template>
  <div :class="selectClasses">
    <slot name="label">
      <label  class="control-label" :class="labelClasses" v-if="label">
        {{ label }}
      </label>
    </slot>
    <el-select v-model="fieldModelValue" placeholder="Select">
      <el-option
        v-for="(item, index) in items"
        :key="index" 
        :label="item.label"
        :value="item.value">
        <span style="float: left;">{{ item.label }}</span>
      </el-option>
    </el-select>
  </div>
</template>

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
