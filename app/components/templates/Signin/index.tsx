import Flex from "../../layout/Flex";
import theme from "@/app/theme";
import Box from "../../layout/Box";
import AppLogo from "../../atoms/AppLogo";
import SigninFormContainer from "../../containers/SigninFormContainer";
import Layout from "../../templates/Layout";
import { Suspense } from "react";

type SigninTemplateProps = {
  onSignin: (error?: Error | undefined) => void;
};
/**
 * 메인 로그인 페이지
 */
const SigninTemplate = ({ onSignin }: SigninTemplateProps) => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Flex
          style={{
            paddingBlock: `${theme.space.medium}px`,
            paddingInline: {
              base: `${theme.space.medium}px`,
              md: `${theme.space.extraSmall}px`,
            },
            justifyContent: "center",
            minHeight: "60vh",
          }}>
          <Flex
            style={{
              width: "400px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Box style={{ marginBottom: `${theme.space.medium}px` }}>
              <AppLogo />
            </Box>
            <Box style={{ width: "100%" }}>
              <SigninFormContainer onSignin={onSignin} />
            </Box>
          </Flex>
        </Flex>
      </Suspense>
    </Layout>
  );
};

export default SigninTemplate;
