(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{7240:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"q-pa-md"},[a("div",{staticClass:"row q-mb-lg"},[a("q-select",{staticClass:"col-xs-12 q-ma-xs col-md-2",attrs:{color:"green-7",options:t.getMonths(),label:"Miesiąc"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}]),model:{value:t.month,callback:function(s){t.month=s},expression:"month"}}),a("q-select",{staticClass:"col-xs-12 q-ma-xs col-md-2",attrs:{color:"green-7",options:t.getYears(),label:"Rok"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}]),model:{value:t.input.year,callback:function(s){t.$set(t.input,"year",s)},expression:"input.year"}})],1),t.report.Report||!t.input.month&&!t.input.year?t._e():a("p",{staticClass:"text-h5 q-ma-none full-width q-mb-sm"},[a("strong",[t._v("Brak podsumowania")])]),t.report.Report?a("p",{staticClass:"text-h5 q-ma-none full-width q-mb-sm"},[a("strong",[t._v("Podsumowanie")])]):t._e(),t.report.Report?a("div",{staticClass:"row q-mb-lg"},[t.$q.platform.is.mobile?t._e():a("q-card",{staticClass:"col-xs-12 q-mb-md",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-ma-none"},[a("div",{staticClass:"row items-center"},[a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[a("strong",[t._v("Kwota")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[a("strong",[t._v("Litry")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[a("strong",[t._v("Kilometry")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[a("strong",[t._v("Spalanie")])])])])],1),a("q-card",{staticClass:"col-xs-12 q-mb-md",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-ma-none"},[a("div",{staticClass:"row items-center"},[t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Kwota")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[t._v("\n            "+t._s(t.report.Report.totalPrice)+" zł\n          ")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Litry")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[t._v("\n            "+t._s(t.report.Report.amountFuel)+" L\n          ")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Kilometry")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[t._v("\n            "+t._s(t.report.Report.kilometers)+" km\n          ")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Spalanie")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[t._v("\n            "+t._s(t.report.Report.averageFuelConsumption)+" L / 100 km\n          ")])])])],1)],1):t._e(),t.report.Report?a("p",{staticClass:"text-h5 q-ma-none full-width q-mb-sm"},[a("strong",[t._v("Tankowania")])]):t._e(),t.report.Report?a("div",{staticClass:"row"},[t.$q.platform.is.mobile?t._e():a("q-card",{staticClass:"col-xs-12 q-mb-md",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-ma-none"},[a("div",{staticClass:"row items-center"},[a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[a("strong",[t._v("Cena")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[a("strong",[t._v("Ilość")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[a("strong",[t._v("Kilometry")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[a("strong",[t._v("Suma")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[a("strong",[t._v("Spalanie")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[a("strong",[t._v("Data")])]),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"})])])],1),t._l(t.report.Fuelings,(function(s,e){return a("q-card",{key:s.id,staticClass:"col-xs-12 q-mb-md",attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"q-ma-none"},[s.id?a("div",{staticClass:"row items-center"},[t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Cena")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[t._v(t._s(s.price)+" zł / L")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Ilość")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-1"},[t._v(t._s(s.amountFuel)+" L")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Kilometry")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[t._v("\n            "+t._s(s.kilometers)+" km / bak\n          ")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Suma")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[t._v(t._s(s.totalPrice)+" zł")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Spalanie")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[t._v("\n            "+t._s(s.averageFuelConsumption)+" L / 100 km\n          ")]),t.$q.platform.is.mobile?a("p",{staticClass:"q-ma-none q-mt-sm col-xs-12"},[a("strong",[t._v("Data")])]):t._e(),a("p",{staticClass:"q-ma-none col-xs-12 col-md-2"},[t._v(t._s(s.date))])]):a("q-skeleton",{attrs:{type:"rect"}})],1)],1)}))],2):t._e()])},o=[],n=a("ded3"),l=a.n(n),m=a("2f62"),r={data(){return{month:null,input:{month:null,year:null},months:[{name:"Wybierz",num:null},{name:"Styczeń",num:1},{name:"Luty",num:2},{name:"Marzec",num:3},{name:"Kwiecień",num:4},{name:"Maj",num:5},{name:"Czerwiec",num:6},{name:"Lipiec",num:7},{name:"Sierpień",num:8},{name:"Wrzesień",num:9},{name:"Październik",num:10},{name:"Listopad",num:11},{name:"Grudzień",num:12}]}},name:"Report",computed:l()({},Object(m["c"])({car:"car/getCar",report:"car/getReport"})),methods:l()(l()({},Object(m["b"])({fetchReport:"car/fetchReport"})),{},{getMonths(){let t=[];return this.months.forEach((s=>{t.push(s.name)})),t},getYears(){let t=new Date(this.car.dateRegistration).getFullYear(),s=["Wybierz"];for(let a=t;a<=(new Date).getFullYear();a++)s.push(a);return s}}),watch:{month:function(t){this.input.month=this.months.find((s=>s.name===t)).num,this.fetchReport({id:this.$route.params.id,data:{month:this.input.month,year:this.input.year}})},"input.year":function(t){"Wybierz"==t&&(t=null),this.fetchReport({id:this.$route.params.id,data:{month:this.input.month,year:t}})}},created(){}},c=r,i=a("2877"),p=a("9989"),d=a("ddd8"),q=a("0016"),u=a("f09f"),_=a("a370"),C=a("eb85"),v=a("293e"),x=a("eebe"),h=a.n(x),f=Object(i["a"])(c,e,o,!1,null,null,null);s["default"]=f.exports;h()(f,"components",{QPage:p["a"],QSelect:d["a"],QIcon:q["a"],QCard:u["a"],QCardSection:_["a"],QSeparator:C["a"],QSkeleton:v["a"]})}}]);