import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { DM_Sans } from "next/font/google";
const Dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "SiteBuilder",
  description: "SiteBuilder is a website builder powered by ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Dm_Sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
