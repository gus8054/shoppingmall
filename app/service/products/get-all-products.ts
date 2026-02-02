import { ApiContext, Category, Condition, Product } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

type GetAllProductsParams = {
  category?: Category; // 상품 카테고리
  conditions?: Condition[]; // 상품 상태
  userId?: number; // 소유한 사용자 ID
  sort?: keyof Omit<Product, "owner">; // 정렬할 키
  order?: "asc" | "desc"; // 오름차순 또는 내림차순
  limit?: number; // 취득할 데이터 수
  page?: number; //페이지 수
};

/**
 * 제품 목록 취득 API
 * @param context API 컨텍스트
 * @param params 검색 조건
 * @returns 상품 목록
 */
const getAllProducts = async (
  context: ApiContext,
  {
    category,
    conditions,
    userId,
    page,
    limit,
    sort = "id",
    order = "desc",
  }: GetAllProductsParams = {}
): Promise<Product[]> => {
  const path = context.apiRootUrl.replace(/\/$/g, "") + "/products";
  const params = new URLSearchParams();

  if (category) params.append("category", category);
  if (conditions)
    conditions.forEach((condition) => params.append("condition", condition));
  if (userId) params.append("owner.id", `${userId}`);
  if (page) params.append("_page", `${page}`);
  if (limit) params.append("_limit", `${limit}`);
  if (sort) params.append("_sort", sort);
  if (order) params.append("_order", order);
  const query = params.toString();
  const requestUrl = query.length > 0 ? `${path}?${query}` : path;
  return await fetcher(requestUrl, {
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
  });
};
export default getAllProducts;
