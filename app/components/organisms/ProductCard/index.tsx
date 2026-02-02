import styled from "styled-components";
import ScaleImage from "@/app/components/atoms/ScaleImage";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import theme from "@/app/theme";
import { CSSProperties } from "react";

// 상품 카드 컨테이너
const ProductCardContainer = styled.div`
  position: relative;
  width: 100%;
`;

// 상품 카드 이미지 컨테이너
const ProductCardImageContainer = styled.div`
  width: 100%;
  z-index: 99;
  position: relative;
  &[data-variant="listing"] {
    min-width: 240px;
    height: 240px;
  }
  &[data-variant="small"] {
    min-width: 160px;
    height: 160px;
  }
  &[data-variant="detail"] {
    min-width: 540px;
    height: 540px;
  }
`;

// 상품 카드 정보
const ProductCardInfo = styled.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`;

interface ProductCardProps {
  title: string; // 상품 제목
  price: number; // 상품 가격
  imageUrl: string; // 상품 기획 URL
  blurDataUrl?: string; // 상품의 흐릿한 이미지의 데이터 URI
  variant?: "listing" | "small" | "detail"; // 변형(표시 스타일)
}
/**
 * 상품 카드
 */
const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = "listing",
}: ProductCardProps) => {
  return (
    <ProductCardContainer>
      {/* listing, dtail 제목 가격 */}
      {variant !== "small" && (
        <ProductCardInfo>
          <Box
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
              padding: `${theme.space.small}px`,
            }}>
            <Text
              as="h2"
              style={
                {
                  "--text-font-size": `${theme.fontSizes.medium}px`,
                  "--text-font-size-md": `${theme.fontSizes.mediumLarge}px`,
                  "--text-letter-spacing": `${theme.letterSpacings.medium}px`,
                  "--text-letter-spacing-md": `${theme.letterSpacings.mediumLarge}px`,
                  "--text-line-height": `${theme.lineHeights.medium}px`,
                  "--text-line-height-md": `${theme.lineHeights.mediumLarge}px`,
                  display: "block",
                  margin: 0,
                  paddingInline: theme.space.medium,
                  paddingBlock: 0,
                  fontWeight: "bold",
                } as CSSProperties
              }>
              {title}
            </Text>
            <Text
              variant="medium"
              as="span"
              style={
                {
                  "--text-font-size": `${theme.fontSizes.small}px`,
                  "--text-font-size-md": `${theme.fontSizes.medium}px`,
                  "--text-letter-spacing": `${theme.letterSpacings.small}px`,
                  "--text-letter-spacing-md": `${theme.letterSpacings.medium}px`,
                  "--text-line-height": `${theme.lineHeights.small}px`,
                  "--text-line-height-md": `${theme.lineHeights.medium}px`,
                  paddingInline: theme.space.medium,
                  paddingBlock: 0,
                  margin: 0,
                } as CSSProperties
              }>
              {price.toLocaleString()}원
            </Text>
          </Box>
        </ProductCardInfo>
      )}
      {/* 이미지  */}
      <ProductCardImageContainer data-variant={variant}>
        {blurDataUrl ? (
          <ScaleImage
            alt="product card image"
            src={imageUrl}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <ScaleImage
            alt="product card image"
            src={imageUrl}
            style={{ objectFit: "cover" }}
          />
        )}
      </ProductCardImageContainer>
      {/* small 제목 가격 */}
      {variant === "small" && (
        <Box style={{ marginTop: `${theme.space.small}px` }}>
          <Text
            as="h2"
            variant="medium"
            style={{
              margin: theme.space.extraSmall,
              padding: theme.space.extraSmall,
              fontWeight: "bold",
            }}>
            {title}
          </Text>
          <Text as="span" variant="small">
            {price.toLocaleString()}원
          </Text>
        </Box>
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;
