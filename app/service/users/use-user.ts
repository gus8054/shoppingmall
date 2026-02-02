import { ApiContext, User } from "@/app/types/data";
import useSWR from "swr";

type UseUserProps = {
  id: number; // 사용자 id
  initial?: User; // 초기 상태
};
type UseUser = {
  user?: User; // 취득할 사용자
  isLoading: boolean; // 로드 플래그
  isError: boolean; // 에러 플래그
};

/**
 * 개별 사용자 취득 API의 커스텀 훅
 * @param context API 컨텍스트
 * @param params 사용자 id와 초기 사용자
 * @returns 자용자와 API 호출 상태
 */
const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps
): UseUser => {
  const { data, error, isLoading } = useSWR<User>(
    context.apiRootUrl.replace(/\/$/g, "") + `/users/${id}`
  );
  return {
    user: data ?? initial,
    isLoading,
    isError: !!error,
  };
};
export default useUser;
