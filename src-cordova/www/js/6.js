(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md"},[a("div",{staticClass:"row"},t._l(t.cars,(function(e){return a("q-card",{key:e.id,staticClass:"col-xs-12 col-sm-3",class:{"q-mb-md":t.$q.platform.is.mobile,"q-ma-xs":!t.$q.platform.is.mobile},attrs:{flat:"",bordered:""}},[a("q-card-section",[e.id?a("div",{staticClass:"text-caption"},[a("p",{staticClass:"text-h6 q-ma-none"},[a("strong",[t._v(" "+t._s(e.brand)+" "+t._s(e.model)+" ")])])]):a("q-skeleton",{attrs:{type:"rect"}})],1),a("q-separator"),a("q-card-section",[e.id?a("div",[a("div",{staticClass:"row justify-between q-mt-sm q-mb-sm"},[a("p",{staticClass:"q-ma-none"},[t._v("Przebieg")]),a("p",{staticClass:"q-ma-none"},[a("strong",[t._v(t._s(e.milage)+" km")])])]),a("q-separator"),a("div",{staticClass:"row justify-between q-mt-sm q-mb-sm"},[a("p",{staticClass:"q-ma-none"},[t._v("Średnie spalanie")]),a("p",{staticClass:"q-ma-none"},[e.averageFuelConsumption?a("strong",[t._v(t._s(e.averageFuelConsumption)+" L / 100km")]):a("strong",[t._v("-")])])]),a("q-separator"),a("div",{staticClass:"row justify-between q-mt-sm q-mb-sm"},[a("p",{staticClass:"q-ma-none"},[t._v("Data rejestracji")]),a("p",{staticClass:"q-ma-none"},[a("strong",[t._v(t._s(e.dateRegistration))])])]),a("div",{staticClass:"row justify-end q-mt-md"},[a("q-btn",{attrs:{to:"/fuel/"+e.id,color:"green-7 q-mr-xs","icon-right":"chevron_right",label:"Więcej"}}),a("q-btn",{attrs:{color:"red-7 ",icon:"delete"},on:{click:function(a){return t.dalete(e.id)}}})],1)],1):a("q-skeleton",{attrs:{type:"rect"}})],1)],1)})),1)])},r=[],n=a("ded3"),i=a.n(n),o=a("2f62"),c={data(){return{}},name:"PageIndex",computed:i()({},Object(o["c"])({cars:"car/getCars"})),methods:i()({},Object(o["b"])({fetchCars:"car/fetchCars",dalete:"car/dalete"})),created(){this.fetchCars()}},l=c,d=a("2877"),m=a("9989"),q=a("f09f"),p=a("a370"),b=a("293e"),u=a("eb85"),C=a("9c40"),f=a("eebe"),v=a.n(f),g=Object(d["a"])(l,s,r,!1,null,null,null);e["default"]=g.exports;v()(g,"components",{QPage:m["a"],QCard:q["a"],QCardSection:p["a"],QSkeleton:b["a"],QSeparator:u["a"],QBtn:C["a"]})}}]);