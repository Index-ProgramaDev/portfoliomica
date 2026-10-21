# 📚 Guia Rápido de Git e GitHub

## 🚀 Primeira Vez Usando Git?

Siga estes passos para colocar seu projeto no GitHub e depois no Vercel.

---

## Passo 1: Instalar o Git

Se você ainda não tem o Git instalado:

**Windows:**
- Baixe em: https://git-scm.com/download/win
- Instale com as configurações padrão

**Verificar instalação:**
```bash
git --version
```

---

## Passo 2: Configurar Git (Primeira Vez)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

---

## Passo 3: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Faça login (ou crie uma conta gratuita)
3. Clique no botão **"+"** no canto superior direito
4. Selecione **"New repository"**
5. Preencha:
   - **Repository name:** `portfolio-sistema-digestorio` (ou outro nome)
   - **Description:** "Portfólio digital - Práticas do Sistema Digestório - Turma 2C Senac"
   - **Visibilidade:** Public (ou Private se preferir)
   - **NÃO** marque "Initialize this repository with a README"
6. Clique em **"Create repository"**
7. **Deixe essa página aberta!** Você vai precisar da URL

---

## Passo 4: Subir o Projeto para o GitHub

Abra o PowerShell ou terminal **na pasta do projeto** e execute:

```bash
# 1. Inicializar repositório Git
git init

# 2. Adicionar todos os arquivos
git add .

# 3. Fazer o primeiro commit
git commit -m "Initial commit - Portfólio Sistema Digestório Turma 2C"

# 4. Renomear branch para main (se necessário)
git branch -M main

# 5. Conectar ao GitHub (SUBSTITUA pela URL do seu repositório!)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 6. Enviar para o GitHub
git push -u origin main
```

### ⚠️ Importante:
No passo 5, substitua a URL pela que aparece na página do GitHub que você criou!

Exemplo:
```bash
git remote add origin https://github.com/daniel-turma2c/portfolio-biologia.git
```

---

## Passo 5: Verificar no GitHub

1. Volte para a página do seu repositório no GitHub
2. Recarregue a página (F5)
3. Você deve ver todos os arquivos do projeto!

---

## 🎯 Comandos Git Úteis para o Futuro

### Fazer mudanças e enviar para o GitHub:

```bash
# Ver status dos arquivos
git status

# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem
git commit -m "Descrição da mudança"

# Enviar para o GitHub
git push
```

### Ver histórico:

```bash
# Ver últimos commits
git log --oneline

# Ver mudanças não commitadas
git diff
```

---

## 🐛 Problemas Comuns

### "Permission denied"
O GitHub não aceita mais senha. Use um dos métodos:

**Opção 1: Token de Acesso Pessoal**
1. GitHub → Settings → Developer settings → Personal access tokens → Generate new token
2. Copie o token
3. Use o token no lugar da senha quando o Git pedir

**Opção 2: GitHub CLI (Recomendado)**
```bash
# Instalar GitHub CLI
# Windows: https://cli.github.com/

# Fazer login
gh auth login

# Depois use comandos Git normalmente
```

### "Git not found"
- Reinicie o terminal após instalar o Git
- Verifique se o Git está instalado: `git --version`

### "Already exists" no remote
```bash
# Remover remote antigo
git remote remove origin

# Adicionar novamente
git remote add origin NOVA-URL
```

---

## ✅ Checklist

- [ ] Git instalado e configurado
- [ ] Repositório criado no GitHub
- [ ] Código commitado localmente
- [ ] Código enviado para o GitHub
- [ ] Verificado que os arquivos aparecem no GitHub

---

## 🚀 Próximo Passo: Deploy no Vercel

Agora que seu projeto está no GitHub, abra o arquivo **DEPLOY.md** para instruções de como colocar o site no ar com o Vercel!

---

**Dúvidas?**  
Peça ajuda para seu professor ou colegas de equipe!

**Equipe:**  
Daniel, Julia, Emily, Larissa, Alice  
Turma 2C - Senac Paulista
