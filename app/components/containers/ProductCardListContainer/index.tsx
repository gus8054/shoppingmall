"use client";
import useSearch from "@/app/service/products/use-search";
import { ApiContext, Category, Condition } from "@/app/types/data";
import ProductCardList from "../../organisms/ProductCardList";
import Box from "../../layout/Box";
import RectLoader from "../../atoms/Loader";
import Link from "next/link";
import ProductCard from "../../organisms/ProductCard";

// API Context (환경 변수 핸들링)
const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

interface ProductCardListContainerProps {
  category?: Category; // 검색 쿼리 - 카테고리
  conditions?: Condition[]; // 검색 쿼리 - 상품 상태
}

/**
 * 상품 카드 리스트 컨테이너
 * (Client Component - Container Role)
 */
const ProductCardListContainer = ({
  category,
  conditions,
}: ProductCardListContainerProps) => {
  // 클라이언트 사이드 데이터 페칭 (SWR, React Query 등 내부 구현 추정)
  const { products, isLoading } = useSearch(context, {
    category,
    conditions,
  });

  return (
    <ProductCardList>
      {/* 로드 중에는 RectLoader를 표시 */}
      {isLoading &&
        Array.from(Array(16), (_, k) => (
          <Box key={k}>
            <Box
              style={{
                display: { base: "none", md: "block" },
              }}>
              <RectLoader width={240} height={240} />
            </Box>
            <Box
              style={{
                display: { base: "block", md: "none" },
              }}>
              <RectLoader width={160} height={160} />
            </Box>
          </Box>
        ))}
      {!isLoading &&
        products.map((p) => (
          <Box key={p.id}>
            <Link href={`/products/${p.id}`} style={{ textDecoration: "none" }}>
              {/* 상품 카드 */}
              <ProductCard
                variant="listing"
                title={p.title}
                price={p.price}
                imageUrl={p.imageUrl}
                blurDataUrl={p.blurDataUrl}
              />
            </Link>
          </Box>
        ))}
    </ProductCardList>
  );
};

export default ProductCardListContainer;
