# 🚀 Guia de Deploy no Vercel

## Opção 1: Deploy via Interface do Vercel (Recomendado)

### Passo 1: Preparar o Projeto no GitHub

1. Crie um repositório no GitHub
2. Faça o upload dos arquivos do projeto:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Portfólio Sistema Digestório"

# Conectar ao repositório remoto (substitua com seu repositório)
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Enviar para o GitHub
git push -u origin main
```

### Passo 2: Deploy no Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New..."** → **"Project"**
3. Clique em **"Import Git Repository"**
4. Selecione seu repositório do GitHub
5. Clique em **"Import"**

### Passo 3: Configurações de Build

O Vercel detectará automaticamente o projeto, mas confirme estas configurações:

- **Framework Preset:** Deixe como detectado automaticamente
- **Build Command:** `npm run build`
- **Output Directory:** `.output/public`
- **Install Command:** `npm install`

### Passo 4: Deploy

1. Clique em **"Deploy"**
2. Aguarde o build terminar (2-5 minutos)
3. Seu site estará no ar! 🎉

---

## Opção 2: Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

### Passo 3: Deploy

Na pasta do projeto, execute:

```bash
# Deploy de teste
vercel

# Deploy de produção
vercel --prod
```

---

## ⚙️ Configurações Avançadas (Opcional)

Se precisar de configurações customizadas, edite o arquivo `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".output/public",
  "framework": null,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 🐛 Solução de Problemas

### Erro de Build

Se o build falhar, verifique:

1. Se todas as dependências estão no `package.json`
2. Se o Node.js está na versão 18 ou superior
3. Logs de erro no painel do Vercel

### Erro 404 nas Rotas

O TanStack Router já está configurado para SSR. Se tiver problemas:

1. Verifique o arquivo `vercel.json`
2. Confirme que o output directory está correto

### Assets não Carregam

Verifique se os arquivos em `src/assets/*.asset.json` têm URLs válidas.

---

## 📝 Checklist Antes do Deploy

- [ ] Todas as informações da equipe estão corretas
- [ ] As imagens/vídeos estão funcionando localmente
- [ ] O projeto roda com `npm run dev` sem erros
- [ ] O build é bem-sucedido com `npm run build`
- [ ] O código está commitado no Git
- [ ] Repositório está no GitHub

---

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Guia de Deploy TanStack Start](https://tanstack.com/start/latest/docs/framework/react/deployment)
- [Suporte Vercel](https://vercel.com/support)

---

**Desenvolvido por:**  
Daniel, Julia, Emily, Larissa, Alice  
Turma 2C - Senac Paulista
