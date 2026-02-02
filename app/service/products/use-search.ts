import { ApiContext, Category, Condition, Product } from "@/app/types/data";
import useSWR from "swr";

type UseSearchProps = {
  category?: Category; // 상품 카테고리
  conditions?: Condition[]; // 상품 상태
  userId?: number; // 소유한 사용자 ID
  sort?: keyof Omit<Product, "owner">; // 정렬할 키
  order?: "asc" | "desc"; // 오름차순 또는 내림차순
  initial?: Product[]; // 초기 상태
};
type UseSearch = {
  products: Product[]; // 검색에 일치한 상품 목록
  isLoading: boolean; // 로드 플래그
  isError: boolean; // 에러 플래그
};

/**
 * 상품 목록 취득 API의 커스텀 훅
 * @param context API 컨텍스트
 * @param params 검색 조건
 * @returns 상품 목록과 API 호출 상태
 */
const useSearch = (
  context: ApiContext,
  {
    category,
    userId,
    conditions,
    initial,
    sort = "id",
    order = "desc",
  }: UseSearchProps
): UseSearch => {
  const path = context.apiRootUrl.replace(/\/$/g, "") + "/products";
  const params = new URLSearchParams();

  if (category) params.append("category", category);
  if (userId) params.append("owner.id", `${userId}`);
  if (conditions)
    conditions.forEach((condition) => params.append("condition", condition));
  if (sort) params.append("sort", sort);
  if (order) params.append("order", order);

  const query = params.toString();
  const requestUrl = query.length > 0 ? `${path}?${query}` : path;

  const { data, isLoading, error } = useSWR<Product[]>(requestUrl);
  return {
    products: data ?? initial ?? [],
    isLoading,
    isError: !!error,
  };
};
export default useSearch;
