import { ApiContext } from "@/app/types/data";
import fetcher from "@/app/utils/fetcher";

type PurchaseParams = {
  productId: number; // 구매할 상품 ID
};
type PurchaseReturns = {
  message: string; // 구매 결과 메시지
};
/**
 * 상품 구매 API
 * @param context API 컨텍스트
 * @param params 상품 ID
 * @returns 구입 결과의 메시지
 */

const purchase = async (
  context: ApiContext,
  params: PurchaseParams
): Promise<PurchaseReturns> => {
  return await fetcher(context.apiRootUrl.replace(/\/$/g, "") + "/purchases", {
    method: "POST",
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify(params),
  });
};
export default purchase;
