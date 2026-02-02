import{F as s}from"./index-BcEcySLt.js";import"./iframe-DX1DL66T.js";import"./preload-helper-PPVm8Dsz.js";import"./link-BYqRWSI0.js";import"./use-merged-ref-CTM7XOGm.js";import"./index-CeZbahUD.js";import"./index-BBGL2l39.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-Bc7kkt5d.js";import"./styles-BeFhFhpp.js";import"./index-DYK867Bv.js";const{expect:e,within:m}=__STORYBOOK_MODULE_TEST__,d={title:"Organisms/Footer",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}},i={play:async({canvasElement:r,step:a})=>{const o=m(r),c=[{title:"홈",href:"/"},{title:"채용",href:"/"},{title:"알림",href:"/"}],l=[{title:"사용 규약",href:"/"},{title:"개인 정보 정책",href:"/"},{title:"배송 및 반품",href:"/"}];await a("첫 번째 컬럼의 링크들이 정상적으로 표시된다",async()=>{for(const t of c){const n=o.getByRole("link",{name:t.title});await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("href",t.href)}}),await a("두 번째 컬럼의 링크들이 정상적으로 표시된다",async()=>{for(const t of l){const n=o.getByRole("link",{name:t.title});await e(n).toBeInTheDocument(),await e(n).toHaveAttribute("href",t.href)}}),await a("GitHub 아이콘 링크가 보안 속성과 함께 표시된다",async()=>{const t=r.querySelector('a[target="_blank"]');await e(t).toBeInTheDocument(),await e(t).toHaveAttribute("href","#"),await e(t).toHaveAttribute("rel","noopener noreferrer")}),await a("저작권 정보가 표시된다",async()=>{const t=o.getByText("© 2026 donghyun.");await e(t).toBeInTheDocument()})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);

    // 테스트할 링크 데이터 정의 (컴포넌트 내부 데이터와 일치)
    const column1Links = [{
      title: "홈",
      href: "/"
    }, {
      title: "채용",
      href: "/"
    }, {
      title: "알림",
      href: "/"
    }];
    const column2Links = [{
      title: "사용 규약",
      href: "/"
    }, {
      title: "개인 정보 정책",
      href: "/"
    }, {
      title: "배송 및 반품",
      href: "/"
    }];
    await step("첫 번째 컬럼의 링크들이 정상적으로 표시된다", async () => {
      for (const link of column1Links) {
        // 텍스트로 링크 요소를 찾음
        const linkElement = canvas.getByRole("link", {
          name: link.title
        });
        await expect(linkElement).toBeInTheDocument();
        await expect(linkElement).toHaveAttribute("href", link.href);
      }
    });
    await step("두 번째 컬럼의 링크들이 정상적으로 표시된다", async () => {
      for (const link of column2Links) {
        const linkElement = canvas.getByRole("link", {
          name: link.title
        });
        await expect(linkElement).toBeInTheDocument();
        await expect(linkElement).toHaveAttribute("href", link.href);
      }
    });
    await step("GitHub 아이콘 링크가 보안 속성과 함께 표시된다", async () => {
      // GitHub 링크는 텍스트가 없고 아이콘만 있으므로, href나 속성으로 찾아야 함
      // 여기서는 target="_blank" 속성을 가진 유일한 링크라고 가정하고 찾습니다.
      // (Testing Library에서는 querySelector를 통해 복잡한 속성 선택을 할 수 있습니다)
      const githubLink = canvasElement.querySelector('a[target="_blank"]');
      await expect(githubLink).toBeInTheDocument();
      await expect(githubLink).toHaveAttribute("href", "#");

      // 보안 및 성능을 위한 rel 속성 확인 (noopener noreferrer)
      await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    });
    await step("저작권 정보가 표시된다", async () => {
      const copyright = canvas.getByText("© 2026 donghyun.");
      await expect(copyright).toBeInTheDocument();
    });
  }
}`,...i.parameters?.docs?.source}}};const x=["Standard"];export{i as Standard,x as __namedExportsOrder,d as default};
