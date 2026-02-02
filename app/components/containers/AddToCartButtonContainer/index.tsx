"use client";
import { useShoppingCartContext } from "@/app/contexts/ShoppingCartContext";
import { Product } from "@/app/types/data";
import Button from "../../atoms/Button";
import { CSSProperties } from "react";

interface AddToCartButtonContainerProps {
  product: Product; // 추가될 상품
  onAddToCartButtonClick?: (product: Product) => void; // 추가 버튼을 클릭했을 때의 이벤트 핸들러
}

/**
 * 카트 추가 버튼 컨테이너
 * (Client Component - Container Role)
 */
const AddToCartButtonContainer = ({
  product,
  onAddToCartButtonClick,
}: AddToCartButtonContainerProps) => {
  // 2. 훅 사용은 클라이언트 컴포넌트에서만 가능합니다.
  const { cart, addProductToCart } = useShoppingCartContext();

  const handleAddToCartButtonClick = () => {
    const productId = Number(product.id);
    const result = cart.findIndex((v) => v.id === productId);

    // 같은 상품이 카트에 없으면 카트에 추가한다
    if (result === -1) {
      addProductToCart(product);
    }

    // 옵셔널 체이닝으로 조금 더 안전하게 호출
    onAddToCartButtonClick?.(product);
  };

  return (
    <Button
      style={
        {
          "--button-width": "100%",
          "--button-width-md": "400px",
          height: "66px",
        } as CSSProperties
      }
      onClick={handleAddToCartButtonClick}>
      카트에 추가
    </Button>
  );
};

export default AddToCartButtonContainer;
