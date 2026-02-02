import type { Metadata, Viewport } from "next";
import { Providers } from "./providers"; // 2단계에서 만든 프로바이더 모음

// 메타데이터 설정
export const metadata: Metadata = {
  openGraph: {
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
