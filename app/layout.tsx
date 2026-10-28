import { Metadata } from "next";
import "./globals.css";
import "@/style/tailwind/tailwind.theme.css"
import { pretendard } from "@/style/font/font";
import {Geist} from "next/font/google"

export const Metadata: Metadata = {
  title: "Next Project",
  description: "재밌게 공부하는 Next 16!"
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className={`${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  );
}

