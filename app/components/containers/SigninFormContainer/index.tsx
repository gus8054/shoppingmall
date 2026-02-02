"use client";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "@/app/contexts/GlobalSpinnerContext";
import SigninForm from "../../organisms/SigninForm";

// [필수] 1. 클라이언트 컴포넌트 선언

interface SigninFormContainerProps {
  /**
   * 로그인 했을 때 호출되는 이벤트 핸들러
   */
  onSignin: (error?: Error) => void;
}

/**
 * 로그인폼 컨테이너
 * (Client Component - Container Role)
 */
const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const { signin } = useAuthContext();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();

  // 로그인 버튼을 눌렀을 때의 이벤트 핸들러
  const handleSignin = async (username: string, password: string) => {
    try {
      setGlobalSpinner(true);

      // 로그인 API 호출
      await signin(username, password);

      // 성공 시 콜백 호출 (옵셔널 체이닝 사용)
      onSignin?.();
    } catch (err: unknown) {
      if (err instanceof Error) {
        // 에러 내용을 표시한다
        window.alert(err.message);

        // 실패 시 에러와 함께 콜백 호출
        onSignin?.(err);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SigninForm onSignin={handleSignin} />;
};

export default SigninFormContainer;
