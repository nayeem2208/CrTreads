import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import Head from "next/head";
import HeaderComponent from "./component/HeaderComponent";
import Footer from "./component/Footer";
import MyApp from "./App";

// Import local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></script> */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mukta`}>
        <HeaderComponent />
        <div><MyApp>{children}</MyApp></div>
        <Footer />
      </body>
    </html>
  );
}
