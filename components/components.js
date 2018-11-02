Vue.component('uuai-a', {
    props: ['index', 'uuai', 'editindex'],
    template: `<div @click="editthis" :class="myindex==index2?'border':''" style="min-height: 10px">
                  <p style="background: #f4f4f4;line-height: 40px ;">{{uuai2}}</p>
               </div>`,
    data() {
        return {
            myindex: this.index,
            index2: 0,
            uuai2: this.uuai,
        }
    },
    methods: {
        editthis: function () {
            var obj = {
                index: this.index,
                uuai: this.uuai
            }
            this.$emit('editthis', obj)
        }
    },
    watch: {
        uuai: function (n, o) {
            this.uuai2 = n;
        },
        editindex: function (n, o) {
            this.index2 = n;
        }
    }
})

//文本
Vue.component('uuai-text', {
    props: {
        'index': Number,
        'textIndex': Number,
        'textVal': {
            type: String,
            default: '这是文本'
        },
        'isRadio': {
            type: Number
        },
        'bg': {
            type: String,
            default: '#fff',
        },
        'fontColor': {
            type: String,
            default: '#424242',
        },
        'types': Number,
        'activeNames': String
    },
    template: `<div class="template-text" :class="passIndex==curIndex?'border':''" 
                            :style="{backgroundColor:bgColor}" @click="uuaiText">
                 <p v-for="(item,index) in style" v-if="index==textRadio" 
                    :class="[item.seat]" :style="{color:fontC}">{{value}}</p>
               </div>`,
    data() {
        return {
            passIndex: this.index,//添加边框
            curIndex: 0,//当前下表
            value: this.textVal,//当前文本
            textRadio: this.isRadio,//当前文本位置（左中右）

            bgColor: this.bg,//文本背景色
            fontC: this.fontColor,//字体色

            textStyle: 'left', //样式
            style: [
                {seat: 'textLeft'},
                {seat: 'textCenter'},
                {seat: 'textRight'},
            ]
        }
    },
    watch: {
        textIndex: function (n, o) {
            this.curIndex = n
        },
        textVal: function (n, o) {
            this.value = n
        },
        isRadio: function (n, o) {
            this.textRadio = n
        },
        bg: function (n, o) {
            this.bgColor = n
        },
        fontColor: function (n, o) {
            this.fontC = n
        },
    },
    methods: {
        uuaiText: function () {
            var objText = {
                index: this.index,
                textVal: this.textVal,
                isRadio: this.textRadio,
                bg: this.bgColor,
                fontColor: this.fontC,
                types: this.types,
                activeNames: this.activeNames
            }
            this.$emit('edittext', objText)
        }
    }

})

//标题
Vue.component('uuai-title', {
    props: {
        'index': Number,
        'titleIndex': Number,
        'title': {
            type: String
        },
        'title-radio': {
            type: String
        },
        'seeMore': {
            type: String
        },
        'types': Number,
        'activeNames': String

    },
    template: `<div @click="titleChange" :class="passIndex==titleIndex?'border':''">
                  <div v-if="isRadio==0" class="title-wrap" >
                      <img class="title-one-img" src="http://img.zhichiwangluo.com/zcimgdir/album/file_5ab0cc2f31677.png" alt="">
                      <span class="titleText">{{title}}</span>
                      <img class="title-one-img" src="http://img.zhichiwangluo.com/zcimgdir/album/file_5ab0cc2f31677.png" alt="">
                 </div>
                 <div v-if="isRadio==1" class="title-wrap2">
                    <span class="titleBorder" style="background: #409EFF"></span>
                    <span class="titleText">{{title}}</span>
                 </div> 
                 <div v-if="isRadio==2" class="title-wrap2">
                   <img class="title-one-img" src="http://img.weiye.me/zcimgdir/album/file_599feaa74056e.png" alt="">
                   <span class="titleText">{{titleMsg}}</span>
                 </div>  
                 <div v-if="isRadio==3" class="title-wrap3">
                      <span class="titleText2">{{titleMsg}}</span>
                      <span class="seeMore">{{see}}</span>
                 </div>
              </div>`,
    data() {
        return {
            passIndex: this.index,
            curIndex: 0,
            isRadio: this.titleRadio,//样式设置
            titleMsg: this.title,//文本内容
            see: this.seeMore
        }
    },
    watch: {
        titleIndex: function (n, o) {
            this.curIndex = n
        },
        title: function (n, o) {
            this.titleMsg = n
        },
        titleRadio: function (n, o) {
            this.isRadio = n
        },
        seeMore: function (n, o) {
            this.see = n
        }
    },
    methods: {
        titleChange: function () {
            var obj = {
                index: this.index,
                title: this.title,
                titleRadio: this.isRadio,
                seeMore: this.see,
                types: this.types,
                activeNames: this.activeNames
            }
            this.$emit('edittitle', obj)
        }
    }
})


