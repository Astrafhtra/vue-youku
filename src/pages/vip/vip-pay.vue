<template>
  <div id='wrapAll' class="page-container">
    <header class="page-header">
      <div class="back" @click="back">
        <img src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png"
          class="back-arrow"
         />
      </div>
      <span id="pg_hd_title">优酷VIP收银台</span>
    </header>
    <!-- 用户信息 -->
    <div class="uer-info-mod black-style">
      <div class="vip-user-mod">
        <span class="vip-pic">
          <img src="https://static.youku.com/lvip/img/avatar/80/11.png" alt="" />
        </span>
        <div class="vip-msg">
          <h2 class="novip">
            <span class="nickname">张三</span>
            <span class="from">123****8910</span>
          </h2>
          <p>您还未开通优酷VIP会员</p>
        </div>
        <div class="vip-button">切换账号</div>
      </div>
    </div>
    <!-- 选择开通时长 -->
    <div class="cash-product">
      <div class="pp_tpl">
        <div class="title-bar">
          <h1>优酷VIP会员</h1>
          <p>适用于手机/pad/电脑端（不含电视端）</p>
        </div>
        <div class="data-list">
          <div class="item" v-for="(det,index) in detail" 
            :key="index"
            :class="{ select: changeBgc == index}"
            @click="chooseProduct(index)"
            :data-index="index"
           >
            <h3 class="name" :class="{ fz_c: changeBgc == index}">{{det.time}}</h3>
            <p class="price" :class="{ fz_c: changeBgc == index}">
              <font><i>￥</i>{{det.price}}</font>
              <span class="origin" v-if="det.ori === 1"><i></i>{{det.origin}}</span>
            </p>
            <div class="desc" v-if="det.haveDis === 1">
              <img :src="det.url" v-if="det.haveUrl === 1" >
              <span>{{det.discounts}}</span>
            </div>
            <i class="icon marking_tag" v-if="det.icon.length > 0">{{det.icon}}</i>
          </div>
        </div>
        <div class="cyclebuy"
          v-if="disDesc === 1"
         :class="{selected : chooseCon}" @click="_chooseCon ">
          <span class="icon"></span>
          <span class="text">开通连续包月：到期后享15元/月续费优惠</span>
        </div>
      </div>
      <div class="vmp_detail" v-if="disDesc === 0">
        111
      </div>
    </div>
    <div class="gray-line" style="height: 8px;background: #eeeff3"></div>
    <!-- 选择支付方式 -->
    <div class="cash-pay">
      <div class="pay-item" 
       :class="{active: choosePay === index} "
       v-for="(pay,index) in Allpays"
       :key="index"
       @click="choosePayment(index)"
        >
        <div class="pay-main">
          <span class="pay-icon">
            <img :src="pay.icon">
          </span>
          <h1>{{pay.way}}</h1>
          <span class="checkbox" :class="{active: choosePay === index}"></span>
        </div>
      </div>
      <div class="show-btn" @click="showAll = !showAll">
        <span>{{word}}<i :class="{rot: showAll == true}"></i></span>
      </div>
    </div>
    <div class="gray-line" style="height: 8px;background: #eeeff3"></div>
    <!-- 联合会员专区 -->
    <div class="union-vip">
      <div class="guide-header"><h1>优酷联合会员专区</h1></div>
      <div class="guide-content">
        <div class="inner">
          <div class="inner-item"
          v-for="(inner,index) in inners"
          :key="index"
          >
            <div class="product-price"
              :style="{backgroundImage:'url(' + inner.url + ')'}"
             >
              <span class="pay-symbol">￥</span>
              <span class="new-price">{{inner.newPrice}}</span>
              <span class="old-price">{{inner.oldPrice}}</span>
            </div>
            <h3>优酷+{{inner.brand}}</h3>
            <div class="open">开通</div>
          </div>
        </div>
      </div>
      <div class="gray-line" style="height: 8px;background: #eeeff3"></div>
    </div>
    <!-- 各种开通 -->
    <div class="ch-de-mod">
      <div class="cash-de-mod" v-for="(ako,index) in AllKindsOf" :key="index">
        <div class="flex-item">
          <span class="icon" :style="{backgroundImage:'url(' + ako.url + ')'}"></span>
          <div class="line-title">
            <h1>
              <font>{{ako.business}}</font>
              <span class="vmp_disc" v-if="ako.discounts.length > 0">{{ako.discounts}}</span>
            </h1>
            <div class="vmp_desc" v-if="ako.desc.length > 0">{{ako.desc}}</div>
          </div>
        </div>
      </div>
      <div class="gray-line" style="height: 8px;background: #eeeff3"></div>
    </div>
    <!-- 付费特权 -->
    <div class="privilege">
      <div class="cash-privilege">
        <h1>付费特权</h1>
        <div class="priv-lists">
          <ul class="priv-inner">
            <li v-for="(priv,index) in allPrivileges" :key="index">
              <div class="priv-item" >
                <img :src="priv.url" >
                <p>{{priv.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="gray-line" style="height: 8px;background: #eeeff3"></div>
    </div>
    <!-- 遵守协议 -->
    <div class="deal">
      <div class="cash-protocal">
        <h1>如开通会员即表示您同意如下协议</h1>
        <ul class="lists">
          <li><div class="lists-desc"><p>优酷付费会员协议</p></div></li>
          <li><div class="lists-desc"><p>优酷会员连续包月协议</p></div></li>
        </ul>
      </div>
      <div class="gray-line" style="height: 8px;background: #eeeff3"></div>
    </div>
    <!-- 政策及问题 -->
    <div>
      <div class="cash-protocal">
        <ul class="q-lists">
          <li>
            <div class="q-item">
              <img src="https://gw.alicdn.com/tfs/TB1fbMMDxGYBuNjy0FnXXX5lpXa-64-64.png?x-oss-process=image/format,webp">
              <p>隐私政策</p>
            </div>
          </li>
          <li>
            <div class="q-item">
              <img src="https://gw.alicdn.com/tfs/TB1tiwfDx9YBuNjy0FfXXXIsVXa-64-64.png?x-oss-process=image/format,webp">
              <p>常见问题</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 确认支付按钮 -->
    <div class="dredge">
      <div class="dredge-btn">
        <span class="dredge-price">确认支付</span>
        <!-- <span class="disaccount">()</span> -->
      </div>
    </div>
  </div> 
</template>

<script>
import Vue from 'vue'
export default {
  name: 'vip-pay',
  data () {
    return {
      detail: [
        {cb:0, ori:1, haveUrl:1, haveDis:1, time: '连续包月VIP', origin:15, price: 9.9, url: 'http://r1.ykimg.com/05100000590ADD88ADC0AEE79D0CA6ED', discounts:'首3月9.9元/月', icon: '新用户专享'},
        {cb:0, ori:0, haveUrl:0, haveDis:0, time: '连续包季VIP', origin:0, price: 45, url: '', discounts:'', icon: ''},
        {cb:0, ori:0, haveUrl:0, haveDis:0, time: '连续包年VIP', origin:0, price: 178, url: '', discounts:'', icon: '超值'},
        {cb:1, ori:0, haveUrl:0, haveDis:1, time: '季度VIP', origin:0, price: 56, url: '', discounts:'折合18.67元/月', icon: ''},
        {cb:1, ori:1, haveUrl:1, haveDis:1, time: '半年VIP', origin:108, price: 54, url: 'http://r1.ykimg.com/05100000590ADD88ADC0AEE79D0CA6ED', discounts:'半年卡5折', icon: '5折'},
        {cb:1, ori:0, haveUrl:0, haveDis:1, time: '年度VIP', origin:0, price: 198, url: '', discounts:'折合16.50元/月', icon: ''},
      ],// 开通时长的假数据
      pays:[
        {icon:'https://r2.ykimg.com/0510000058325BF067BC3D257E07385E', way:'支付宝支付'},
        {icon:'https://img.alicdn.com/tfs/TB1LwHvdgvD8KJjy0FlXXagBFXa-58-58.png', way:'花呗支付'},
        {icon:'https://r1.ykimg.com/0510000058325BF067BC3D59AF0E6CA4', way:'微信支付'}
      ], // 支付方式数据
      inners: [
        {url:'https://gw.alicdn.com/tfs/TB1V4VMXp67gK0jSZPfXXahhFXa-315-291.png',oldPrice:35,newPrice:20,brand:'饿了么'},
        {url:'https://gw.alicdn.com/tfs/TB1z_hQXBr0gK0jSZFnXXbRRXXa-300-282.png',oldPrice:40,newPrice:24,brand:'哈罗单车'},
        {url:'https://gw.alicdn.com/tfs/TB1pzl9XuT2gK0jSZFvXXXnFXXa-315-291.png',oldPrice:35,newPrice:24,brand:'微博'},
        {url:'https://gw.alicdn.com/tfs/TB1VE8PXxz1gK0jSZSgXXavwpXa-300-282.png',oldPrice:38,newPrice:24,brand:'掌阅'},
        {url:'https://gw.alicdn.com/tfs/TB1JO0PXED1gK0jSZFGXXbd3FXa-300-282.png',oldPrice:32,newPrice:24,brand:'唱吧'},
        {url:'https://gw.alicdn.com/tfs/TB1U.8PXxz1gK0jSZSgXXavwpXa-300-282.png',oldPrice:45,newPrice:24,brand:'蜻蜓FM'},
        {url:'https://gw.alicdn.com/tfs/TB1V4VMXp67gK0jSZPfXXahhFXa-315-291.png',oldPrice:378,newPrice:198,brand:'饿了么'}
      ],// 
      AllKindsOf: [
        {url:'https://img.alicdn.com/tfs/TB1A0Lzo26H8KJjy0FjXXaXepXa-108-108.png',business:'开通酷喵VIP',desc:'优酷VIP所有权益+TV大屏端特权',discounts:'限时优惠'},
        {url:'https://img.alicdn.com/tfs/TB1hxYio3vD8KJjy0FlXXagBFXa-108-108.png',business:'话费连续包月',desc:'仅支持连续包月，可随时取消，25元/月',discounts:''},
        {url:'https://img.alicdn.com/tfs/TB1f6zfo4rI8KJjy0FpXXb5hVXa-108-108.png',business:'会员卡激活',desc:'',discounts:''},
        {url:'https://img.alicdn.com/tfs/TB1HFamy3TqK1RjSZPhXXXfOFXa-80-80.png',business:'赠送好友VIP',desc:'专属红包传心意',discounts:'拼手气瓜分会员天数'}
      ], // 各种开通
      allPrivileges: [
        {url: 'https://gw.alicdn.com/tfs/TB1gVV1sxjaK1RjSZFAXXbdLFXa-200-200.png?x-oss-process=image/format,webp',desc: '热剧抢先看'},
        {url: 'https://gw.alicdn.com/tfs/TB1qdVWsAvoK1RjSZFwXXciCFXa-200-200.png?x-oss-process=image/format,webp',desc: '院线新片'},
        {url: 'https://gw.alicdn.com/tfs/TB1dbdZssbpK1RjSZFyXXX_qFXa-200-200.png?x-oss-process=image/format,webp',desc: '独家特供'},
        {url: 'https://gw.alicdn.com/tfs/TB1A8t_sxYaK1RjSZFnXXa80pXa-200-200.png?x-oss-process=image/format,webp',desc: '超级综艺'},
        {url: 'https://gw.alicdn.com/tfs/TB1ka0Zsr2pK1RjSZFsXXaNlXXa-200-200.png?x-oss-process=image/format,webp',desc: '港剧场'},
        {url: 'https://gw.alicdn.com/tfs/TB19OX1ssbpK1RjSZFyXXX_qFXa-200-200.png?x-oss-process=image/format,webp',desc: '用劵专区'},
        {url: 'https://gw.alicdn.com/tfs/TB19OX1ssbpK1RjSZFyXXX_qFXa-200-200.png?x-oss-process=image/format,webp',desc: '点播半价'},
        {url: 'https://gw.alicdn.com/tfs/TB19OX1ssbpK1RjSZFyXXX_qFXa-200-200.png?x-oss-process=image/format,webp',desc: '广告特权'},
        {url: 'https://gw.alicdn.com/tfs/TB19OX1ssbpK1RjSZFyXXX_qFXa-200-200.png?x-oss-process=image/format,webp',desc: '1080P'},
        {url: 'https://gw.alicdn.com/tfs/TB14lINswHqK1RjSZFkXXX.WFXa-200-200.png?x-oss-process=image/format,webp',desc: '流光HDR'},
        {url: 'https://gw.alicdn.com/tfs/TB1uUQNsrvpK1RjSZPiXXbmwXXa-200-200.png?x-oss-process=image/format,webp',desc: '杜比影音'},
        {url: 'https://gw.alicdn.com/tfs/TB1_RsHspYqK1RjSZLeXXbXppXa-200-200.png?x-oss-process=image/format,webp',desc: '个性弹幕'},
        {url: 'https://gw.alicdn.com/tfs/TB18FJasOLaK1RjSZFxXXamPFXa-200-200.png?x-oss-process=image/format,webp',desc: '专属缓存'},
        {url: 'https://gw.alicdn.com/tfs/TB1XFMLsCzqK1RjSZFjXXblCFXa-200-200.png?x-oss-process=image/format,webp',desc: '并行缓存'},
        {url: 'https://gw.alicdn.com/tfs/TB1wpgYsxYaK1RjSZFnXXa80pXa-200-200.png?x-oss-process=image/format,webp',desc: '极速缓存'},
        {url: 'https://gw.alicdn.com/tfs/TB1jJDPuwHqK1RjSZFEXXcGMXXa-200-200.png?x-oss-process=image/format,webp',desc: '预约缓存'},
        {url: 'https://gw.alicdn.com/tfs/TB1PKfFuCzqK1RjSZFLXXcn2XXa-200-200.png?x-oss-process=image/format,webp',desc: '儿童管理'},
        {url: 'https://gw.alicdn.com/tfs/TB1FsJDsq6qK1RjSZFmXXX0PFXa-200-200.png?x-oss-process=image/format,webp',desc: '品牌折扣'},
        {url: 'https://gw.alicdn.com/tfs/TB1crFDspzqK1RjSZFCXXbbxVXa-200-200.png?x-oss-process=image/format,webp',desc: '等级礼包'},
        {url: 'https://gw.alicdn.com/tfs/TB13ZJDsq6qK1RjSZFmXXX0PFXa-200-200.png?x-oss-process=image/format,webp',desc: '综艺录制'},
        {url: 'https://gw.alicdn.com/tfs/TB1ZmpBswHqK1RjSZJnXXbNLpXa-200-200.png?x-oss-process=image/format,webp',desc: '热剧探班'},
        {url: 'https://gw.alicdn.com/tfs/TB1wrJFswHqK1RjSZFkXXX.WFXa-200-200.png?x-oss-process=image/format,webp',desc: '尊贵标识'},
        {url: 'https://gw.alicdn.com/tfs/TB1DzhEsrvpK1RjSZPiXXbmwXXa-200-200.png?x-oss-process=image/format,webp',desc: '专享皮肤'},
      ],
      changeBgc: -1,//点击选择开通时长，更换样式
      chooseCon : false,
      disDesc: -1,//显示描述
      choosePay: -1,//选择开通方式
      showAll: false, // 显示/隐藏支付方式
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    chooseProduct (index) {
      this.changeBgc = index
      let detail = this.detail;
      // for (let i = 0; i < detail.length; i++) {
      //   console.log(detail[i].cb)
      //   if (detail[i].cb === 0) {
      //     this.disDesc =  0
      //   } else if(detail[i].cb === 1) {
      //     this.disDesc = 1
      //   }
      //   return this.disDesc = -1
      // }
    },
    choosePayment(index){
      this.choosePay = index
    },
    _chooseCon() {
      // this.chooseCon = true
      if (this.chooseCon === false) {
        return this.chooseCon = true
      } else if(this.chooseCon === true) {
        return this.chooseCon = false 
      }
    }
  },
  computed:{
    Allpays: function(){
      if(this.showAll == false) {
        let Allpays = []
        if(this.pays.length > 2 ) {
          for(let i=0; i < 2; i++) {
            Allpays.push(this.pays[i])
          }
        } else {
          Allpays = this.pays
        }
        return Allpays
      } else {
        return this.pays
      }
    },
    word:function() {
      if(this.showAll == false){
        return '其他支付方式'
      }else{
        return '收起'
      }
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.page-container{
  z-index: 10000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
/* 头*/
.page-header{
  position: relative;
  width: 100%;
  height: 44px;
  line-height: 3.17333rem;
  text-align: center;
  color: #333;
  background: #fff;
  border-bottom: 1px solid #d5d5d5;
  z-index: 3;
}
.back{
  position: absolute;
  left: 0;
  top: 0;
  width: 44px;
  height: 44px;
  color: #000;
}
.back-arrow{
  width: 24px;
  height: 19px;
  transform: rotate(90deg);
}

/* 用户模块*/
.uer-info-mod {
  overflow: hidden;
}
.black-style{
  background-image: radial-gradient(50% 143%,#5c5c5c 0,#191919 100%)  
}
.vip-user-mod{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 10px 15px;
  position: relative;
}
.vip-pic{
  width: 44px;
  height: 44px;
}
.vip-pic img{
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}
.vip-msg{
  float: auto;
  margin-left: 13px;
}
.vip-msg h2{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  font-weight: 400;
}
.vip-msg h2 .nickname{
  font-size: 14px;
  max-width: 110px;
}
.vip-msg h2 .from{
  font-size: 11px;
  color: #999;
}
.vip-msg p{
  margin-top: 5px;
  color:#fff;
  font-size: 11px;
}
.vip-button{
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  right: 15px;
  line-height: 0.0666rem;
  color: #999;
  font-size: 12px;
}
/*选择开通的时长及价格*/
.cash-product{
  position: relative;
  padding: 15px;
  min-width: 20px;
  overflow: hidden;
}
/* 头部介绍 */
.cash-product .title-bar h1{
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #000;
  line-height: 25px;
}
.cash-product .title-bar p{
  margin-top: 5px;
  color: #4a4a4a;
  font-size: 12px;
  line-height: 15px;
}

/* 选择时长 */
.data-list{
  flex-flow: row wrap;
  display: flex;
  margin-top: 13px;
}
.item{
  width: 108px;
  height: 113px;
  margin-right: 7px;
  margin-bottom: 7px;
  padding-top: 11.5px;
  position: relative;
  background: #fff;
  border: 1px solid #b58e40;
}
.item.select{
  background-color: #eed398;
  border: 1px solid #ad8f4a;
}
.item .name{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #896623;
  text-align: center;
}
.name.fz_c{
  color: #000;
}
.item .price{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: baseline;
  height: 37px;
  margin-top: 6px;
}
.item .price .origin{
  font-family: HelveticaNeue-Thin;
  font-size: 12px;
  color: #7e7e7e;
  text-decoration: line-through;
}
.item .price font{
  font-family: HelveticaNeue-Thin;
  font-size: 34px;
  color: #896623;
  line-height: 40px;
  text-align: left;
}
.price.fz_c font {
  color: #000;
}
.item .price i{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #896623;
  line-height: 28px;
  font-style: normal;
  text-align: right;
}
.item .desc{
  /* 实现真正的流体布局 */
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  margin: 9px 5px 0;
  font-family: PingFangSC-Semibold;
  font-size: 11px;
  color: #4a4a4a; 
}
.item .desc img{
  display: table-cell;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin-right: 2.5px;
  border: 0;
}
.item .desc span{
  display: table-cell;
  vertical-align: middle;
}
.item .icon{
  position: absolute;
  top: -7.5px;
  right: -7.5px;
  width: 36px;
  height: 21px;
}
.item .icon.marking_tag{
  padding: 0 4px;
  width: auto;
  min-width: 36px;
  height: 17px;
  line-height: 17px;
  background-image: linear-gradient(-90deg,#ff2937,#ffb167);
  font-family: PingFangSC-Semibold;
  font-size: 11px;
  color: #fff;
  text-align: center;
  font-style: normal;
  border-radius: 5px 0 5px 0;
  box-shadow: 0 1px 0 2px rgba(255,113,33,.5)
}

/* 连续开通 */
.cyclebuy{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 8px;
}
.cyclebuy .icon{
  width: 18px;
  height: 18px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAAGWB6gOAAAABGdBTUEAALGPC/xhBQAABIFJREFUWAnFWM1vG0UUf2/ckKR8SFxQG6jEBXHk0FBo+QPszacjceVQIlqBIBCnEl9CqoRoOXgdEqRWIEIRXJG8zpcdxLmF0EiUC+LGgaYRF5CQWreJ5/HeuLsa7669a5piHzwz7/3mvbezM7/3ZgHu/srF3Fd+P9J6bnYHPDd3KaJpKzBT4rRlN3fOyFfcsWfiAClly/OOE0DjbLGj7QCQ2PFKzkeJIAF0MisxoW2lXHTeANTjoPDU1Gztd1sH5ZIz1yIIDzYuTj0WloXHql6vPxUW2mN+bb/Y49i+Vxo5qWI1tpBoSPF7/diWRfpID0VktmB90XnCHsNKaexxW+AVs1/645bFFKEsya2bN38DODCan1u77AOlJTqrKqUr5wBVI1+ovm/rgr4semVp4uFAkKJTLmapBcaL8FeLoIuBPG5tPnsYKiXn9S7mxULLbvaC0kTjsdouhEhYUaDgtCxiF/MiUEL4xghTH6iICQB7CwRqftafg0FCRzaZ5zpv+7DIPhKFvIV6A2sAeBkRfgJEJgw9rAlmeLyUL9Te9Q34bawhUZbnc0+ChlO8DYeBxBBuTZ2pfupPDLcRQ2a9SGcmC8ffQzyr7QmeO3oCYG9t8ODBp7Ovlv+0dS39TuRkA4Uv29IP7+5fbXBSf+Prlx6MGGvL/wnWJDKf95S8oQz2HU2YE6sen1u91mQKACWvebywej0WmUp4YNTAvKJzMRW+A0iSgjIbrgMonYqOquauTQdvi0Jmdtn6bQGpFXiV+QhmUuNjgIaCFHwua7QUo08tkmQQZN1YTklpqoXLJMlHklgKQ7Fnk7PzoudOHkkx30AiqcieKJElPaakn7izGeEjMeyVcueJYFohLPIpusopdojHzzLJnRjIUC43u3HDDkD6sYbCIBkb+iWcAYJRTq+H2Oi3COq62dBaM4PyT6kh4xQ01wj4IhvfYdz6gIKFOOdmTuivY0CyZFrrSxzEekb1ffBfSUKWtaF3P+THH1FKnZyYrVZDcQTD2IC8Yu4dAjrf/4A6MjJT/SNA70NHduudO/Q9B/ddfq4WOZwtAcmKNDQt9ffhsf0OJPwsEtjtXdrMKJyOXTE5eEk7Omx0P8bi0z70piSS0wCcofNnNl7eDyfd2DA+2TcfXVN+4916YzNfeP5QuFzoxvC9YIWovdIPO1w3HlNcQb4iPNGrYORBxDcCLkghpoi4EhPS6vWPiGOgYV4c2BYy63U8TVLFbc6vuNWk896GRNTglIJbJgomwmuVeeeFXoUktbZ/ZzbHXhIdab0avqf+HwE2fe6tDSjKij8TkCQ+uQk0aHcr7sPH/QpMfIlP8e0n35bUIY7NRUDronq0/5HJ6eV/7kcwcn+nv29vEqovpgpV1/YRCchXSmCodYHvEyNyN/Dl99LKiuzBXpWJxw0H4tttG5APMJ80btXf5NTyGss+Q6VWJt567koSkQr7Ln/y43Hem3L9P82fPS4MDg4sdLwgMjAxID8wu5V0owjHuFA73CzIwPAYG9uWgo3bGxppNSi37ckJ/X8BvYTS+tX75B0AAAAASUVORK5CYII=') no-repeat 50%;
  background-size: contain;
}
.cyclebuy.selected .icon{
  background: url('data:image/png;base64,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') no-repeat 50%;
  background-size: contain;
}
.cyclebuy .text{
  font-family: PingFangSC-Regular;
  color: #4a4a4a;
  font-size: 14px;
  text-align: left;
  margin-left: 8px;
}

/* 选择支付方式 */
.cash-pay{
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 16.5px;
  padding-right: 20px;
}
.pay-item{
  position: relative;
  display: block;
  border-bottom: 1px solid #e4e4e4;
  padding-top: 0;
  padding-bottom: 0;
}
.pay-main{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-top: 19.5px;
  padding-bottom: 19.5px;
}
.pay-icon{
  display: block;
  width: 24px;
  height: 24px;
}
.pay-icon img{
  width: 100%;
  height: 100%;
}
.pay-main h1{
  flex: none;
  margin-left: 10px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #000;
}
.checkbox{
  position: absolute;
  right: 0;
  width: 20px;
  height: 20px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABWWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGBSSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8/AxcDHwMvAwWCZmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisp7v5ZqTvdTvrvc8lb6906QxM9SiAKyW1OBlI/wHi1OSCohIGBsYUIFu5vKQAxO4AskWKgI4CsueA2OkQ9gYQOwnCPgJWExLkDGTfALIVkjMSgWYw/gCydZKQxNOR2FB7QYDbJbO4ICexUiHAmIBryQAlqRUlINo5v6CyKDM9o0TBERhKqQqeecl6OgpGBoamDAygMIeo/hwIDktGsTMIseb7DAy2+////78bIea1n4Fhozkw+HYixDQsGBgEuRkYTuwsSCxKBAsxAzFTWhoDwydgePEGMDAIb2Ng4PxTnGZsBJZn5HFiYGC99///ZzUGBvbJDAx/J/z//3vR//9/FwM132FgOJAHAEf/Z5tAjj9dAAACzElEQVRYCdXZvW4TQRQFYJsiFZQgESTSRQoSqRBUSHmCPAC8EFSILq3TUMMjAE8AUugip8AvkCI0CM632TE2sWIn/hsf6Xhnd+fee/bu/O2425kPT2N+GD4Jt0eYYmcwwpOUP4Xfw5WBuHfhafjnhmTDlo+l4XE898LfYREoa0fh6/Ag3A3vhvfa8kGO7qmjbrHjgy8+F4ateHobXoQC/Qrfhy/Cbjgr1GXDlg+++HwTijEX7sf6S8ipLByHO+G84IOv8nbEEOtW2I9VPyTyLHwWLhp88i1GPxTzRmBwHnLwNXwQLgt8iyGWmDOL9Qr6IcMP4dztJz6mQQyxSmanNgMGpU16ylWITJgGYpXM0nBtbL3bU2k3y3zdcT8RYpY2azSYCGOaYUNPXEbHmRh0wkWxaTB0TRxne7khm4aNdYMGWmgagynNU8joztid9ZzQUN7u2HRr/vUEZo1aQAtNtA1xmpKLz4dX1l8w3dJEWwMDrAuDsNtcqeOHFppo27+Tn8MQrBddrAW00ASHhO41xU7nc3us6WDghz1CrcxBmmvDz1bQdu1CS/KaZJZVkpV5baBJWz2X0YKaevwVTYSW9D4sdys6Fk2DUaGlU1Wk819HHxX6qCaFrZaiqcnoj/biywqFFk0ntFmd6Fnaak0danQKHa6gyqLEQqAWjC1KyvD0sVX3qhaV0VG0FG2NtI1ZOFPbC7XVYydrBg200HQFPqTK8r/qjzvKN+JzmdCtcCM2IIjdiC0dQmEjNskupV6K7edE7zsLl9HB+ORbjH44805e6o5BMyht1gaFYWNnrMbtTvjgi08ixZi6g5c610IHMxoYujh1tDlgD6Abzgp12bAtvi5SXsjWePwMYZzthSULRFvIHIX//9ngE2I3PGjvqaMuG+SDLz6XBtPtyv++ucmrm/TkGr8NDHsDvhAKU2wyKItozWsz4Vt4K/wFrRPhK7K6d2AAAAAASUVORK5CYII=') no-repeat 50%;
  background-size: contain;
}
.checkbox.active{
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABWWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGBSSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8/AxcDHwMvAwWCZmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisp7v5ZqTvdTvrvc8lb6906QxM9SiAKyW1OBlI/wHi1OSCohIGBsYUIFu5vKQAxO4AskWKgI4CsueA2OkQ9gYQOwnCPgJWExLkDGTfALIVkjMSgWYw/gCydZKQxNOR2FB7QYDbJbO4ICexUiHAmIBryQAlqRUlINo5v6CyKDM9o0TBERhKqQqeecl6OgpGBoamDAygMIeo/hwIDktGsTMIseb7DAy2+////78bIea1n4Fhozkw+HYixDQsGBgEuRkYTuwsSCxKBAsxAzFTWhoDwydgePEGMDAIb2Ng4PxTnGZsBJZn5HFiYGC99///ZzUGBvbJDAx/J/z//3vR//9/FwM132FgOJAHAEf/Z5tAjj9dAAADFUlEQVRYCdWZP2hTURTGT6yNBYmoYJFIQxUptGg7uChSByfB0tlBUAQR3HQSKrgoqEtd3Sw4OLi0FvwDWiGKIDhUJYp/aoqYoYMgHRTbJp7fqxeSNEnfPfn/wZd338v9zvney333vHcTkeqwX+WjygFlPI/alEweU9qeUr5TNgyYG1fOKXOeRIOWGHVDQiNPKFeUvgaL+xODWMSsGaIa6Ybyt5KE2f/b4uQ++y4GMa8ryVEVdqg6qayVweKTcYbJQS4TBlWVVtbLpDPtzJKLnF5AsKh0wRq1JWdos/wE6SaYdBeD3OsOAwa1G5NO2IwtHireYNzdGHPjphkmXW5mg5JI6NE/StexGSZdTjwwdeFpDZiAXcdW2eKpAJQ0qkUrXE13kfCCp6DcbtQGOKPcELQMH3292+XEsQEZPtAj8e5YECGzsCjJN9/l3qOUfEr/NESViIog3i7QAHPK3UHL4yPa2SGXzx2WkyP7JOIiFelzen3uTr+Xq7dfyt8lLpA3vqliD+GZYGd95Zi8c21EDg3tCiV9NftDTo9NW80OdWiWs8qjobLldbpyfliOH9mbd6Rys2fnFtka65KZ1/OVO5b+NsO47C/9XfmjjEl+bl+gQWtAP0Z5MvcCN065MVkpEBq0BsRNRrm7rTBqbUbdFGQxa9QGRi35Gq7hp8/4ZmUyt8KoDe56b6NUHCuMWptRyiIVxxdo0BoQGP3gK6R2UxZ9gcZY91OM0UnfhPSndlMWw4K+aIyYooQuKE8pt/kEWcnm5MHzL0FZHOzrLlsA3EPJxZtPrXWeh5IxjIJe5UEaPsAstfvhi6+yvJyV2OaodG3qlCVtz2d+yeSzz3Lp1ozcf/JR6GvEhOoeO23LPzg7o2xxzmm3EvG0BrxItcXLHc7b4nUZo22zAIHZtljSwShoi0WyVaurZtO6wyxQz/d9F5tcoVfytG8BGAZJZb3MOpPkWHcFr8BZiR1uMGYDpq5aGXYGa7Y0nu87oTtMwKwiVFsUiEEsYtYNlNuG/30TqfJ0GPyjStYGKv0hxjMvf4i9VZrwD+jmWXrLaAD6AAAAAElFTkSuQmCC') no-repeat 50%;
  background-size: contain;
}
.checkbox.default{
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAABWWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGBSSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8/AxcDHwMvAwWCZmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisp7v5ZqTvdTvrvc8lb6906QxM9SiAKyW1OBlI/wHi1OSCohIGBsYUIFu5vKQAxO4AskWKgI4CsueA2OkQ9gYQOwnCPgJWExLkDGTfALIVkjMSgWYw/gCydZKQxNOR2FB7QYDbJbO4ICexUiHAmIBryQAlqRUlINo5v6CyKDM9o0TBERhKqQqeecl6OgpGBoamDAygMIeo/hwIDktGsTMIseb7DAy2+////78bIea1n4Fhozkw+HYixDQsGBgEuRkYTuwsSCxKBAsxAzFTWhoDwydgePEGMDAIb2Ng4PxTnGZsBJZn5HFiYGC99///ZzUGBvbJDAx/J/z//3vR//9/FwM132FgOJAHAEf/Z5tAjj9dAAADFUlEQVRYCdWZP2hTURTGT6yNBYmoYJFIQxUptGg7uChSByfB0tlBUAQR3HQSKrgoqEtd3Sw4OLi0FvwDWiGKIDhUJYp/aoqYoYMgHRTbJp7fqxeSNEnfPfn/wZd338v9zvney333vHcTkeqwX+WjygFlPI/alEweU9qeUr5TNgyYG1fOKXOeRIOWGHVDQiNPKFeUvgaL+xODWMSsGaIa6Ybyt5KE2f/b4uQ++y4GMa8ryVEVdqg6qayVweKTcYbJQS4TBlWVVtbLpDPtzJKLnF5AsKh0wRq1JWdos/wE6SaYdBeD3OsOAwa1G5NO2IwtHireYNzdGHPjphkmXW5mg5JI6NE/StexGSZdTjwwdeFpDZiAXcdW2eKpAJQ0qkUrXE13kfCCp6DcbtQGOKPcELQMH3292+XEsQEZPtAj8e5YECGzsCjJN9/l3qOUfEr/NESViIog3i7QAHPK3UHL4yPa2SGXzx2WkyP7JOIiFelzen3uTr+Xq7dfyt8lLpA3vqliD+GZYGd95Zi8c21EDg3tCiV9NftDTo9NW80OdWiWs8qjobLldbpyfliOH9mbd6Rys2fnFtka65KZ1/OVO5b+NsO47C/9XfmjjEl+bl+gQWtAP0Z5MvcCN065MVkpEBq0BsRNRrm7rTBqbUbdFGQxa9QGRi35Gq7hp8/4ZmUyt8KoDe56b6NUHCuMWptRyiIVxxdo0BoQGP3gK6R2UxZ9gcZY91OM0UnfhPSndlMWw4K+aIyYooQuKE8pt/kEWcnm5MHzL0FZHOzrLlsA3EPJxZtPrXWeh5IxjIJe5UEaPsAstfvhi6+yvJyV2OaodG3qlCVtz2d+yeSzz3Lp1ozcf/JR6GvEhOoeO23LPzg7o2xxzmm3EvG0BrxItcXLHc7b4nUZo22zAIHZtljSwShoi0WyVaurZtO6wyxQz/d9F5tcoVfytG8BGAZJZb3MOpPkWHcFr8BZiR1uMGYDpq5aGXYGa7Y0nu87oTtMwKwiVFsUiEEsYtYNlNuG/30TqfJ0GPyjStYGKv0hxjMvf4i9VZrwD+jmWXrLaAD6AAAAAElFTkSuQmCC') no-repeat 50%;
  background-size: contain;
}
.show-btn{
  text-align: center;
  padding: 10px 0 4px;
}
.show-btn span{
  display: inline-block;
  font-size: 14px;
  color: #333;
}
.show-btn i{
  margin-left: 3px;
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACOklEQVRoQ+3Xz8sPURQG8M8bikTKQpGVBSlJiigWKMpKEgvFws6GHdmwwR9gpRRZIGWBQkn5UUiiSFYWysLChqT8SkeXJO/MnZnvfN++uXcziznnOec5z73PnRkz4mtsxPtXCEy0gkWBokDHCZQt1HGAndOLAp1H2BGgKNBxgJ3T/xsFrmA+NuJt57HVA+zHIWzF7arwXAWeYimeYzU+1PfQOmI7zqfsIHBpEAQW4CFm4x7W43PrFsdPXIubmIIz2F1XI1eBwFmGu5iOy9iC73UFGrxflIY0M5HYhG91+U0IBNY63MBknMKeugKZ7+fgMebhGVbhY05uUwKBuQ0X+PkzdASHcwpVxISi97EEb7C8iVG0IRC97MWJ1FSoEGq0WZNwHRvwHivxsglQWwJR4ygOpnMQ5yHORdN1GrvwJZG40xSgC4GodRY7kyOFM4VD5a4DOJaCd6RtmZv7O64rgdgCVxGOEXdD3BFxV9StP70+VDxelzDe+64EAndqui1XpMMXz9cVDTX2+ipygyAQ+LPwAAvxCkHi3T8Kt/L6YRCIGnPxKD2fYM1fXt7a64dFIOqEAqFEKHIrffx9Tbd3a68fJoGoFdsnviDjbFzEPpzE5rZeP2wCUS9cKdwpXOrXau31E0EgasbEz2FGstiwzmtt7bJPG63qaRoW4wU+Dbr5wBuUjfbRWxZmIZA1ph6DigI9DjcLuiiQNaYeg4oCPQ43C7ookDWmHoOKAj0ONwu6KJA1ph6DRl6BH/qYVzG9LTgmAAAAAElFTkSuQmCC') no-repeat 50%;
  background-size: contain;
}
.show-btn i.rot{
  transform: rotate(180deg)
}

/* 联合会员专区 */
/* 头部 */
.guide-header{
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.guide-header h1{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #000;
}
/* 联合会员内容 */
.guide-content{
  padding-left: 15px;
}
.inner{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
}
.inner-item{
  width: 100px;
  height: 160px;
  margin-right: 10px;
}
.product-price{
  width: 100px;
  height: 94px;
  text-align: center;
  padding-top: 57.5px;
  background-repeat: no-repeat;
  background-size: contain;
}
.pay-symbol{
  font-size: 11px;
  color: #896623;
}
.new-price{
  font-size: 25px;
  color: #896623;
}
.old-price{
  font-size: 10px;
  color: #7e7e7e;
  text-decoration: line-through;
}
.inner-item h3{
  margin: 5px 0;
  text-align: center;
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  color: #4b4b4b;
}
.open{
  display: block;
  margin: 0 auto;
  text-align: center;
  font-family: PingFangSC-Semibold;
  background: #edd797;
  border-radius: 13px;
  width: 70px;
  height: 26px;
  line-height: 26px;
  color: #000;
  font-size: 13px;
}

/* 开通各种 */
.cash-de-mod{
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.flex-item{
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 12.5px 15px;
}
.flex-item::after{
  position: absolute;
  content: '';
  width: 15px;
  height: 15px;
  right: 21px;
  top: 50%;
  transform: translate(-50%);
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAyCAYAAAE4rItEAAAABGdBTUEAALGPC/xhBQAAAwZJREFUWAnVl7+PEkEUx3f5kSOgMbkzFhbGQGNrLGxNrA4IYkGliZWxorDxP7CwMTEUGms7CgsE/ggak6uhsfS00eJMCOv7jryXndmd3RlYLnETmJk37/s+b+fX7gaDweBaYF7tdjsybUG+UfPQGolgnU7nLRtLURTdIfcZDCH+uIG6uhCMe6JGo3GisqHcj9lDyhChKeJLssxns1lbeqiiYsCwJZxSVZykEw644k6lfybtH+qAsnkqSuS5NZ6Mx+OfqIdk/EHlMfJmIzrURZ0XXDdLMI84pNmp2ui8RAe5T06GxhnjveG2lOhITa7ADoKVF4uFGnCa6ERyQb/fvy0ZGRVkh4E/2tplFRh+iabCkBirVS0A1wBafj4BNCHn4xIgVegSIFNoC0Azu0zbJeyvSkw/VeIDF9Rqtb6VCIG5wuIbKSHME3A6InQViNBXwMJKt9udcyN+D2yzlRiAT9T5qNlsXh+NRn9sjqYdJ+sT+l1ZLpcXw+GQF7vpl2hr8+gjLrVarVo8nKtYTQdShCAeAAGz7lnm0VcsQtB8xJrQR5wQuopThS5iqzBPrC0AOMcvTEfaPMMnk8hBaCN83Gw2z7m9Xq9v5QppE3ygtfyCRWEY/p5Op1czU00RfYUIQaxEi+iukLkSL/NE8E0QXUQJoatIE/qIROgrUsJdRBDisIpPLuZJhhwOtksWAK0IZ5EE6/V6N6XhWFEHMs5Ww39Ou+Jx1mFl+Ds3AfyFg9yiKBxcwqOGYPK8MsCnOKbxDuLzVDFiaE3ZGtuT+DP1am8Jmjcltu9QC5ADHxqcAB4abAUeCpwLLBrsDCwK7A3cF7wz0BP8jd5H79HH6fe9gR7gqFwu35DTm4W7lHQ0hqvV6h1psw6N88lkcr7XHQJEby/vqZRnVUrCZzScD/hbfyegCwjPu3q9/pBBnIgXcB+QF7AIkBOwSFAm8BCgVOAhQRrwMkACpH30ir4C3rDBLG3L2/RzbVcI9jrNuWgQMyrVarVJ3zZjGtb7W+MXOhmemRuWBf9d+RdsgVWM0OhuBwAAAABJRU5ErkJggg==') no-repeat 50%;
  background-size: contain;
}
.flex-item .icon{
  display: block;
  width: 28px;
  height: 28px;
  background-size: contain;
}
.line-title{
  flex: auto;
}
.line-title h1{
  margin-left: 12.5px;
  font-size: 15px;
  color: #333;
}
.line-title h1 .vmp_disc{
  font-size: 9px;
  margin-left: 5px;
  padding: 2.5px 4px;
  color: #fff;
  border-radius: 8px;
  background-image: linear-gradient(45deg,#ffb167,#ff2937);
}
.vmp_desc{
  flex: auto;
  margin-left: 8px;
  font-size: 11px;
  color: #999;
}

/* 付费特权 */
.cash-privilege{
  padding: 14px;
}
.cash-privilege h1{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #000;
  padding-left: 15px;
}
.priv-lists{
  width: 100%;
  overflow-x: auto;
  margin: 19px 0 11px;
  padding-left: 15px;
  padding-right: 15px;
}
.priv-inner{
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  height: 162px;
}
.priv-inner li{
  height: 81px;
  width: 81px;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.priv-item{
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: center;
}
.priv-item img{
  width: 36px;
  height: 36px;
}
.priv-item p{
  margin-top: 7.5px;
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #000;
}

/* 协议 */
.cash-protocal{
  padding: 11px 15px;
}
.cash-protocal h1{
  text-align: center;
  font-family: PingFangSC-Regular;
  color: #4d4d4d;
  font-size: 14px;
}
.lists{
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 12.5px -5px 0 -5px;
}
.lists li:nth-child(1){
  width: 50%;
  border-right: 1px solid #d8d8d8;
}
.lists li:nth-child(2){
  width: 50%;
}
.lists-desc{
  font-family: PingFangSC-Regular;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 22.5px;
  display: block;
  width: 100%;
  text-align: center;
}
.lists-desc p{
  text-align: center;
  color: #99752b;
  font-size: 14px;
}

/* 政策、问题 */
.q-lists{
  margin: 0 -15px;
}
.q-lists li {
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
}
.q-item{
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  font-family: PingFangSC-Regular;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  padding: 0 21px;
}
.q-item::after{
  position: absolute;
  content: '';
  width: 15px;
  height: 15px;
  right: 21px;
  top: 50%;
  transform: translate(-50%);
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAyCAYAAAE4rItEAAAABGdBTUEAALGPC/xhBQAAAwZJREFUWAnVl7+PEkEUx3f5kSOgMbkzFhbGQGNrLGxNrA4IYkGliZWxorDxP7CwMTEUGms7CgsE/ggak6uhsfS00eJMCOv7jryXndmd3RlYLnETmJk37/s+b+fX7gaDweBaYF7tdjsybUG+UfPQGolgnU7nLRtLURTdIfcZDCH+uIG6uhCMe6JGo3GisqHcj9lDyhChKeJLssxns1lbeqiiYsCwJZxSVZykEw644k6lfybtH+qAsnkqSuS5NZ6Mx+OfqIdk/EHlMfJmIzrURZ0XXDdLMI84pNmp2ui8RAe5T06GxhnjveG2lOhITa7ADoKVF4uFGnCa6ERyQb/fvy0ZGRVkh4E/2tplFRh+iabCkBirVS0A1wBafj4BNCHn4xIgVegSIFNoC0Azu0zbJeyvSkw/VeIDF9Rqtb6VCIG5wuIbKSHME3A6InQViNBXwMJKt9udcyN+D2yzlRiAT9T5qNlsXh+NRn9sjqYdJ+sT+l1ZLpcXw+GQF7vpl2hr8+gjLrVarVo8nKtYTQdShCAeAAGz7lnm0VcsQtB8xJrQR5wQuopThS5iqzBPrC0AOMcvTEfaPMMnk8hBaCN83Gw2z7m9Xq9v5QppE3ygtfyCRWEY/p5Op1czU00RfYUIQaxEi+iukLkSL/NE8E0QXUQJoatIE/qIROgrUsJdRBDisIpPLuZJhhwOtksWAK0IZ5EE6/V6N6XhWFEHMs5Ww39Ou+Jx1mFl+Ds3AfyFg9yiKBxcwqOGYPK8MsCnOKbxDuLzVDFiaE3ZGtuT+DP1am8Jmjcltu9QC5ADHxqcAB4abAUeCpwLLBrsDCwK7A3cF7wz0BP8jd5H79HH6fe9gR7gqFwu35DTm4W7lHQ0hqvV6h1psw6N88lkcr7XHQJEby/vqZRnVUrCZzScD/hbfyegCwjPu3q9/pBBnIgXcB+QF7AIkBOwSFAm8BCgVOAhQRrwMkACpH30ir4C3rDBLG3L2/RzbVcI9jrNuWgQMyrVarVJ3zZjGtb7W+MXOhmemRuWBf9d+RdsgVWM0OhuBwAAAABJRU5ErkJggg==') no-repeat 50%;
  background-size: contain;
}
.q-item img{
  width: 16px;
  height: 16px;
  margin-right: 2.5px;
}
.q-item p{
  color: #4a4a4a;
  font-size: 16px;
}

/* 确认支付 */
.dredge{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
}
.dredge-btn{
  width: 355px;
  height: 50px;
  line-height: 50px;
  background: #eed398;
  border-radius: 10px;
  text-align: center;
}
.dredge-price{
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #000;
}
</style>
