import{j as e,a}from"./iframe-DX1DL66T.js";import{L as s}from"./link-BYqRWSI0.js";import{G as d}from"./index-CeZbahUD.js";import{T as m}from"./index-BBGL2l39.js";import{B as o}from"./index-Bc7kkt5d.js";import{F as c}from"./index-DYK867Bv.js";import{t}from"./index-HunV23Ce.js";const n={column1:[{title:"홈",href:"/"},{title:"채용",href:"/"},{title:"알림",href:"/"}],column2:[{title:"사용 규약",href:"/"},{title:"개인 정보 정책",href:"/"},{title:"배송 및 반품",href:"/"}]},i=a(m)`
  cursor: pointer;
  color: ${t.colors.text};
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`,l=a.footer`
  padding: ${t.space.medium}px;
`,p=()=>e.jsxs(l,{children:[e.jsxs(c,{style:{flexDirection:{base:"column",md:"row"},justifyContent:"space-between"},children:[e.jsx(o,{style:{minWidth:{base:"100%",md:"120px"},paddingRight:{base:`${t.space.extraSmall}px`,md:`${t.space.medium}px`}},children:e.jsx("nav",{children:n.column1.map(r=>e.jsx(o,{style:{marginBottom:`${t.space.medium}px`},children:e.jsx(s,{href:r.href,style:{textDecoration:"none"},children:e.jsx(i,{children:r.title})})},r.title))})}),e.jsx(o,{style:{minWidth:{base:"100%",md:"120px"},paddingRight:{base:`${t.space.extraSmall}px`,md:`${t.space.medium}px`}},children:e.jsx("nav",{children:n.column2.map(r=>e.jsx(o,{style:{marginBottom:`${t.space.medium}px`},children:e.jsx(s,{href:r.href,style:{textDecoration:"none"},children:e.jsx(i,{children:r.title})})},r.title))})}),e.jsx(o,{style:{minWidth:{base:"100%",md:"120px"}},children:e.jsx("nav",{children:e.jsx(i,{as:"a",href:"#",target:"_blank",rel:"noopener noreferrer",children:e.jsx(d,{width:32,height:32})})})})]}),e.jsx(o,{style:{paddingTop:`${t.space.mediumLarge}px`,paddingBottom:`${t.space.medium}px`},children:e.jsx(m,{children:"© 2026 donghyun."})})]});p.__docgenInfo={description:"푸터",methods:[],displayName:"Footer"};export{p as F};
