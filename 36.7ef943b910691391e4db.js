(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{DNvf:function(e,l,a){"use strict";var t,n,i=a("NL7e"),s=a("jPEo"),o=a("YKFa"),r=a("Z/IS"),c=a("H2/w"),u=a("zipy"),d=a("aa8G"),p=a("qqM+"),m=a("+rx9"),h=a("IHIf"),b=a("6g2T"),x=a("5L+5"),v=a("ErWj"),f=a("+0be"),y=a("/D4l"),S=a("pMgY"),g=a("7HZk"),w=a("sfHK"),N=a("avNA"),C=a("O43b"),F=g.createComponent("SelectExample"),O=(t={disabled:!1,example1:c.Nothing.value,example2:[],example3:c.Nothing.value,example4:[]},n=[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"},{label:"Mercedes",value:"mercedes"},{label:"Audi",value:"audi"},{label:"BMW",value:"bmw"},{label:"Chevy",value:"chevy"},{label:"Ford",value:"ford"},{label:"Tesla",value:"tesla"},{label:"Fiat",value:"fiat"},{label:"Honda",value:"honda"},{label:"Toyota",value:"toyota"},{label:"Porsche",value:"porsche"},{label:"Ferrari",value:"ferrari"},{label:"Subaru",value:"subaru"},{label:"Dodge",value:"dodge"},{label:"Chrysler",value:"chrysler"},{label:"Cadillac",value:"cadillac"}],g.make()(F)({initialState:t,render:function(e){return b.column_([b.column({style:w.css({maxWidth:"50rem",padding:"2rem 0"}),children:[f.labeledField({label:w.text("Disabled"),value:v.input({type:v.switch.type,autoComplete:v.switch.autoComplete,checked:e.state.disabled?v.On.value:v.Off.value,disabled:v.switch.disabled,max:v.switch.max,min:v.switch.min,step:v.switch.step,name:v.switch.name,onBlur:v.switch.onBlur,onChange:C.handler(N.targetChecked)(function(l){return e.setState(function(e){return{disabled:c.fromMaybe(!1)(l),example1:e.example1,example2:e.example2,example3:e.example3,example4:e.example4}})}),onFocus:v.switch.onFocus,onKeyUp:v.switch.onKeyUp,pattern:v.switch.pattern,placeholder:v.switch.placeholder,readOnly:v.switch.readOnly,required:v.switch.required,size:v.switch.size,style:v.switch.style,testId:v.switch.testId,value:v.switch.value,variant:v.switch.variant}),validationError:c.Nothing.value,required:f.Neither.value,forceTopLabel:!1,style:w.css({})})]}),S.h2_("SingleSelect"),x.example(b.column({style:w.css({alignSelf:"stretch"}),children:[y.singleSelect({value:e.state.example1,options:n,optionSort:c.Nothing.value,onChange:function(l){return e.setState(function(e){return{disabled:e.disabled,example1:l,example2:e.example2,example3:e.example3,example4:e.example4}})},className:"",style:w.css({}),searchable:!0,id:"",name:"",noResultsText:"No results",placeholder:"Select a value...",disabled:e.state.disabled,loading:!1,optionRenderer:function(e){return w.text(e.label)},toSelectOption:o.identity(o.categoryFn)})]})),S.h2_("MultiSelect"),x.example(b.column({style:w.css({alignSelf:"stretch"}),children:[y.multiSelect({value:e.state.example2,options:n,optionSort:c.Nothing.value,onChange:function(l){return e.setState(function(e){return{disabled:e.disabled,example1:e.example1,example2:l,example3:e.example3,example4:e.example4}})},className:"",style:w.css({}),searchable:!0,id:"",name:"",noResultsText:"No results",placeholder:"Select a value...",disabled:e.state.disabled,loading:!1,optionRenderer:function(e){return w.text(e.label)},toSelectOption:o.identity(o.categoryFn)})]})),S.h2_("AsyncSingleSelect"),x.example(b.column({style:w.css({alignSelf:"stretch"}),children:[y.asyncSingleSelect({value:e.state.example3,loadOptions:function(e){return s.discard(s.discardUnit)(h.bindAff)(h.delay(200))(function(){return i.pure(h.applicativeAff)(r.filter(function(l){return u.contains(p.Pattern(d.toLower(e)))(d.toLower(l.label))})(n))})},optionSort:c.Nothing.value,onChange:function(l){return e.setState(function(e){return{disabled:e.disabled,example1:e.example1,example2:e.example2,example3:l,example4:e.example4}})},className:"",style:w.css({}),searchable:!0,id:"",name:"",noResultsText:"No results",placeholder:"Select a value...",disabled:e.state.disabled,loading:!1,optionRenderer:function(e){return w.text(e.label)},toSelectOption:o.identity(o.categoryFn)})]})),S.h2_("AsyncMultiSelect"),x.example(b.column({style:w.css({alignSelf:"stretch"}),children:[y.asyncMultiSelect({value:e.state.example4,loadOptions:function(e){return s.discard(s.discardUnit)(h.bindAff)(h.delay(200))(function(){return i.pure(h.applicativeAff)(r.filter(function(l){return u.contains(p.Pattern(d.toLower(e)))(d.toLower(l.label))})(n))})},optionSort:c.Nothing.value,onChange:function(l){return e.setState(function(e){return{disabled:e.disabled,example1:e.example1,example2:e.example2,example3:e.example3,example4:l}})},className:"",style:w.css({}),searchable:!0,id:"",name:"",noResultsText:"No results",placeholder:"Select a value...",disabled:e.state.disabled,loading:!1,optionRenderer:function(e){return w.text(e.label)},toSelectOption:o.identity(o.categoryFn)})]}))])}})(m.unit));e.exports={component:F,docs:O}}}]);