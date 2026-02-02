import Link from "next/link";
import styled from "styled-components";
import { GitHubIcon } from "@/app/components/atoms/IconButton";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import theme from "@/app/theme";

// 링크 데이터 분리
const NAV_LINKS = {
  column1: [
    { title: "홈", href: "/" },
    { title: "채용", href: "/" },
    { title: "알림", href: "/" },
  ],
  column2: [
    { title: "사용 규약", href: "/" },
    { title: "개인 정보 정책", href: "/" },
    { title: "배송 및 반품", href: "/" },
  ],
};

const Anchor = styled(Text)`
  cursor: pointer;
  color: ${theme.colors.text};
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;
const FooterRoot = styled.footer`
  padding: ${theme.space.medium}px;
`;
/**
 * 푸터
 */
const Footer = () => {
  return (
    <FooterRoot>
      <Flex
        style={{
          flexDirection: { base: "column", md: "row" },
          justifyContent: "space-between",
        }}>
        <Box
          style={{
            minWidth: { base: "100%", md: "120px" },
            paddingRight: {
              base: `${theme.space.extraSmall}px`,
              md: `${theme.space.medium}px`,
            },
          }}>
          <nav>
            {NAV_LINKS.column1.map((link) => (
              <Box
                key={link.title}
                style={{ marginBottom: `${theme.space.medium}px` }}>
                <Link href={link.href} style={{ textDecoration: "none" }}>
                  <Anchor>{link.title}</Anchor>
                </Link>
              </Box>
            ))}
          </nav>
        </Box>
        <Box
          style={{
            minWidth: { base: "100%", md: "120px" },
            paddingRight: {
              base: `${theme.space.extraSmall}px`,
              md: `${theme.space.medium}px`,
            },
          }}>
          <nav>
            {NAV_LINKS.column2.map((link) => (
              <Box
                key={link.title}
                style={{ marginBottom: `${theme.space.medium}px` }}>
                <Link href={link.href} style={{ textDecoration: "none" }}>
                  <Anchor>{link.title}</Anchor>
                </Link>
              </Box>
            ))}
          </nav>
        </Box>
        <Box style={{ minWidth: { base: "100%", md: "120px" } }}>
          <nav>
            <Anchor
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer" // [추가] 보안 및 성능 최적화
            >
              <GitHubIcon width={32} height={32} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box
        style={{
          paddingTop: `${theme.space.mediumLarge}px`,
          paddingBottom: `${theme.space.medium}px`,
        }}>
        <Text>© 2026 donghyun.</Text>
      </Box>
    </FooterRoot>
  );
};

export default Footer;
