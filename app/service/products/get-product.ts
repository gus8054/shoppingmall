import { ApiContext, Product } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

type GetProductParams = {
  id: number; // 상품 ID
};
/**
 * 개별 상품 취득 API
 * @param context API 컨텍스트
 * @param params 상품 ID
 * @returns 상품
 */
const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams
): Promise<Product> => {
  return await fetcher(
    context.apiRootUrl.replace(/\/$/g, "") + `/products/${id}`,
    {
      headers: {
        Origin: "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};
export default getProduct;
