//空实例
var vm = new Vue()

var app = new Vue({
    el: "#app",
    data: {
        message: '我是文本',
        statuea: 0,
        statueb: false,
        //***
        types: 0,//功能类型
        activeNames: '0',//折叠面板
        tempid: 0,
        //轮播'
        auto: true,//是否自动轮播
        interval: 4,//轮播图时间间隔
        fileList2: [
            {url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15362287895b90fdb51283c.png"},
            {url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15393828885bc11e6866491.jpg"},
            {url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15362286845b90fd4c44275.jpg"},
        ],
        // 导航***
        nav: [
            {
                id: 0,
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcfeebdab.png",
                text: "美事",
            }, {
                id: 1,
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcff96e45.png",
                text: "超市",
            }, {
                id: 2,
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcffecbdd.png",
                text: "生鲜",
            }, {
                id: 3,
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bd00a4616.png",
                text: "下午茶",
            }, {
                id: 4,
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bd0043f81.png",
                text: "专达",
            }, {
                id: 5,
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bd010bf77.png",
                text: "家常菜",
            },
        ],
        imageUrl: null,
        navText: null,
        loading: false,
        //navIndex: 0,
        delIndex: 0,
        //公告
        notice: [
            {text: '不在沉默中死亡,就在沉默中爆发'},
        ],
        noticeRadio: '1',
        noticeNews: null,
        // 标题组件
        titleRadio: '0',//类型
        title: '猜你喜欢',
        //titleIndex: 0,
        seeMore: '更多',
        //文本
        textVal: '哈喽哈喽',//文本
        //textIndex: 0,//当前下标
        textRadio: 0,//位置（左中右）
        textBg: '#f1f1f1',//背景
        fontColor: '#424242',//字体
        //uuai2
        textVal2: '这是文本',
        editindex: 0,
        //列表
        listsRadio: '0',
        listsValue: true,  //显示销量
        listsPrice: true,  //显示虚拟价格
        listsCart: true,  //显示购物车按钮
        //秒杀
        seckillTime: true,
        //搜索
        placeholder: '请输入搜索内容',
        //图片列表
        imgRadio: '1',
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
            }
        ],
        unicoImg: './images/zhichi-default-full.png',
        unicoUpimg: null,
        manyImg: null,
        imgId: null,
        imgDes: null,
        activeName2: '1',
        loading2: false,
        //优惠券
        couponRadio: '1',
        coupon: null,
        couponArr: [
            {
                faceValue: 100,
                full: 200,
                reduce: 50,
                effective: '2018.01.01-2020.01.01'
            }, {
                faceValue: 200,
                full: 400,
                reduce: 100,
                effective: '2018.01.01-2020.01.01'
            }
        ],
        couponId: null,
        //店铺信息
        shopBg: './images/f2a0a05d5a801cb51ecbc0710e6947fb.png',
        infoRadio: '1',
        //进入店铺
        goShop: '进入店铺',
        //魔方
        photoadsRadio: '1',
        photoadsArr: [
            {
                src: 'images/file_590ad4864cbd8.png'
            }, {
                src: 'images/file_590ad49078bd7.png'
            }, {
                src: 'images/file_590ad48b6e3de.png'
            }
        ],
        photoadsid: 0,
        //悬浮窗
        radioService: true,
        radioOrder: true,
        radioCard: true,
        radioGotop: true,
        isSuspension:true,
        //页面组件
        temparr: [],
    },

    mounted: function () {
        vm.$on('editItem', function (item, i) {//图文导航
            console.log(item, i)
            this.imageUrl = item.src;
            this.navText = item.text;
            this.delIndex = i;
        }.bind(this));
    },
    methods: {
        //轮播
        addSwiper: function (data) {
            this.temparr.push({
                name: 'uuai-carousel',
                carousel: [
                    {url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15362287895b90fdb51283c.png"},
                    {url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15393828885bc11e6866491.jpg"},
                    {url: "https://img.zhichiwangluo.com/zcimgdir/thumb/t_15362286845b90fd4c44275.jpg"},
                ],//轮播数据
                auto: true,//是否自动轮播
                interval: 4,//轮播图时间间隔
            })
            this.types = data;
            this.activeNames = '3';

        },
        changeCarousel: function (obj) {
            console.log(obj)
            this.tempid = obj.index;
            this.auto = obj.autoplay;
            this.interval = obj.interval;
            this.fileList2 = obj.carousel;
            this.types = obj.types;
            this.activeNames = obj.activeNames
        },
        uploadImg: function (response, file, fileList) {//上传
            console.log(file, fileList);
            this.fileList2.push(file)
        },
        handleRemove(file, fileList) {//删除
            //console.log(file, fileList);
            this.swiperRemove(fileList);
        },
        swiperRemove: function (fileList) {
            this.fileList2 = fileList
        },
        handlePreview(file) {
            console.log(file);
        },
        delCarousel: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //图文导航
        addNav: function (data) {
            this.temparr.push({
                name: 'uuai-nav',
                nav: [
                    {
                        id: 0,
                        src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcfeebdab.png",
                        text: "美事",
                    }, {
                        id: 1,
                        src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcff96e45.png",
                        text: "超市",
                    }, {
                        id: 2,
                        src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcffecbdd.png",
                        text: "生鲜",
                    }, {
                        id: 3,
                        src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bd00a4616.png",
                        text: "下午茶",
                    }, {
                        id: 4,
                        src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bd0043f81.png",
                        text: "专达",
                    }, {
                        id: 5,
                        src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bd010bf77.png",
                        text: "家常菜",
                    },
                ],
                imageUrl: null,
                navText: null,
            })
            this.types = data;

            this.activeNames = '4';
        },
        changeNav: function (obj) {
            console.log(obj)
            this.tempid = obj.index;
            this.types = obj.types;
            this.activeNames = obj.activeNames
        },
        delNav: function () {//删除
            this.temparr[this.tempid].nav.splice(this.delIndex, 1);
            //this.imageUrl = '';
            //this.navText = '';
        },
        categoryAdd: function () {
            this.temparr[this.tempid].nav.push({
                src: "http://img.zhichiwangluo.com/zcimgdir/album/file_5b45bcfeebdab.png",
                text: "美事",
            });
        },
        //检测上传图片
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            this.loading = false
        },
        beforeAvatarUpload(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        handleprogress: function (file) {
            this.loading = true
        },
        //标题
        addTitle: function (data) {
            this.temparr.push({
                name: 'uuai-title',
                title: '猜你喜欢',
                titleRadio: '0',
                seeMore: '更多',
            })
            this.types = data;
            this.activeNames = '2';
        },
        titleChange: function (obj) {
            console.log(obj);
            this.tempid = obj.index;
            this.title = obj.title;
            this.titleRadio = obj.titleRadio;
            this.seeMore = obj.seeMore;
            this.types = obj.types;
            this.activeNames = obj.activeNames
        },
        delTitle: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //公告
        addNotice: function (data) {
            this.temparr.push({
                name: 'uuai-notice',
                notice: [
                    {text: '不在沉默中死亡,就在沉默中爆发'},
                ],
                noticeRadio: '1',
            })
            this.types = data;
            this.activeNames = '5';
        },
        changeNotice: function (obj) {
            console.log(obj);
            this.tempid = obj.index;
            this.noticeRadio = obj.noticeRadio;
            this.types = obj.types;
            this.notice = obj.notice;
            this.activeNames = obj.activeNames
        },
        newNotice: function () {

            this.temparr[this.tempid].notice.push({
                text: "这是公告",
            })
        },
        delNotice: function (key) {
            console.log('公告')
            this.temparr[this.tempid].notice.splice(key, 1);
            this.notice.splice(key, 1);
        },
        changeNewNotice: function (e, key) {
            console.log(e, key);
            this.temparr[this.tempid].notice[key]['text'] = e;
        },
        //文本
        addText: function (data) {
            this.temparr.push({
                name: 'uuai-text',
                textVal: '哈喽哈喽2',
                textRadio: 0,
                textBg: '#f1f1f1',
                fontColor: '#424242',
            })
            this.types = data;
            this.activeNames = '1';
        },
        changeText: function (objText) {
            console.log(objText)
            this.textVal = objText.textVal;
            this.tempid = objText.index;
            this.textRadio = objText.isRadio;
            this.textBg = objText.bg;
            this.fontColor = objText.fontColor;
            this.types = objText.types;
            this.activeNames = objText.activeNames
        },
        delText: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //列表
        addlists: function (data) {
            this.temparr.push({
                name: 'lists',
                listsRadio: '0',
                listsValue: true,
                listsPrice: true,
                listsCart: true,
            })
            this.types = data;
            this.activeNames = '6';
        },
        changeIist: function (obj) {
            console.log(obj)
            this.tempid = obj.index;
            this.listsRadio = obj.listsRadio;
            this.listsValue = obj.listsValue;
            this.listsPrice = obj.listsPrice;
            this.listsCart = obj.listsCart;
            this.types = obj.types;
            this.activeNames = obj.activeNames;
        },
        delList: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //秒杀
        addSeckill: function (data) {
            this.temparr.push({
                name: 'seckill',
                seckillTime: true,
            })
            this.types = data;
            this.activeNames = '7';
        },
        changeSeckill: function (obj) {
            this.tempid = obj.index;
            this.types = obj.types;
            this.seckillTime = obj.seckillTime;
            this.activeNames = obj.activeNames
        },
        delSeckill: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //搜索
        addSearch: function (data) {
            this.temparr.push({
                name: 'search',
                placeholder: '请输入搜索内容',
            })
            this.types = data;
            this.activeNames = '8';
        },
        changeSearch: function (obj) {
            console.log(obj)
            this.tempid = obj.index;
            this.types = obj.types;
            this.activeNames = obj.activeNames;
            this.placeholder = obj.placeholder;
        },
        delSearch: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //图片列表
        addImgs: function (data) {
            this.temparr.push({
                name: 'uuai-img',
                imgRadio: '1',
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
                ],
                manyImg: null,
                unicoUpimg: null,
                imgId: null,
                imgDes: null,
                unicoImg: './images/zhichi-default-full.png'
            })
            this.types = data;
            this.activeNames = '9'
        },
        changeImg: function (obj) {
            console.log(obj);
            this.tempid = obj.index;
            this.activeNames = obj.activeNames;
            this.types = obj.types;
            this.imgRadio = obj.imgRadio;
            this.unicoUpimg = obj.unicoUpimg;
            this.imgArr = obj.imgArr;
        },
        delImgs: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //上传
        handleAvatarSuccess2(res, file) {
            this.unicoUpimg = URL.createObjectURL(file.raw);
            this.loading2 = false
        },
        beforeAvatarUpload2(file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        handleprogress2: function (file) {
            this.loading2 = true
        },
        handleAvatarSuccess3(res, file) {
            this.imgArr[this.imgId].url = URL.createObjectURL(file.raw);
        },
        //获取index
        getIndex: function (val) {
            this.imgId = val;
            console.log(val)
        },
        //修改描述
        changeDes: function (e, i) {
            this.temparr[this.tempid].imgArr[i]['des'] = e;
        },
        //    优惠券
        addCoupon: function () {
            this.temparr.push({
                name: "coupon",
                couponRadio: '1',
                coupon: [
                    {
                        faceValue: 100,
                        full: 200,
                        reduce: 50,
                        effective: '2018.01.01-2020.01.01'
                    }, {
                        faceValue: 200,
                        full: 400,
                        reduce: 100,
                        effective: '2018.01.01-2020.01.01'
                    }, {
                        faceValue: 200,
                        full: 400,
                        reduce: 100,
                        effective: '2018.01.01-2020.01.01'
                    }
                ],
                couponId: null,
            })
        },
        changeCoupon: function (obj) {
            console.log(obj);
            this.tempid = obj.index;
            this.activeNames = obj.activeNames;
            this.types = obj.types;
            this.couponRadio = obj.couponRadio;
            this.couponArr = obj.couponArr;
        },
        changefaceValue: function (e, i) {//面值
            this.temparr[this.tempid].coupon[i]['faceValue'] = e
        },
        changefull: function (e, i) {//满减
            this.temparr[this.tempid].coupon[i]['full'] = e
        },
        changereduce: function (e, i) {//满减
            this.temparr[this.tempid].coupon[i]['reduce'] = e
        },
        changeeffective: function (e, i) {//有效期
            this.temparr[this.tempid].coupon[i]['effective'] = e
        },
        delCoupon: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //店铺信息
        addShopInfo: function (data) {
            this.temparr.push({
                name: 'shopinfo',
                shopBg: './images/f2a0a05d5a801cb51ecbc0710e6947fb.png',
                infoRadio: '1',
            });
            this.types = data;
            this.activeNames = '11';
        },
        changeShopInfo: function (obj) {
            console.log(obj)
            this.tempid = obj.index;
            this.types = obj.types;
            this.activeNames = obj.activeNames;
            this.shopBg = obj.shopBg;
            this.infoRadio = obj.infoRadio
        },
        shopInfoSuccess: function (res, file) {
            this.shopBg = URL.createObjectURL(file.raw);
        },
        shopInfoUpload: function (file) {
            console.log(file)
            var type = 'image/png' || 'image/jpeg';
            console.log(type)
            const isType = file.type == type;
            const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isType) {
            //     this.$message.error('上传头像图片只能是 JPG 格式!');
            // }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        delShopInfo: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //进入店铺
        addEnterShop: function (data) {
            this.temparr.push({
                name: 'entershop',
                goShop: '进入店铺',
            })
            this.types = data;
            this.activeNames = '12';
        },
        changeEntershop: function (obj) {
            this.tempid = obj.index;
            this.activeNames = obj.activeNames;
            this.types = obj.types;
            this.goShop = obj.goShop;
        },
        delEnterShop: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //魔方
        addPhotoads: function (data) {
            this.temparr.push({
                name: 'photoads',
                photoadsRadio: '1',
                photoadsArr: [
                    {
                        src: 'images/file_590ad4864cbd8.png'
                    }, {
                        src: 'images/file_590ad49078bd7.png'
                    }, {
                        src: 'images/file_590ad48b6e3de.png'
                    }
                ],
            });
            this.types = data;
            this.activeNames = '13'
        },
        changePhotoads: function (obj) {
            console.log(obj);
            this.tempid = obj.index;
            this.types = obj.types;
            this.activeNames = obj.activeNames;
            this.photoadsRadio = obj.photoadsRadio;
            this.photoadsArr = obj.photoadsArr
        },
        changePhotoadsRadio: function (val) {
            console.log(val);
        },
        photoadsSuccess: function (res, file) {
            this.photoadsArr[this.photoadsid].src = URL.createObjectURL(file.raw);
        },
        photoadsUpload: function (file) {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isLt2M;
        },
        getPhotoadsIndex: function (val) {
            console.log(val);
            this.photoadsid = val
        },
        changePhotoadsDes1: function (e, i) {
            this.temparr[this.tempid].photoadsArr[i]['text'] = e;
        },
        changePhotoadsDes2: function (e, i) {
            this.temparr[this.tempid].photoadsArr[i]['text'] = e;
        },
        delPhotoads: function () {
            this.temparr.splice(this.tempid, 1)
        },
        //悬浮窗
        addSuspension: function (data) {
            this.temparr.push({
                name: 'suspension',
                radioService: true,
                radioOrder: true,
                radioCard: true,
                radioGotop: true,
            })
            this.types = data;
            this.activeNames = '14';
            this.isSuspension = false;
        },
        changeSuspension: function (obj) {
            console.log(obj)
            this.tempid = obj.index;
            this.types = obj.types;
            this.activeNames = obj.activeNames;
            this.radioService = obj.radioService;
            this.radioOrder = obj.radioOrder;
            this.radioCard = obj.radioCard;
            this.radioGotop = obj.radioGotop;
        },
        delSuspension:function () {
            this.temparr.splice(this.tempid,1);
            this.isSuspension = true;
        }
    },
    watch: {
        //悬浮窗
        radioService: function (n) {
            if (n == this.temparr[this.tempid].radioService) {
                return;
            } else {
                this.temparr[this.tempid].radioService = n;
            }
        }, radioOrder: function (n) {
            if (n == this.temparr[this.tempid].radioOrder) {
                return;
            } else {
                this.temparr[this.tempid].radioOrder = n;
            }
        }, radioCard: function (n) {
            if (n == this.temparr[this.tempid].radioCard) {
                return;
            } else {
                this.temparr[this.tempid].radioCard = n;
            }
        }, radioGotop: function (n) {
            if (n == this.temparr[this.tempid].radioGotop) {
                return;
            } else {
                this.temparr[this.tempid].radioGotop = n;
            }
        },
        //魔方
        photoadsRadio: function (n) {
            if (n == this.temparr[this.tempid].photoadsRadio) {
                return;
            } else {
                this.temparr[this.tempid].photoadsRadio = n;
            }
        },
        //进入店铺
        goShop: function (n) {
            if (n == this.temparr[this.tempid].goShop) {
                return;
            } else {
                this.temparr[this.tempid].goShop = n;
            }
        },
        //店铺信息
        shopBg: function (n) {
            if (n == this.temparr[this.tempid].shopBg) {
                return;
            } else {
                this.temparr[this.tempid].shopBg = n;
            }
        },
        infoRadio: function (n) {
            if (n == this.temparr[this.tempid].infoRadio) {
                return;
            } else {
                this.temparr[this.tempid].infoRadio = n;
            }
        },
        //优惠券
        couponRadio: function (n) {
            if (n == this.temparr[this.tempid].couponRadio) {
                return;
            } else {
                this.temparr[this.tempid].couponRadio = n;
            }
        },
        //图片列表
        imgArr: function (n, o) {
            if (n == this.temparr[this.tempid].imgArr) {
                return;
            } else {
                this.temparr[this.tempid].imgArr = n;
            }
        },
        manyImg: function (n, o) {
            if (n == this.temparr[this.tempid].manyImg) {
                return;
            } else {
                this.temparr[this.tempid].manyImg = n;
            }
        },
        unicoUpimg: function (n, o) {
            if (n == this.temparr[this.tempid].unicoUpimg) {
                return;
            } else {
                this.temparr[this.tempid].unicoUpimg = n;
            }
        },
        imgRadio: function (n, o) {
            if (n == this.temparr[this.tempid].imgRadio) {
                return;
            } else {
                this.temparr[this.tempid].imgRadio = n;
            }
        },
        //搜索
        placeholder: function (n, o) {
            if (n == this.temparr[this.tempid].placeholder) {
                return;
            } else {
                this.temparr[this.tempid].placeholder = n;
            }
        },
        //秒杀
        seckillTime: function (n, o) {
            if (n == this.temparr[this.tempid].seckillTime) {
                return;
            } else {
                this.temparr[this.tempid].seckillTime = n;
            }
        },
        //列表
        listsRadio: function (n, o) {
            if (n == this.temparr[this.tempid].listsRadio) {
                return;
            } else {
                this.temparr[this.tempid].listsRadio = n;
            }
        }, listsValue: function (n, o) {
            if (n == this.temparr[this.tempid].listsValue) {
                return;
            } else {
                this.temparr[this.tempid].listsValue = n;
            }
        }, listsPrice: function (n, o) {
            if (n == this.temparr[this.tempid].listsPrice) {
                return;
            } else {
                this.temparr[this.tempid].listsPrice = n;
            }
        }, listsCart: function (n, o) {
            if (n == this.temparr[this.tempid].listsCart) {
                return;
            } else {
                this.temparr[this.tempid].listsCart = n;
            }
        },
        //图文导航
        imageUrl: function (n, o) {
            if (n == this.temparr[this.tempid].imageUrl) {
                return
            } else {
                this.temparr[this.tempid].imageUrl = n
            }
        },
        navText: function (n, o) {
            if (n == this.temparr[this.tempid].navText) {
                return
            } else {
                this.temparr[this.tempid].navText = n
            }
        },
        //公告
        noticeRadio: function (n, o) {
            if (n == this.temparr[this.tempid].noticeRadio) {
                return
            } else {
                this.temparr[this.tempid].noticeRadio = n
            }
        },
        //标题检测
        titleRadio: function (n, o) {
            if (n == this.temparr[this.tempid].titleRadio) {
                return
            } else {
                this.temparr[this.tempid].titleRadio = n
            }
        },
        title: function (n, o) {
            if (n == this.temparr[this.tempid].title) {
                return
            } else {
                this.temparr[this.tempid].title = n
            }
        },
        seeMore: function (n, o) {
            if (n == this.temparr[this.tempid].seeMore) {
                return
            } else {
                this.temparr[this.tempid].seeMore = n
            }
        },
        //轮播检测
        fileList2: function (n, o) {
            if (n == this.temparr[this.tempid].carousel) {
                return;
            } else {
                this.temparr[this.tempid].carousel = n
            }
        },
        interval: function (n, o) {
            if (n == this.temparr[this.tempid].interval) {
                return;
            } else {
                this.temparr[this.tempid].interval = n
            }
        },
        auto: function (n, o) {
            if (n == this.temparr[this.tempid].auto) {
                return;
            } else {
                this.temparr[this.tempid].auto = n
            }
        },
        //文本检测
        textVal: function (n, o) {
            if (n == this.temparr[this.tempid].textVal) {
                return;
            } else {
                this.temparr[this.tempid].textVal = n;
            }
        },
        textRadio: function (n, o) {
            if (n == this.temparr[this.tempid].textRadio) {
                return;
            } else {
                this.temparr[this.tempid].textRadio = n;
            }
        },
        textBg: function (n, o) {
            if (n == this.temparr[this.tempid].textBg) {
                return;
            } else {
                this.temparr[this.tempid].textBg = n;
            }
        },
        fontColor: function (n, o) {
            if (n == this.temparr[this.tempid].fontColor) {
                return;
            } else {
                this.temparr[this.tempid].fontColor = n;
            }
        },
    }
})


layui.use(['colorpicker', 'layer', 'element', 'form'], function () {
    var layer = layui.layer;
    var colorpicker = layui.colorpicker;
    var element = layui.element;
    var form = layui.form;
    //颜色选择器
    colorpicker.render({
        elem: '#right-content-b-edit-color', //绑定元素
        color: '#333', // 设置默认色
        size: 'xs', // 小号下拉框
        predefine: true // 开启预定义颜色
    });

    // 设置点击事件
    $('#setClick').click(function () {
        layer.open({
            type: 1,
            title: '选择绑定事件',
            content: $('.setClickbox'), //这里content是一个DOM，注意：该元素要存放在body最外层，否则可能被其它的相对元素所影响
            area: ['800px', '500px'],
            btn: ['确定', '关闭'],
            btnAlign: 'c'
        });
    })

});


$(function () {
    // 左侧页面管理-组件库切换
    $('.operate-navs-inner').click(function () {
        $('.operate-navs-inner').removeClass('cheaka');
        $(this).addClass('cheaka');
        var index = $(this).index();
        console.log(index);
        if (index == 1) {
            $('.nav-component').show();
        } else {
            $('.nav-component').hide();
        }
    })

    // 添加组件点击
    $('.phone-inner-add').click(function () {
        $('.nav-component').addClass('animated shake');
        setTimeout(function () {
            $('.nav-component').removeClass('animated shake');
        }, 1000)
    })



});

