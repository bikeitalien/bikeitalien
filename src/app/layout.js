import { Inter } from "next/font/google";
import "./globals.css";
import "./reset.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "BikeItalien",
  description: "By Lærke, Helene & Klara",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${inter.variable} h-full antialiased`}>
    //   <body className="flex min-h-full flex-col">{children}</body>
    // </html>
    <html lang="da">
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
