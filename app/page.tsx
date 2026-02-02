import getAllProducts from "@/app/service/products/get-all-products";
import { ApiContext, Product } from "@/app/types/data";
import Link from "next/link";
import theme from "@/app/theme";
import ProductCardCarousel from "./components/organisms/ProductCardCarousel";
import Box from "./components/layout/Box";
import ProductCard from "./components/organisms/ProductCard";
import Layout from "./components/templates/Layout";
import Flex from "./components/layout/Flex";
import Text from "./components/atoms/Text";

// ISR 설정 (기존 getStaticProps의 revalidate: 60 대체)
export const revalidate = 60;

// 데이터 페칭을 위한 헬퍼 함수
async function getProducts() {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
  };

  // Promise.all로 병렬 요청
  const [clothesProducts, bookProducts, shoesProducts] = await Promise.all([
    getAllProducts(context, { category: "clothes", limit: 6, page: 1 }),
    getAllProducts(context, { category: "book", limit: 6, page: 1 }),
    getAllProducts(context, { category: "shoes", limit: 6, page: 1 }),
  ]);

  return { clothesProducts, bookProducts, shoesProducts };
}

export default async function HomePage() {
  // 서버 컴포넌트 내부에서 직접 데이터 호출
  const { clothesProducts, bookProducts, shoesProducts } = await getProducts();

  // 렌더링 헬퍼 함수
  const renderProductCardCarousel = (products: Product[]) => {
    return (
      <ProductCardCarousel>
        {products.map((p: Product, i: number) => (
          <Box
            paddingLeft={i === 0 ? theme.space[0] : theme.space[2]}
            key={p.id}>
            {/* Next.js 13+ Link: <a> 태그 제거 및 passHref 제거 */}
            <Link href={`/products/${p.id}`}>
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

  return (
    <Layout>
      <Flex
        paddingTop={theme.space[2]}
        paddingBottom={theme.space[2]}
        paddingRight={theme.space[2]}
        paddingLeft={theme.space[2]}
        justifyContent="center"
        backgroundColor="primary">
        <Flex
          width={{ base: "100%", md: "1040px" }}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}>
          <Box width="100%">
            <Text
              as="h1"
              marginBottom={theme.space[0]}
              color="white"
              variant="extraLarge">
              Wiki C2C에서
            </Text>
            <Text
              as="h1"
              marginTop={theme.space[0]}
              color="white"
              variant="extraLarge">
              마음에 드는 아이템을 찾자
            </Text>
          </Box>
          <Box width="100%">
            <Text as="p" color="white" variant="medium">
              Wiki C2C는 실전적인 Next.js 애플리케이션 개발에서 사용되는 데모
              애플리케이션입니다. 목 서버를 사용하고 있습니다. 소스 코드는
              <a
                href="https://github.com/moseskim/ts-nextbook-app"
                style={{ textDecoration: "underline" }}
                target="_blank">
                <Text variant="medium" color="white">
                  다음
                </Text>
              </a>
              의 Github에서 다운로드 할 수 있습니다.
            </Text>
            <Text as="p" color="white" variant="medium">
              이 애플리케이션은 TypeScript/Next.js로 작성되어 있으며, 백엔드의
              목 API는 json-server가 사용되고 있습니다.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex paddingBottom={theme.space[2]} justifyContent="center">
        <Box
          paddingLeft={{ base: theme.space[2], md: theme.space[0] }}
          paddingRight={{ base: theme.space[2], md: theme.space[0] }}
          width={{ base: "100%", md: "1040px" }}>
          <Box marginBottom={theme.space[3]}>
            <Text as="h2" variant="large">
              의류
            </Text>
            {renderProductCardCarousel(clothesProducts)}
          </Box>
          <Box marginBottom={theme.space[3]}>
            <Text as="h2" variant="large">
              책
            </Text>
            {renderProductCardCarousel(bookProducts)}
          </Box>
          <Box>
            <Text as="h2" variant="large">
              신발
            </Text>
            {renderProductCardCarousel(shoesProducts)}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
