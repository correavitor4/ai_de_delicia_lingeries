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

Você tem **duas formas práticas** de publicar:

### Opção 1: Publicação com 1 Comando (Mais Rápida e Fácil)
Já deixamos tudo pronto com o pacote `gh-pages`:
```bash
npm run deploy
```
Esse comando faz o build estático, gera o arquivo `.nojekyll` e publica automaticamente na branch `gh-pages` do seu repositório.
Depois, no GitHub:
1. Vá em **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **Deploy from a branch**.
3. Escolha a branch **`gh-pages`** / pasta **`/(root)`** e clique em **Save**.
Pronto! Seu site estará no ar!

---

### Opção 2: Automático via GitHub Actions (CI/CD)
Se o seu token Git/OAuth não tiver a permissão especial `workflow`, o GitHub bloqueia commits com a pasta `.github/workflows/` pelo terminal. Por isso, deixamos o modelo pronto em [deploy-workflow.yml.example](file:///home/vitor/projects/ai_de_delicia_lingeries/deploy-workflow.yml.example).

Para ativar o GitHub Actions pelo próprio site do GitHub:
1. Acesse seu repositório no GitHub: `https://github.com/correavitor4/ai_de_delicia_lingeries`.
2. Vá na aba **Actions** > **Set up a workflow yourself**.
3. Cole o conteúdo de [deploy-workflow.yml.example](file:///home/vitor/projects/ai_de_delicia_lingeries/deploy-workflow.yml.example) e clique em **Commit changes**.
4. Em **Settings** > **Pages**, selecione **Source** como **GitHub Actions**.

---

## ⚙️ Personalização de Dados

Para alterar número de WhatsApp, preços, produtos ou textos:
- Abra o arquivo [src/data/products.ts](file:///home/vitor/projects/ai_de_delicia_lingeries/src/data/products.ts).
- Edite o objeto `BRAND_INFO` (número de telefone, redes sociais, links).
- Adicione ou altere itens no array `PRODUCTS`.
- As imagens dos produtos ficam localizadas em [public/images/](file:///home/vitor/projects/ai_de_delicia_lingeries/public/images/).
