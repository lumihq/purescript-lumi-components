(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bhz5:function(n,e,r){"use strict";var t=r("5Iaq"),u=r("vKjV"),o=r("/Wew"),i=r("Bq2g"),a=r("H9Gh"),l=r("BbpU"),c=function(n){return n},f=function(n){return new u.Profunctor(function(e){return function(r){return function(t){var o=u.dimap(n)(r)(e);return function(n){return t(o(n))}}}})},s=new t.Newtype(function(n){return n},c);n.exports={Re:c,newtypeRe:s,profunctorRe:f,choiceRe:function(n){return new i.Cochoice(function(){return f(n.Profunctor0())},function(e){var r=o.left(n);return function(n){return e(r(n))}},function(e){var r=o.right(n);return function(n){return e(r(n))}})},cochoiceRe:function(n){return new o.Choice(function(){return f(n.Profunctor0())},function(e){var r=i.unleft(n);return function(n){return e(r(n))}},function(e){var r=i.unright(n);return function(n){return e(r(n))}})},strongRe:function(n){return new a.Costrong(function(){return f(n.Profunctor0())},function(e){var r=l.first(n);return function(n){return e(r(n))}},function(e){var r=l.second(n);return function(n){return e(r(n))}})},costrongRe:function(n){return new l.Strong(function(){return f(n.Profunctor0())},function(e){var r=a.unfirst(n);return function(n){return e(r(n))}},function(e){var r=a.unsecond(n);return function(n){return e(r(n))}})}}},QCv6:function(n,e,r){"use strict";var t=r("YKFa"),u=r("nWl2"),o=r("6nUn"),i=r("XSw5"),a=r("ll6l"),l=r("XCea"),c=r("Bhz5"),f=r("H2/w"),s=r("5Iaq"),d=r("vKjV"),m=r("FcYH"),p=function(n){return function(e){var r=n(new l.Exchange(t.identity(t.categoryFn),t.identity(t.categoryFn)));return e(r.value0)(r.value1)}},y=function(n){return function(e){return function(r){return function(t){return d.dimap(r)(n)(e)(t)}}}};n.exports={iso:y,withIso:p,cloneIso:function(n){return function(e){return p(n)(function(n){return function(r){return function(t){return y(n)(r)(e)(t)}}})}},re:function(n){return s.unwrap(c.newtypeRe)(n(t.identity(t.categoryFn)))},au:function(n){return p(n)(function(n){return function(e){return function(r){return function(t){return n(r(e)(t))}}}})},auf:function(n){return function(e){return p(e)(function(e){return function(r){return function(t){return function(u){return function(o){return r(t(d.rmap(n)(e)(u))(o))}}}}})}},under:function(n){return p(n)(function(n){return function(e){return function(r){return function(t){return n(r(e(t)))}}}})},non:function(n){return function(e){return function(r){return y(f.fromMaybe(e))(function(r){if(o.eq(n)(r)(e))return f.Nothing.value;if(u.otherwise)return new f.Just(r);throw new Error("Failed pattern match at Data.Lens.Iso (line 45, column 9 - line 46, column 33): "+[r.constructor.name])})(r)}}},curried:function(n){return y(m.curry)(m.uncurry)(n)},uncurried:function(n){return y(m.uncurry)(m.curry)(n)},flipped:function(n){return y(i.flip)(i.flip)(n)},mapping:function(n){return function(e){return function(r){return function(t){return p(r)(function(r){return function(u){return y(a.map(n)(r))(a.map(e)(u))(t)}})}}}},dimapping:function(n){return function(e){return function(r){return function(t){return function(u){return p(r)(function(r){return function(o){return p(t)(function(t){return function(i){return y(d.dimap(n)(r)(t))(d.dimap(e)(o)(i))(u)}})}})}}}}}}},QtHp:function(n,e,r){"use strict";var t,u,o=r("NL7e"),i=r("E0Ew"),a=r("jPEo"),l=r("YKFa"),c=r("lapV"),f=r("mgVd"),s=r("EVBn"),d=r("Z/IS"),m=r("uyzD"),p=r("CO8c"),y=r("6nUn"),b=r("POE8"),v=r("5a5/"),w=r("XSw5"),S=r("ll6l"),g=r("IORp"),h=r("gK7E"),A=r("QCv6"),x=r("h9OF"),F=r("H2/w"),I=r("W+DG"),R=r("5Iaq"),B=r("U4xy"),N=r("YfR1"),D=r("RqP8"),C=r("aa8G"),E=r("Xbqf"),P=r("IhUD"),M=r("Qku0"),q=r("+rx9"),L=r("IHIf"),V=r("2+07"),U=r("FDst"),T=r("aNND"),k=r("nEj/"),J=r("SZBU"),W=r("6g2T"),O=r("5L+5"),X=r("nk6E"),H=r("JBeR"),z=r("GUtV"),j=r("qeAW"),G=r("E4q/"),Y=r("ErWj"),K=r("+0be"),_=r("fjFE"),Z=r("pYS8"),Q=r("PsKH"),$=r("agFx"),nn=r("7HZk"),en=r("sfHK"),rn=r("avNA"),tn=r("h+YZ"),un=r("O43b"),on=r("C9r8"),an=r("xxbb"),ln=r("ZR40"),cn=function(n){return n},fn=function(){function n(){}return n.value=new n,n}(),sn=function(){function n(){}return n.value=new n,n}(),dn=function(n){if(n instanceof fn)return S.map(S.functorArray)(cn)(["Ceará","Minas Gerais","São Paulo"]);if(n instanceof sn)return S.map(S.functorArray)(cn)(["Arizona","California","New York"]);throw new Error("Failed pattern match at Lumi.Components.Examples.Form (line 181, column 1 - line 181, column 43): "+[n.constructor.name])},mn=new R.Newtype(function(n){return n},cn),pn=i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(S.map(z.functorFormBuilder)(function(n){return function(n){return function(n){return function(n){return q.unit}}}})(X.indent("Inline table")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"inlineTable"}))()()(M.SProxy.value)(n)})(X.switch))))(X.indent("Force top labels")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"forceTopLabels"}))()()(M.SProxy.value)(n)})(X.switch))))(X.indent("Readonly")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"readonly"}))()()(M.SProxy.value)(n)})(X.switch))))(X.indent("Simulate pauses (pet color picker)")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"simulatePauses"}))()()(M.SProxy.value)(n)})(X.switch))),yn=function(n){if(n instanceof fn)return"Brazil";if(n instanceof sn)return"United States";throw new Error("Failed pattern match at Lumi.Components.Examples.Form (line 169, column 1 - line 169, column 37): "+[n.constructor.name])},bn=function(n){return"Brazil"===n?new F.Just(fn.value):"United States"===n?new F.Just(sn.value):F.Nothing.value},vn=(t=X.select(yn)(bn)([{label:yn(fn.value),value:fn.value},{label:yn(sn.value),value:sn.value}]),i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(S.map(z.functorFormBuilder)(function(n){return function(e){return function(r){return function(t){return{name:n,street:e,city:r,country:t.country,state:t.state}}}}})(X.indent("Name")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"name"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonEmpty("Name"))(X.textbox)))))(X.indent("Street")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"street"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonEmpty("Street"))(X.textbox)))))(X.indent("City")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"city"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonEmpty("City"))(X.textbox)))))(z.parallel("countryState")(a.bind(z.bindSeqFormBuilder(I.monoidArray))(z.sequential("country")(X.indent("Country")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"country"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonNull("Country"))(t)))))(function(n){return a.bind(z.bindSeqFormBuilder(I.monoidArray))(z.sequential("state")(X.indent("State")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"state"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonNull("State"))((e=n,X.select(R.un(mn)(cn))((r=o.pure(F.applicativeMaybe),function(n){return r(cn(n))}))(S.mapFlipped(S.functorArray)(dn(e))(function(n){return{label:R.un(mn)(cn)(n),value:n}}))))))))(function(e){return o.pure(z.applicativeSeqFormBuilder(I.monoidArray))({country:n,state:e})});var e,r})))),wn=(u=a.bind(L.bindAff)(V.liftEffect(L.monadEffectAff)(T.randomRange(100)(700)))(function(n){return L.delay(n)}),i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(i.apply(z.applyFormBuilder(N.semigroupArray))(S.map(z.functorFormBuilder)(function(n){return function(e){return function(r){return function(t){return function(u){return function(u){return function(o){return function(i){return function(a){return function(l){return function(l){return function(c){return function(c){return{firstName:n,lastName:e,password:r,admin:t,height:u,pets:l,leastFavoriteColors:i,addresses:o,notes:a,avatar:c}}}}}}}}}}}}}})(X.indent("First Name")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"firstName"}))()()(M.SProxy.value)(n)})(G.warn(G.canValidateValidated)(function(n){return I.guard(F.monoidMaybe(N.semigroupString))(E.length(n)<=2)(o.pure(F.applicativeMaybe)("First name should be longer than two characters (but it doesn't have to be)."))})(G.validated(G.canValidateAny)(G.nonEmpty("First name"))(X.textbox))))))(X.indent("Last Name")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"lastName"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonEmpty("Last name"))(X.textbox)))))(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"password"}))()()(M.SProxy.value)(n)})(z.parallel("password")(a.bind(z.bindSeqFormBuilder(I.monoidArray))(z.sequential("password1")(X.indent("Password")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"password1"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonEmpty("Password"))(X.passwordBox)))))(function(n){return a.bind(z.bindSeqFormBuilder(I.monoidArray))(z.sequential("password2")(X.indent("Confirm password")(K.Required.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"password2"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.mustEqual(y.eqString)(P.toString(n))("Passwords do not match."))(X.passwordBox)))))(function(e){return o.pure(z.applicativeSeqFormBuilder(I.monoidArray))(n)})})))))(X.indent("Admin?")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"admin"}))()()(M.SProxy.value)(n)})(X.switch))))(X.section("Personal data")))(X.indent("Height (in)")(K.Optional.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"height"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.optional(G.validNumber("Height")))(X.number({min:F.Nothing.value,max:F.Nothing.value,step:Y.Any.value}))))))(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"addresses"}))()()(M.SProxy.value)(n)})(G.warn(G.canValidateAny)(function(n){return I.guard(F.monoidMaybe(N.semigroupString))(d.null(n))(o.pure(F.applicativeMaybe)("No address added."))})(X.array({label:"Address",addLabel:"Add address",defaultValue:H.formDefaults(H.formDefaultsRecord()(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"city"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"country"}))(H.formDefaultsValidated(H.formDefaultsMaybe))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"name"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"state"}))(H.formDefaultsValidated(H.formDefaultsMaybe))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"street"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordNil)()())()())()())()())()())),editor:vn})))))(X.indent("Least Favorite Colors")(K.Neither.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"leastFavoriteColors"}))()()(M.SProxy.value)(n)})(X.multiSelect(D.show(D.showString))(S.map(S.functorArray)(function(n){return{label:n,value:n}})(["Beige","Fuchsia","Goldenrod","Magenta","Puce","Slate"]))))))(X.indent("Notes")(K.Optional.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"notes"}))()()(M.SProxy.value)(n)})(X.textarea))))(X.section("Pets")))(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"pets"}))()()(M.SProxy.value)(n)})(G.warn(G.canValidateAny)(function(n){return I.guard(F.monoidMaybe(N.semigroupString))(d.null(n))(o.pure(F.applicativeMaybe)("You should adopt a pet."))})(j.editableTable({addLabel:"Add pet",defaultValue:new F.Just({firstName:new G.Fresh(""),lastName:new G.Fresh(""),animal:new G.Fresh(F.Nothing.value),age:new G.Fresh("1"),color:F.Nothing.value}),maxRows:m.top(m.boundedInt),summary:I.mempty(nn.monoidJSX),formBuilder:i.apply(j.applyTableFormBuilder)(i.apply(j.applyTableFormBuilder)(i.apply(j.applyTableFormBuilder)(S.map(j.functorTableFormBuilder)(function(n){return function(e){return function(r){return function(t){return{name:n,animal:e,age:r,color:t}}}}})(j.column_("Name")(i.apply(z.applyFormBuilder(N.semigroupArray))(S.map(z.functorFormBuilder)(function(n){return function(e){return P.appendString(n)(v.foldMap(v.foldableMaybe)(I.monoidString)(function(n){return" "+n})(I.guard(F.monoidMaybe(N.semigroupString))(g.not(g.heytingAlgebraFunction(g.heytingAlgebraBoolean))(C.null)(e))(new F.Just(e))))}})(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"firstName"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonEmpty("First name"))(X.textbox))))(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"lastName"}))()()(M.SProxy.value)(n)})(G.warn(G.canValidateAny)(function(n){return a.discard(a.discardUnit)(F.bindMaybe)(s.guard(F.monadZeroMaybe)(g.not(g.heytingAlgebraFunction(g.heytingAlgebraBoolean))(C.null)(n)))(function(){return o.pure(F.applicativeMaybe)("Did you really give your pet a surname?")})})(X.textbox))))))(j.column_("Animal")(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"animal"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.nonNull("Animal"))(X.select(l.identity(l.categoryFn))(o.pure(F.applicativeMaybe))(S.map(S.functorArray)(function(n){return{label:n,value:n}})(["Bird","Cat","Cow","Dog","Duck","Fish","Horse","Rabbit","Rat","Turle"])))))))(j.column_("Age")(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"age"}))()()(M.SProxy.value)(n)})(G.validated(G.canValidateAny)(G.validInt("Age"))(X.number({step:new Y.Step(1),min:new F.Just(0),max:F.Nothing.value}))))))(j.column_("Color")(X.withProps(function(n){return X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"color"}))()()(M.SProxy.value)(n)})(X.asyncSelectByKey((e=n.simulatePauses,function(n){return a.discard(a.discardUnit)(L.bindAff)(o.when(L.applicativeAff)(e)(u))(function(){var e=C.toLower(n);return"red"===e?o.pure(L.applicativeAff)({label:"Red",value:"red"}):"green"===e?o.pure(L.applicativeAff)({label:"Green",value:"green"}):"blue"===e?o.pure(L.applicativeAff)({label:"Blue",value:"blue"}):f.throwError(L.monadThrowAff)(U.error("No color"))})}))(function(n){return function(e){return a.discard(a.discardUnit)(L.bindAff)(o.when(L.applicativeAff)(n)(a.discard(a.discardUnit)(L.bindAff)(u)(function(){return u})))(function(){return o.pure(L.applicativeAff)([{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"}])})}}(n.simulatePauses))(l.identity(l.categoryFn))(l.identity(l.categoryFn))(l.identity(l.categoryFn))(function(n){return en.text(n.label)}));var e})))})))))(X.section("Images")))(X.indent("Avatar")(K.Optional.value)(X.focus(function(n){return x.prop(new M.IsSymbol(function(){return"avatar"}))()()(M.SProxy.value)(n)})(X.match_(I.monoidArray)(function(n){return A.iso(F.maybe([])(o.pure(o.applicativeArray)))(d.head)(n.Profunctor0())})(X.file({variant:$.Avatar.value,backend:{fetch:function(n){return o.pure(L.applicativeAff)({id:n,name:"avatar",previewUri:F.Nothing.value})},upload:function(n){return c.produceAff(function(e){var r=h.round(ln.size(n)),t={totalBytes:r,uploadedBytes:0};return a.discard(a.discardUnit)(L.bindAff)(u)(function(){return a.discard(a.discardUnit)(L.bindAff)(c.emit(e)(t))(function(){return a.discard(a.discardUnit)(L.bindAff)(u)(function(){return a.discard(a.discardUnit)(L.bindAff)(c.emit(e)({totalBytes:t.totalBytes,uploadedBytes:b.div(b.euclideanRingInt)(r)(8)}))(function(){return a.discard(a.discardUnit)(L.bindAff)(u)(function(){return a.discard(a.discardUnit)(L.bindAff)(c.emit(e)({totalBytes:t.totalBytes,uploadedBytes:b.div(b.euclideanRingInt)(r)(2)}))(function(){return a.discard(a.discardUnit)(L.bindAff)(u)(function(){return a.discard(a.discardUnit)(L.bindAff)(c.emit(e)({totalBytes:t.totalBytes,uploadedBytes:r}))(function(){return c.close(e)(o.pure(p.applicativeEither)($.FileId(ln.name(n))))})})})})})})})})})}}})))))),Sn=on.component()()("UserFormExample")(function(n){return on.bind(on.ixBindRender)(on.useState(F.Nothing.value))(function(e){return on.bind(on.ixBindRender)(X.useForm(wn)({initialState:H.formDefaults(H.formDefaultsRecord()(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"addresses"}))(H.formDefaultsValidated(H.formDefaultsArray))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"admin"}))(H.formDefaultsBoolean)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"avatar"}))(H.formDefaultsMaybe)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"firstName"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"height"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"lastName"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"leastFavoriteColors"}))(H.formDefaultsArray)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"notes"}))(H.formDefaultsString)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"password"}))(H.formDefaultsRecord()(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"password1"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"password2"}))(H.formDefaultsValidated(H.formDefaultsString))(H.formDefaultsRecordNil)()())()()))(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"pets"}))(H.formDefaultsValidated(H.formDefaultsArray))(H.formDefaultsRecordNil)()())()())()())()())()())()())()())()())()())()())),inlineTable:n.inlineTable,forceTopLabels:n.forceTopLabels&&!n.inlineTable,formProps:{readonly:n.readonly,simulatePauses:n.simulatePauses}}))(function(n){return o.pure(on.applicativeRender(an.refl))(tn.form()({onSubmit:un.handler(rn.preventDefault)(function(r){if(n.validated instanceof F.Nothing)return n.setModified;if(n.validated instanceof F.Just)return e.value1(function(e){return new F.Just({firstName:n.validated.value0.firstName,lastName:n.validated.value0.lastName})});throw new Error("Failed pattern match at Lumi.Components.Examples.Form (line 125, column 11 - line 129, column 63): "+[n.validated.constructor.name])}),style:en.css({alignSelf:"stretch"}),children:[n.form,Z.row({style:en.css({justifyContent:"flex-end"}),children:[J.button({accessibilityLabel:J.secondary.accessibilityLabel,color:J.secondary.color,onPress:un.handler_(n.reset),size:J.secondary.size,style:J.secondary.style,testId:J.secondary.testId,title:"Reset",type:J.secondary.type,buttonState:J.secondary.buttonState}),J.button({accessibilityLabel:J.primary.accessibilityLabel,color:J.primary.color,onPress:J.primary.onPress,size:J.primary.size,style:en.css({marginLeft:"12px"}),testId:J.primary.testId,title:"Submit",type:"submit",buttonState:J.primary.buttonState})]}),function(){if(e.value0 instanceof F.Nothing)return I.mempty(nn.monoidJSX);if(e.value0 instanceof F.Just)return _.dialog({modalOpen:!0,onRequestClose:function(){return n.reset(),e.value1(function(n){return F.Nothing.value})()},onActionButtonClick:B.null,actionButtonTitle:"",size:Q.Medium.value,children:en.text("Created user "+P.toString(e.value0.value0.firstName)+" "+P.toString(e.value0.value0.lastName)+"!")});throw new Error("Failed pattern match at Lumi.Components.Examples.Form (line 147, column 13 - line 161, column 20): "+[e.value0.constructor.name])}()]}))})})}),gn=w.flip(nn.element)({})(k.unsafePerformEffect(function(){var n=Sn();return on.component()()("FormExample")(function(e){return on.bind(on.ixBindRender)(X.useForm(pn)({initialState:H.formDefaults(H.formDefaultsRecord()(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"forceTopLabels"}))(H.formDefaultsBoolean)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"inlineTable"}))(H.formDefaultsBoolean)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"readonly"}))(H.formDefaultsBoolean)(H.formDefaultsRecordCons(new M.IsSymbol(function(){return"simulatePauses"}))(H.formDefaultsBoolean)(H.formDefaultsRecordNil)()())()())()())()())),inlineTable:!1,forceTopLabels:!1,formProps:{readonly:!1}}))(function(e){return o.pure(on.applicativeRender(an.refl))(W.column_([W.column({style:en.css({width:"100%",maxWidth:300,padding:"20px 0"}),children:[e.form]}),O.example(nn.element(n)(e.formData))]))})})()}));n.exports={docs:gn,metaForm:pn,mkUserFormExample:Sn,BR:fn,US:sn,countryToString:yn,countryFromString:bn,State:cn,statesForCountry:dn,userForm:wn,addressForm:vn,newtypeState:mn}},XCea:function(n,e,r){"use strict";var t=r("ll6l"),u=r("vKjV"),o=function(){function n(n,e){this.value0=n,this.value1=e}return n.create=function(e){return function(r){return new n(e,r)}},n}(),i=new u.Profunctor(function(n){return function(e){return function(r){return new o(function(e){return r.value0(n(e))},function(n){return e(r.value1(n))})}}}),a=new t.Functor(function(n){return function(e){return new o(e.value0,function(r){return n(e.value1(r))})}});n.exports={Exchange:o,functorExchange:a,profunctorExchange:i}},Xbqf:function(n,e,r){"use strict";var t,u,o=r("rUU2"),i=r("H2/w"),a=r("XU2S"),l=r("5W0i"),c=r("IhUD"),f=r("S5KN"),s=f.unsafeCoerce,d=function(n){return s(l.singleton(n))},m=f.unsafeCoerce,p=f.unsafeCoerce,y=function(n){return l.toCodePointArray(p(n))},b=(t=i.fromJust(),function(n){return t(o.fromArray(y(n)))}),v=function(n){return 0===n.length?i.Nothing.value:new i.Just(s(l.fromCodePointArray(n)))},w=(u=i.fromJust(),function(n){return u(v(o.toArray(n)))});n.exports={fromCodePointArray:v,fromNonEmptyCodePointArray:w,singleton:d,cons:function(n){return function(e){return s(l.singleton(n)+e)}},snoc:function(n){return function(e){return s(e+l.singleton(n))}},fromFoldable1:function(n){return a.foldMap1(n)(c.semigroupNonEmptyString)(d)},toCodePointArray:y,toNonEmptyCodePointArray:b,codePointAt:function(n){return m(l.codePointAt(n))},indexOf:function(n){return m(l.indexOf(n))},"indexOf'":function(n){var e=l["indexOf'"](n);return function(n){return m(e(n))}},lastIndexOf:function(n){return m(l.lastIndexOf(n))},"lastIndexOf'":function(n){var e=l["lastIndexOf'"](n);return function(n){return m(e(n))}},uncons:function(n){var e=p(n);return{head:i.fromJust()(l.codePointAt(0)(e)),tail:c.fromString(l.drop(1)(e))}},length:function(n){return l.length(p(n))},take:function(n){return function(e){var r=p(e);return n<1?i.Nothing.value:new i.Just(s(l.take(n)(r)))}},takeWhile:function(n){var e=m(l.takeWhile(n));return function(n){return c.fromString(e(n))}},drop:function(n){return function(e){var r=p(e);return n>=l.length(r)?i.Nothing.value:new i.Just(s(l.drop(n)(r)))}},dropWhile:function(n){var e=m(l.dropWhile(n));return function(n){return c.fromString(e(n))}},countPrefix:function(n){return m(l.countPrefix(n))},splitAt:function(n){return function(e){var r=l.splitAt(n)(p(e));return{before:c.fromString(r.before),after:c.fromString(r.after)}}}}},dzOi:function(n,e,r){"use strict";var t=r("NL7e"),u=r("jPEo"),o=r("lobj"),i=r("AhKg"),a=r("Z/IS"),l=r("v/1A"),c=r("6nUn"),f=r("5a5/"),s=r("XSw5"),d=r("ll6l"),m=r("/rhJ"),p=r("fyYY"),y=r("6Ggn"),b=r("H2/w"),v=r("W+DG"),w=r("ij/N"),S=r("FJdJ"),g=r("YfR1"),h=r("RqP8"),A=r("+rx9"),x=function(n){return function(e){return function(r){return y.union(n)(e)(r)}}},F=function(n){return y.keys(n)},I=function(n){return new g.Semigroup(x(n))},R=function(n){return y.isEmpty(n)},B=function(n){return function(e){return function(r){return y.insert(n)(e)(A.unit)(r)}}},N=new f.Foldable(function(n){return function(e){var r=f.foldMap(p.foldableList)(n)(e);return function(n){return r(F(n))}}},function(n){return function(e){var r=f.foldl(p.foldableList)(n)(e);return function(n){return r(F(n))}}},function(n){return function(e){var r=f.foldr(p.foldableList)(n)(e);return function(n){return r(F(n))}}}),D=function(n){return new c.Eq(function(e){return function(r){return c.eq(y.eqMap(n)(c.eqUnit))(e)(r)}})},C=function(n){return new w.Ord(function(){return D(n.Eq0())},function(e){return function(r){return w.compare(p.ordList(n))(F(e))(F(r))}})},E=new c.Eq1(function(n){return c.eq(D(n))}),P=new w.Ord1(function(){return E},function(n){return w.compare(C(n))}),M=y.empty,q=function(n){return function(e){return f.foldl(n)(function(n){return function(r){return B(e)(r)(n)}})(M)}},L=function(n){return function(e){return function(r){return y.delete(n)(e)(r)}}},V=function(n){return function(e){return function(r){return f.foldl(p.foldableList)(s.flip(L(n)))(e)(F(r))}}},U=function(n){return function(e){return function(r){return R(V(n)(e)(r))}}};n.exports={fromFoldable:q,toUnfoldable:function(n){var e=m.toUnfoldable(n);return function(n){return e(F(n))}},empty:M,isEmpty:R,singleton:function(n){return y.singleton(n)(A.unit)},map:function(n){return function(e){return f.foldl(N)(function(r){return function(t){return B(n)(e(t))(r)}})(M)}},checkValid:function(n){return y.checkValid(n)},insert:B,member:function(n){return function(e){return function(r){return y.member(n)(e)(r)}}},delete:L,size:function(n){return y.size(n)},findMin:function(n){return d.map(b.functorMaybe)(function(n){return n.key})(y.findMin(n))},findMax:function(n){return d.map(b.functorMaybe)(function(n){return n.key})(y.findMax(n))},union:x,unions:function(n){return function(e){return f.foldl(n)(x(e))(M)}},difference:V,subset:U,properSubset:function(n){return function(e){return function(r){return U(n)(e)(r)&&c.notEq(D(n.Eq0()))(e)(r)}}},intersection:function(n){return function(e){return function(r){var c,s=(c=a.fromFoldable(p.foldableList),function(n){return c(F(n))}),d=s(r),m=a.length(d),y=s(e),b=a.length(y);return q(f.foldableArray)(n)(u.bind(i.bindST)(u.bind(i.bindST)(l.empty)(function(e){return o.tailRecM2(i.monadRecST)(function(r){return function(u){if(r<b&&u<m){var a=w.compare(n)(y[r])(d[u]);if(a instanceof S.EQ)return function(){return l.push(y[r])(e)(),new o.Loop({a:r+1|0,b:u+1|0})};if(a instanceof S.LT)return t.pure(i.applicativeST)(new o.Loop({a:r+1|0,b:u}));if(a instanceof S.GT)return t.pure(i.applicativeST)(new o.Loop({a:r,b:u+1|0}));throw new Error("Failed pattern match at Data.Set (line 176, column 12 - line 181, column 43): "+[a.constructor.name])}return t.pure(i.applicativeST)(new o.Done(e))}})(0)(0)}))(l.unsafeFreeze)())}}},filter:function(n){return function(e){return function(r){return y.filterWithKey(n)(function(n){return function(r){return e(n)}})(r)}}},mapMaybe:function(n){return function(e){return f.foldr(N)(function(r){return function(t){return b.maybe(t)(function(e){return B(n)(e)(t)})(e(r))}})(M)}},eqSet:D,eq1Set:E,showSet:function(n){return new h.Show(function(e){return"(fromFoldable "+h.show(p.showList(n))(F(e))+")"})},ordSet:C,ord1Set:P,monoidSet:function(n){return new v.Monoid(function(){return I(n)},M)},semigroupSet:I,foldableSet:N}},"f+Xt":function(n,e,r){"use strict";var t=r("NL7e"),u=r("Z/IS"),o=r("rUU2"),i=r("6nUn"),a=r("ll6l"),l=r("Q4UL"),c=r("Uq7k"),f=r("6Ggn"),s=r("H2/w"),d=r("dzOi"),m=r("fGjL"),p=r("JGBW"),y=function(n){this.ix=n},b=new y(function(n){return function(e){return c.wander(e)(function(e){return function(r){return function(u){return s.maybe(t.pure(e)(u))((i=a.map(e.Apply0().Functor0())(function(e){return s.fromMaybe(u)(o.updateAt(n)(e)(u))}),function(n){return i(r(n))}))(o.index(u)(n));var i}}})}}),v=new y(function(n){return function(n){return c.wander(n)(function(n){return m.traverse(m.traversableMaybe)(n)})}}),w=new y(function(n){return function(n){return c.wander(n)(function(n){return m.traverse(l.traversableIdentity)(n)})}}),S=new y(function(n){return function(e){return c.wander(e)(function(e){return function(r){return function(u){return s.maybe(t.pure(e)(u))((o=a.map(e.Apply0().Functor0())(function(e){return p.insert(n)(e)(u)}),function(n){return o(r(n))}))(p.lookup(n)(u));var o}}})}}),g=new y(function(n){return function(e){return c.wander(e)(function(e){return function(r){return function(o){return s.maybe(t.pure(e)(o))((i=a.map(e.Apply0().Functor0())(function(e){return s.fromMaybe(o)(u.updateAt(n)(e)(o))}),function(n){return i(r(n))}))(u.index(o)(n));var i}}})}});n.exports={Index:y,ix:function(n){return n.ix},indexArr:function(n){return new y(function(e){return function(r){return c.wander(r)(function(r){return function(t){return function(u){return a.mapFlipped(r.Apply0().Functor0())(t(u(e)))(function(r){return function(t){return i.eq(n)(e)(t)?r:u(t)}})}}})}})},indexMaybe:v,indexIdentity:w,indexArray:g,indexNonEmptyArray:b,indexSet:function(n){return new y(function(e){return function(r){return c.wander(r)(function(r){return function(u){var o=t.pure(r),i=d.insert(n)(e);return function(n){return o(i(n))}}})}})},indexMap:function(n){return new y(function(e){return function(r){return c.wander(r)(function(r){return function(u){return function(o){return s.maybe(t.pure(r)(o))((i=a.map(r.Apply0().Functor0())(function(r){return f.insert(n)(e)(r)(o)}),function(n){return i(u(n))}))(f.lookup(n)(e)(o));var i}}})}})},indexForeignObject:S}},qeAW:function(n,e,r){"use strict";var t=r("NL7e"),u=r("E0Ew"),o=r("jPEo"),i=r("YKFa"),a=r("Z/IS"),l=r("rUU2"),c=r("qIyz"),f=r("CO8c"),s=r("5a5/"),d=r("XSw5"),m=r("ll6l"),p=r("dLpK"),y=r("f+Xt"),b=r("Uq7k"),v=r("H2/w"),w=r("W+DG"),S=r("5Iaq"),g=r("U4xy"),h=r("YfR1"),A=r("fGjL"),x=r("FcYH"),F=r("a0EN"),I=r("6g2T"),R=r("DabP"),B=r("GUtV"),N=r("+0be"),D=r("iLHW"),C=r("pYS8"),E=r("jILx"),P=r("pMgY"),M=r("7HZk"),q=r("sfHK"),L=r("h+YZ"),V=r("jNIV"),U=new S.Newtype(function(n){return n},function(n){return n}),T=new m.Functor(function(n){return function(e){return{validate:m.map(m.functorFn)(m.map(m.functorFn)(m.map(v.functorMaybe)(n)))(e.validate),columns:e.columns}}}),k=function(n){return function(e){return function(r){var t=function(n){if(n instanceof N.Error)return P.text({children:[q.text(n.value0)],className:g.notNull("labeled-field--validation-error"),color:P.subtext.color,style:P.subtext.style,tag:P.subtext.tag,testId:P.subtext.testId});if(n instanceof N.Warning)return P.text({children:[q.text(n.value0)],className:g.notNull("labeled-field--validation-warning"),color:P.subtext.color,style:P.subtext.style,tag:P.subtext.tag,testId:P.subtext.testId});throw new Error("Failed pattern match at Lumi.Components.Form.Table (line 262, column 7 - line 272, column 14): "+[n.constructor.name])},u=function n(e){return function(r){if(r instanceof B.Child)return v.maybe(i.identity(i.categoryFn))(M.keyed)(r.value0.key)(r.value0.child);if(r instanceof B.Wrapper)return L.div()({key:v.fromMaybe("")(r.value0.key),style:q.css({flex:"1"}),children:[C.row_([s.intercalate(s.foldableArray)(M.monoidJSX)(E.hspace(E.S12.value))(m.map(m.functorArray)(n(e))(r.value0.children))])]});if(r instanceof B.Node)return v.maybe(i.identity(i.categoryFn))(M.keyed)(r.value0.key)(I.column_([C.row_([s.intercalate(s.foldableArray)(M.monoidJSX)(E.hspace(E.S12.value))(m.map(m.functorArray)(n(e))(r.value0.children))]),w.guard(M.monoidJSX)(!e)(s.foldMap(s.foldableMaybe)(M.monoidJSX)(t)(r.value0.validationError))]));throw new Error("Failed pattern match at Lumi.Components.Form.Table (line 208, column 7 - line 229, column 16): "+[r.constructor.name])}},o=function(n){return function(e){return C.row_([s.intercalate(s.foldableArray)(M.monoidJSX)(E.hspace(E.S12.value))(m.map(m.functorArray)(u(n))(e))])}},a=function(n){return function(e){if(e instanceof B.Child)return v.maybe(i.identity(i.categoryFn))(M.keyed)(e.value0.key)(e.value0.child);if(e instanceof B.Wrapper)return L.div()({key:v.fromMaybe("")(e.value0.key),style:q.css({flex:"1"}),children:[I.column_([s.intercalate(s.foldableArray)(M.monoidJSX)(E.vspace(E.S8.value))(m.map(m.functorArray)(u(n))(e.value0.children))])]});if(e instanceof B.Node)return v.maybe(i.identity(i.categoryFn))(M.keyed)(e.value0.key)(I.column_([s.intercalate(s.foldableArray)(M.monoidJSX)(E.vspace(E.S8.value))(m.map(m.functorArray)(u(n))(e.value0.children)),w.guard(M.monoidJSX)(!n)(s.foldMap(s.foldableMaybe)(M.monoidJSX)(t)(e.value0.validationError))]));throw new Error("Failed pattern match at Lumi.Components.Form.Table (line 239, column 7 - line 258, column 16): "+[e.constructor.name])}},l=function(n){return function(e){return I.column_([s.intercalate(s.foldableArray)(M.monoidJSX)(E.vspace(E.S8.value))(m.map(m.functorArray)(a(n))(e))])}},c=function(){if(e instanceof D.Horizontal)return o;if(e instanceof D.Vertical)return l;throw new Error("Failed pattern match at Lumi.Components.Form.Table (line 183, column 7 - line 187, column 27): "+[e.constructor.name])}();return{columns:[{label:n,render:function(n){return function(e){return function(t){return c(n.readonly)(r(n)(e).edit(t))}}}}],validate:function(n){return function(e){return r(n)(e).validate}}}}}},J=new u.Apply(function(){return T},function(n){return function(e){return{columns:h.append(h.semigroupArray)(n.columns)(e.columns),validate:function(r){return function(t){return u.apply(v.applyMaybe)(n.validate(r)(t))(e.validate(r)(t))}}}}}),W=new t.Applicative(function(){return J},function(n){return{columns:[],validate:function(e){return function(e){return t.pure(v.applicativeMaybe)(n)}}}});n.exports={column:k,column_:function(n){return k(n)(D.Horizontal.value)},editableTable:function(n){return B.formBuilder(function(e){return function(r){return{edit:function(t){return R.editableTable({addLabel:n.addLabel,maxRows:n.maxRows,readonly:v.isNothing(n.defaultValue)||e.readonly,rowEq:V.unsafeRefEq,summary:C.row({style:q.css({flex:"1",flexWrap:"wrap",justifyContent:"flex-end"}),children:[n.summary]}),rows:f.Left.create(p.mapWithIndex(p.functorWithIndexArray)(x.Tuple.create)(r)),onRowAdd:s.foldMap(s.foldableMaybe)(F.monoidEffect(w.monoidUnit))((u=d.flip(a.snoc),function(n){return t(u(n))}))(n.defaultValue),onRowRemove:function(n){return t(function(e){return v.fromMaybe(e)(a.deleteAt(n.value0)(e))})},removeCell:R.defaultRemoveCell,columns:m.mapFlipped(m.functorArray)(n.formBuilder.columns)(function(n){return{label:n.label,renderCell:function(r){return n.render(e)(r.value1)((u=y.ix(y.indexArray)(r.value0)(b.wanderFunction),function(n){return t(u(n))}));var u}}})});var u},validate:A.traverse(A.traversableArray)(v.applicativeMaybe)(n.formBuilder.validate(e))(r)}}})},nonEmptyEditableTable:function(n){return B.formBuilder(function(e){return function(r){return{edit:function(t){return R.editableTable({addLabel:n.addLabel,maxRows:n.maxRows,readonly:v.isNothing(n.defaultValue)||e.readonly,rowEq:V.unsafeRefEq,summary:C.row({style:q.css({flex:"1",flexWrap:"wrap",justifyContent:"flex-end"}),children:[n.summary]}),rows:f.Right.create(p.mapWithIndex(c.functorWithIndexNonEmptyArray)(x.Tuple.create)(r)),onRowAdd:s.foldMap(s.foldableMaybe)(F.monoidEffect(w.monoidUnit))((u=d.flip(l.snoc),function(n){return t(u(n))}))(n.defaultValue),onRowRemove:function(n){return t(function(e){return v.fromMaybe(e)(o.bindFlipped(v.bindMaybe)(l.fromArray)(l.deleteAt(n.value0)(e)))})},removeCell:R.defaultRemoveCell,columns:m.mapFlipped(m.functorArray)(n.formBuilder.columns)(function(n){return{label:n.label,renderCell:function(r){return n.render(e)(r.value1)((u=y.ix(y.indexNonEmptyArray)(r.value0)(b.wanderFunction),function(n){return t(u(n))}));var u}}})});var u},validate:A.traverse(c.traversableNonEmptyArray)(v.applicativeMaybe)(n.formBuilder.validate(e))(r)}}})},newtypeTableFormBuilder:U,functorTableFormBuilder:T,applyTableFormBuilder:J,applicativeTableFormBuilder:W}}}]);