(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fenguanyuanzhang/add-or-update"],{"0d65":function(e,n,t){"use strict";t.r(n);var i=t("3a16"),a=t("6ad0");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("c7ee");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"53efd4b2",null,!1,i["a"],u);n["default"]=s.exports},"180b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,i,a,r,u){try{var o=e[r](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var u=e.apply(n,t);function o(e){r(u,i,a,o,s,"next",e)}function s(e){r(u,i,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("0af6"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{gonghao:"",mima:"",xingming:"",xingbie:"",xueyuan:"",dianhua:"",youxiang:"",zhaopian:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,xueyuanOptions:[],xueyuanIndex:0,user:{},ro:{gonghao:!1,mima:!1,xingming:!1,xingbie:!1,xueyuan:!1,dianhua:!1,youxiang:!1,zhaopian:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var a,r,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getStorageSync("nowTable"),n.next=3,this.$api.session(a);case 3:return r=n.sent,this.user=r.data,this.xingbieOptions="男,女".split(","),n.next=8,this.$api.option("xueyuan","xueyuan",{});case 8:if(r=n.sent,this.xueyuanOptions=r.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=18;break}return this.ruleForm.id=t.id,n.next=16,this.$api.info("fenguanyuanzhang",this.ruleForm.id);case 16:r=n.sent,this.ruleForm=r.data;case 18:if(!t.cross){n.next=57;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 21:if((n.t1=n.t0()).done){n.next=57;break}if(o=n.t1.value,"gonghao"!=o){n.next=27;break}return this.ruleForm.gonghao=u[o],this.ro.gonghao=!0,n.abrupt("continue",21);case 27:if("mima"!=o){n.next=31;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,n.abrupt("continue",21);case 31:if("xingming"!=o){n.next=35;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",21);case 35:if("xingbie"!=o){n.next=39;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,n.abrupt("continue",21);case 39:if("xueyuan"!=o){n.next=43;break}return this.ruleForm.xueyuan=u[o],this.ro.xueyuan=!0,n.abrupt("continue",21);case 43:if("dianhua"!=o){n.next=47;break}return this.ruleForm.dianhua=u[o],this.ro.dianhua=!0,n.abrupt("continue",21);case 47:if("youxiang"!=o){n.next=51;break}return this.ruleForm.youxiang=u[o],this.ro.youxiang=!0,n.abrupt("continue",21);case 51:if("zhaopian"!=o){n.next=55;break}return this.ruleForm.zhaopian=u[o],this.ro.zhaopian=!0,n.abrupt("continue",21);case 55:n.next=21;break;case 57:this.styleChange();case 58:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xueyuanChange:function(e){this.xueyuanIndex=e.target.value,this.ruleForm.xueyuan=this.xueyuanOptions[this.xueyuanIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.gonghao){e.next=3;break}return this.$utils.msg("工号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.dianhua||this.$validate.isMobile(this.ruleForm.dianhua)){e.next=12;break}return this.$utils.msg("电话应输入手机格式"),e.abrupt("return");case 12:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("fenguanyuanzhang",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("fenguanyuanzhang",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},"3a16":function(e,n,t){"use strict";var i,a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}))},"6ad0":function(e,n,t){"use strict";t.r(n);var i=t("180b"),a=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=a.a},c137:function(e,n,t){},c7ee:function(e,n,t){"use strict";var i=t("c137"),a=t.n(i);a.a},fa53:function(e,n,t){"use strict";(function(e){t("0ff7"),t("921b");i(t("66fd"));var n=i(t("0d65"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["fa53","common/runtime","common/vendor"]]]);