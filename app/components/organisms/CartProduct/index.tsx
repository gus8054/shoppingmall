import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Button from "@/app/components/atoms/Button";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import theme from "@/app/theme";
import { CSSProperties } from "react";

const RemoveText = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

type CartProductProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  onBuyButtonClick?: (id: number) => void;
  onRemoveButtonClick?: (id: number) => void;
};
/**
 * 카트 상품
 */
const CartProduct = ({
  id,
  imageUrl,
  title,
  price,
  onBuyButtonClick,
  onRemoveButtonClick,
}: CartProductProps) => {
  return (
    <Flex style={{ width: "100%", justifyContent: "space-between" }}>
      {/* 카드형태 */}
      <Flex
        style={{
          flex: 1,
          gap: `${theme.space.medium}px`,
          flexDirection: { base: "column", md: "row" },
        }}>
        {/* 이미지 컨테이너 */}
        <Box
          style={{
            width: { base: "100%", md: `120px` },
            height: `120px`,
            position: "relative",
          }}>
          <Link href={`/products/${id}`}>
            <Image
              quality={85}
              src={imageUrl}
              alt={title}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </Link>
        </Box>
        {/* 제목 가격 버튼 */}
        <Flex
          style={{
            padding: `${theme.space.small}px`,
            flexDirection: "column",
            justifyContent: "space-between",
            rowGap: `${theme.space.medium}px`,
          }}>
          {/* 제목 가격 */}
          <Flex
            style={{
              flexDirection: "column",
              rowGap: `${theme.space.small}px`,
            }}>
            {/* 상품 제목 */}
            <Text
              variant="mediumLarge"
              style={{
                fontWeight: "bold",
              }}
              as="p">
              {title}
            </Text>
            {/* 상품 가격 */}
            <Text variant="medium" as="p">
              {price.toLocaleString()}원
            </Text>
          </Flex>
          {/* 구입 삭제 버튼 */}
          <Flex
            style={{
              justifyContent: "space-between",
              columnGap: `${theme.space.medium}px`,
            }}>
            <Button
              variant="primary"
              style={
                {
                  maxWidth: "200px",
                  "--button-width": `100px`,
                  "--button-width-md": "200px",
                  flexGrow: 1,
                  flexShrink: 0,
                } as CSSProperties
              }
              onClick={() => onBuyButtonClick?.(id)}>
              구입
            </Button>
            <Button
              variant="danger"
              style={
                {
                  "--button-width": "100px",
                  "--button-width-md": "200px",
                  "--button-display": "inline-block",
                  "--button-display-md": "none",
                  flexGrow: 1,
                  flexShrink: 0,
                } as CSSProperties
              }
              onClick={() => onRemoveButtonClick?.(id)}>
              삭제
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {/* 카트에서 삭제 */}
      <Box style={{ display: { base: "none", md: "block" } }}>
        <RemoveText
          color={theme.colors.danger}
          onClick={() => onRemoveButtonClick?.(id)}
          aria-label={`${title}을 장바구니에서 삭제`}>
          카트에서 삭제
        </RemoveText>
      </Box>
    </Flex>
  );
};

export default CartProduct;
