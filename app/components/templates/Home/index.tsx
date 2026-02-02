import theme from "@/app/theme";
import Flex from "../../layout/Flex";
import ProductCardCarousel from "../../organisms/ProductCardCarousel";
import Layout from "../Layout";
import Box from "../../layout/Box";
import Text from "../../atoms/Text";
import Link from "next/link";
import { Product } from "@/app/types/data";
import ProductCard from "../../organisms/ProductCard";

const ProductList = ({ products = [] }: { products: Product[] }) => {
  return (
    <ProductCardCarousel>
      {products.map((p: Product) => (
        <Box
          style={{
            flexShrink: 0,
            flexGrow: 0,
            minWidth: "160px",
          }}
          key={p.id}>
          <Link href={`/products/${p.id}`} style={{ textDecoration: "none" }}>
            <ProductCard
              variant="small"
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
              blurDataUrl={p.blurDataUrl}
            />
          </Link>
        </Box>
      ))}
    </ProductCardCarousel>
  );
};

type HomePageProps = {
  clothesProducts: Product[];
  bookProducts: Product[];
  shoesProducts: Product[];
};
// 4. 메인 페이지 컴포넌트 (Async Server Component)
export default function HomeTemplate({
  clothesProducts,
  bookProducts,
  shoesProducts,
}: HomePageProps) {
  return (
    <Layout>
      <Flex
        style={{
          padding: `${theme.space.medium}px`,
          justifyContent: "center",
          backgroundColor: theme.colors.primary,
        }}>
        <Flex
          style={{
            width: { base: "100%", md: "1040px" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { base: "column", md: "row" },
          }}>
          <Box style={{ width: "100%" }}>
            <Text
              as="h1"
              style={{
                marginBottom: `${theme.space.extraSmall}px`,
              }}
              color="white"
              variant="extraLarge">
              동현 샵에서&nbsp;
            </Text>
            <Text
              as="h1"
              style={{ marginTop: `${theme.space.extraSmall}px` }}
              color="white"
              variant="extraLarge">
              마음에 드는 아이템을 찾자
            </Text>
          </Box>
          <Box style={{ width: "100%" }}>
            <Text as="p" color="white" variant="mediumLarge">
              스토리북을 이용하여 컴포넌트 주도 개발에서 사용되는 데모
              애플리케이션입니다. Mock 서버를 사용하고 있습니다. 소스
              코드는&nbsp;
              <Link
                style={{ textDecoration: "underline" }}
                target="_blank"
                href="https://github.com/">
                <Text color="white" variant="mediumLarge">
                  다음
                </Text>
              </Link>
              의 Github에서 다운로드 할 수 있습니다.
            </Text>
            <Text as="p" color="white" variant="mediumLarge">
              이 애플리케이션은 TypeScript/Next.js로 작성되어 있으며, 백엔드의
              Mcok API는 express가 사용되고 있습니다.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        style={{
          paddingBlock: `${theme.space.extraLarge}px`,
          justifyContent: "center",
        }}>
        <Box
          style={{
            paddingInline: {
              base: `${theme.space.medium}px`,
              md: `${theme.space.extraSmall}px`,
            },
            width: { base: "100%", md: "1040px" },
          }}>
          <Box style={{ marginBottom: `${theme.space.large}px` }}>
            <Text
              as="h2"
              variant="large"
              style={{ marginBottom: `${theme.space.mediumLarge}px` }}>
              의류
            </Text>
            <ProductList products={clothesProducts} />
          </Box>
          <Box style={{ marginBottom: `${theme.space.large}px` }}>
            <Text
              as="h2"
              variant="large"
              style={{ marginBottom: `${theme.space.mediumLarge}px` }}>
              책
            </Text>
            <ProductList products={bookProducts} />
          </Box>
          <Box>
            <Text
              as="h2"
              variant="large"
              style={{ marginBottom: `${theme.space.mediumLarge}px` }}>
              신발
            </Text>
            <ProductList products={shoesProducts} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
