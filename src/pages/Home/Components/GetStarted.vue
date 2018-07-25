<template>
  <el-container direction="vertical" class="container-fluid ctn">
    <el-main class="center">
      <el-row class="white get-started-info">
        <h2 class="bold">Get Ready To Exchange Your Currency ?</h2>
      </el-row>
      <el-row class="empty-row"></el-row>
      <el-row>
        <router-link class="btn btn-join btn-round btn-wd" to="/signup" tag="button">Join now</router-link>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
  .ctn{
    background-color: #5DADE2;
    background: linear-gradient(to bottom, #5DADE2, white);
    min-height: 250px;
  }

  /* Landscape phones and portrait tablets
  @media (max-width: 767px) {
     .get-started-info{
      padding-left: 75px;
      padding-right: 75px;
    }
    .btn{
      margin-left: 75px;
    }
  }

  /* Portrait phones and smaller */
  /* @media (max-width: 480px) {
    .get-started-info{
      padding-left: 50px;
      padding-right: 50px;
    }
    .btn{
      margin-left: 50px;
    }
  } */
</style>
