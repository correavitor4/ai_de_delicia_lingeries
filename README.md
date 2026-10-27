# 💋 Ai Que Delícia Lingeries — Landing Page Oficial

Landing page moderna, luxuosa e de alta conversão para a marca **Ai Que Delícia Lingeries**, desenvolvida em **Next.js (React 19 + TypeScript)** e 100% pronta para rodar no **GitHub Pages** como site estático ultra-rápido.

---

## ✨ Destaques da Aplicação

- **Design Sensual & Luxuoso**: Paleta inspirada na identidade visual da marca (bordô profundo, preto nobre, toques em magenta neon e acabamentos em ouro).
- **Compatibilidade Total com GitHub Pages**:
  - Configurado com `output: 'export'` no [next.config.mjs](file:///home/vitor/projects/ai_de_delicia_lingeries/next.config.mjs).
  - Trata caminhos relativos e `basePath` automaticamente para `https://<seu-usuario>.github.io/ai_de_delicia_lingeries/`.
  - Inclui flag `.nojekyll` para que o GitHub Pages não ignore os arquivos estáticos do Next.js.
- **Workflow de Deploy Automático no GitHub Actions**:
  - Arquivo [.github/workflows/deploy.yml](file:///home/vitor/projects/ai_de_delicia_lingeries/.github/workflows/deploy.yml) já configurado. Ao fazer push na branch `main`, o GitHub Pages publica seu site sozinho.
- **Integração Completa com WhatsApp**:
  - Botão de atendimento flutuante com balão de boas-vindas.
  - Compra rápida em cada card de produto com mensagem pré-formatada com tamanho e modelo.
- **Monte seu Pedido Interativo ("Order Builder")**:
  - O cliente escolhe peças, quantidades, tamanhos, adiciona caixa de presente perfumada e mensagem para bilhete secreto.
  - Gera a lista completa pronta com valores calculados e envia direto no WhatsApp da loja.
- **Guia & Calculadora de Medidas**:
  - Tabela completa brasileira (P, M, G, GG) com calculadora rápida de biotipo.
- **Prova Social & Segurança**:
  - Selo de embalagem 100% discreta e sigilosa.
  - Avaliações reais de clientes com estrelas.
  - FAQ com accordion interativo.
  - Banner de cupom de 10% OFF (`DELICIA10`) com cópia em 1 clique.

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- Node.js (v18+) e npm instalados.

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```
Acesse em: `http://localhost:3000`

### 4. Gerar build estático para conferência
```bash
npm run build
```
O build estático pronto para publicação será gerado na pasta `out/`.

---

## 🌐 Como Publicar no GitHub Pages

Você tem **duas formas fáceis** de publicar:

### Opção 1: Automático via GitHub Actions (Recomendada)
1. Crie um repositório no GitHub (por exemplo, `ai_de_delicia_lingeries`).
2. Faça commit e push do projeto para a branch `main`:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page Ai Que Delícia Lingeries"
   git branch -M main
   git remote add origin https://github.com/<SEU-USUARIO>/ai_de_delicia_lingeries.git
   git push -u origin main
   ```
3. No seu repositório no GitHub, vá em **Settings** > **Pages**.
4. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
5. Pronto! O workflow [.github/workflows/deploy.yml](file:///home/vitor/projects/ai_de_delicia_lingeries/.github/workflows/deploy.yml) cuidará do build e publicação automaticamente. Seu site estará online em minutos em:
   `https://<SEU-USUARIO>.github.io/ai_de_delicia_lingeries/`

### Opção 2: Publicação Manual com 1 Comando via `gh-pages`
Também deixamos configurado o pacote `gh-pages` no `package.json`:
```bash
npm run deploy
```
Esse comando faz o build, gera o arquivo `.nojekyll` e publica diretamente na branch `gh-pages` do seu repositório.

---

## ⚙️ Personalização de Dados

Para alterar número de WhatsApp, preços, produtos ou textos:
- Abra o arquivo [src/data/products.ts](file:///home/vitor/projects/ai_de_delicia_lingeries/src/data/products.ts).
- Edite o objeto `BRAND_INFO` (número de telefone, redes sociais, links).
- Adicione ou altere itens no array `PRODUCTS`.
- As imagens dos produtos ficam localizadas em [public/images/](file:///home/vitor/projects/ai_de_delicia_lingeries/public/images/).
