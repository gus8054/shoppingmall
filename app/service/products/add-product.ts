import { ApiContext, Product } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

type AddProductParams = {
  product: Omit<Product, "id">; // 추가할 상품
};

/**
 * 제품 신규 추가 API
 * @param context API 컨텍스트
 * @param params 신규 추가할 상품
 * @returns 신규 추가한 상품
 */
const addProduct = async (
  context: ApiContext,
  { product }: AddProductParams
): Promise<Product> => {
  return await fetcher(context.apiRootUrl.replace(/\/$/g, "") + "/products", {
    method: "POST",
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(product),
  });
};
export default addProduct;