//轮播
Vue.component('uuai-carousel', {
    props: ['index', 'intervalIndex', 'carousel', 'autoplay', 'interval', 'types', 'activeNames'],
    template: `<div class="block" :class="passIndex==curIndex?'border':''" @click="changeCarousel">
				<el-carousel trigger="click" arrow="never" :interval="intervalTime" :autoplay="autoplay"  height="150px">
					<el-carousel-item v-for="item in carousel" >
						<img class="carouselImg" :src="item.url">
					</el-carousel-item>
				</el-carousel>
		      </div>`,
    data() {
        return {
            passIndex: this.index,
            curIndex: 0,
            carouselArr: this.carousel,
            auto: this.autoplay,
            inTime: this.interval,
        }
    },
    computed: { //轮播图时间间隔
        intervalTime: function () {
            return Number(this.inTime) * 1000
        },
    },
    watch: {
        carousel: function (n, o) {
            this.carouselArr = n
        },
        intervalIndex: function (n, o) {
            this.curIndex = n
        },
        autoplay: function () {
            this.auto = this.autoplay
        },
        interval: function () {
            this.inTime = this.interval
        }
    },
    methods: {
        changeCarousel: function () {
            var obj = {
                index: this.index,
                autoplay: this.auto,
                interval: this.inTime,
                carousel: this.carousel,
                types: this.types,
                activeNames: this.activeNames
            }
            this.$emit('editcarousel', obj)
        }
    }
})

//图文导航
Vue.component('uuai-nav', {
    props: ['index', 'navIndex', 'navArr', 'navSrc', 'navText', 'types', 'activeNames'],
    template: `<div>
                    <p v-if="nav.length<=0"></p>
                    <nav v-else  class="nav-home" @click.stop="changeNav" :class="passIndex==curIndex2?'border':''">
                        <ul class="nav-ul">
                             <li class="nav-li" v-for="(item,index) in nav" @click="changeItem(item,index)">
                                <div class="navImg" >
                                  <img :src="item.src" :alt="item.text">
                                </div>
                                <p>{{item.text}}</p>
                             </li>
                      </ul>
                   </nav>
             </div>`,
    data: function () {
        return {
            passIndex: this.index,
            curIndex2: 0,
            curImg: this.navSrc,
            curText: this.navText,
            curIndex: -1,
            nav: this.navArr
        }
    },
    mounted: function () {

    },
    watch: {
        navIndex: function (n, o) {
            this.curIndex2 = n
        },
        navSrc: function (n, o) {
            this.nav[this.curIndex].src = n
        },
        navText: function (n, o) {
            this.nav[this.curIndex].text = n
        }
    },
    methods: {
        changeItem: function (item, index) {
            console.log(item)
            this.curIndex = index;
            vm.$emit('editItem', item, index)
        },
        changeNav: function () {
            var obj = {
                index: this.index,
                types: this.types,
                activeNames: this.activeNames
            }
            this.$emit('editnav', obj)
        }
    },
})

