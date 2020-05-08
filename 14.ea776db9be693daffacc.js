(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9xUQ":function(n,e,t){"use strict";var r=t("q1tI");function i(n){var e=this;return e.bindRef=function(n){e.inputRef=n},e.onChange=function(e){var t=e.target,r=t.value,i=n.validate(r);if(i)t.setCustomValidity(i);else{var u=parseFloat(r);isNaN(u)||(u>n.max?t.setCustomValidity("Value must be less than or equal to "+n.max+"."):u<n.min?t.setCustomValidity("Value must be greater than or equal to "+n.min+"."):t.setCustomValidity(""))}},e}i.prototype=Object.create(r.Component.prototype),i.displayName="FixedPrecisionInputInner",i.prototype.componentWillReceiveProps=function(n){null!=this.inputRef&&this.inputRef.value!==n.defaultValue&&(this.inputRef.value=n.defaultValue)},i.prototype.render=function(){return r.createElement("input",Object.assign({},this.props,{ref:this.bindRef,onChange:this.onChange,validate:void 0}))},e.input_=i,e.cancelWhenNotMatch=function(n,e){!e.cancelable||e.defaultPrevented||n.test(e.key)||e.preventDefault()}},Ghzj:function(n,e,t){"use strict";var r=t("NL7e"),i=t("jPEo"),u=t("EVBn"),o=t("Z/IS"),a=t("tiZW"),s=t("nWl2"),c=t("c6eC"),l=t("jX/J"),f=t("6nUn"),d=t("POE8"),m=t("XSw5"),g=t("ll6l"),p=t("gK7E"),h=t("H2/w"),v=t("W+DG"),w=t("ij/N"),I=t("WwUC"),b=t("d46P"),y=t("RqP8"),x=t("zipy"),B=t("aa8G"),P=t("q6a+"),F=function(){function n(){}return n.value=new n,n}(),E=function(n){return n},C=function(n){this.reflectPrecision=n},N=function(n){return function(e){return function(t){var r=x.length(t);return r>=n?x.take(n)(t):t+x.fromCharArray(o.replicate(n-r|0)(e))}}},R=function(n){return n.reflectPrecision},S=function(n){return function(e){var t=R(n)(F.value);return p.round(P.log(a.toNumber(t))/P.ln10)}},q=function(n){return n},T=function(n){return new C((function(e){return b.mul(a.semiringBigInt)(a.fromInt(10))(R(n)(F.value))}))},k=new C((function(n){return a.fromInt(1)})),z=function(n){return function(e){var t=S(n)(F.value),o=w.between(w.ordChar)("0")("9"),s=R(n)(F.value),c=function(){var n=x.stripPrefix("-")(e);if(n instanceof h.Just)return{sign:I.negate(a.ringBigInt)(b.one(a.semiringBigInt)),str:n.value0};if(n instanceof h.Nothing)return{sign:b.one(a.semiringBigInt),str:e};throw new Error("Failed pattern match at Data.Fixed (line 356, column 7 - line 360, column 35): "+[n.constructor.name])}(),l=x.countPrefix(o)(c.str),d=x.splitAt(l)(c.str);return i.discard(i.discardUnit)(h.bindMaybe)(u.guard(h.monadZeroMaybe)(!B.null(c.str)))((function(){return i.bind(h.bindMaybe)(a.fromString(d.before))((function(n){return i.bind(h.bindMaybe)(""===d.after?r.pure(h.applicativeMaybe)(b.zero(a.semiringBigInt)):"."===d.after?r.pure(h.applicativeMaybe)(b.zero(a.semiringBigInt)):i.discard(i.discardUnit)(h.bindMaybe)(u.guard(h.monadZeroMaybe)(f.eq(h.eqMaybe(f.eqChar))(x.charAt(0)(d.after))(new h.Just("."))))((function(){var n=x.drop(1)(d.after);return a.fromString(N(t)("0")(n))})))((function(e){return r.pure(h.applicativeMaybe)(b.mul(a.semiringBigInt)(c.sign)(b.add(a.semiringBigInt)(b.mul(a.semiringBigInt)(n)(s))(e)))}))}))}))}},M=function(n){return function(e){return b.mul(a.semiringBigInt)(e)(R(n)(F.value))}},O=new f.Eq((function(n){return function(e){return f.eq(a.eqBigInt)(n)(e)}})),V=new w.Ord((function(){return O}),(function(n){return function(e){return w.compare(a.ordBigInt)(n)(e)}})),j=function(n){return function(e){return R(n)(F.value)}},L=function(n){return new b.Semiring((function(n){return function(e){return b.add(a.semiringBigInt)(n)(e)}}),(function(e){return function(t){return d.div(a.euclideanRingBigInt)(b.mul(a.semiringBigInt)(e)(t))(j(n)(e))}}),R(n)(F.value),b.zero(a.semiringBigInt))},A=function(n){return new I.Ring((function(){return L(n)}),(function(n){return function(e){return I.sub(a.ringBigInt)(n)(e)}}))},D=function(n){return function(e){return function(t){var r,i=S(n)(F.value),u=j(n)(t),s=w.abs(a.ordBigInt)(a.ringBigInt)(t),c=a.rem(s)(u),l=a.quot(s)(u);return(w.lessThan(a.ordBigInt)(t)(b.zero(a.semiringBigInt))?"-":"")+(a.toString(l)+v.guard(v.monoidString)(e>0)("."+N(e)("0")((r=i,function(n){return function(e){var t=x.length(e);return t>=r?x.takeRight(r)(e):x.fromCharArray(o.replicate(r-t|0)(n))+e}})("0")(a.toString(c)))))}}},W=function(n){return D(n)(S(n)(F.value))},J=function(n){return new c.CommutativeRing((function(){return A(n)}))},Z=function(n){return new d.EuclideanRing((function(){return J(n)}),m.const(1),(function(e){return function(t){var r=t,i=e,u=j(n)(e);return d.div(a.euclideanRingBigInt)(b.mul(a.semiringBigInt)(i)(u))(r)}}),(function(e){return function(e){return b.zero(L(n))}}))};n.exports={fromInt:function(n){var e=M(n);return function(n){return e(a.fromInt(n))}},fromBigInt:M,fromNumber:function(n){return function(e){return g.map(h.functorMaybe)(E)(a.fromNumber(P.round(e*a.toNumber(R(n)(F.value)))))}},toNumber:function(n){return function(e){return a.toNumber(e)/a.toNumber(j(n)(e))}},fromString:z,toString:W,toStringWithPrecision:D,numerator:q,denominator:j,floor:function(n){return function(e){var t=j(n)(e),r=d.mod(a.euclideanRingBigInt)(e)(t),i=function(){if(w.lessThan(a.ordBigInt)(r)(b.zero(a.semiringBigInt)))return b.add(a.semiringBigInt)(r)(t);if(s.otherwise)return r;throw new Error("Failed pattern match at Data.Fixed (line 246, column 3 - line 247, column 20): "+[])}();return I.sub(a.ringBigInt)(e)(i)}},ceil:function(n){return function(e){var t=j(n)(e),r=d.mod(a.euclideanRingBigInt)(e)(t),i=function(){if(f.eq(a.eqBigInt)(r)(b.zero(a.semiringBigInt)))return b.zero(a.semiringBigInt);if(w.lessThan(a.ordBigInt)(r)(b.zero(a.semiringBigInt)))return I.negate(a.ringBigInt)(r);if(s.otherwise)return I.sub(a.ringBigInt)(t)(r);throw new Error("Failed pattern match at Data.Fixed (line 270, column 3 - line 272, column 24): "+[])}();return b.add(a.semiringBigInt)(e)(i)}},round:function(n){return function(e){var t=j(n)(e),r=d.mod(a.euclideanRingBigInt)(e)(t),i=function(){if(w.lessThan(a.ordBigInt)(r)(b.zero(a.semiringBigInt))&&w.greaterThanOrEq(a.ordBigInt)(b.mul(a.semiringBigInt)(b.add(a.semiringBigInt)(r)(t))(a.fromInt(2)))(t))return I.negate(a.ringBigInt)(r);if(w.greaterThanOrEq(a.ordBigInt)(b.mul(a.semiringBigInt)(r)(a.fromInt(2)))(t))return I.sub(a.ringBigInt)(t)(r);if(s.otherwise)return I.negate(a.ringBigInt)(r);throw new Error("Failed pattern match at Data.Fixed (line 297, column 3 - line 299, column 21): "+[])}();return b.add(a.semiringBigInt)(e)(i)}},rescale:function(n){return function(e){var t=h.fromJust(),r=z(e),i=W(n);return function(n){return t(r(i(n)))}}},approxDiv:function(n){return function(n){return d.div(Z(n))}},PProxy:F,KnownPrecision:C,reflectPrecision:R,reflectPrecisionDecimalPlaces:S,reifyPrecision:function(n){return function(e){var t,r=n,i=!1;function u(n,t){if(n<0)return i=!0,h.Nothing.value;if(0===n)return i=!0,new h.Just(t(k)(F.value));r=n-1|0,e=function(n){var e=t(T(n));return function(n){return e(F.value)}}}for(;!i;)t=u(r,e);return t}},knownPrecisionOne:k,knownPrecisionTenTimes:T,showFixed:function(n){return new y.Show((function(e){return"(fromString "+y.show(y.showString)(W(n)(e))+" :: P"+y.show(a.showBigInt)(R(n)(F.value))+")"}))},eqFixed:O,ordFixed:V,semiringFixed:L,ringFixed:A,commutativeRingFixed:J,euclideanRingFixed:Z,divisionRingFixed:function(n){return new l.DivisionRing((function(){return A(n)}),(function(e){return d.div(Z(n))(b.one(L(n)))(e)}))}}},jEZY:function(n,e,t){"use strict";var r=t("9xUQ"),i=t("NL7e"),u=t("jPEo"),o=t("YKFa"),a=t("tiZW"),s=t("uyzD"),c=t("CO8c"),l=t("Ghzj"),f=t("5a5/"),d=t("XSw5"),m=t("IORp"),g=t("gK7E"),p=t("H2/w"),h=t("U4xy"),v=t("RqP8"),w=t("aa8G"),I=t("4rbx"),b=t("73Rr"),y=t("Qku0"),x=t("+rx9"),B=t("a0EN"),P=t("PsKH"),F=(t("q6a+"),t("7HZk")),E=t("avNA"),C=t("z85V"),N=t("O43b"),R={type:"tel",disabled:!1,max:g.toNumber(s.top(s.boundedInt)),min:g.toNumber(s.bottom(s.boundedInt)),name:"",onBlur:function(n,e){return x.unit},onChange:function(n,e){return x.unit},onFocus:function(n,e){return x.unit},pattern:"-?[0-9,]*\\.?[0-9,]*",patternFailedMessage:"The value does not appear to be a number.",placeholder:"",readOnly:!1,required:!1,size:P.Medium.value,strict:!0,style:C.css({}),testId:p.Nothing.value,validate:d.const(p.Nothing.value),value:new c.Left("")},S=F.createComponent("FixedPrecisionInput");n.exports={defaults:R,fixedPrecisionInput:function(n){var e=w.replace(",")("");return F.makeStateless(S)((function(t){var s,d=I.regex("^"+t.pattern+"$")(b.noFlags),g=function(r){var i=p.fromMaybe("")(r),o=u.bind(c.bindEither)(d)((function(t){return p.maybe(new c.Left(i))(c.Right.create)(m.not(m.heytingAlgebraFunction(m.heytingAlgebraFunction(m.heytingAlgebraBoolean)))(I.test)(t)(i)?p.Nothing.value:l.fromString(n)(e(i)))})),a=function(){if(o instanceof c.Left)return new p.Just(t.patternFailedMessage);if(o instanceof c.Right)return t.validate(o.value0);throw new Error("Failed pattern match at Lumi.Components.FixedPrecisionInput (line 141, column 15 - line 143, column 56): "+[o.constructor.name])}();return{validationError:a,value:function(){if(a instanceof p.Just)return new c.Left(i);if(a instanceof p.Nothing)return o;throw new Error("Failed pattern match at Lumi.Components.FixedPrecisionInput (line 147, column 17 - line 149, column 51): "+[a.constructor.name])}()}},w=function(n){return N.handler(N.merge()(N.mergeCons(new y.IsSymbol((function(){return"syntheticEvent"})))()()()()(N.mergeCons(new y.IsSymbol((function(){return"targetValue"})))()()()()(N.mergeNil)))({targetValue:E.targetValue,syntheticEvent:N.syntheticEvent}))((function(e){var t=g(e.targetValue);return f.for_(B.applicativeEffect)(f.foldableArray)(n)((function(n){return function(){return n(t.value,e.syntheticEvent)}}))}))};return F.element(r.input_)({"data-size":v.show(P.showSize)(t.size),"data-testid":h.toNullable(t.testId),"data-precision":v.show(a.showBigInt)(l.reflectPrecision(n)(l.PProxy.value)),type:t.type,autoComplete:"off",className:"lumi",defaultValue:c.either(o.identity(o.categoryFn))(l.toString(n))(t.value),disabled:t.disabled,max:t.max,min:t.min,name:t.name,onBlur:w([t.onChange,t.onBlur]),onFocus:w([t.onFocus]),onKeyPress:N.handler(N.syntheticEvent)((function(n){return t.strict&&d instanceof c.Right?function(){return r.cancelWhenNotMatch(d.value0,n)}:i.pure(B.applicativeEffect)(x.unit)})),placeholder:t.placeholder,readOnly:t.readOnly,required:t.required,style:C.mergeStyles([C.css({WebkitAppearance:"none",MozAppearance:"none",margin:0,width:160}),t.style]),validate:(s=p.fromMaybe(""),function(n){return s(g(h.toMaybe(n)).validationError)})})}))}}},mdh4:function(n,e,t){"use strict";var r,i=t("CO8c"),u=t("Ghzj"),o=t("RqP8"),a=t("+rx9"),s=t("6g2T"),c=t("5L+5"),l=t("jEZY"),f=t("jILx"),d=t("pMgY"),m=t("7HZk"),g=m.createComponent("FixedPrecisionInputExample"),p=(r={example1:new i.Left(""),example2:new i.Left("")},m.make()(g)({initialState:r,render:function(n){return s.column_([d.h3_("Fixed P100"),c.example(l.fixedPrecisionInput(u.knownPrecisionTenTimes(u.knownPrecisionTenTimes(u.knownPrecisionOne)))({type:l.defaults.type,disabled:l.defaults.disabled,max:l.defaults.max,min:l.defaults.min,name:l.defaults.name,onBlur:l.defaults.onBlur,onChange:function(e,t){return n.setState((function(n){return{example1:e,example2:n.example2}}))()},onFocus:l.defaults.onFocus,pattern:l.defaults.pattern,patternFailedMessage:l.defaults.patternFailedMessage,placeholder:l.defaults.placeholder,readOnly:l.defaults.readOnly,required:l.defaults.required,size:l.defaults.size,strict:l.defaults.strict,style:l.defaults.style,testId:l.defaults.testId,validate:l.defaults.validate,value:n.state.example1})),d.subtext_(o.show(i.showEither(o.showString)(u.showFixed(u.knownPrecisionTenTimes(u.knownPrecisionTenTimes(u.knownPrecisionOne)))))(n.state.example1)),f.vspace(f.S12.value),d.h3_("Fixed P100 (forced invalid)"),c.example(l.fixedPrecisionInput(u.knownPrecisionTenTimes(u.knownPrecisionTenTimes(u.knownPrecisionOne)))({type:l.defaults.type,disabled:l.defaults.disabled,max:l.defaults.max,min:l.defaults.min,name:l.defaults.name,onBlur:l.defaults.onBlur,onChange:function(e,t){return n.setState((function(n){return{example1:n.example1,example2:e}}))()},onFocus:l.defaults.onFocus,pattern:l.defaults.pattern,patternFailedMessage:l.defaults.patternFailedMessage,placeholder:l.defaults.placeholder,readOnly:l.defaults.readOnly,required:l.defaults.required,size:l.defaults.size,strict:l.defaults.strict,style:l.defaults.style,testId:l.defaults.testId,validate:l.defaults.validate,value:n.state.example2})),d.subtext_(o.show(i.showEither(o.showString)(u.showFixed(u.knownPrecisionTenTimes(u.knownPrecisionTenTimes(u.knownPrecisionOne)))))(n.state.example2))])}})(a.unit));n.exports={component:g,docs:p}}}]);