export class ImportGroup {
  readonly name: string
  private imports: string[] = []

  constructor(name: string) {
    this.name = name
  }

  addImport(importLine: string) {
    this.imports.push(importLine)
  }

  getLines(): string[] {
    return this.imports
  }

  isEmpty(): boolean {
    return this.imports.length === 0
  }
}
