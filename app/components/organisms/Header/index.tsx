import Link from "next/link";
import styled from "styled-components";
import AppLogo from "@/app/components/atoms/AppLogo";
import Button from "@/app/components/atoms/Button";
import {
  SearchIcon,
  PersonIcon,
  ShoppingCartIcon,
} from "@/app/components/atoms/IconButton";
import ShapeImage from "@/app/components/atoms/ShapeImage";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import BadgeIconButton from "@/app/components/molecules/BadgeIconButton";
import theme from "@/app/theme";
// import { Product, User } from "@/app/types/data";
import { useShoppingCartContext } from "@/app/contexts/ShoppingCartContext";
import { useAuthContext } from "@/app/contexts/AuthContext";
import Spinner from "../../atoms/Spinner";

// 헤더 루트
const HeaderRoot = styled.header`
  height: 88px;
  padding: ${theme.space.medium}px;
  border-bottom: 1px solid ${theme.colors.border};
`;

// 내비게이션
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${theme.space.medium}px;
  }
`;

// 내비게이션 링크
const NavLink = styled.span`
  display: inline;
`;

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
/**
 * 헤더
 */
const Header = () => {
  const { cart } = useShoppingCartContext();
  const { authUser, isLoading } = useAuthContext();
  return (
    <HeaderRoot>
      <Flex
        style={{
          paddingInline: `${theme.space.mediumLarge}px`,
          justifyContent: "space-between",
        }}>
        <Nav
          forwardedAs="nav"
          style={{
            height: "56px",
            alignItems: "center",
            columnGap: "16px",
          }}>
          <NavLink>
            <Link href="/">
              <AppLogo />
            </Link>
          </NavLink>
          <NavLink>
            <Box style={{ display: { base: "none", md: "block" } }}>
              <StyledLink href="/search">모든 상품</StyledLink>
            </Box>
          </NavLink>
          <NavLink>
            <Box style={{ display: { base: "none", md: "block" } }}>
              <StyledLink href="/search/clothes">의류</StyledLink>
            </Box>
          </NavLink>
          <NavLink>
            <Box style={{ display: { base: "none", md: "block" } }}>
              <StyledLink href="/search/book">책</StyledLink>
            </Box>
          </NavLink>
          <NavLink>
            <Box style={{ display: { base: "none", md: "block" } }}>
              <StyledLink href="/search/shoes">신발</StyledLink>
            </Box>
          </NavLink>
        </Nav>
        <Nav
          forwardedAs="nav"
          style={{
            height: "56px",
            alignItems: "center",
          }}>
          <NavLink>
            <Box style={{ display: { base: "block", md: "none" } }}>
              <Link href="/search">
                <SearchIcon width={24} height={24} />
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart">
              <BadgeIconButton
                IconButton={ShoppingCartIcon}
                size={24}
                badgeContent={cart.length === 0 ? undefined : cart.length}
                badgeBackgroundColor="#ed9f28"
              />
            </Link>
          </NavLink>
          <NavLink>
            {(() => {
              // 인증된 상태라면 아이콘을 표시
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`}>
                    <ShapeImage
                      alt=""
                      shape="circle"
                      src={authUser.profileImageUrl}
                      width={24}
                      height={24}
                      data-testid="profile-shape-image"
                    />
                  </Link>
                );
              } else if (isLoading) {
                // 로드 중에는 스피너를 표시
                return <Spinner size={20} strokeWidth={2} />;
              } else {
                // 로그인 하지 않은 경우에는 아이콘을 표시
                return (
                  <Link href="/signin">
                    <PersonIcon width={24} height={24} />
                  </Link>
                );
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href="/sell">
              <Button>등록</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  );
};

export default Header;
