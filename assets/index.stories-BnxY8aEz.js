import{r as v,j as a}from"./iframe-DX1DL66T.js";import{D as w}from"./index-BlJPpN_b.js";import{B}from"./index-DJSC04U8.js";import{B as d}from"./index-Bc7kkt5d.js";import{t as y}from"./index-HunV23Ce.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CeZbahUD.js";import"./index-BBGL2l39.js";import"./breakpoint-DsEcWJkq.js";import"./styles-BeFhFhpp.js";const{createEvent:C,expect:o,fireEvent:g,fn:x,userEvent:f,waitFor:p,within:D}=__STORYBOOK_MODULE_TEST__,A={title:"Molecules/Dropzone",component:w,tags:["autodocs"],args:{acceptedFileTypes:["image/png","image/jpeg","image/jpg","image/gif"],width:"100%",height:"200px",hasError:!1,onDrop:x(),onChange:x()},argTypes:{name:{control:"text",description:"input file의 name"},height:{control:"text",description:"세로폭",table:{type:{summary:"string"}}},width:{control:"text",description:"가로폭",table:{type:{summary:"string"}}},hasError:{control:"boolean",description:"변형 에러 플래그",table:{type:{summary:"boolean"}}},acceptedFileTypes:{control:"object",description:"허용 파일 타입",table:{type:{summary:"array"}}},onDrop:{type:"function",description:"파일이 드롭 입력되었을 때의 이벤트 핸들러",action:"drop"},onChange:{type:"function",description:"파일이 입력되었을 때의 이벤트 핸들러",action:"change"}},play:async({canvasElement:u,step:n,args:i})=>{const r=D(u),l=r.getByTestId("dropzone-input"),t=l.parentElement,m=new File(["dummy content"],"test-image.png",{type:"image/png"}),e=new File(["dummy content"],"test-file.txt",{type:"text/plain"});await n("1. 이미지 파일 선택시 화면에 미리보기 이미지로 나타나고 onChange prop 실행",async()=>{await f.upload(l,m),await o(i.onChange).toHaveBeenCalled(),await p(()=>{const s=r.getByAltText("sample");o(s).toBeInTheDocument(),o(s).toHaveAttribute("src")})}),await n("2. 지원형식에 맞지 않은 파일 선택시 화면에 나타나지 않는다",async()=>{i.onChange.mockClear(),await f.upload(l,e),await p(()=>{const s=r.queryByAltText("sample");o(s).toBeInTheDocument()})}),await n("3. 드래그 진입 및 탈출시 드롭존 포커싱 변화 (data-is-focused)",async()=>{await g.dragEnter(t),await p(()=>{o(t).toHaveAttribute("data-is-focused","true")}),await g.dragLeave(t),await p(()=>{o(t).toHaveAttribute("data-is-focused","false")})}),await n("4. 드롭존 안에 드롭하면 onDrop prop 실행",async()=>{i.onDrop.mockClear();const s=new File(["dummy content"],"test.png",{type:"image/png"}),h=C.drop(t);Object.defineProperty(h,"dataTransfer",{value:{files:[s],types:["Files"]}}),await g(t,h),await o(t).toHaveAttribute("data-is-focused","false"),await o(i.onDrop).toHaveBeenCalled()})}},c={render:function(n){const[i,r]=v.useState([]),l=e=>{r(e),n.onDrop?.(e)},t=e=>{r(e),n.onChange?.(e)},m=()=>{r([])};return a.jsxs(a.Fragment,{children:[a.jsx(d,{style:{margin:`${y.space.small}px`},children:a.jsx(w,{...n,onDrop:l,onChange:t})}),a.jsx(d,{style:{margin:`${y.space.small}px`},children:a.jsx(B,{variant:"secondary",onClick:m,children:"모든 이미지를 클리어"})}),a.jsx(d,{children:i.map(e=>a.jsx("img",{src:URL.createObjectURL(e),width:"100px",alt:"sample",style:{marginRight:"8px"}},e.name))})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [files, setFiles] = useState<File[]>([]);
    const handleDrop = (files: File[]) => {
      setFiles(files);
      args.onDrop?.(files);
    };
    const handleChange = (files: File[]) => {
      setFiles(files);
      args.onChange?.(files);
    };
    const clearImages = () => {
      setFiles([]);
    };
    return <>\r
        <Box style={{
        margin: \`\${theme.space.small}px\`
      }}>\r
          {/* Dropzone이 제어 컴포넌트로 동작하도록 value와 이벤트 연결 */}\r
          <Dropzone {...args} onDrop={handleDrop} onChange={handleChange} />\r
        </Box>\r
        <Box style={{
        margin: \`\${theme.space.small}px\`
      }}>\r
          <Button variant="secondary" onClick={clearImages}>\r
            모든 이미지를 클리어\r
          </Button>\r
        </Box>\r
        <Box>\r
          {files.map(f =>
        // eslint-disable-next-line @next/next/no-img-element
        <img src={URL.createObjectURL(f)} width="100px" key={f.name} alt="sample" style={{
          marginRight: "8px"
        }} />)}\r
        </Box>\r
      </>;
  }
}`,...c.parameters?.docs?.source}}};const H=["WithControl"];export{c as WithControl,H as __namedExportsOrder,A as default};
