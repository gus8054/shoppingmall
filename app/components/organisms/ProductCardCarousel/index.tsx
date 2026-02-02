import Flex from "@/app/components/layout/Flex";
import theme from "@/app/theme";

interface ProductCardCarouselProps {
  children?: React.ReactNode;
}

/**
 * 상품 카드 캐러셀
 */
const ProductCardCarousel = ({ children }: ProductCardCarouselProps) => {
  return (
    <Flex
      style={{
        // overflowX: { base: "scroll", md: "hidden" },
        // width: "100%",
        paddingBlock: "10px",
        gap: `${theme.space.large}px`,
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "auto",
        // flexWrap: "wrap",
      }}>
      {children}
    </Flex>
  );
};

export default ProductCardCarousel;
