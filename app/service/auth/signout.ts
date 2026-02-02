import { ApiContext } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

type SignoutReturn = { message: string };
/**
 * 로그아웃 API
 * @param context API 컨텍스트
 * @returns 로그아웃 메시지
 */
const signout = async (context: ApiContext): Promise<SignoutReturn> => {
  return await fetcher(
    context.apiRootUrl.replace(/\/$/g, "") + "/auth/signout",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default signout;