//公告
Vue.component('uuai-notice', {
    props: {
        'index': Number,
        'noticeIndex': Number,
        'notice': {
            type: Array
        },
        'noticeRadio': {
            type: String
        },
        'types': Number,
        'activeNames': this.activeNames
    },
    template: `<div class="noticeWrap" @click.stop="changeNotice" :class="passIndex==curIndex?'border':''">
                 <label class="notice-label">公告</label>
                 <div v-if="isRadio==0" class="notice-box">
                     <ul class="notice-ul" :class="{amin:num}" :style="{ top: -num + 'px'}" >
                        <li class="notice-li" v-for="item in noticeArr">{{item.text}}</li>
                     </ul>
                  </div>
                  <div v-if="isRadio==1" class="notice-box2">
                      <el-carousel trigger="click" arrow="never" indicator-position="none" height="40px">
                          <el-carousel-item v-for="item in notice">
                            <p class="notice-li2">{{item.text}}</p>
                          </el-carousel-item>
                      </el-carousel>
                  </div>
              </div>`,
    data() {
        return {
            passIndex: this.index,
            curIndex: 0,
            num: 0,
            noticeArr: this.notice,
            isRadio: this.noticeRadio
        }
    },
    mounted: function () {
        console.log(this.notice.length)
        this.noticeMove(this.num);
    },
    watch: {
        notice: function (n, o) {
            this.noticeArr = n
        },
        noticeIndex: function (n, o) {
            this.curIndex = n
        },
        noticeRadio: function (n, o) {
            this.isRadio = n
        },
    },
    methods: {
        noticeMove: function (num) {
            // this.notice.push(this.notice[0])
            var len = this.notice.length;
            var _this = this;
            timer = setInterval(function () {
                num++;
                if (num >= len) {
                    num = false;//false为去掉过度效果
                }
                _this.num = num * 40
            }, 2000)
        },
        changeNotice: function () {
            var obj = {
                index: this.index,
                noticeRadio: this.isRadio,
                notice: this.notice,
                types: this.types,
                activeNames: this.activeNames
            }
            this.$emit('editnotice', obj)
        }
    },
    beforeDestroy: function () {
        clearInterval(this.timer)
    }
})

//列表
Vue.component('lists', {
    template: `<div @click='changelists'  :class='passIndex==clickIndex?"border":""'>
					<div v-if="isRadio==0">
	                	<div class="z_lists" v-for='item in listsArray'>
		                	<div class="z_lists_left">
		                		<img src="images/zhichi-default-full.png"/>
		                	</div>
		                	<div class="z_lists_right">
		                		<div class="z_lists_right_name">{{item.name}}</div>
		                		<div class="z_lists_right_price">
		                			<span class="z_lists_right_pricea">￥{{item.pricea}}</span>
		                			<span v-if="isPrice" class="z_lists_right_priceb">￥{{item.priceb}}</span>
		                		</div>
		                		<div class="z_lists_right_sale">
		                			<span>
		                			<span v-show="isSalesVolume" class="z_lists_right_sale_left">销量：{{item.saleNum}}</span>
		                			</span>
		                			<span v-show="isCart" class="z_lists_right_sale_right">
		                				<i class="layui-icon">&#xe657;</i>
		                			</span>
		                		</div>
		                	</div>
	                	</div>
                	</div>
                	<div v-if="isRadio==1" class="x_lists">
						<div class="x_lists_inner" v-for='item in listsArray'>
							<div class="x_lists_inner_img">
								<img src="images/zhichi-default-full.png"/>
							</div>
							<div class="x_lists_inner_name">{{item.name}}</div>
							<div class="x_lists_inner_price">
								<span style="color: #f60;margin-right: 5px;">￥{{item.pricea}}</span>
								<span v-if="isPrice"  style="color: #999;text-decoration: line-through;font-size: 0.12px;">￥{{item.priceb}}</span>
							</div>
							<div class="x_lists_inner_sale" v-if="isSalesVolume">销量：{{item.saleNum}}</div>
						</div>
					</div>
				</div>`,
    props: {
        'lists-radio': {
            type: String
        },
        'lists-index': {
            type: Number
        },
        'index': {
            type: Number
        },
        'listsValue': Boolean,
        'listsPrice': Boolean,
        'listsCart': Boolean,
        'types': this.types,
        'activeNames': this.activeNames
    },

    data() {
        return {
            clickIndex: 0,
            passIndex: this.index,
            isRadio: this.listsRadio,
            isSalesVolume: this.listsValue,
            isPrice: this.listsPrice,
            isCart: this.listsCart,
            listsArray: [{
                name: '商品标题',
                pricea: '100.00',
                priceb: '200.00',
                saleNum: '100'
            }, {
                name: '商品标题',
                pricea: '100.00',
                priceb: '200.00',
                saleNum: '100'
            }]
        }
    },
    mounted: function () {
        console.log(this.listsRadio)
    },
    watch: {
        listsRadio: function (n, o) {
            this.isRadio = n
        },
        listsIndex: function (n, o) {
            this.clickIndex = n
        },
        listsValue: function (n, o) {
            this.isSalesVolume = n
        },
        listsPrice: function (n, o) {
            this.isPrice = n
        },
        listsCart: function (n, o) {
            this.isCart = n
        }
    },
    methods: {
        changelists: function () {
            var obj = {
                index: this.index,
                listsRadio: this.isRadio,
                listsValue: this.isSalesVolume,
                listsPrice: this.isPrice,
                listsCart: this.isCart,
                types: this.types,
                activeNames: this.activeNames
            }
            this.$emit('editlist', obj)
        }
    }
})

