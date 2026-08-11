// Mini-renderizador de conteúdo do blog (sem dependências).
// Suporta: parágrafos (blocos separados por linha em branco), títulos "## ",
// listas "- item" e negrito **texto**. Escapa HTML para evitar injeção.

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s: string): string {
  // aplica **negrito** sobre o texto já escapado
  return escapeHtml(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

export function renderPostContent(md: string): string {
  const blocks = (md ?? "").trim().split(/\n\s*\n/);
  const out: string[] = [];
  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;
    const lines = block.split("\n").map((l) => l.trim());
    if (lines.length > 0 && lines.every((l) => l.startsWith("- "))) {
      out.push("<ul>" + lines.map((l) => `<li>${inline(l.slice(2))}</li>`).join("") + "</ul>");
    } else if (block.startsWith("## ")) {
      out.push(`<h3>${inline(block.slice(3))}</h3>`);
    } else {
      out.push(`<p>${lines.map(inline).join("<br/>")}</p>`);
    }
  }
  return out.join("\n");
}
