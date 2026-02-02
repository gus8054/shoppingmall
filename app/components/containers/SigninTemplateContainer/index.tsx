"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SigninTemplate from "../../templates/Signin";

const SigninTemplateContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // 3. 쿼리 파라미터 훅

  // 인증 후의 이벤트 핸들러
  const handleSignin = async (err?: Error) => {
    if (!err) {
      // 로그인에 성공하고, 쿼리가 지정되어 있을 때는 해당 URL로 이동한다.
      // searchParams.get()으로 값을 가져옵니다.
      const redirectTo = searchParams.get("redirect_to") ?? "/";

      console.log("Redirecting", redirectTo);
      router.push(redirectTo);
    }
  };
  return <SigninTemplate onSignin={handleSignin} />;
};
export default SigninTemplateContainer;
