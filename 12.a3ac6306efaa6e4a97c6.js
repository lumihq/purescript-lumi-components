(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8],{"/OsL":function(e,n,t){"use strict";var r,o,i=t("bqfS"),c=t("g4Rk"),s=t("eAL6"),u=t("vKy7"),l=(r=i.styleModifier((function(e){return u.css()({borderColor:u.color(e.colors.black5),backgroundColor:u.color(e.colors.black5)})})),o=s._justify(s.SpaceBetween.value),function(e){return r(o(s._row(c._round(c.border(e)))))});e.exports={clip:l}},"1MXd":function(e,n,t){"use strict";var r=t("BAuV"),o=t("NL7e"),i=t("jPEo"),c=t("6nUn"),s=t("5a5/"),u=t("W+DG"),l=t("5Iaq"),a=t("U4xy"),d=t("FcYH"),f=t("a0EN"),p=t("IHIf"),b=t("2+07"),v=t("+O+U"),m=t("FDst"),y=t("5JIH"),h=t("nEj/"),x=t("DkUo"),g=t("jILx"),w=t("R8Br"),R=t("WwoG"),C=t("bqfS"),N=t("eAL6"),S=t("/OsL"),k=t("UYRu"),_=t("sfHK"),E=t("h+YZ"),L=t("vKy7"),A=t("C9r8"),B=t("xDnj"),T=t("bgH5"),M=t("g47h"),H=t("xxbb"),j=function(e){return e},I=new l.Newtype((function(e){return e}),j),U=function(e){return T.coerceHook(I)(T.bind(T.ixBindRender)(M.useResetToken)((function(n){return T.bind(T.ixBindRender)(A.useState(!1))((function(t){var u=function(){var o=A.readRefMaybe(e)();return s.for_(f.applicativeEffect)(s.foldableMaybe)(o)(y.runEffectFn3(r.copyNodeContents)((function(){return t.value1((function(e){return!0}))(),n.value1()}))((function(e){return v.error(m.message(e))()})))()};return T.discard(T.ixBindRender)(B.useAff(d.eqTuple(M.eqResetToken)(c.eqBoolean))(new d.Tuple(n.value0,t.value0))(o.when(p.applicativeAff)(t.value0)(i.discard(i.discardUnit)(p.bindAff)(p.delay(5e3))((function(){return b.liftEffect(p.monadEffectAff)(t.value1((function(e){return!1})))})))))((function(){return o.pure(T.applicativeRender(H.refl))({copied:t.value0,copy:u})}))}))})))},q=h.unsafePerformEffect(x.lumiComponent()()()("Clip")({content:[]})((function(e){return T.bind(T.ixBindRender)(k.useTheme)((function(n){return T.bind(T.ixBindRender)(A.useRef(a.null))((function(t){return T.bind(T.ixBindRender)(U(t))((function(r){var i,c=x.lumiElement(R.button)(R._linkStyle(C.styleModifier_(L.merge([L.css()({marginLeft:L.prop(g.isStylePropertySpace)(g.S16.value),lineHeight:L.str("1.2")}),u.guard(L.monoidStyle)(r.copied)(L.css()({color:L.color(n.colors.black1),"&:hover":L.nested(L.css()({textDecoration:L.none}))}))]))((function(e){return{css:e.css,className:e.className,content:[_.text(r.copied?"Copied!":"Copy")],onPress:r.copy,kind:e.kind,accessibilityLabel:e.accessibilityLabel,color:e.color,size:e.size,state:e.state,type:e.type}}))));return o.pure(T.applicativeRender(H.refl))(L.element(E["div'"]())({className:e.className,css:C.toCSS(n)(e)(S.clip),children:[L.element(E["div'"]())({className:"",css:C.toCSS(n)(e)((i=N._justify(N.Center.value),function(e){return i(N.box(e))})),ref:t,children:e.content}),x.lumiElement(w.box)(N._justify(N.Center.value)((function(e){return{css:e.css,className:e.className,content:[c]}})))]}))}))}))}))})));e.exports={clip:q,UseClip:j,useClip:U,ntUseClip:I,copyNodeContents:r.copyNodeContents}},BAuV:function(e,n,t){"use strict";n.copyNodeContents=(e,n,t)=>{try{const r=(e=>{const n=document.createRange();n.selectNodeContents(e);var t=window.getSelection();return t.removeAllRanges(),t.addRange(n),t})(t);if(null!=window.navigator.clipboard)return void window.navigator.clipboard.writeText(r.toString().trim()).then(()=>{r.removeAllRanges()}).then(e,n);return window.document.execCommand("copy")?(r.removeAllRanges(),e()):n(new Error("Failed to copy"))}catch(e){n(e)}}},g47h:function(e,n,t){"use strict";var r=t("NL7e"),o=t("6nUn"),i=t("FcYH"),c=t("nEj/"),s=t("C9r8"),u=t("bgH5"),l=t("xxbb"),a=t("jNIV"),d=new o.Eq(a.unsafeRefEq),f=function(e){return{}},p=c.unsafePerformEffect(f),b=u.bind(u.ixBindRender)(s.useState(p))((function(e){return r.pure(u.applicativeRender(l.refl))(new i.Tuple(e.value0,(function(){var n={};return e.value1((function(e){return n}))()})))}));e.exports={useResetToken:b,eqResetToken:d}},g4Rk:function(e,n,t){"use strict";var r,o,i=t("jILx"),c=t("bqfS"),s=t("eAL6"),u=t("vKy7"),l=(r=c.styleModifier((function(e){return u.css()({label:u.str("border"),borderWidth:u.int(1),borderColor:u.color(e.colors.black4),borderStyle:u.str("solid"),padding:u.str("8px 16px")})})),function(e){return r(s.box(e))}),a=c.styleModifier_(u.css()({borderLeft:u.none,borderRight:u.none,borderRadius:u.int(0),paddingLeft:u.int(0),paddingRight:u.int(0)})),d=c.styleModifier_(u.css()({borderRadius:u.int(4)})),f=c.styleModifier((function(e){return u.css()({"&:not(:first-child)":u.nested(u.css()({marginTop:u.prop(i.isStylePropertySpace)(i.S8.value)}))})})),p=c.styleModifier((function(e){return u.css()({"&:first-child":u.nested(u.css()({borderTopColor:u.color(e.colors.transparent)})),"&:last-child":u.nested(u.css()({borderBottomColor:u.color(e.colors.transparent)})),"&:not(:first-child)":u.nested(u.css()({marginTop:u.int(-1),":not(:hover)":u.nested(u.css()({borderTopColor:u.color(e.colors.transparent)}))}))})})),b=(o=c.styleModifier((function(e){return u.css()({"&:hover":u.nested(u.css()({borderColor:u.color(e.colors.black2)}))})})),function(e){return o(s._focusable(s._interactive(e)))});e.exports={border:l,_round:d,_topBottom:a,_interactive:b,_listSpaced:f,_listCompact:p}},ugM7:function(e,n,t){"use strict";var r=t("DkUo"),o=t("5L+5"),i=t("jILx"),c=t("pMgY"),s=t("R8Br"),u=t("1MXd"),l=r.lumiElement(s.box)((function(e){return{css:e.css,className:e.className,content:[c.p_('The Clip component wraps the provided content with a grey border and a "Copy" button, which copies the text content into the system clipboard.'),c.p_("If clipboard access is not allowed or not supported the text will be left highlighted, allowing the user to press ctrl+c manually. Only the plain text content is copied, not the HTML."),i.vspace(i.S24.value),o.example(r.lumiElement(u.clip)((function(e){return{css:e.css,className:e.className,content:[c.body_("someone@email.com")]}}))),c.p_("The Clip behavior is also available as a React hook.")]}}));e.exports={docs:l}},xDnj:function(e,n,t){"use strict";var r=t("NL7e"),o=t("XSw5"),i=t("H2/w"),c=t("5Iaq"),s=t("IHIf"),u=t("FDst"),l=t("C9r8"),a=t("bgH5"),d=t("xxbb"),f=function(e){return e},p=new c.Newtype((function(e){return e}),f);e.exports={UseAff:f,useAff:function(e){return function(n){return function(t){return a.coerceHook(p)(a.bind(a.ixBindRender)(l.useState(i.Nothing.value))((function(c){return a.discard(a.ixBindRender)(l.useEffect(e)(n)((function(){c.value1(o.const(i.Nothing.value))();var e=s.runAff((function(e){return c.value1(o.const(i.Just.create(e)))}))(t)();return s.launchAff_(s.killFiber(u.error("Effect hook discarded."))(e))})))((function(){return r.pure(a.applicativeRender(d.refl))(c.value0)}))})))}}},ntUseAff:p}}}]);