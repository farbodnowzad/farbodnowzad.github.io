<template>
    <div class="container-fluid">
      <div class="row nav-bar">
        <div class="col nav-wrapper">
          <a href="/"><img src="@/assets/images/cashmere_ai_black.png" class="logo"/></a>
          <div class="dropdown desktop-hide">
            <button @click="openMenu" class="dropbtn"><img src="@/assets/icons/menu.png" class="menu-icon"/></button>
            <div ref="myDropdown" class="dropdown-content">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="mailto:sales@cashmereai.com?subject=Cashmere AI Inquiry">Contact Us</a>
            </div>
          </div>
          <div class="nav-right mobile-hide">
            <a href="mailto:sales@cashmereai.com?subject=Cashmere AI Inquiry"><button class="subtext white nav-item-wrapper get-started-nav">Contact Us</button></a>
            <a href="/blog"><button class="nav-item-wrapper grey subtext">Blog</button></a>
            <a href="/"><button class="nav-item-wrapper grey subtext">Home</button></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col blog-header">
            <div class="header">Blog</div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 blogs">
            <BlogPost v-for="blog in blogs" :key="blog._id" :blog="blog"></BlogPost>
        </div>
      </div>
      <div class="row sec-11 p-4">
        <div class="col bottom-text">
          <div class="title white">Eradicate uninformed & passive cross-selling through customer behavior intelligence</div>
          <div class="subtext lightgrey">Learn more about Cashmere AI today.</div>
          <a href="mailto:sales@cashmereai.com?subject=Cashmere AI Inquiry"><button class="get-started subtext">Contact Us --></button></a>
          <div class="subtext lightgrey copyright">Copyright 2022 Pludo Inc.</div>
        </div>
      </div>
    </div>
  </template>

<script>
import BlogPost from '@/components/BlogPost.vue'
const ENDPOINT = 'http://cashmere-dev.us-west-1.elasticbeanstalk.com'
export default {
  name: 'BlogView',
  components: { BlogPost },
  data () {
    return {
      blogs: []
    }
  },
  methods: {
    openMenu () {
      this.$refs.myDropdown.classList.toggle('show')
    },
    getBlogs () {
      fetch(`${ENDPOINT}/blogs`)
        .then((response) => response.json())
        .then((data) => { this.blogs = data })
    }
  },
  mounted () {
    this.getBlogs()
  }
}
</script>

  <style scoped lang="scss">
  .sec-1 {
    background: linear-gradient(#444444, #2B2B2B);
    height: 85vh;
    position: relative;
  }
  .image-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .interior-image-full {
      width: 100%;
  }
  .text-wrapper {
    position: relative;
  }
  .blog-header {
    margin-top: 10vh;
    text-align: center;
  }
  .blogs {
    padding-top: 8vh;
    padding-bottom: 16vh;
    text-align: center;
  }

  @media (min-width: 600px) {
    .desktop-hide {
        display: none;
    }
    .top-left {
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translate(0%, -50%);
      padding-top: 10vh;
    }
    .top-right img {
      position: absolute;
      bottom: 0;
      height: 90%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
    .top-right {
      position: absolute;
      top: 50%;
      right: 0%;
      transform: translate(0%, -50%);
      height: 100%;
      padding-top: 10vh;
    }
    .sec-3, .sec-5, .sec-9 {
      padding: 100px;
      // height: 60vh;
      // position: relative;
    }
    .sec-3 {
      padding-top: 0px;
    }
    .interior-image {
      width: 50%;
    }
    .sec-4 {
      padding-left: 5%;
      padding-right: 5%;
    }
    .vc-icon {
      height: 28px;
      width: auto;
      transform: translate(0%, 50%);
    }
    .vc-icon-short {
      height: 24px;
      width: auto;
      transform: translate(0%, 50%);
    }
    .vc-icon-tall {
        width: 100px;
        height: auto;
    }
    .interior-box-text {
      position: absolute;
      top: 50%;
      transform: translate(0%, -50%);
    }
  }
  @media (max-width: 600px) {
    .mobile-hide {
      display: none;
    }
    .header {
      font-size: 40px;
    }
    .sec-1 {
      height: auto;
      text-align: center;
      width: 100vw;
    }
    .top-left {
      padding-top: 15vh;
      padding-left: 20px;
      padding-right: 20px;
      text-align: left;
    }
    .top-left .get-started {
      width: 100%;
    }
    .top-right img {
      position: relative;
      width: 100%;
      // bottom: 0;
      // height: 90%;
      // left: 50%;
      // transform: translate(-50%, 0%);
    }
    .sec-3, .sec-5, .sec-9 {
      padding: 20px;
      text-align: center;
      // height: 60vh;
      // position: relative;
    }
    .interior-image {
      width: 100%;
    }
    .sec-4 {
      padding-left: 5%;
      padding-right: 5%;
      text-align: center;
    }
    .vc-icon {
      height: 28px;
      width: auto;
      margin-bottom: 30px;
    }
    .vc-icon-short {
      height: 24px;
      width: auto;
      transform: translate(0%, 50%);
      margin-bottom: 40px;
    }
    .vc-icon-tall {
        width: 100px;
        height: auto;
        margin-bottom: 30px;
    }
  }
  .sec-2 {
    margin-top: 20px;
    text-align: center;
  }
  .inst-wrapper {
    width: 100%;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .inst {
    display: inline-block;
    margin-left: 50px;
    margin-right: 50px;
    width: auto;
  }
  .inst-type {
    display: inline-block;
    margin-left: 8px;
    vertical-align: middle;
    font-size: 20px;
  }
  .actionable-insights, .image-wrapper {
    padding: 0;
  }
  .actionable-insights img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .sec-6 {
    // height: 55vh;
    position: relative;
  }
  .sec-8 {
    height: 80vh;
    background-color: $grey;
  }
  .sec-9 {
    // height: 60vh;
    position: relative;
    // border: 1px solid blue;
  }
  .sec-10 {
    height: 60vh;
    background-color: $grey;
  }
  .sec-11 {
    background: linear-gradient(#444444, #2B2B2B);
    // min-height: 30vh;
    // position: relative;
    text-align: center;
  }
  .bottom-text {
    padding-top: 40px;
    // position: absolute;
    // top: 50%;
    // transform: translate(0%, -50%);
  }
  .copyright {
    margin-top: 20px;
  }
  </style>
