<template>
  <a :href="url" target="_blank">
    <div class="blog-post">
      <div class="content-container">
        <div class="left">
          <img class="blog-preview" src="@/assets/images/bank_products.png"/>
        </div>
        <div class="right">
          <div class="title">Machine Learning for Cross-Selling</div>
          <div class="body">Use automation to drive better results.</div>
          <div class="subtext">December 19, 2022</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-post {
  padding: 40px;
  box-shadow: 0px 0px 50px rgba(0,0,0,0.25);
  border: 1px solid $lightgrey;
  border-radius: 10px;
  width: 50%;
  height: 40vh;
  display: inline-block;
  text-align: left;
  position: relative;
}
.blog-preview {
  width: 100%;
}
.left, .right {
  height: auto;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
}
.left {
  left: 0%;
}
.right {
  right: 0%;
  transform: translate(-5%, -50%);
}
@media (max-width: 600px) {
  .blog-post {
    width: 100%;
    height: 50vh;
  }
  .left, .right {
    height: auto;
    padding: 10px;
    position: relative;
    width: 100%;
    top: 0%;
    transform: translate(0%, 0%);
  }
  .content-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 20px;
  }
}
</style>
