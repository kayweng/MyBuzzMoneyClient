<template>
  <div class="card-item">
    <slot if="$slot['image']" name="image">
      <div class="card-item-img">
        <img :src="'/static/images/' + imgName " />
      </div>
    </slot>
    <h6>{{ title }} </h6>
    <p class="text-muted">{{ message }}</p>
  </div>
</template>

<style scoped>
    h6{
      padding-top: 16px;
    }

    .card-item {
      text-align: center;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      min-height: 180px;
      padding-left: 15px;
      padding-right: 15px;
    }

    .card-item-img {
      max-height: 100px;
      max-width: 100px;
      padding: 20px;
      border-radius: 50%;
      background-color: aliceblue;
    }

    .card-item-img > img{
      max-height: 60px;
      max-width: 60px;
      display: block; /*for the img inside your div */ 
      margin: 0 auto; 
    }

    .card-item > p{
      text-align: center;
      font-size: small;
      padding-top: 10px;
      display: block;
      max-width: 250px;
    }

</style>

<script>
  export default {
    name: 'card-info',
    props: {
      imgName: String,
      title: String,
      message: String
    }
  }
</script>