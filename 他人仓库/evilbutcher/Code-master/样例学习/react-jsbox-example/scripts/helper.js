export function articleToMarkdown(img, title, content) {
  return $text.HTMLEscape(`![](${img})\n### ${title}\n${content}`)
}







// Adding a dummy sgmodule commit(5)
// Adding a dummy plugin commit(4)
// Adding a dummy stoverride commit(2)