//秒杀
Vue.component('seckill', {
    props: {
        'index': Number,
        'seckillIndex': Number,
        'types': Number,
        'seckillTime': Boolean,
        'activeNames': this.activeNames,
    },
    template: `<div :class="passIndex==curIndex?'border':''" @click="changeSeckill">
					<div class="x_seckill" v-for='item in seckillArray'>
						<div class="x_seckill_left">
							<img :src="item.img" />
						</div>
						<div class="x_seckill_middle">
							<div class="x_seckill_middle_name">{{item.name}}</div>
							<div class="x_seckill_middle_pricea">￥{{item.pricea}}</div>
							<div class="x_seckill_middle_priceb">￥{{item.priceb}}</div>
						</div>
						<div class="x_seckill_right">
							<div class="x_seckill_right_a" v-if="isCountDown">
								<span>已结束</span>
								<span class="x_seckill_right_a_time">00</span>
								<span>:</span>
								<span class="x_seckill_right_a_time">00</span>
								<span>:</span>
								<span class="x_seckill_right_a_time">00</span>
							</div>
							<div>
								<el-progress :stroke-width="5" :percentage="item.progress"></el-progress>
							</div>
						</div>
					</div>
				</div>`,
    data() {
        return {
            passIndex: this.index,
            curIndex: 0,
            isCountDown: this.seckillTime,
            seckillArray: [{
                img: 'images/zhichi-default-full.png',
                name: '秒杀商品标题',
                pricea: '100.00',
                priceb: '200.00',
                progress: 50
            }, {
                img: 'images/zhichi-default-full.png',
                name: '秒杀商品标题',
                pricea: '100.00',
                priceb: '200.00',
                progress: 50
            }]
        }
    },
    watch: {
        seckillIndex: function (n, o) {
            this.curIndex = n
        },
        seckillTime: function (n, o) {
            this.isCountDown = n
        }
    },
    methods: {
        changeSeckill: function () {
            var obj = {
                index: this.index,
                types: this.types,
                seckillTime: this.isCountDown,
                activeNames: this.activeNames
            }
            this.$emit('editseckill', obj)
        }
    }
})


//搜索
Vue.component('search', {
    props: {
        'index': Number,
        'searchIndex': Number,
        'activeNames': String,
        'types': Number,
        'placeholder': String
    },
    template: `<div class="x-search" @click.stop="changeSearch" :class="passIndex==curIndex?'border':''">
					<i class="el-icon-search"></i>
					<input disabled="disabled" :placeholder="tip" />
				</div>`,
    data: function () {
        return {
            passIndex: this.index,
            curIndex: 0,
            tip: this.placeholder
        }
    },
    watch: {
        searchIndex: function (n, o) {
            this.curIndex = n
        },
        placeholder: function (n, o) {
            this.tip = n
        }
    },
    methods: {
        changeSearch: function () {
            var obj = {
                index: this.index,
                activeNames: this.activeNames,
                types: this.types,
                placeholder: this.placeholder
            }
            this.$emit('editsearch', obj)
        }
    }

})

