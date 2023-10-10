import { MarkdownOptions } from "./types";

interface MarkdownToHtmlFunction {
  (text: string, options?: MarkdownOptions): string;
  default: (text: string, options?: MarkdownOptions) => string;
}

declare const markdownToHtml: MarkdownToHtmlFunction;

export default markdownToHtml;
export { markdownToSimpleHtml } from "./markdown-to-simple-html";
