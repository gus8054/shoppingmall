"use client"; // [필수] 1. 클라이언트 컴포넌트 선언

import CartProduct from "@/app/components/organisms/CartProduct";
import { useGlobalSpinnerActionsContext } from "@/app/contexts/GlobalSpinnerContext";
import { useShoppingCartContext } from "@/app/contexts/ShoppingCartContext";
import purchase from "@/app/service/purchases/purchase";
import { ApiContext } from "@/app/types/data";

// API Context 설정 (컴포넌트 외부 혹은 별도 설정 파일로 분리 가능)
const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

/**
 * 카트 컨테이너
 * (Client Component - Container Role)
 */
const CartContainer = () => {
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  const { cart, removeProductFromCart } = useShoppingCartContext();

  // 삭제 버튼 클릭 시, 상품을 삭제
  const handleRemoveButtonClick = (id: number) => {
    removeProductFromCart(id);
  };

  // 구입 버튼 클릭 시, 상품을 구입
  const handleBuyButtonClick = async (id: number) => {
    try {
      setGlobalSpinner(true);

      // 비동기 구입 로직 실행
      await purchase(context, { productId: id });

      window.alert("구입했습니다");

      // 상품 구입 후에는 카트에서 상품을 삭제한다
      removeProductFromCart(id);
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return (
    <>
      {cart.map((p) => (
        <CartProduct
          key={p.id}
          id={p.id}
          imageUrl={p.imageUrl}
          title={p.title}
          price={p.price}
          onRemoveButtonClick={handleRemoveButtonClick}
          onBuyButtonClick={handleBuyButtonClick}
        />
      ))}
    </>
  );
};

export default CartContainer;
