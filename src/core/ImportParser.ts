export class ImportParser {
  // Captura imports padrão, type e multiline
  private static importRegex = /^import[\s\S]+?from\s+['"][^'"]+['"];?$/gm

  static extractImports(text: string): string[] {
    return text.match(ImportParser.importRegex) || []
  }

  static removeImports(text: string): string {
    return text.replace(ImportParser.importRegex, '').trim()
  }

  static extractImportPath(importLine: string): string | null {
    const match = importLine.match(/['"](.*?)['"]/)
    return match ? match[1].trim() : null
  }
}
