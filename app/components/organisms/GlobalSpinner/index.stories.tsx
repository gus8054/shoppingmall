import type { Meta, StoryObj } from "@storybook/react";
import GlobalSpinner from "./index";
import Button from "@/app/components/atoms/Button";
import GlobalSpinnerContextProvider, {
  useGlobalSpinnerActionsContext,
} from "@/app/contexts/GlobalSpinnerContext";
import { expect, userEvent, waitFor, within } from "storybook/test";

const meta: Meta<typeof GlobalSpinner> = {
  title: "Organisms/GlobalSpinner",
  component: GlobalSpinner,
  tags: ["autodocs"],
  // 1. 데코레이터를 사용하여 스토리를 Provider로 감쌉니다.
  decorators: [
    (Story) => (
      <GlobalSpinnerContextProvider>
        <Story />
      </GlobalSpinnerContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GlobalSpinner>;

export const WithContextProvider: Story = {
  // 2. render 함수는 컴포넌트처럼 동작하므로 Hooks를 사용할 수 있습니다.
  render: function Render() {
    const setGlobalSpinner = useGlobalSpinnerActionsContext();

    const handleClick = () => {
      setGlobalSpinner(true);
      // 3초 후에 닫는다
      setTimeout(() => {
        setGlobalSpinner(false);
      }, 3000);
    };

    return (
      <>
        <GlobalSpinner />
        <Button onClick={handleClick}>스피너 표시</Button>
      </>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    // 1. 요소 찾기
    // GlobalSpinnerWrapper는 position: fixed라서 canvas(Story Root) 밖으로 나갈 수도 있지만,
    // layout 설정에 따라 canvas 안에 있을 수도 있습니다.
    // 만약 못 찾는다면 canvasElement.ownerDocument.body 등으로 범위를 넓혀야 합니다.
    // 여기서는 data-testid로 찾습니다.
    const spinnerWrapper = canvas.getByTestId("global-spinner");
    const triggerButton = canvas.getByRole("button", { name: "스피너 표시" });

    await step("1. 초기 상태: 스피너가 숨겨져 있어야 한다", async () => {
      // Activity mode="hidden"일 때 화면에 보이지 않는지 확인
      await expect(spinnerWrapper).not.toBeVisible();
    });

    await step(
      "2. 버튼 클릭: 스피너가 나타나야 한다 (3초간 유지)",
      async () => {
        await userEvent.click(triggerButton);

        // 상태 변경 후 리렌더링 대기
        await waitFor(() => {
          expect(spinnerWrapper).toBeVisible();
        });
      },
    );

    // 참고: 5초 뒤 꺼지는 것을 테스트하려면 timeout 옵션을 늘려야 합니다.
    // 하지만 단위 테스트에서 5초 대기는 권장하지 않으므로 생략하거나,
    // render 함수의 setTimeout 시간을 prop으로 받아 짧게 조절하는 것이 좋습니다.

    await step("3. 5초 후 자동 숨김 확인", async () => {
      await waitFor(
        () => {
          expect(spinnerWrapper).not.toBeVisible();
        },
        { timeout: 5000 },
      ); // 5초보다 길게 설정
    });
  },
};
