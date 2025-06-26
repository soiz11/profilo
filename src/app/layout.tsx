import type { Metadata } from "next";
import { Poppins, Barlow } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "black",
  // Other viewport settings...
};

export const metadata: Metadata = {
  title:
    "Sohan Prabhath Weerasinghe - Final Year IT Undergraduate | Trainee Software Engineer | ReactJS & NextJS Developer | Content Creator | sohan.one",
  description:
    "Welcome to the official portfolio of Sohan Prabhath at sohan.one, a final year IT undergraduate at the Institute of Technology, University of Moratuwa. As a Trainee Software Engineer at nCloud Solutions, I specialize in ReactJS and NextJS development. Driven by a passion for technology and innovation, I am eager to leverage my academic background and hands-on experience in dynamic and challenging environments. Explore my skills, projects, and professional journey, and connect with my YouTube content creation. Get in touch for collaborations and opportunities in the field of software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