//图片列表
Vue.component('uuai-img', {
    props: {
        'index': Number,
        'imgIndex': Number,
        'activeNames': String,
        'types': Number,
        'imgRadio': String,
        'unicoUpimg': String,
        'manyImg': String,
        'imgId': Number,
    },
    template: `<div class="x-picture" @click="changeImg" :class="passIndex==curIndex?'border':''">
                    <div v-if="isRadio==1" class="x-picturea">
                        <img :src="img" />
                    </div>
                    <div v-if="isRadio==2" class="x-pictureb">
                        <div class="x-pictureb-inner" v-for="(item,index) in imgArr">
                            <img :src="item.url"/>
                            <div class="x-pictureb-inner-text">{{item.des}}</div>
                        </div>
                    </div>
                </div>`,
    data: function () {
        return {
            passIndex: this.index,
            curIndex: 0,
            isRadio: this.imgRadio,
            img: './images/zhichi-default-full.png',
            img2: this.manyImg,
            imgArr: [
                {
                    url: './images/zhichi-default-full.png',
                    des: '图片描述'
                }, {
                    url: './images/zhichi-default-full.png',
                    des: '图片描述'
                }, {
                    url: './images/zhichi-default-full.png',
                    des: '图片描述'
                }, {
                    url: './images/zhichi-default-full.png',
                    des: '图片描述'
                }
            ]
        }
    },
    watch: {
        imgIndex: function (n, o) {
            this.curIndex = n
        },
        imgRadio: function (n, o) {
            this.isRadio = n
        },
        unicoUpimg: function (n, o) {
            this.img = n
        },
        manyImg: function (n, o) {
            this.imgArr[this.imgId].url = n
        }
    },
    methods: {
        changeImg: function () {
            var obj = {
                index: this.index,
                activeNames: this.activeNames,
                types: this.types,
                imgRadio: this.isRadio,
                unicoUpimg: this.img,
                imgArr: this.imgArr
            }
            this.$emit('editimg', obj)
        }
    }
})

//优惠券
Vue.component('coupon', {
    props: {
        'index': Number,
        'couponIndex': Number,
        'activeNames': String,
        'types': Number,
        'couponRadio': String,
        'coupon': Array,
        'couponId': Number,
    },
    template: `<div class="x-coupon" @click.stop="changeCoupon" :class="passIndex==curIndex?'border':''">
                    <div v-if="isRadio==1" class="x-coupona">
                        <div class="x-coupona-inner-a">{{editdes.desTitle}}</div>
                        <div class="x-coupona-inner-b">{{editdes.des}}</div>
                    </div>
                    <div v-if="isRadio==2" class="x-couponb">
                        <div class="x-couponb-inner" v-for="item in couponArr">
                            <div class="x-couponb-inner-a">
                                <span style="font-weight: bold;">{{item.faceValue}}元</span>
                                <span>满减券</span>
                            </div>
                            <div class="x-couponb-inner-b">满{{item.full}}减{{item.reduce}}</div>
                            <div class="x-couponb-inner-c">{{item.effective}}</div>
                        </div>
                    </div>
                    <div v-if="isRadio==3" class="x-couponc">
                        <div class="x-couponc-a">{{editdes2.desTitle}}</div>
                        <div class="x-couponc-b">{{editdes2.des}}</div>
                    </div>
                   
                </div>`,
    data: function () {
        return {
            passIndex: this.index,
            curIndex: 0,
            isRadio: this.couponRadio,
            editdes: {
                desTitle: '领取优惠券',
                des: '海量优惠券等你来拿，你还在等什么',
            },
            couponArr: this.coupon,
            editdes2: {
                desTitle: '潮流玩乐 最强用券攻略',
                des: '最高领50元券',
            },
        }
    },
    watch: {
        coupon: function (n) {
            this.couponArr = n
        },
        couponIndex: function (n) {
            this.curIndex = n
        },
        couponRadio: function (n) {
            this.isRadio = n
        }
    },
    methods: {
        changeCoupon: function () {
            var obj = {
                index: this.index,
                types: this.types,
                activeNames: this.activeNames,
                couponRadio: this.isRadio,
                couponArr: this.couponArr
            }
            this.$emit('editcoupon', obj)
        }
    }
})


