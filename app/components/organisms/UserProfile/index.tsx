import ShapeImage from "@/app/components/atoms/ShapeImage";
import Text from "@/app/components/atoms/Text";
import Box from "@/app/components/layout/Box";
import Flex from "@/app/components/layout/Flex";
import theme from "@/app/theme";

interface UserProfileProps {
  variant?: "normal" | "small"; // 변형(표지 스타일)
  username: string; // 사용자명
  profileImageUrl: string; // 사용자 이미지 URL
  numberOfProducts: number; // 사용자가 소유한 상품 수
  description?: string; // 사용자 설명
}

/**
 * 사용자 프로파일
 */
const UserProfile = ({
  variant = "normal",
  username,
  profileImageUrl,
  numberOfProducts,
  description,
}: UserProfileProps) => {
  const profileImageSize = variant === "small" ? "100px" : "120px";

  return (
    <Flex>
      <Box style={{ minWidth: profileImageSize }}>
        {/* 사용자 이미지 */}
        <ShapeImage
          shape="circle"
          quality="85"
          src={profileImageUrl}
          alt={username}
          height={parseInt(profileImageSize)}
          width={parseInt(profileImageSize)}
        />
      </Box>
      <Box style={{ padding: `${theme.space.medium}px` }}>
        <Flex
          style={{
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          {/* 사용자명 */}
          <Text
            as="p"
            variant="medium"
            style={{
              fontWeight: "bold",
            }}>
            {username}
          </Text>
          {/* 상품 게시 수 */}
          <Text as="p">{numberOfProducts}개 제품 게시 완료</Text>
          {/* 사용자 개요 */}
          {variant === "normal" && <Text as="p">{description}</Text>}
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserProfile;
