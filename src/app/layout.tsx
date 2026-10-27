import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ai Que Delícia Lingeries | Sua melhor escolha, seu melhor momento',
  description: 'Descubra lingeries sensuais de alto padrão com rendas macias, sustentação impecável e toque acetinado. Compre com 100% de sigilo e embalagem discreta.',
  keywords: ['lingerie', 'lingeries luxo', 'conjuntos de renda', 'body sensual', 'robe de cetim', 'linha noivas', 'embalagem discreta', 'ai que delicia'],
  authors: [{ name: 'Ai Que Delícia Lingeries' }],
  openGraph: {
    title: 'Ai Que Delícia Lingeries | Boutique Íntima de Luxo',
    description: 'Sua melhor escolha, seu melhor momento. Lingeries exclusivas com conforto e poder.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Ai Que Delícia Lingeries'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="./images/logo.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
