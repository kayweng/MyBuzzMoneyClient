<template>
  <div class="fc-item" :class="cardClass">
    <slot if="$slot['icon']" name="icon"></slot>
    <slot if="$slot['image']" name="image">
      <label class="fc-img">
        <img :src="'/static/images/' + imgName " />
      </label>
    </slot>
    <h5 class="bolder">{{ title }} </h5>
    <slot if="$slot['message']" name="message">
      <label class="fc-message">
        <small class="text-muted">{{ message }}</small>
      </label>
    </slot>
    <slot name="action"></slot>
  </div>
</template>

<style scoped>
    .fc-item {
      text-align: center;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      min-height: 180px;
    }

    .fc-img {
      max-height: 100px;
      max-width: 100px;
      padding: 20px;
      border-radius: 50%;
      background-color: transparent;
    }

    .fc-img:hover{
      cursor: pointer;
      background-color: #F2F3F4;
      animation: pulse 0.4s linear;
      -webkit-animation: pulse 0.4s linear;
    }

    .fc-img > img{
      max-height: 60px;
      max-width: 60px;
      margin: 0 auto; 
    }

    .fc-message{
      max-width: 250px;
      width: 250px;
      min-height: 120px;
      max-height:120px;
    }
</style>

<script>
  export default {
    name: 'feature-card',
    props: {
      imgName: String,
      title: String,
      message: String,
      cardClass: {
        type: String,
        default: ''
      }
    }
  }
</script>