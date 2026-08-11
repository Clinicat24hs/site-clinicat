import { describe, it, expect } from "vitest";
import { renderPostContent } from "@/lib/markdown";

describe("renderPostContent", () => {
  it("converte parágrafos", () => {
    expect(renderPostContent("Olá mundo")).toBe("<p>Olá mundo</p>");
  });
  it("converte títulos ##", () => {
    expect(renderPostContent("## Seção")).toBe("<h3>Seção</h3>");
  });
  it("converte listas -", () => {
    expect(renderPostContent("- a\n- b")).toBe("<ul><li>a</li><li>b</li></ul>");
  });
  it("aplica negrito", () => {
    expect(renderPostContent("um **forte** aqui")).toBe("<p>um <strong>forte</strong> aqui</p>");
  });
  it("escapa HTML", () => {
    expect(renderPostContent("<script>x</script>")).toBe("<p>&lt;script&gt;x&lt;/script&gt;</p>");
  });
  it("separa blocos por linha em branco", () => {
    expect(renderPostContent("A\n\n## B\n\nC")).toBe("<p>A</p>\n<h3>B</h3>\n<p>C</p>");
  });
});
