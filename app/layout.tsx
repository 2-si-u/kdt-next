import { Metadata } from "next";
import "./globals.css";
import "@/style/tailwind/tailwind.theme.css"
<<<<<<< HEAD

import { pretendard } from "@/style/font/font";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/provider/ReactQueryProvider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Next SW Project",
  description: "재밌게 공부하는 Next 16!",
=======
import { pretendard } from "@/style/font/font";
import {Geist} from "next/font/google"
import ReactQueryProvider from "@/provider/ReactQueryProvider";

export const Metadata: Metadata = {
  title: "Next Project",
  description: "재밌게 공부하는 Next 16!"
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
<<<<<<< HEAD
    <html lang="en" className={cn(pretendard.variable, "font-sans", geist.variable)}>
      <body className="font-pretendard">
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
=======
    <html
      lang="en" className={`${pretendard.variable}`}>
      <body className="font-pretendard">
        <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
        </body>
    </html>
  );
}

>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
