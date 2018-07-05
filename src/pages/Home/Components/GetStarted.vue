<template>
  <el-container direction="vertical" class="container-fluid ctn">
    <el-main>
      <el-row class="white get-started-info">
        <h3>Get started to change your way of exchange currency today</h3>
        <p>Register an account to explores more currency rates in our platform and remember authenticate yourself to be a genuine user for enjoy more features.</p>
      </el-row>
    </el-main>
    <el-row>
      <router-link class="btn btn-join btn-round btn-wd" to="/signup" tag="button">Join now</router-link>
    </el-row>
  </el-container>
</template>

<style scoped>
  .ctn{
    background-color: #283747;
    background: linear-gradient(to right, #283747, #2C3E50);
    min-height: 250px;
  }

  h3{
    margin-bottom: 0;
    font-weight: bold;
    width: 100%;
  }

  .btn{
    margin-left: 100px;
  }

  .get-started-info{
    padding-top: 15px; 
    padding-left: 100px;
    padding-right: 100px;
  }

  .get-started-info > p{
    margin-top: 10px;
    font-size: 14px;
    width: 100%;
  }

  /* Landscape phones and portrait tablets */
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
  @media (max-width: 480px) {
    .get-started-info{
      padding-left: 50px;
      padding-right: 50px;
    }
    .btn{
      margin-left: 50px;
    }
  }
</style>
