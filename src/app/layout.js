import * as S from "@/styles/globalStyle"

export const metadata = {
  title: "Livro: A Era Artificial - Unik Cabo Frio",
  description: "Site criado em next para venda de livros",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={S.roboto.className}>{children}</body>
    </html>
  );
}
