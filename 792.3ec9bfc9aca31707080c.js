(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[792],{6792:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DetailsModule:()=>Q});var i=n(8583),r=n(4329),a=n(4220),o=n(1601),s=n(7716);let c=(()=>{class t{constructor(t){this.router=t}canActivate(t,e){return!(!t.queryParams.lat||!t.queryParams.lon)||this.router.createUrlTree([""])}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(r.F0))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const d=(0,a.PH)("[Details] Load Weather Details"),l=(0,a.PH)("[Details] Load Weather Details Success",(0,a.Ky)()),u=(0,a.PH)("[Details] Load Weather Details Failed"),p=(0,a.ZF)("details"),g=(0,a.P1)(p,t=>t.entity),h=(0,a.P1)(p,t=>t.loading),y=(0,a.P1)(p,t=>t.error);var f=n(6602),Z=n(605),m=n(1585),v=n(1412),w=n(4663);let x=(()=>{class t{get weather(){return this.dailyWeather.weather}get date(){return v.unix(this.dailyWeather.date).format("DD MMM - dddd")}get icon(){return`http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`}get unitSymbol(){return(0,w._)(this.unit)}unixToHourMinute(t){return v.unix(t).tz(this.timeZone).format("HH:mm")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-daily-weather"]],inputs:{dailyWeather:"dailyWeather",timeZone:"timeZone",unit:"unit"},decls:19,vars:11,consts:[[1,"card"],[1,"badge","badge-secondary"],["alt","icone",3,"src"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"span",1),s._uU(2),s.ALo(3,"uppercase"),s.qZA(),s.TgZ(4,"div"),s.TgZ(5,"div"),s._UZ(6,"img",2),s.qZA(),s.TgZ(7,"div"),s.TgZ(8,"div"),s._uU(9),s.qZA(),s.TgZ(10,"div"),s._uU(11),s.qZA(),s.TgZ(12,"div"),s._uU(13),s.qZA(),s.qZA(),s.TgZ(14,"div"),s.TgZ(15,"div"),s._uU(16),s.qZA(),s.TgZ(17,"div"),s._uU(18),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Oqu(s.lcZ(3,9,e.date)),s.xp6(4),s.Q6J("src",e.icon,s.LSH),s.xp6(3),s.lnq("",e.weather.minTemp," ",e.unitSymbol," - ",e.weather.maxTemp," K"),s.xp6(2),s.hij("Humidade: ",e.weather.humidity," %"),s.xp6(2),s.hij("Velocidade do vento: ",e.weather.wind.speed," m/s"),s.xp6(3),s.hij("Nascer do sol: ",e.unixToHourMinute(e.weather.sunrise),""),s.xp6(2),s.hij("P\xf4r do sol: ",e.unixToHourMinute(e.weather.sunset),""))},pipes:[i.gd],styles:[".card[_ngcontent-%COMP%]{margin-top:8px;padding:8px;display:flex;flex-direction:column}.card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:8px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:8px;align-items:center}.card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}.card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:50px;height:50px}"],changeDetection:0}),t})();function A(t,e){1&t&&s._UZ(0,"app-loader")}function O(t,e){if(1&t&&(s._UZ(0,"app-daily-weather",7),s.ALo(1,"async"),s.ALo(2,"async")),2&t){const t=e.$implicit,n=s.oxw(3);s.Q6J("dailyWeather",t)("timeZone",s.lcZ(1,3,n.details$).city.timeZone)("unit",s.lcZ(2,5,n.unit$))}}function _(t,e){if(1&t&&(s.ynx(0),s.TgZ(1,"h1"),s._uU(2),s.ALo(3,"async"),s.ALo(4,"async"),s.qZA(),s.TgZ(5,"div",4),s._UZ(6,"app-detailed-weather",5),s.ALo(7,"async"),s.ALo(8,"async"),s.qZA(),s.YNc(9,O,3,7,"app-daily-weather",6),s.ALo(10,"async"),s.BQk()),2&t){const t=s.oxw(2);s.xp6(2),s.AsE("",s.lcZ(3,5,t.details$).city.name,", ",s.lcZ(4,7,t.details$).city.country,""),s.xp6(4),s.Q6J("weather",s.lcZ(7,9,t.details$).current)("unit",s.lcZ(8,11,t.unit$)),s.xp6(3),s.Q6J("ngForOf",s.lcZ(10,13,t.details$).daily)}}function P(t,e){1&t&&(s.TgZ(0,"div"),s._uU(1,"Erro"),s.qZA())}function M(t,e){if(1&t&&(s.YNc(0,_,11,15,"ng-container",3),s.ALo(1,"async"),s.YNc(2,P,2,0,"div",3),s.ALo(3,"async")),2&t){const t=s.oxw();s.Q6J("ngIf",!s.lcZ(1,2,t.error$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(3,4,t.error$))}}let q=(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.store.dispatch(d()),this.details$=this.store.pipe((0,a.Ys)(g)),this.loading$=this.store.pipe((0,a.Ys)(h)),this.error$=this.store.pipe((0,a.Ys)(y)),this.unit$=this.store.pipe((0,a.Ys)(f.k))}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a.yh))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-details"]],decls:5,vars:4,consts:[[1,"container-fluid"],[4,"ngIf","ngIfElse"],["notLoading",""],[4,"ngIf"],[1,"card","current-card"],[3,"weather","unit"],[3,"dailyWeather","timeZone","unit",4,"ngFor","ngForOf"],[3,"dailyWeather","timeZone","unit"]],template:function(t,e){if(1&t&&(s.TgZ(0,"div",0),s.YNc(1,A,1,0,"app-loader",1),s.ALo(2,"async"),s.YNc(3,M,4,6,"ng-template",null,2,s.W1O),s.qZA()),2&t){const t=s.MAs(4);s.xp6(1),s.Q6J("ngIf",s.lcZ(2,2,e.loading$))("ngIfElse",t)}},directives:[i.O5,Z.R,m.V,i.sg,x],pipes:[i.Ov],styles:[".container-fluid[_ngcontent-%COMP%]{margin:0 0 16px;padding:32px 0 0}.container-fluid[_ngcontent-%COMP%]   .current-card[_ngcontent-%COMP%]{padding:16px}"]}),t})();const C=(0,a.Lq)({entity:void 0,loading:!1,error:!1},(0,a.on)(d,t=>Object.assign(Object.assign({},t),{entity:void 0,loading:!0,error:!1})),(0,a.on)(l,(t,{entity:e})=>Object.assign(Object.assign({},t),{entity:e,loading:!1})),(0,a.on)(u,t=>Object.assign(Object.assign({},t),{loading:!1,error:!0})));function L(t,e){return C(t,e)}var T=n(9112),$=n(7057),b=n(9773),j=n(5304),W=n(8002);const F=(0,a.ZF)("router"),U=(0,a.P1)(F,t=>t&&t.state||{}),Y=(0,a.P1)(U,t=>t&&t.queryParams||{});var D=n(8983);let H=(()=>{class t{constructor(t,e,n){this.actions$=t,this.store=e,this.weatherService=n,this.loadCurrentWeather$=(0,o.GW)(()=>this.actions$.pipe((0,o.l4)(d),(0,$.M)(this.store.pipe((0,a.Ys)(Y))),(0,b.zg)(([,t])=>(0,T.aj)([this.weatherService.getCityWeatherByCoord(t.lat,t.lon),this.weatherService.getWeatherDetails(t.lat,t.lon)])),(0,j.K)((t,e)=>(this.store.dispatch(u()),e)),(0,W.U)(([t,e])=>{const n=e;return n.city=Object.assign(Object.assign({},t.city),{timeZone:e.city.timeZone}),l({entity:n})})))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(o.eX),s.LFG(a.yh),s.LFG(D.F))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();var k=n(5626);let Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[c],imports:[[i.ez,r.Bz.forChild([{path:"",component:q,canActivate:[c]}]),a.Aw.forFeature("details",L),o.sQ.forFeature([H]),k.K]]}),t})()}}]);