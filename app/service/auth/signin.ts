import { ApiContext, SigninParams, User } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

/**
 * 로그인 API
 * @param context API 컨텍스트
 * @param params 파라미터
 * @returns 로그인 사용
 */

const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return fetcher(context.apiRootUrl.replace(/\/$/g, "") + "/auth/signin", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

export default signin;
