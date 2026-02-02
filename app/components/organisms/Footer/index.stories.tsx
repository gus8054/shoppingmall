import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./index";
import { expect, within } from "storybook/test";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"], // 자동 문서 생성
  parameters: {
    // 푸터는 화면 전체 너비로 보는 것이 자연스러우므로 패딩 제거
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Standard: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // 테스트할 링크 데이터 정의 (컴포넌트 내부 데이터와 일치)
    const column1Links = [
      { title: "홈", href: "/" },
      { title: "채용", href: "/" },
      { title: "알림", href: "/" },
    ];

    const column2Links = [
      { title: "사용 규약", href: "/" },
      { title: "개인 정보 정책", href: "/" },
      { title: "배송 및 반품", href: "/" },
    ];

    await step("첫 번째 컬럼의 링크들이 정상적으로 표시된다", async () => {
      for (const link of column1Links) {
        // 텍스트로 링크 요소를 찾음
        const linkElement = canvas.getByRole("link", { name: link.title });

        await expect(linkElement).toBeInTheDocument();
        await expect(linkElement).toHaveAttribute("href", link.href);
      }
    });

    await step("두 번째 컬럼의 링크들이 정상적으로 표시된다", async () => {
      for (const link of column2Links) {
        const linkElement = canvas.getByRole("link", { name: link.title });

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
  },
};
