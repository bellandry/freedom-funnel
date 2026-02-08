import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins", // Définit le nom de la variable CSS
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freedom-digital.fr"),
  title: "Diane | Freedom Digital - L'Architecture de votre Liberté Financière",
  description:
    "Découvrez le modèle Freedom Digital avec Diane . Un cadre stratégique pour bâtir une liberté financière durable, sans pression commerciale et accessible à tous.",
  keywords: [
    "liberté financière",
    "indépendance financière",
    "travail à domicile",
    "modèle digital",
    "Diane ",
    "revenus passifs",
    "entrepreneuriat",
  ],
  authors: [{ name: "Laclass Dev" }],
  openGraph: {
    title: "Diane  | Freedom Digital",
    description:
      "Bâtissez votre liberté financière avec un modèle digital simple et puissant.",
    url: "https://freedom-digital.fr", // À adapter selon le domaine réel
    siteName: "Freedom Digital",
    images: [
      {
        url: "/og-image.png", // Image à créer ou placeholder
        width: 1200,
        height: 630,
        alt: "Freedom Digital - Diane ",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diane  | Freedom Digital",
    description:
      "Bâtissez votre liberté financière avec un modèle digital simple et puissant.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Diane ",
              url: "https://freedom-digital.fr",
              jobTitle: "High Ticket Closer & Digital Mentor",
              description:
                "Accompagne les personnes vers la liberté financière grâce à un modèle digital stratégique.",
              sameAs: [
                "https://www.linkedin.com/in/diane", // Exemples à adapter
                "https://www.instagram.com/diane",
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
