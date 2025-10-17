export class ImportGroup {
  readonly name: string
  private imports: string[] = []

  constructor(name: string) {
    this.name = name
  }

  addImport(importLine: string) {
    this.imports.push(importLine)
  }

  sortImports(order: 'none' | 'alphabetical' | 'length' = 'none') {
    switch (order) {
      case 'alphabetical':
        this.imports.sort((a, b) => a.localeCompare(b))
        break
      case 'length':
        this.imports.sort((a, b) => a.length - b.length)
        break
      default:
        break
    }
  }

  getLines(): string[] {
    return this.imports
  }

  isEmpty(): boolean {
    return this.imports.length === 0
  }
}
