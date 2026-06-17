# My Éden Clínica Estética - site estático

Este site foi feito para funcionar por duplo clique no `index.html` e também para subir na Hostinger arrastando a pasta inteira.

## Como ver o site

1. Abra a pasta `my-eden-clinica-estetica`.
2. Dê duplo clique em `index.html`.
3. Se algo parecer desatualizado depois de editar, aperte `Ctrl + F5` no navegador.

## Como subir na Hostinger

1. Entre no Gerenciador de Arquivos da Hostinger.
2. Abra a pasta pública do domínio, normalmente `public_html`.
3. Envie todos os arquivos e pastas de `my-eden-clinica-estetica` para dentro de `public_html`.
4. O arquivo principal precisa ficar como `public_html/index.html`.

Não precisa instalar npm, rodar build, configurar servidor ou usar terminal.

## O que editar no Bloco de Notas

O arquivo principal de edição é:

`lib/manifest.js`

Nele você altera:

- Nome, tagline e Instagram.
- Nota do Google e quantidade de avaliações.
- WhatsApp.
- Endereço, horário e mapa.
- Nome e registro do profissional responsável.
- Tratamentos.
- Avaliações reais do Google.
- Galeria de resultados.

Salve o arquivo mantendo o nome `manifest.js`.

## Como trocar o WhatsApp

No arquivo `lib/manifest.js`, procure:

`whatsappNumber: "55XXXXXXXXXXX"`

Troque por somente números, com DDI e DDD.

Exemplo:

`whatsappNumber: "5516999999999"`

Importante: por segurança, o `index.html` também tem links básicos de WhatsApp para o site continuar funcionando se o JavaScript falhar. Depois de trocar o número no manifesto, use o localizar do Bloco de Notas no `index.html` e substitua:

`55XXXXXXXXXXX`

pelo número correto.

## Como trocar fotos

1. Coloque as fotos novas dentro da pasta `assets/img`.
2. Use nomes simples, sem acentos e sem espaços. Exemplo: `ambiente-clinica.webp`.
3. No `lib/manifest.js`, atualize o caminho da imagem quando for galeria.

Para fotos reais de antes/depois, use a parte `gallery`.

Um item só aparece no site quando estiver assim:

```js
active: true,
placeholder: false,
consentimento: true,
```

Se `consentimento` estiver `false`, a foto não aparece.

## Como colocar avaliações reais do Google

No `lib/manifest.js`, procure `reviews`.

Para cada avaliação:

1. Cole o texto real copiado do Google.
2. Coloque o nome ou inicial da pessoa.
3. Mantenha a nota em `rating: 5` ou ajuste se for diferente.
4. Troque `active: false` para `active: true`.

Não invente avaliações.

## Como atualizar nota, endereço e mapa

No `lib/manifest.js`, confirme e altere:

- `googleRating`
- `googleReviews`
- `googleProfileUrl`
- `address`
- `hours`
- `mapsEmbedUrl`

Para o mapa, abra o Google Maps, busque o endereço correto, use a opção de incorporar mapa e copie o link do iframe. Cole somente o valor do `src` em `mapsEmbedUrl`.

## Se a alteração não aparecer

1. Aperte `Ctrl + F5`.
2. Se ainda não aparecer, abra o `index.html` e troque os finais `?v=20260617` por uma nova data. Exemplo: `?v=20260618`.
3. Faça o mesmo nos arquivos `styles.css`, `lib/manifest.js` e `lib/main.js` quando forem citados no `index.html`.

## Nota de conformidade

As regras exatas de antes/depois e divulgação de injetáveis dependem do conselho dos profissionais envolvidos, como CFM para médicos e demais conselhos para profissionais não médicos. Confirme as normas aplicáveis antes de publicar.

Antes de publicar qualquer foto de cliente:

- Tenha termo de consentimento.
- Use imagem natural, sem edição que altere resultado.
- Evite promessa, comparação sensacionalista ou garantia.
- Lembre que resultados variam de pessoa para pessoa.

Botox/toxina botulínica deve ser divulgado com sobriedade e realizado por profissional habilitado, mediante avaliação individual.

## Imagens placeholder

As imagens atuais são placeholders de fontes abertas via Openverse. Os créditos ficam em:

`assets/credits.json`

Substitua pelas fotos reais da clínica antes da publicação final, sempre que possível.
