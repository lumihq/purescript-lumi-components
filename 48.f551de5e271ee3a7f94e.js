(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{iZ0T:function(e,t,a){"use strict";var n,r,i,l,u=a("NL7e"),o=a("jPEo"),d=a("lapV"),s=a("Z/IS"),c=a("CO8c"),f=a("POE8"),p=a("5a5/"),m=a("XSw5"),v=a("ll6l"),y=a("gK7E"),h=a("H2/w"),w=a("W+DG"),b=a("YfR1"),g=a("+rx9"),U=a("a0EN"),A=a("IHIf"),B=a("VWsW"),I=a("2+07"),E=a("+O+U"),F=a("aNND"),x=a("5JIH"),M=a("SZBU"),S=a("6g2T"),N=a("5L+5"),k=a("ErWj"),C=a("+0be"),q=a("pMgY"),O=a("agFx"),R=a("7HZk"),T=a("sfHK"),_=a("avNA"),z=a("O43b"),L=a("ZR40"),H=function(){function e(){}return e.value=new e,e}(),W=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),Z=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),J=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),K=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),P=function(){function e(){}return e.value=new e,e}(),j=function(){function e(e){this.value0=e}return e.create=function(t){return new e(t)},e}(),D=x.runEffectFn2(E.log),V=R.createComponent("UploadExample"),Y=(n=function(e){return function(t){if(t instanceof H)return u.pure(U.applicativeEffect)(g.unit);if(t instanceof W)return e.setState(function(e){return{readonly:t.value0,startUpload:e.startUpload,avatar:e.avatar,files:e.files,images:e.images}});if(t instanceof Z)return e.setStateThen(function(e){return{images:t.value0,files:e.files,avatar:e.avatar,readonly:e.readonly,startUpload:e.startUpload}})(D("value:")(t.value0));if(t instanceof J)return e.setStateThen(function(e){return{images:e.images,files:t.value0,avatar:e.avatar,readonly:e.readonly,startUpload:e.startUpload}})(D("value:")(t.value0));if(t instanceof K)return e.setStateThen(function(e){return{images:e.images,files:e.files,avatar:t.value0,readonly:e.readonly,startUpload:e.startUpload}})(D("value:")(t.value0));if(t instanceof P)return A.launchAff_(h.maybe(v.map(A.functorAff)(j.create)(B.new(g.unit)))(function(e){return v.map(A.functorAff)(m.const(H.value))(B.tryPut(g.unit)(e))})(e.state.startUpload));if(t instanceof j)return e.setState(function(e){return{readonly:e.readonly,startUpload:new h.Just(t.value0),avatar:e.avatar,files:e.files,images:e.images}});throw new Error("Failed pattern match at Lumi.Components.Examples.Upload (line 57, column 17 - line 87, column 52): "+[t.constructor.name])}},r=o.bind(A.bindAff)(I.liftEffect(A.monadEffectAff)(F.randomRange(100)(700)))(function(e){return A.delay(e)}),i=function(e){return function(t){var a=y.round(L.size(t)),n={totalBytes:a,uploadedBytes:0};return o.discard(o.discardUnit)(A.bindAff)(r)(function(){return o.discard(o.discardUnit)(A.bindAff)(d.emit(e)(n))(function(){return o.discard(o.discardUnit)(A.bindAff)(r)(function(){return o.discard(o.discardUnit)(A.bindAff)(d.emit(e)({totalBytes:n.totalBytes,uploadedBytes:f.div(f.euclideanRingInt)(a)(8)}))(function(){return o.discard(o.discardUnit)(A.bindAff)(r)(function(){return o.discard(o.discardUnit)(A.bindAff)(d.emit(e)({totalBytes:n.totalBytes,uploadedBytes:f.div(f.euclideanRingInt)(a)(2)}))(function(){return o.discard(o.discardUnit)(A.bindAff)(r)(function(){return o.discard(o.discardUnit)(A.bindAff)(d.emit(e)({totalBytes:n.totalBytes,uploadedBytes:a}))(function(){return d.close(e)(u.pure(c.applicativeEither)(O.FileId(L.name(t))))})})})})})})})})}},l={images:[],files:[],avatar:h.Nothing.value,readonly:!1,startUpload:h.Nothing.value},R.make()(V)({initialState:l,didMount:function(e){return A.launchAff_(v.map(A.functorAff)(function(t){return n(e)(j.create(t))})(B.empty))},render:function(e){return S.column_([S.column({style:T.css({maxWidth:"50rem",padding:"2rem 0"}),children:[C.labeledField({label:T.text("Readonly"),value:k.input({type:k.switch.type,autoComplete:k.switch.autoComplete,checked:e.state.readonly?k.On.value:k.Off.value,disabled:k.switch.disabled,max:k.switch.max,min:k.switch.min,step:k.switch.step,name:k.switch.name,onBlur:k.switch.onBlur,onChange:z.handler(_.targetChecked)(function(t){return n(e)(W.create(h.fromMaybe(!1)(t)))}),onFocus:k.switch.onFocus,onKeyUp:k.switch.onKeyUp,pattern:k.switch.pattern,placeholder:k.switch.placeholder,readOnly:k.switch.readOnly,required:k.switch.required,size:k.switch.size,style:k.switch.style,testId:k.switch.testId,value:k.switch.value,variant:k.switch.variant}),validationError:h.Nothing.value,required:C.Neither.value,forceTopLabel:!1,style:T.css({})})]}),q.h2_("Images"),N.example(S.column({style:T.css({alignSelf:"stretch"}),children:[O.upload({allowMultiple:O.defaults.allowMultiple,backend:{fetch:function(e){return u.pure(A.applicativeAff)({id:e,name:e,previewUri:h.Nothing.value})},upload:function(e){return d.produceAff(function(t){return i(t)(e)})}},disabled:O.defaults.disabled,name:O.defaults.name,onBlur:O.defaults.onBlur,onChange:function(t){return n(e)(Z.create(t))},onFocus:O.defaults.onFocus,readonly:e.state.readonly,required:O.defaults.required,testId:O.defaults.testId,value:e.state.images,variant:O.Images.value})]})),q.h2_("Files"),N.example(S.column({style:T.css({alignSelf:"stretch"}),children:[O.upload({allowMultiple:O.defaults.allowMultiple,backend:{fetch:function(e){return u.pure(A.applicativeAff)({id:e,name:e,previewUri:h.Nothing.value})},upload:function(t){return d.produceAff(function(a){return o.discard(o.discardUnit)(A.bindAff)(p.foldMap(p.foldableMaybe)(A.monoidAff(w.monoidUnit))(B.read)(e.state.startUpload))(function(){return o.discard(o.discardUnit)(A.bindAff)(v.void(A.functorAff)(p.foldMap(p.foldableMaybe)(A.monoidAff(h.monoidMaybe(b.semigroupUnit)))(B.tryTake)(e.state.startUpload)))(function(){return i(a)(t)})})})}},disabled:O.defaults.disabled,name:O.defaults.name,onBlur:O.defaults.onBlur,onChange:function(t){return n(e)(J.create(t))},onFocus:O.defaults.onFocus,readonly:e.state.readonly,required:O.defaults.required,testId:O.defaults.testId,value:e.state.files,variant:O.Files.value}),M.button({accessibilityLabel:M.primary.accessibilityLabel,color:M.primary.color,disabled:M.primary.disabled,onPress:z.handler_(n(e)(P.value)),size:M.primary.size,style:M.primary.style,testId:M.primary.testId,title:"Upload",type:M.primary.type,loading:M.primary.loading})]})),q.h2_("Avatar"),N.example(S.column({style:T.css({alignSelf:"stretch"}),children:[O.upload({allowMultiple:O.defaults.allowMultiple,backend:{fetch:function(e){return u.pure(A.applicativeAff)({id:e,name:e,previewUri:h.Nothing.value})},upload:function(e){return d.produceAff(function(t){return i(t)(e)})}},disabled:O.defaults.disabled,name:O.defaults.name,onBlur:O.defaults.onBlur,onChange:function(t){return n(e)(K.create(s.head(t)))},onFocus:O.defaults.onFocus,readonly:e.state.readonly,required:O.defaults.required,testId:O.defaults.testId,value:h.maybe([])(u.pure(u.applicativeArray))(e.state.avatar),variant:O.Avatar.value})]}))])}})(g.unit));e.exports={component:V,NoOp:H,SetReadonly:W,ImageEx:Z,FileEx:J,AvatarEx:K,StartUpload:P,InitializeUploadBuffer:j,docs:Y,debug:D}}}]);