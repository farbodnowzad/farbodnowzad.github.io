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
    <div class="row sec-1">
      <div class="background-wrapper">
        <div class="col-12 col-xl-6 top-left">
          <div class="header white">Maximize customer value</div>
          <div class="title white">Intelligent, automated cross-selling that drives profit </div>
          <div class="subtext lightgrey">Cashmere AI increases revenue from your existing customers by recommending the right product for the right person at the right time.</div>
          <a href="mailto:sales@cashmereai.com?subject=Cashmere AI Inquiry"><button class="get-started body white">Contact Us --></button></a>
        </div>
        <div class="col-12 col-xl-6 top-right">
          <div class="image-wrapper">
            <img src="@/assets/images/header_image.png"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row sec-2 p-4 mobile-hide">
      <div class="col-12 centered">
        <div class="body">Built for</div>
      </div>
      <div class="inst-wrapper">
        <div class="inst"><img src="@/assets/icons/banks.png" class="icon"/><div class="inst-type">Banks</div></div>
        <div class="inst"><img src="@/assets/icons/credit_unions.png" class="icon"/><div class="inst-type">Credit Unions</div></div>
        <div class="inst"><img src="@/assets/icons/neobanks.png" class="icon"/><div class="inst-type">Neobanks</div></div>
        <div class="inst"><img src="@/assets/icons/fintechs.png" class="icon"/><div class="inst-type">Fintechs</div></div>
        <!-- <div class="inst"><img src="@/assets/icons/insurance.png" class="icon"/><div class="inst-type">Insurance</div></div> -->
      </div>
    </div>
    <div class="row sec-3">
      <div class="interior-box col">
        <div class="row">
          <div class="col-12 col-xl-6 text-wrapper">
            <div class="interior-box-text">
              <div class="header white">Anticipate needs</div>
              <div class="subtext lightgrey">Use Cashmere AI to shift from passive to active sales and meet customers where they're at. Use the power of machine learning to superchage customer engagement as well as critical revenue generating processes.</div>
              <br class="desktop-hide">
            </div>
          </div>
          <div class="col-12 col-xl-6 centered">
            <img src="@/assets/images/customer_phone.png" class="interior-image"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row sec-4">
      <div class="col-xl-8 col-12">
        <img src="@/assets/images/insight_delivery.png" class="interior-image-full mobile-hide"/>
        <img src="@/assets/images/actionable_insights_vertical.png" class="interior-image-full desktop-hide"/>
      </div>
      <div class="col-xl-4 col-12 text-wrapper">
        <div class="interior-box-text">
          <div class="header">Actionable insights</div>
          <div class="subtext">Free your team from spreadsheets, CRMs, and complex SQL queries. Receive clear actions on which products to market, and to who, based on precise analytics & predictions.</div>
        </div>
      </div>
    </div>
    <div class="row sec-5">
      <div class="interior-box col">
        <div class="row">
          <div class="col-12 col-xl-6 text-wrapper">
            <div class="interior-box-text">
              <div class="header white">Automate or augment</div>
              <div class="subtext lightgrey">Use Cashmere AI to completely automate workflows - or keep a human in the loop by delivering insights to your team so they can own the relationship.</div>
            </div>
          </div>
          <div class="col-12 col-xl-6 centered">
            <img src="@/assets/images/robot_hand.png" class="interior-image"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row sec-6">
      <div class="col centered">
        <div class="header">Increase lifetime value & spend less on sales</div>
        <div class="subtext">Effectively cross-sell products based on behavioral intelligence to customers you already have rather than trying to acquire new ones.</div>
        <div class="images-container">
          <div class="image-section">
            <img src="@/assets/images/rulesEngine.png"/>
            <div class="caption">Rules Engine</div>
          </div>
          <div class="image-section">
            <img src="@/assets/images/inference.png"/>
            <div class="caption">Inference</div>
          </div>
          <div class="image-section">
            <img src="@/assets/images/externalData.png"/>
            <div class="caption">Internal + External Data</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row sec-8">
      <div class="col-6 relative">
        <div class="text-wrapper">
          <div class="header white">Converse natively</div>
          <div class="subtext lightgrey">Communicate in a highly personalized manner through the channel that makes the most sense for each account.</div>
        </div>
      </div>
    </div> -->
    <div class="row sec-9">
      <div class="centered">
        <div class="header">Seamless integration</div>
        <div class="subtext">Cashmere AI works effortlessly with your existing systems.</div>
      </div>
      <div class="interior-box col">
        <div class="row">
          <div class="col-12 col-xl-6 text-wrapper">
            <div class="interior-box-text">
              <div class="title white">Sync with all of your data sources</div>
              <div class="subtext lightgrey">Secure live data connections discover, update, and deliver insights in real time.</div>
            </div>
          </div>
          <div class="col-12 col-xl-6 centered">
            <img src="@/assets/images/tools_sync.png" class="interior-image"/>
          </div>
        </div>
      </div>
    </div>
    <div class="row sec-7 pb-4 centered">
      <div class="col-12 centered">
        <div class="title">Backed by trusted names</div>
      </div>
      <div class="col-xl-1 col-0"></div>
      <div class="col-xl-2 col-12 centered"><img src="@/assets/images/canaan.png" class="vc-icon-short"/></div>
      <div class="col-xl-2 col-12 centered"><img src="@/assets/images/soma_capital.png" class="vc-icon"/></div>
      <div class="col-xl-2 col-12 centered"><img src="@/assets/images/general_catalyst.png" class="vc-icon"/></div>
      <div class="col-xl-2 col-12 centered"><img src="@/assets/images/long_run_capital.png" class="vc-icon-tall"/></div>
      <div class="col-xl-2 col-12 centered"><img src="@/assets/images/makers_fund.png" class="vc-icon"/></div>
    </div>
    <!-- <div class="row sec-10  py-4">
      <div class="col centered">
        <div class="header white">Measure your impact</div>
        <div class="subtext lightgrey">Understand how revenue is being generated.</div>
      </div>
    </div> -->
    <div class="row footer p-4">
      <div class="col bottom-text">
        <div class="title white">Eradicate uninformed & passive cross-selling through customer behavior intelligence</div>
        <div class="subtext lightgrey">Learn more about Cashmere AI today.</div>
        <a href="mailto:sales@cashmereai.com?subject=Cashmere AI Inquiry"><button class="get-started subtext">Contact Us --></button></a>
        <div class="small lightgrey copyright">Copyright 2022 Pludo Inc.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    openMenu () {
      this.$refs.myDropdown.classList.toggle('show')
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  height: 40px;
  width: auto;
}
.sec-1 {
  background: linear-gradient(#444444, #2B2B2B);
  // background-image: url("@/assets/images/geo_wave1.png");
  // background-size: cover;
  // background-position: center;
  // background-color: $grey;
  height: 85vh;
  position: relative;
}
.background-wrapper {
  // position: absolute;
  height: 100%;
  width: 100%;
  // background-color: rgba(0,0,0,0.5);
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
