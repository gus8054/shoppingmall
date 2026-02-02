import { ApiContext, User } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

/**
 * 사용자 목록 API
 * @param context API 컨텍스트
 * @returns 사용자 목록
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return fetcher(context.apiRootUrl.replace(/\/$/g, "") + "/users", {
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default getAllUsers;