//店铺信息
Vue.component('shopinfo', {
    props: {
        'index': this.index,
        'infoIndex': this.tempid,
        'types': this.types,
        'activeNames': this.activeNames,
        'infoRadio': this.infoRadio,
        'shopBg': String
    },
    template: `<div @click.stop="changeShopInfo" :class="passIndex==curIndex?'border':''">
                  <div v-if="isRadio==1" class="x-shop" :style="'backgroundImage: url('+shopImg+')'">           
                        <div  class="x-shop-mask" >
                            <div class="x-shop-img">
                                <img :src="shopLogo" />
                            </div>
                            <div class="x-shop-txt">
                                <div class="x-shop-name">{{shopName}}</div>
                                <div class="x-shop-num">
                                    <span>全部商品 999 | 上新 33</span>
                                </div>
                            </div>
                        </div>
                  </div>
                  <div v-if="isRadio==2" class="y-shop">
                    <img class="y-shop-bg" :src="shopImg" />
                    <div class="y-shop-box">
                        <div class="y-shop-box-a">
                            <img src="images/8f9c442de8666f82abaf7dd71574e997.png" />
                        </div>
                        <div class="y-shop-box-b">{{shopName}}</div>
                        <div class="y-shop-box-c">全部商品 999 | 上新 30</div>
                    </div>
                </div>
                </div>`,
    data() {
        return {
            shopImg: this.shopBg,
            isRadio: this.infoRadio,
            passIndex: this.index,
            curIndex: 0,
            shopLogo: './images/8f9c442de8666f82abaf7dd71574e997.png',
            shopName: '店铺名称',
        }
    }
    ,
    watch: {
        infoIndex: function (n) {
            this.curIndex = n
        },
        infoRadio: function (n) {
            this.isRadio = n
        },
        shopBg: function (n) {
            this.shopImg = n
        }
    }
    ,
    methods: {
        changeShopInfo: function () {
            var obj = {
                index: this.index,
                types: this.types,
                activeNames: this.activeNames,
                shopBg: this.shopImg,
                infoRadio: this.isRadio,
            }
            this.$emit('editinfo', obj)
        }
    }
})

//进入店铺信息
Vue.component('entershop', {
    props: {
        'index': Number,
        'entershopIndex': Number,
        'types': Number,
        'activeNames': String,
        'goShop': String,
    },
    template: `<div class="x-enter" @click="changeEntershop" :class="passIndex==curIndex?'border':''">
                    <div style="color: #666;" class="x-enter-inner">
                        <i class="layui-icon">&#xe68e;</i>
                        <span style="margin-left: 3px;">店铺名称</span>
                    </div>
                    <div style="color: #999;" class="x-enter-inner">
                        <span>{{goShop}}</span>
                        <i style="margin-top: 2px;" class="layui-icon">&#xe602;</i>
                    </div>
                </div>`,
    data() {
        return {
            passIndex: this.index,
            curIndex: 0,
            go: this.goShop,
        }
    },
    watch: {
        entershopIndex: function (n) {
            this.curIndex = n
        },
        goShop: function (n) {
            this.go = n
        }
    },
    methods: {
        changeEntershop: function () {
            var obj = {
                index: this.index,
                types: this.types,
                activeNames: this.activeNames,
                goShop: this.goShop
            };
            this.$emit('editentershop', obj)
        }
    }

})

