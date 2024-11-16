import { Inter } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";
import "app/sass/globas.sass";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
