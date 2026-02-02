import{j as e,a as p}from"./iframe-CDGzgA9E.js";import{n as d}from"./image-DjX4fqcg.js";const n=p.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  border-radius: var(--shape-image-border-radius, 0%);
  &[data-shape="circle"] {
    --shape-image-border-radius: 50%;
  }
  &[data-shape="square"] {
    --shape-image-border-radius: 0%;
  }
`,u=({shape:a="square",width:s,height:r,alt:i="shape image",src:t="/images/sample/1.jpg",...l})=>e.jsx(n,{style:{width:s,height:r},"data-shape":a,children:e.jsx(d,{alt:i,src:t,fill:!0,...l})});u.__docgenInfo={description:"",methods:[],displayName:"ShapeImage",props:{shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"square"',computed:!1}},width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shape image"',computed:!1}},src:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"/images/sample/1.jpg"',computed:!1}}}};export{u as S};
