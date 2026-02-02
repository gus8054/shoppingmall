import Layout from "../Layout";
import Flex from "../../layout/Flex";
import theme from "@/app/theme";
import Box from "../../layout/Box";
import Breadcrumb from "../../molecules/Breadcrumb";
import BreadcrumbItem from "../../atoms/BreadcrumbItem";
import Text from "../../atoms/Text";
import CartProduct from "../../organisms/CartProduct";
import { Product } from "@/app/types/data";

type CartTemplateProps = {
  cart?: Product[];
};
export default function CartTemplate({ cart = [] }: CartTemplateProps) {
  return (
    <Layout>
      <Flex
        style={{
          paddingBlock: `${theme.space.medium}px`,
          paddingInline: `${theme.space.large}px`,
          justifyContent: "center",
          flexDirection: "column",
        }}>
        <Box>
          <Breadcrumb>
            <BreadcrumbItem href={"/"}>홈</BreadcrumbItem>
            <BreadcrumbItem href={"#"}>카트</BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Text
              style={{
                display: "block",
                marginBlock: `${theme.space.large}px`,
              }}
              variant="large"
              as="h1">
              카트
            </Text>
            {/*
              카트 컨테이너
              카트 안에 있는 상품을 표시, 구입, 삭제
            */}
            <Flex
              style={{
                flexDirection: "column",
                gap: `${theme.space.large}px`,
              }}>
              {cart.map((p) => (
                <CartProduct
                  key={p.id}
                  id={p.id}
                  imageUrl={p.imageUrl}
                  title={p.title}
                  price={p.price}
                  onRemoveButtonClick={() => {}}
                  onBuyButtonClick={() => {}}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
