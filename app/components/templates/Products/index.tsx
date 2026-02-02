import { Category, Product } from "@/app/types/data";
import Link from "next/link";
import Layout from "../Layout";
import Flex from "../../layout/Flex";
import theme from "@/app/theme";
import Box from "../../layout/Box";
import Breadcrumb from "../../molecules/Breadcrumb";
import BreadcrumbItem from "../../atoms/BreadcrumbItem";
import ProductCard from "../../organisms/ProductCard";
import Separator from "../../atoms/Separator";
import Text from "../../atoms/Text";
import UserProfile from "../../organisms/UserProfile";
import Button from "../../atoms/Button";
import { CSSProperties } from "react";

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

interface ProductDetailTemplateProps {
  product: Product;
}

export default function ProductDetailTemplate({
  product,
}: ProductDetailTemplateProps) {
  return (
    <Layout>
      <Flex
        style={{
          paddingBlock: `${theme.space.medium}px`,
          paddingInline: `${theme.space.large}px`,
          marginBottom: `${theme.space.extraLarge}px`,
          justifyContent: "center",
          flexDirection: { base: "column", md: "row" },
          gap: `${theme.space.extraLarge}px`,
        }}>
        <Box>
          <Breadcrumb>
            <BreadcrumbItem href="/">홈</BreadcrumbItem>
            <BreadcrumbItem href={"/search"}>검색</BreadcrumbItem>
            <BreadcrumbItem href={`/search/${product.category}`}>
              {categoryNameDict[product.category as Category]}
            </BreadcrumbItem>
            <BreadcrumbItem href={"#"}>{product.title}</BreadcrumbItem>
          </Breadcrumb>
          <Flex
            style={{
              paddingBlock: `${theme.space.medium}px`,
              justifyContent: "stretch",
            }}>
            <ProductCard
              variant="detail"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </Flex>
          <Separator />
          <Box style={{ paddingTop: `${theme.space.small}px` }}>
            <Text
              as="h2"
              variant="large"
              style={{
                marginBlock: `${theme.space.medium}px`,
                display: "block",
              }}>
              판매자
            </Text>
            <Link href={`/users/${product.owner.id}`}>
              {/* 사용자 프로필 */}
              <UserProfile
                variant="small"
                username={product.owner.username}
                profileImageUrl={product.owner.profileImageUrl}
                numberOfProducts={100}
              />
            </Link>
          </Box>
        </Box>
        <Box
          style={{
            padding: `${theme.space.large}px`,
          }}>
          <Flex
            style={{
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: `${theme.space.extraLarge}px`,
            }}>
            {/* 상품 개요를 표시, 줄바꿈별로 텍스트 컴포넌트로 감싼다 */}
            <Box>
              {product.description
                .split("\n")
                .map((text: string, i: number) => (
                  <Text key={i} as="p">
                    {text}
                  </Text>
                ))}
            </Box>
            {/*
              카트 추가 버튼 컨테이너
              버튼을 눌렀다면 ShoppingCartContext에 상품을 추가한다 */}
            <Button
              style={
                {
                  "--button-width": "100%",
                  "--button-width-md": "400px",
                  height: "66px",
                } as CSSProperties
              }
              onClick={() => {}}>
              카트에 추가
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
}
