import theme from "@/app/theme";
import Flex from "../../layout/Flex";
import Layout from "../Layout";
import Box from "../../layout/Box";
import AppLogo from "../../atoms/AppLogo";
import ProductForm from "../../organisms/ProductForm";

export default function SellTemplate() {
  return (
    <Layout>
      <Flex
        style={{
          paddingBlock: {
            base: `${theme.space.medium}px`,
            md: `${theme.space.large}px`,
          },
          paddingInline: `${theme.space.large}px`,
          justifyContent: "center",
        }}>
        <Flex
          style={{
            width: "800px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Box
            style={{
              marginBottom: "16px",
              display: { base: "none", md: "block" },
            }} // theme.space[2] 값 가정 (8px * 2)
          >
            <AppLogo />
          </Box>
          <Box style={{ width: "100%" }}>
            {/*
              상품 게시폼 컨테이너
              상품 정보를 입력하고 제품 API를 통해 상품을 저장
            */}
            <ProductForm onProductSave={() => {}} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
