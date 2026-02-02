import { ReactNode } from "react";
import Header from "../../organisms/Header";
import Separator from "../../atoms/Separator";
import Box from "../../layout/Box";
import theme from "@/app/theme";
import Footer from "../../organisms/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Separator />
      <Box style={{ padding: `${theme.space.mediumLarge}px` }}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
