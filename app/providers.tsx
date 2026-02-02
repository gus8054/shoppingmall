"use client";

import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import GlobalSpinner from "@/app/components/organisms/GlobalSpinner";
import { AuthContextProvider } from "@/app/contexts/AuthContext";
import GlobalSpinnerContextProvider from "@/app/contexts/GlobalSpinnerContext";
import { ShoppingCartContextProvider } from "@/app/contexts/ShoppingCartContext";
import theme from "./theme";
import { ApiContext } from "./types/data";
import fetcher from "./utils/fetcher";
import GlobalStyle from "./theme/globalStyle";

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            shouldRetryOnError: false,
            fetcher: fetcher,
          }}>
          <GlobalSpinnerContextProvider>
            <ShoppingCartContextProvider>
              <AuthContextProvider context={context}>
                <GlobalSpinner />
                {children}
              </AuthContextProvider>
            </ShoppingCartContextProvider>
          </GlobalSpinnerContextProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
