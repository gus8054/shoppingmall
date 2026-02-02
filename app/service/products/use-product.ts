import { ApiContext, Product } from "@/app/types/data";
import useSWR from "swr";

type UseProductProps = {
  id: number; // 취득할 상품 ID
  initial?: Product; // 초기 상품
};
type UseProduct = {
  product?: Product; // 취득할 상품
  isLoading: boolean; // 로드 플래그
  isError: boolean; // 에러 플래그
};

/**
 * 개별 상품 취득 API의 커스텀 훅
 * @param context API 컨텍스트
 * @param params 상품 ID와 초기 상품
 * @returns 상품과 API 호출 상태
 */
const useProduct = (
  context: ApiContext,
  { id, initial }: UseProductProps
): UseProduct => {
  const { data, isLoading, error } = useSWR<Product>(
    context.apiRootUrl.replace(/\/$/g, "") + `/producats/${id}`
  );
  return {
    product: data ?? initial,
    isLoading,
    isError: !!error,
  };
};
export default useProduct;
