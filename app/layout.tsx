import { Metadata } from "next";
import "./globals.css";

export const MetadataL Metadata = {
  title: "Next Project"
  description: "재밌게 공부하는 Next 16!"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"    >
      <body>{children}</body>
    </html>
  );
}
