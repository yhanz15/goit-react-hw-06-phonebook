"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[960],{7960:function(n,t,r){r.r(t),r.d(t,{default:function(){return M}});var e,o,i,a,d,p,s,c,l,x,h,u,g=r(6856),b=r(3853),m=r(168),f=r(6487),Z=f.ZP.table(e||(e=(0,m.Z)(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 40px;\n"]))),j=f.ZP.thead(o||(o=(0,m.Z)(["\n  width: 100px;\n  border-bottom-width: 1px;\n  position: sticky;\n  top: 4rem;\n  z-index: 10;\n  background-color: rgba(255, 255, 255, 1);\n  font-size: 18px;\n"]))),k=f.ZP.tr(i||(i=(0,m.Z)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n"]))),v=f.ZP.th(a||(a=(0,m.Z)(["\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  font-weight: 500;\n"]))),P=f.ZP.thead(d||(d=(0,m.Z)(["\n  padding-top: 14px;\n  padding-bottom: 14px;\n  font-size: 14px;\n\n  td {\n    padding-top: 14px;\n    padding-bottom: 14px;\n    font-weight: 500;\n  }\n"]))),w=f.ZP.tr(p||(p=(0,m.Z)(["\n  position: relative;\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba(245, 245, 245, 1);\n\n    .ButtonsWrapper {\n      display: block;\n    }\n  }\n"]))),C=f.ZP.td(s||(s=(0,m.Z)(["\n  padding: 1px 16px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-size: 18px;\n"]))),z=f.ZP.span(c||(c=(0,m.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  line-height: 24px;\n"]))),y=f.ZP.td(l||(l=(0,m.Z)(["\n  padding: 1px 16px;\n  font-size: 18px;\n  line-height: 24px;\n"]))),N=f.ZP.td(x||(x=(0,m.Z)(["\n  display: none;\n  position: absolute;\n  top: 14px;\n  right: 8px;\n"]))),_=f.ZP.button(h||(h=(0,m.Z)(["\n  padding: 4px 6px;\n  background: transparent;\n  margin-right: 10px;\n  border: none;\n  color: #00000051;\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),A=f.ZP.button(u||(u=(0,m.Z)(["\n  padding: 4px 6px;\n  background: transparent;\n  border: none;\n  color: #00000051;\n  cursor: pointer;\n\n  &:hover {\n    color: rgba(0, 0, 0, 1);\n  }\n"]))),B=r(3044),F=r(9434),I=r(3661),T=r(7689),W=r(184);function D(){for(var n="#",t=0;t<6;t++)n+="0123456789ABCDEF"[Math.floor(16*Math.random())];return n}var L=function(n){var t=n.stateItem,r=(0,F.v9)((function(n){return n.contacts.items.length})),e=(0,F.v9)(I.K4),o=(0,F.v9)((function(n){return n.filter})),i=e.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())})),a=(0,T.s0)(),d=(0,F.I0)();return(0,W.jsx)(W.Fragment,{children:(0,W.jsxs)(Z,{children:[(0,W.jsx)(j,{children:(0,W.jsxs)(k,{children:[(0,W.jsx)(v,{children:"Name"}),(0,W.jsx)(v,{children:"Phone Number"})]})}),(0,W.jsx)(P,{children:(0,W.jsx)("tr",{children:(0,W.jsxs)("td",{children:["CONTACTS (",r,")"]})})}),(0,W.jsx)("tbody",{children:i.map((function(n){var r=n.name.slice(0,1).toUpperCase(),e=n.name.charAt(0).toUpperCase()+n.name.slice(1);return(0,W.jsxs)(w,{onClick:function(){return r=n.id,void a("contact/".concat(r),{state:t});var r},children:[(0,W.jsxs)(C,{children:[(0,W.jsx)(B.Z,{sx:{bgcolor:D(),width:40,height:40},children:r}),(0,W.jsx)(z,{children:e})]}),(0,W.jsx)(y,{children:n.number}),(0,W.jsxs)(N,{className:"ButtonsWrapper",children:[(0,W.jsx)(_,{onClick:function(t){t.stopPropagation(),a("contact/".concat(n.id,"/edit"))},children:(0,W.jsx)(b.vPQ,{size:25})}),(0,W.jsx)(A,{onClick:function(t){t.stopPropagation(),window.confirm("Delete contact?")&&d((0,I.zY)(n.id))},children:(0,W.jsx)(g.ZkW,{size:25})})]})]},n.id)}))})]})})},M=function(){var n=(0,T.TH)();return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(L,{stateItem:{from:n}})})}}}]);
//# sourceMappingURL=960.3f3ad129.chunk.js.map