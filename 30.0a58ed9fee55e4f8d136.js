(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"2veT":function(e,t,n){"use strict";var o,r,i,u,a,s,l,c=n("NL7e"),m=n("jPEo"),d=n("iMOL"),p=n("rUU2"),b=n("qIyz"),w=n("tiZW"),y=n("CO8c"),h=n("6nUn"),f=n("5a5/"),g=n("ll6l"),q=n("IORp"),x=n("H2/w"),C=n("SXP8"),I=n("U4xy"),v=n("UMim"),R=n("FYgN"),_=n("d46P"),S=n("RqP8"),F=n("Qku0"),N=n("+rx9"),L=n("a0EN"),O=n("+O+U"),B=n("xQXF"),M=n("6g2T"),k=n("QjzM"),E=n("DabP"),U=n("5L+5"),T=n("ErWj"),z=n("TKTp"),A=n("pYS8"),K=n("jILx"),D=n("pMgY"),P=n("7HZk"),J=n("wSBi"),j=n("sfHK"),Q=n("avNA"),V=n("h+YZ"),W=n("z85V"),Y=n("O43b"),H=J.createComponent("EditableTableExample"),X=(o=function(e){return function(t){return e.setState((function(n){return{rows:g.mapFlipped(b.functorNonEmptyArray)(e.state.rows)((function(e){return e.id===t.id?t:e})),customRemoveCell:n.customRemoveCell}}))}},r=function(e){return"$"+R.toStringWith(R.fixed(2))(e)},i=function(e){return function(t){return e.setState((function(n){return{rows:function(){var n=p.fromArray(p.filter(q.not(q.heytingAlgebraFunction(q.heytingAlgebraFunction(q.heytingAlgebraBoolean)))(h.eq(h.eqRec()(h.eqRowCons(h.eqRowCons(h.eqRowCons(h.eqRowCons(h.eqRowNil)()(new F.IsSymbol((function(){return"quantity"})))(w.eqBigInt))()(new F.IsSymbol((function(){return"price"})))(h.eqNumber))()(new F.IsSymbol((function(){return"id"})))(h.eqInt))()(new F.IsSymbol((function(){return"description"})))(h.eqString))))(t))(e.state.rows));if(n instanceof x.Nothing)return e.state.rows;if(n instanceof x.Just)return n.value0;throw new Error("Failed pattern match at Lumi.Components.Examples.EditableTable (line 132, column 18 - line 134, column 24): "+[n.constructor.name])}(),customRemoveCell:n.customRemoveCell}}))}},u=function(e){return e.state.customRemoveCell?function(e){return function(t){return A.row_([K.hspace(K.S16.value),k.dropdownIcon({icon:k.dropdownIconDefaults.icon,content:function(n){return V.div()({style:W.css({width:"328px",padding:"12px"}),children:[z.link({className:c.pure(x.applicativeMaybe)("lumi-dropdown-menu-item"),href:z.defaults.href,navigate:new x.Just((function(){return n(),O.log("Did something: "+S.show(S.showRecord()(S.showRecordFieldsCons(new F.IsSymbol((function(){return"description"})))(S.showRecordFieldsCons(new F.IsSymbol((function(){return"id"})))(S.showRecordFieldsCons(new F.IsSymbol((function(){return"price"})))(S.showRecordFieldsCons(new F.IsSymbol((function(){return"quantity"})))(S.showRecordFieldsNil)(w.showBigInt))(S.showNumber))(S.showInt))(S.showString)))(t))()})),style:z.defaults.style,target:z.defaults.target,testId:z.defaults.testId,text:D.p_("Do something with this row")}),f.foldMap(f.foldableMaybe)(P.monoidJSX)((function(e){return z.link({className:c.pure(x.applicativeMaybe)("lumi-dropdown-menu-item"),href:z.defaults.href,navigate:new x.Just((function(){return n(),e(t)()})),style:z.defaults.style,target:z.defaults.target,testId:z.defaults.testId,text:D.p_("Remove this row")})}))(e)]})},onOpen:k.dropdownIconDefaults.onOpen,alignment:I.notNull("right")})])}}:E.editableTableDefaults(h.eqRec()(h.eqRowCons(h.eqRowCons(h.eqRowCons(h.eqRowCons(h.eqRowNil)()(new F.IsSymbol((function(){return"quantity"})))(w.eqBigInt))()(new F.IsSymbol((function(){return"price"})))(h.eqNumber))()(new F.IsSymbol((function(){return"id"})))(h.eqInt))()(new F.IsSymbol((function(){return"description"})))(h.eqString))).removeCell},a={id:-1,description:"",quantity:w.fromInt(0),price:0},s=function(e){return w.toNumber(e.quantity)*e.price},l=function(e){return e.setState((function(t){return{rows:p.snoc(e.state.rows)({id:p.length(e.state.rows),description:a.description,price:a.price,quantity:a.quantity}),customRemoveCell:t.customRemoveCell}}))},J.make()(H)({initialState:{rows:p.fromNonEmpty(new C.NonEmpty({id:0,description:"Boxes",quantity:w.fromInt(1e3),price:1.32},[{id:1,description:"Tape",quantity:w.fromInt(100),price:.23}])),customRemoveCell:!1},render:function(e){return M.column_(c.pure(c.applicativeArray)(U.example(M.column_([A.row_([T.alignToInput(D.body_("Custom remove cell?")),T.input({type:T.switch.type,autoComplete:T.switch.autoComplete,autoFocus:T.switch.autoFocus,checked:e.state.customRemoveCell?T.On.value:T.Off.value,disabled:T.switch.disabled,max:T.switch.max,min:T.switch.min,maxLength:T.switch.maxLength,minLength:T.switch.minLength,step:T.switch.step,name:T.switch.name,onBlur:T.switch.onBlur,onChange:Y.handler(d.composeFlipped(Y.semigroupoidBuilder)(Q.stopPropagation)(Q.targetChecked))(f.traverse_(L.applicativeEffect)(f.foldableMaybe)((function(t){return e.setState((function(e){return{rows:e.rows,customRemoveCell:t}}))}))),onFocus:T.switch.onFocus,onKeyUp:T.switch.onKeyUp,pattern:T.switch.pattern,placeholder:T.switch.placeholder,readOnly:T.switch.readOnly,required:T.switch.required,size:T.switch.size,style:T.switch.style,testId:T.switch.testId,value:T.switch.value,variant:T.switch.variant})]),E.editableTable({addLabel:"Add another row",columns:[{label:"Description",renderCell:function(t){return T.input({type:T.text_.type,autoComplete:T.text_.autoComplete,autoFocus:T.text_.autoFocus,checked:T.text_.checked,disabled:T.text_.disabled,max:T.text_.max,min:T.text_.min,maxLength:T.text_.maxLength,minLength:T.text_.minLength,step:T.text_.step,name:T.text_.name,onBlur:T.text_.onBlur,onChange:Y.handler(Q.targetValue)((function(n){return o(e)({id:t.id,description:x.fromMaybe(t.description)(n),price:t.price,quantity:t.quantity})})),onFocus:T.text_.onFocus,onKeyUp:T.text_.onKeyUp,pattern:T.text_.pattern,placeholder:T.text_.placeholder,readOnly:T.text_.readOnly,required:T.text_.required,size:T.text_.size,style:W.css({width:"100%"}),testId:T.text_.testId,value:t.description,variant:T.text_.variant})}},{label:"Quantity",renderCell:function(t){return T.input({type:T.number.type,autoComplete:T.number.autoComplete,autoFocus:T.number.autoFocus,checked:T.number.checked,disabled:T.number.disabled,max:T.number.max,min:T.number.min,maxLength:T.number.maxLength,minLength:T.number.minLength,step:T.number.step,name:T.number.name,onBlur:T.number.onBlur,onChange:Y.handler(Q.targetValue)((function(n){return o(e)({id:t.id,description:t.description,price:t.price,quantity:x.fromMaybe(t.quantity)(m.bindFlipped(x.bindMaybe)(w.fromString)(n))})})),onFocus:T.number.onFocus,onKeyUp:T.number.onKeyUp,pattern:T.number.pattern,placeholder:T.number.placeholder,readOnly:T.number.readOnly,required:T.number.required,size:T.number.size,style:T.number.style,testId:T.number.testId,value:w.toString(t.quantity),variant:T.number.variant})}},{label:"Price",renderCell:function(t){return T.input({type:T.number.type,autoComplete:T.number.autoComplete,autoFocus:T.number.autoFocus,checked:T.number.checked,disabled:T.number.disabled,max:T.number.max,min:T.number.min,maxLength:T.number.maxLength,minLength:T.number.minLength,step:T.number.step,name:T.number.name,onBlur:T.number.onBlur,onChange:Y.handler(Q.targetValue)((function(n){return o(e)(x.fromMaybe(t)(m.bind(x.bindMaybe)(g.map(x.functorMaybe)(B.readInt(10))(n))((function(e){return c.pure(x.applicativeMaybe)(v.isNaN(e)?t:{price:e,description:t.description,id:t.id,quantity:t.quantity})}))))})),onFocus:T.number.onFocus,onKeyUp:T.number.onKeyUp,pattern:T.number.pattern,placeholder:T.number.placeholder,readOnly:T.number.readOnly,required:T.number.required,size:T.number.size,style:T.number.style,testId:T.number.testId,value:S.show(S.showNumber)(t.price),variant:T.number.variant})}},{label:"Total",renderCell:function(e){return j.text(r(s(e)))}}],maxRows:5,onRowAdd:l(e),onRowRemove:i(e),removeCell:u(e),readonly:!1,rowEq:h.eq(h.eqRec()(h.eqRowCons(h.eqRowCons(h.eqRowCons(h.eqRowCons(h.eqRowNil)()(new F.IsSymbol((function(){return"quantity"})))(w.eqBigInt))()(new F.IsSymbol((function(){return"price"})))(h.eqNumber))()(new F.IsSymbol((function(){return"id"})))(h.eqInt))()(new F.IsSymbol((function(){return"description"})))(h.eqString))),rows:new y.Right(e.state.rows),summary:A.row_([D.text({children:[j.text("Total:")],className:D.body.className,color:D.body.color,style:W.css({fontWeight:"bold"}),tag:D.body.tag,testId:D.body.testId}),D.body_(D.nbsp),D.body_(D.nbsp),D.body_(D.nbsp),D.body_(D.nbsp),D.body_(r(f.sum(b.foldableNonEmptyArray)(_.semiringNumber)(g.map(b.functorNonEmptyArray)(s)(e.state.rows))))])})]))))}})(N.unit));e.exports={component:H,docs:X}}}]);