import { ApiContext, User } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

type GetUserParams = {
  id: number; // 사용자 id
};

/**
 * 사용자 API
 * @param context API 컨텍스트
 * @param params 파라미터
 * @returns 사용자
 * @sample
 * {
 *  "id": "1",
 *  "username": "donghyun"
 *  "displayName": "Donghyun Kim",
 *  "email": "example@example.com",
 *  "profileImageUrl": "/users/1.png",
 *  "description": "My Name is Donghyun Kim. Nice to meet you. How are you today?"
 * }
 *
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<User> => {
  return await fetcher(
    context.apiRootUrl.replace(/\/$/g, "") + `/users/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getUser;
