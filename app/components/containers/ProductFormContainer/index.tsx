"use client";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "@/app/contexts/GlobalSpinnerContext";
import { ApiContext, Product } from "@/app/types/data";
import ProductForm, { ProductFormData } from "../../organisms/ProductForm";
import addProduct from "@/app/service/products/add-product";

// [필수] 1. 클라이언트 컴포넌트 선언

// API Context 설정
// (Next.js 13+에서는 환경 변수 접두사가 NEXT_PUBLIC_이어야 클라이언트에서 접근 가능)
const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

interface ProductFormContainerProps {
  onSave?: (error?: Error, product?: Product) => void; // 상품이 저장되었을 때의 이벤트 핸들러
}

/**
 * 상품 게시폼 컨테이너
 * (Client Component - Container Role)
 */
const ProductFormContainer = ({ onSave }: ProductFormContainerProps) => {
  const { authUser } = useAuthContext();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();

  // 게시 버튼을 눌렀을 때
  const handleSave = async (data: ProductFormData) => {
    if (!authUser) return;

    const product = {
      image: data.image,
      title: data.title,
      description: data.description,
      category: data.category,
      condition: data.condition,
      price: Number(data.price),
      // [주의] 실제 앱에서는 이미지를 업로드하고 반환된 URL을 사용해야 합니다.
      // 현재는 더미 이미지를 사용하고 있습니다.
      imageUrl: "/products/shoes/feet-1840619_1920.jpeg",
      blurDataUrl: "",
      owner: authUser,
    };

    try {
      setGlobalSpinner(true);

      // 제품 API로 상품을 추가한다
      const ret = await addProduct(context, { product });

      // 콜백 호출 (옵셔널 체이닝 사용)
      onSave?.(undefined, ret);
    } catch (err: unknown) {
      if (err instanceof Error) {
        window.alert(err.message);
        onSave?.(err);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <ProductForm onProductSave={handleSave} />;
};

export default ProductFormContainer;
