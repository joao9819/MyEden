# Site estático · My Éden

Este site foi feito para subir na Hostinger arrastando a pasta inteira. Ele também abre com duplo clique no arquivo `index.html`.

## Como abrir

1. Abra a pasta `clinica-estetica-ribeirao-preto`.
2. Dê duplo clique em `index.html`.
3. Para publicar, envie todos os arquivos e pastas para a Hostinger: `index.html`, `.htaccess`, `css`, `js`, `lib` e `assets`.

## O que editar no Bloco de Notas

Abra `lib/manifest.js`. Quase tudo que a cliente precisa trocar está ali:

- `brand.name`: nome da profissional ou da clínica.
- `brand.profession`, `brand.register`, `brand.experience`: textos exibidos no bloco de credibilidade.
- `contact.whatsappNumber`: número em formato internacional, sem espaços. Exemplo: `5516999999999`.
- `contact.displayPhone`: número como aparece no site.
- `contact.instagramHandle` e `contact.instagramUrl`: Instagram.
- `contact.address`, `contact.mapQuery`, `contact.hours`: endereço, busca do mapa e horário.
- `services`: nome, problema, solução e mensagem de WhatsApp de cada serviço.
- `reviews`: avaliações exibidas no site.
- `gallery`: coloque as fotos em `assets/img/`, informe o caminho no campo `image` e marque `consentimento: true` somente quando houver autorização do paciente.

## Importante sobre WhatsApp

O número também aparece no `index.html` como segurança para o site funcionar mesmo se o JavaScript não carregar. Depois de trocar o WhatsApp no `manifest.js`, procure por `5516999999999` no `index.html` e substitua pelo número correto.

## Trocar fotos

Coloque as novas imagens em `assets/img/`. Prefira arquivos `.webp`. Se usar `.jpg` ou `.png`, escreva o nome completo no `manifest.js`.

As imagens dos serviços ficam em `assets/img/services/` e podem ser trocadas mantendo os mesmos nomes. Não publique resultados de procedimentos estéticos sem confirmar as regras do conselho profissional e sem consentimento formal do paciente.

## Antes de publicar, preencher os dados reais

1. Abra `lib/manifest.js` no Bloco de Notas.
2. Troque `contact.whatsappNumber` e `contact.displayPhone` pelo WhatsApp real. No `index.html`, procure por `5516999999999` e substitua pelo mesmo número.
3. Confirme os depoimentos, a nota e o número real de avaliações do Google e atualize os textos correspondentes.
4. Preencha o endereço completo e o horário de atendimento em `contact.address` e `contact.hours`.
5. Inclua no conteúdo institucional o nome, registro ou CRM e a experiência do profissional responsável, especialmente para o Botox.
6. Preencha `brand.googleProfileUrl` com o link correto do perfil da My Éden no Google.
7. Troque as imagens em `assets/img/services/` pelas fotos reais dos serviços, mantendo os mesmos nomes de arquivo.
8. Para publicar fotos na galeria, coloque os arquivos em `assets/img/`, atualize o campo `image` e marque `consentimento: true` somente com autorização formal.

## Antes/depois e conformidade

As regras exatas de antes/depois dependem do conselho da profissional:

- Médicos: verificar CFM, incluindo Resolução 2.336/2023.
- Biomédicos, enfermeiros, esteticistas e outras categorias: verificar as normas do conselho correspondente.

Antes de publicar fotos de procedimentos de saúde, confirme as normas do conselho e tenha termo de consentimento de cada paciente. Não use linguagem como “resultado garantido”, “cura”, “sem dor”, “sem riscos”, “efeito imediato” ou “satisfação garantida”. Todo CTA deve convidar para avaliação.

## Se algo não atualizar

1. Aperte `Ctrl + F5` no navegador.
2. Se ainda assim o arquivo antigo aparecer, troque o número de versão no `index.html`. Procure `?v=20260618-5` e altere para uma versão mais recente.

## Bibliotecas locais

O site carrega as builds oficiais locais do GSAP 3.15.0 e ScrollTrigger 3.15.0 em `lib/gsap.min.js` e `lib/ScrollTrigger.min.js`.
