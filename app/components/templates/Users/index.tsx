import { Product, User } from "@/app/types/data";
import Layout from "../Layout";
import Flex from "../../layout/Flex";
import theme from "@/app/theme";
import Box from "../../layout/Box";
import Breadcrumb from "../../molecules/Breadcrumb";
import BreadcrumbItem from "../../atoms/BreadcrumbItem";
import Link from "next/link";
import UserProfile from "../../organisms/UserProfile";
import Separator from "../../atoms/Separator";
import ProductCardList from "../../organisms/ProductCardList";
import ProductCard from "../../organisms/ProductCard";

interface UserTemplateProps {
  user: User;
  products?: Product[];
}

export default function UserTemplate({ user, products }: UserTemplateProps) {
  return (
    <Layout>
      <Flex
        style={{
          paddingBlock: `${theme.space.medium}px`,
          paddingInline: `${theme.space.large}px`,
          justifyContent: "center",
        }}>
        <Box style={{ width: "1180px" }}>
          <Box style={{ marginBottom: `${theme.space.medium}px` }}>
            <Breadcrumb>
              <BreadcrumbItem href="/">홈</BreadcrumbItem>
              <BreadcrumbItem href="#">{user.username}</BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box>
            <Box style={{ marginBottom: `${theme.space.small}px` }}>
              <UserProfile
                username={`${user.username} (${user.displayName})`}
                profileImageUrl={user.profileImageUrl}
                numberOfProducts={100}
                description={user.description}
              />
            </Box>
            <Box style={{ marginBottom: `${theme.space.small}px` }}>
              <Separator />
            </Box>
            <ProductCardList numberPerRow={6} numberPerRowForMobile={2}>
              {products?.map((p) => (
                <div key={p.id}>
                  <Link
                    href={`/products/${p.id}`}
                    style={{ textDecoration: "none" }}>
                    <ProductCard
                      variant="small"
                      title={p.title}
                      price={p.price}
                      imageUrl={p.imageUrl}
                    />
                  </Link>
                </div>
              ))}
            </ProductCardList>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}
