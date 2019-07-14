<template>
  <div class="container">
    <div class="header">
      <img src="@/images/logo.png" alt width="126px" height="26px" />
      <div class="pd">
        <img src="@/images/pindao.png" alt width="16px" height="16px" />
        <span>频道</span>
      </div>
      <div class="search">
        <img src="@/images/search.png" alt width="20px" height="19px" />
        <span>搜索</span>
      </div>
      <div class="User">
        <img src="@/images/my.png" alt width="30px" height="30px" />
      </div>
    </div>
    <div class="bg">
      <img src="@/images/bg.jpg" alt />
    </div>
    <div class="userInfo">
      <img src="@/images/my.png" alt width="70px" height="70px" />
      <div class="info">
        <div class="name">
          <span>旧城以西</span>
        </div>
        <div class="fan">
          <img src="@/images/vip.png" alt width="21px" height="15px" />
          <span>0粉丝</span>
        </div>
      </div>
    </div>
    <div class="hdnav">
      <div @click="change1" id="id1">视频</div>
      <div @click="change2" id="id2">专辑</div>
    </div>
    <div class="footer">
      <div class="context">
        还没发布任何内容
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    };
  },
  methods: {
    change1() {
      let count = this.count + 1;
      if (this.count % 2 !== 0) {
        document.getElementById("id1").style.color = "red";
        document.getElementById("id2").style.color = "black";
      }
    },
    change2() {
      let count = this.count + 1;
      if (this.count % 2 !== 0) {
        document.getElementById("id2").style.color = "red";
        document.getElementById("id1").style.color = "black";
      }
    }
  },
  created() {
    // console.log(this.count)
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
page {
  width: 100%;
  height: 100%;
}
.container{
  width: 100%;
  height: 100%;
  background-color: #f4f4f4
}
.header {
  width: 100%;
  height: 45px;
  display: flex;
  position: relative;
  background-color: #eeeeee;
  /* border-radius: 10px; */
  margin-bottom: 2px;
}
.header img {
  padding: 3px;
}
.pd,
.search {
  font-size: 12px;
}
.pd {
  position: absolute;
  left: 150px;
}
.search {
  position: absolute;
  right: 80px;
}
.pd,
.search img {
  display: block;
}
.pd,
.search span {
  height: 16px;
  width: 24px;
}
.User {
  position: absolute;
  right: 9px;
}
.bg img {
  width: 100%;
  height: 139.58px;
}
.userInfo {
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
}
.userInfo img {
  position: absolute;
  top: -45px;
  left: 18px;
}
.info {
  position: absolute;
  left: 95px;
}
.fan {
  position: relative;
  font-size: 8px;
  opacity: 0.8;
  /* color: #ffffff */
}
.fan img {
  display: inline-block;
  position: absolute;
  left: 65px;
  top: -18px;
}
.hdnav {
  width: 100%;
  height: 42px;
  font-size: 15px;
  position: relative;
  /* border-bottom: 1px solid black; */
  background-color: #ffffff;
}
#id1 {
  position: absolute;
  left: 25%;
}
#id2 {
  position: absolute;
  left: 75%;
}
.footer{
  width: 100%;
  height: 300px;
  position: relative;
}
.context{
  align-items: center;
  color: #666666;
  position: absolute;
  top: 95px;
  left:110px
}
</style>
