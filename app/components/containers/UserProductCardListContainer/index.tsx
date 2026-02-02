"use client";
import useSearch from "@/app/service/products/use-search";
import { ApiContext, Product } from "@/app/types/data";
import ProductCardList from "../../organisms/ProductCardList";
import Link from "next/link";
import ProductCard from "../../organisms/ProductCard";

// [필수] 1. 클라이언트 컴포넌트 선언

// API Context 설정
const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

interface UserProductCardListContainerProps {
  userId: number; // 상품을 소유한 사용자 ID
  products?: Product[]; // 초기에 표시할 상품 리스트
}

/**
 * 사용자 상품 카드 리스트 컨테이너
 * (Client Component - Container Role)
 */
const UserProductCardListContainer = ({
  userId,
  products,
}: UserProductCardListContainerProps) => {
  // 사용자가 소유한 상품 (클라이언트 사이드 페칭)
  const { products: userProducts } = useSearch(context, {
    userId,
    initial: products,
  });

  return (
    <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
      {userProducts.map((p) => (
        <div key={p.id}>
          {/* [변경점] Link 내부에 <a> 태그 제거, passHref 제거 */}
          <Link href={`/products/${p.id}`} style={{ textDecoration: "none" }}>
            <ProductCard
              variant="small"
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          </Link>
        </div>
      ))}
    </ProductCardList>
  );
};

export default UserProductCardListContainer;
