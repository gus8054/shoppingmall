import{j as e,a}from"./iframe-CDGzgA9E.js";import{n as d}from"./image-DjX4fqcg.js";const m=a.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: var(--scale-image-width, inherit);
  height: var(--scale-image-height, inherit);
`,n=a(d)`
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`,o=({width:t="100%",height:i="100%",alt:s="scale image",src:l="/images/sample/1.jpg",...r})=>e.jsx(m,{style:{"--scale-image-width":t,"--scale-image-height":i},children:e.jsx(n,{"data-testid":"scale-image",fill:!0,alt:s,src:l,...r})});o.__docgenInfo={description:"",methods:[],displayName:"ScaleImage",props:{width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},alt:{defaultValue:{value:'"scale image"',computed:!1},required:!1},src:{defaultValue:{value:'"/images/sample/1.jpg"',computed:!1},required:!1}}};export{o as S};
