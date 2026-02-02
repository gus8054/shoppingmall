import type { Preview } from "@storybook/nextjs-vite";

import GlobalStyle from "../app/theme/globalStyle";
import { PartialStoryFn } from "storybook/internal/types";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
  decorators: [
    (Story: PartialStoryFn) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      );
    },
  ],
  parameters: {
    nextjs: {
      appDirectory: true, // 👈 이 컴포넌트는 App Router 환경에서 동작한다고 명시
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
