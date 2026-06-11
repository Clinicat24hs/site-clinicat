Clinicat — versão estática (HTML/CSS/JS puro)

Conteúdo:
  index.html   — página única
  styles.css   — estilos
  script.js    — menu mobile e ano do rodapé
  assets/      — imagens e logos

Como hospedar:
  1. Faça upload da pasta inteira para qualquer servidor web
     (Apache, Nginx, hospedagem compartilhada cPanel, GitHub Pages,
     Netlify drop, Vercel, etc.).
  2. Garanta que "index.html" esteja na raiz pública (ex.: public_html/).
  3. Pronto. Não precisa de Node.js, build, banco de dados ou backend.

Para testar localmente:
  Basta abrir index.html no navegador, ou rodar:
    python3 -m http.server 8000
  e acessar http://localhost:8000
