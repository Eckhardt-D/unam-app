<template>
  <div class="container">
    <div class="row">
      <div class="mt-3 mx-auto jumbotron">
        <h1>Welcome to the iStudy App!</h1>
        <p>Choose a chapter</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 mt-3">
        <router-link to="/chapter-2">
      <button class=" btn btn-primary">Chapter Two</button>        
      </router-link>
      </div>
      <div class="col-lg-6 mt-3">
         <router-link to="/chapter-5">
      <button class="btn btn-primary">Chapter Five</button>        
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>