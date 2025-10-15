import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="description"
          content="Portfolio de Abdourahman Laloue, développeur front-end spécialisé en React et Next.js. Découvrez ses réalisations, compétences web (HTML, CSS, JavaScript, MongoDB) et son parcours professionnel. Contactez-le pour vos projets de création d’interfaces modernes et performantes."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Portfolio Abdourahman Laloue développeur front-end React/Next.js
        </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
