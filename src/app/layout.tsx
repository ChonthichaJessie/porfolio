// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Layout from "./components/Layout";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Jessie's Portfolio",
//   description: "Jessie's Portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <Layout>
//       <html lang="en">
//         <body className={inter.className}>{children}</body>
//       </html>
//     </Layout>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessie's Portfolio",
  description: "Jessie's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
