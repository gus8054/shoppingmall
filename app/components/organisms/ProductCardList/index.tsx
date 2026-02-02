import Grid from "@/app/components/layout/Grid";

interface ProductCardListProps {
  numberPerRow?: number; // 1행에 표시할 상품 수
  numberPerRowForMobile?: number; // 모바일에서 1행에 표시할 상품 수
}

/**
 * 상품 카드 리스트
 */
const ProductCardList = ({
  numberPerRow = 4,
  numberPerRowForMobile = 1,
  children,
}: React.PropsWithChildren<ProductCardListProps>) => {
  return (
    <Grid
      style={{
        gap: "16px",
        gridTemplateColumns: {
          base: `repeat(${numberPerRowForMobile}, 1fr)`,
          md: `repeat(${numberPerRow}, 1fr)`,
        },
        justifyContent: "center",
      }}>
      {children}
    </Grid>
  );
};

export default ProductCardList;
