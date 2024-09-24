class StoryDataExtractor {
  private htmlString: string;

  constructor(htmlString: string) {
    this.htmlString = htmlString;
  }

  // Method to strip HTML tags from a string
  private stripHtmlTags(htmlString: string): string {
    return htmlString.replace(/<[^>]*>/g, "");
  }

  // Method to extract the src attribute from the first <img> tag in the HTML string
  extractImageSrc(): string {
    const match = this.htmlString.match(/<img[^>]*src=["']([^"']*)["'][^>]*>/);
    return match ? match[1] : "";
  }

  // Method to extract the content of the first <h1> tag in the HTML string
  extractH1Content(): string {
    const h1match = this.htmlString.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h1Element = h1match ? h1match[1] : "";
    return this.stripHtmlTags(h1Element);
  }

  // Method to remove all <h1> tags from the HTML string
  private removeH1Tags(htmlString: string): string {
    return htmlString.replace(/<h1[^>]*>[\s\S]*?<\/h1>/g, "");
  }

  // Method to extract the first N words from a string, after stripping HTML tags
  extractFirstNWords(wordCount: number): string {
    const contentWithoutH1 = this.removeH1Tags(this.htmlString);
    const textWithoutHtml = this.stripHtmlTags(contentWithoutH1);
    return textWithoutHtml.split(/\s+/).slice(0, wordCount).join(" ");
  }
}

export default StoryDataExtractor;
