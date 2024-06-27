import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import React from "react";
import { Provider } from "jotai";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background flex flex-col h-full")}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider disableHoverableContent delayDuration={0}>
              <Header />
              <main className="flex-grow pt-20">{children}</main>
              <Footer />
            </TooltipProvider>
          </ThemeProvider>
        </Provider>
        <Toaster richColors expand={true} position="bottom-right" />
      </body>
    </html>
  );
}
