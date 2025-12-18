
# 🛠️ Guia de Gerenciamento de Imagens - RM Auto Center

Siga este tutorial para substituir as imagens do seu site sem precisar mexer no código.

## 📂 Estrutura de Pastas
Crie uma pasta chamada `images` na raiz do seu projeto (onde está o arquivo `index.html`). O site está configurado para buscar os arquivos lá dentro.

## 🖼️ Tabela de Arquivos Necessários

| Local no Site | Nome Exato do Arquivo | Formato Recomendado | Dimensões Sugeridas |
| :--- | :--- | :--- | :--- |
| **Logo (Menu)** | `logo.png` | PNG (Fundo Transparente) | 200px (largura) |
| **Fundo Principal (Hero)** | `hero-bg.jpg` | JPG | 1920x1080px |
| **Mecânica Geral** | `mecanica.jpg` | JPG | 800x600px |
| **Funilaria & Martelinho** | `funilaria.jpg` | JPG | 800x600px |
| **Pintura Automotiva** | `pintura.jpg` | JPG | 800x600px |
| **Estética & Detalhamento** | `estetica.jpg` | JPG | 800x600px |

## 💡 Dicas para Melhores Resultados

1.  **Nomes de Arquivo:** O nome deve ser **exatamente** igual ao da tabela acima, em letras minúsculas e sem espaços.
2.  **Formatos:** 
    *   Use `.jpg` para fotos (são mais leves).
    *   Use `.png` para a logo (permite transparência).
3.  **Peso das Imagens:** Tente manter cada imagem abaixo de **500 KB** para o site carregar rápido. Você pode usar sites como o *TinyJPG* ou *Squoosh* para comprimir as fotos.
4.  **Proporção:** Para as fotos dos serviços, prefira imagens horizontais (retangulares).
5.  **Qualidade:** Como o site é escuro e premium, fotos com boa iluminação e foco farão toda a diferença na experiência do seu cliente.

---
*Dúvida: O site possui um sistema de segurança (fallback). Se você deletar uma imagem e esquecer de colocar a nova, ele tentará carregar uma imagem padrão da internet para não deixar o site com erro visual.*