//魔方
Vue.component('photoads', {
    props: {
        'index': Number,
        'photoadsIndex': Number,
        'types': Number,
        'activeNames': String,
        'photoadsRadio': String,
        'photoadsid': Number,
    },
    template: `<div class="photoads" @click="changePhotoads" :class="passIndex==curIndex?'border':''">
					<div v-if="isRadio==1" class="photoads-a">
						<img v-for="(item,i) in photoadsArr" :class="'photoads-a'+(i+1*1)" :src="item.src" />
					</div>
					<div v-if="isRadio==2" class="photoads-d" v-for='item in photoadsd'>
						<img class="photoads-d-img" :src="item.src"/>
						<div class="photoads-d-txt">
							<div class="photoads-d-txt1">{{item.des1}}</div>
							<div class="photoads-d-txt2">{{item.des2}}</div>
						</div>
					</div>
					<div v-if="isRadio==3" class="photoads-c">
						<div class="photoads-c-inner" v-for="item in photoadsArr3">
							<div class="photoads-c-inner-txt">
								<span class="photoads-c-inner-txt1">{{item.des1}}</span>
								<span class="photoads-c-inner-txt2">{{item.des2}}</span>
							</div>
							<img class="photoads-c-inner-img" :src="item.src" />
						</div>
					</div>
				</div>`,
    data() {
        return {
            passIndex: this.index,
            curIndex: 0,
            isRadio: this.photoadsRadio,
            photoadsArr: [
                {
                    src: 'images/file_590ad4864cbd8.png'
                }, {
                    src: 'images/file_590ad49078bd7.png'
                }, {
                    src: 'images/file_590ad48b6e3de.png'
                }
            ],
            photoadsd: [{
                src: 'images/file_5b3f0d9eda1fe.png',
                des1: '基础瘦身训练',
                des2: '60天快速减脂'
            }, {
                src: 'images/file_5b3f0d9ee7311.png',
                des1: '进阶塑性训练',
                des2: '完美雕塑'
            }, {
                src: 'images/file_5b3f0d9fb337c.png',
                des1: '柔性瑜伽',
                des2: '弯曲180'
            }],
            photoadsArr3: [
                {
                    des1: '精品优选',
                    des2: '买一送一',
                    src: './images/file_58feb6503b915.png'
                }, {
                    des1: '时尚美',
                    des2: '物美价廉',
                    src: './images/file_58feb652320b3.png'
                }, {
                    des1: '名牌场',
                    des2: '满90减30',
                    src: './images/file_58feb651bcd63.png'
                }, {
                    des1: '限时抢购',
                    des2: '全场5折起',
                    src: './images/file_58feb6527feb6.png'
                }
            ]

        }
    },
    watch: {
        photoadsIndex: function (n) {
            this.curIndex = n
        },
        photoadsRadio: function (n) {
            this.isRadio = n
        },
        photoadsArr: function (n) {
            this.photoadsArr[this.photoadsid].src = n
        },
        photoadsd: function (n) {
            this.photoadsd[this.photoadsid].src = n
        },
        photoadsArr3: function (n) {
            this.photoadsArr3[this.photoadsid].src = n
        }
    },
    methods: {
        changePhotoads: function () {
            if (this.isRadio == 1) {
                var obj = {
                    index: this.index,
                    types: this.types,
                    activeNames: this.activeNames,
                    photoadsRadio: this.isRadio,
                    photoadsArr: this.photoadsArr
                };
                console.log(obj)
                this.$emit('editphotoads', obj)
            } else if (this.isRadio == 2) {
                var obj = {
                    index: this.index,
                    types: this.types,
                    activeNames: this.activeNames,
                    photoadsRadio: this.isRadio,
                    photoadsArr: this.photoadsd
                };
                this.$emit('editphotoads', obj)
            } else if (this.isRadio == 3) {
                var obj = {
                    index: this.index,
                    types: this.types,
                    activeNames: this.activeNames,
                    photoadsRadio: this.isRadio,
                    photoadsArr: this.photoadsArr3
                };
                this.$emit('editphotoads', obj)
            }

        }
    }
})

//悬浮窗
Vue.component('suspension', {
    props:{
        'radioService':Boolean,
        'radioOrder':Boolean,
        'radioCard':Boolean,
        'radioGotop':Boolean,
        'types':Number,
        'activeNames':String,
        'index':Number,
        'suspensionIndex':Number
    } ,
    template: `<div class="x-suspend" @click.stop="changeSuspension" :class="passIndex==curIndex?'border':''">
                    <div v-if="isService" class="x-suspend-inner">
                        <img src="images/suspension-customer.png"/>
                    </div>
                    <div v-if="isOrder" class="x-suspend-inner">
                        <img src="images/suspension-myOrder.png"/>
                    </div>
                    <div v-if="isCard" class="x-suspend-inner">
                        <img src="images/suspension-shopping-cart.png"/>
                    </div>
                    <div v-if="isGotop" class="x-suspend-inner">
                        <img src="images/suspension-top.png"/>
                    </div>
                </div>`,
    data(){
        return {
            passIndex:this.index,
            curIndex:0,
            isService:this.radioService,
            isOrder:this.radioOrder,
            isCard:this.radioCard,
            isGotop:this.radioGotop,
        }
    },
    watch:{
        suspensionIndex:function (n) {
            this.curIndex = n
        },
        radioService:function (n) {
            this.isService = n
        },
        radioOrder:function (n) {
            this.isOrder = n
        },
        radioCard:function (n) {
            this.isCard = n
        },
        radioGotop:function (n) {
            this.isGotop = n
        },
    },
    methods:{
        changeSuspension:function () {
            var obj = {
                index:this.index,
                types:this.types,
                activeNames:this.activeNames,
                radioService:this.radioService,
                radioOrder: this.radioOrder,
                radioCard:this.radioCard,
                radioGotop:this.radioGotop,
            }
            this.$emit('editsuspension',obj)
        }
    }

})


