import Link from "next/link";
import { CSSProperties } from "react";
import { Category, Condition, Product } from "@/app/types/data";
import Layout from "../Layout";
import Box from "../../layout/Box";
import theme from "@/app/theme";
import Breadcrumb from "../../molecules/Breadcrumb";
import BreadcrumbItem from "../../atoms/BreadcrumbItem";
import Flex from "../../layout/Flex";
import FilterGroup from "../../molecules/FilterGroup";
import Text from "../../atoms/Text";
import ProductCardList from "../../organisms/ProductCardList";
import ProductCard from "../../organisms/ProductCard";

const categoryNameDict: Record<Category, string> = {
  book: "책",
  shoes: "신발",
  clothes: "의류",
};

interface SearchTemplateProps {
  slug: Category[];
  conditions: Condition[];
  products: Product[];
  handleFilterGroupChange: (values: string[]) => void;
}

export default function SearchTemplate({
  slug,
  conditions,
  products,
  handleFilterGroupChange,
}: SearchTemplateProps) {
  return (
    <Layout>
      <Box
        style={{
          paddingInline: {
            base: `${theme.space.medium}px`,
            md: `${theme.space.mediumLarge}px`,
          },
          paddingBlock: `${theme.space.medium}px`,
        }}>
        <Box style={{ marginBottom: `${theme.space.small}px` }}>
          <Breadcrumb>
            <BreadcrumbItem href={"/"}>홈</BreadcrumbItem>
            <BreadcrumbItem href={"/search"}>검색</BreadcrumbItem>
            {slug.slice(0, slug.length - 1).map((category, i) => (
              <BreadcrumbItem
                href={`/search/${slug.slice(0, i + 1).join("/")}`}
                key={i}>
                {categoryNameDict[category] ?? "Unknown"}
              </BreadcrumbItem>
            ))}
            {slug.length === 0 && (
              <BreadcrumbItem href={"#"}>모두</BreadcrumbItem>
            )}
            {slug.length > 0 && (
              <BreadcrumbItem href={"#"}>
                {categoryNameDict[slug[slug.length - 1]] ?? "Unknown"}
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Flex style={{ flexDirection: { base: "column", md: "row" } }}>
          <Box
            as="aside"
            style={{
              minWidth: "200px",
              marginBottom: {
                base: `${theme.space.medium}px`,
                md: `${theme.space.extraSmall}px`,
              },
            }}>
            {/* 상품 상태 필터 */}
            <Box style={{ marginBlock: `${theme.space.large}px` }}>
              <FilterGroup
                title="상품 상태"
                items={[
                  { label: "새 상품", name: "new" },
                  { label: "중고 상품", name: "used" },
                ]}
                value={conditions}
                onChange={handleFilterGroupChange}
              />
            </Box>
            <Box style={{ paddingTop: `${theme.space.small}px` }}>
              <Text as="h2" style={{ fontWeight: "bold" }} variant="medium">
                카테고리
              </Text>
              <Box style={{ marginTop: `${theme.space.medium}px` }}>
                <Link href="/search/" style={{ textDecoration: "none" }}>
                  모두
                </Link>
              </Box>
              {/* 카테고리 링크 */}
              {Object.keys(categoryNameDict).map((category, i) => (
                <Box key={i} style={{ marginTop: `${theme.space.small}px` }}>
                  <Link
                    href={`/search/${category}`}
                    style={{ textDecoration: "none" }}>
                    {categoryNameDict[category as Category]}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box style={{ flex: 1, marginBlock: `${theme.space.large}px` }}>
            <Text
              as="h2"
              style={
                {
                  "--text-display": "block",
                  "--text-display-md": "none",
                  fontWeight: "bold",
                  marginBottom: `${theme.space.medium}px`,
                } as CSSProperties
              }
              variant="mediumLarge">
              상품 목록
            </Text>
            <ProductCardList>
              {products.map((p) => (
                <Box key={p.id}>
                  <Link
                    href={`/products/${p.id}`}
                    style={{ textDecoration: "none" }}>
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
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
