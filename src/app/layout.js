import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asibur Rahman - Full Stack Developer",
  description: "Portfolio of Asibur Rahman, a Full Stack Developer specializing in React, Node.js, and MERN stack.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
