# 📸 COMO ADICIONAR FOTOS E VÍDEOS

## ⚠️ IMPORTANTE

Os arquivos de mídia (fotos e vídeos) não estão no projeto ainda!

Você precisa adicionar os arquivos manualmente.

---

## 📁 ONDE COLOCAR OS ARQUIVOS

### 📸 Imagens (fotos .jpg)

Coloque as seguintes imagens na pasta:  
**`public/images/`**

Arquivos necessários:
- ✅ `resultado-amido.jpg` (foto das placas com alimentos após o iodo)
- ✅ `pesagem-amido.jpg` (foto da pesagem do amido de milho)
- ✅ `solucao-amido.jpg` (foto do erlenmeyer com solução)

### 🎥 Vídeo (.mp4)

Coloque o vídeo na pasta:  
**`public/video/`**

Arquivo necessário:
- ✅ `iodo-video.mp4` (vídeo do gotejamento do iodo)

---

## 🛠️ COMO FAZER

### Opção 1: Via Windows Explorer (Mais Fácil)

1. Abra a pasta do projeto:  
   `C:\Users\Usuario\Downloads\Mica\`

2. Entre na pasta `public`

3. Você vai ver duas pastas:
   - `images` (para fotos)
   - `video` (para o vídeo)

4. **Copie as fotos** para a pasta `public/images/`
5. **Copie o vídeo** para a pasta `public/video/`

6. **IMPORTANTE:** Os nomes dos arquivos devem ser EXATAMENTE:
   - `resultado-amido.jpg`
   - `pesagem-amido.jpg`
   - `solucao-amido.jpg`
   - `iodo-video.mp4`

---

### Opção 2: Via PowerShell

```bash
# Navegar até a pasta do projeto
cd "C:\Users\Usuario\Downloads\Mica"

# Copiar imagens (substitua CAMINHO_DAS_SUAS_FOTOS)
Copy-Item "CAMINHO_DAS_SUAS_FOTOS\resultado-amido.jpg" "public\images\"
Copy-Item "CAMINHO_DAS_SUAS_FOTOS\pesagem-amido.jpg" "public\images\"
Copy-Item "CAMINHO_DAS_SUAS_FOTOS\solucao-amido.jpg" "public\images\"

# Copiar vídeo (substitua CAMINHO_DO_SEU_VIDEO)
Copy-Item "CAMINHO_DO_SEU_VIDEO\iodo-video.mp4" "public\video\"
```

---

## ✅ DEPOIS DE ADICIONAR OS ARQUIVOS

1. **Fazer commit:**

```bash
cd "C:\Users\Usuario\Downloads\Mica"
git add public/images public/video
git commit -m "Adiciona fotos e vídeo do experimento"
git push
```

2. **Reconstruir:**

```bash
npm run build
```

3. **Fazer deploy no Vercel:**

Acesse https://vercel.com e faça o deploy do projeto atualizado.

---

## 🔍 VERIFICAR SE OS ARQUIVOS ESTÃO LÁ

Execute no PowerShell:

```bash
cd "C:\Users\Usuario\Downloads\Mica"
Get-ChildItem -Path public\images
Get-ChildItem -Path public\video
```

Você deve ver:
```
public/images/
  - resultado-amido.jpg
  - pesagem-amido.jpg
  - solucao-amido.jpg

public/video/
  - iodo-video.mp4
```

---

## 🎯 ESTRUTURA FINAL

```
Mica/
├── public/
│   ├── images/
│   │   ├── resultado-amido.jpg   ← Foto 1
│   │   ├── pesagem-amido.jpg     ← Foto 2
│   │   └── solucao-amido.jpg     ← Foto 3
│   ├── video/
│   │   └── iodo-video.mp4        ← Vídeo
│   ├── favicon.ico
│   └── robots.txt
└── ...
```

---

## ⚠️ IMPORTANTE

- Os arquivos precisam ter os nomes EXATOS listados acima
- Formatos suportados: `.jpg` para imagens, `.mp4` para vídeo
- Tamanho recomendado: Imagens < 2MB cada, Vídeo < 10MB
- Depois de adicionar, faça commit e push para o GitHub
- O Vercel vai automaticamente incluir esses arquivos no deploy

---

## 💡 DICA

Se você não tiver os arquivos agora, pode:

1. Usar imagens/vídeos temporários com os mesmos nomes
2. Fazer o deploy
3. Depois substituir pelos arquivos reais
4. Fazer commit e push novamente

O Vercel atualiza automaticamente quando você faz push!

---

**Após adicionar os arquivos, as fotos e o vídeo vão aparecer normalmente no site! 🎉**
