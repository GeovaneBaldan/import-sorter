import type { ImportSectionConfig } from '../types'

export class ImportSection {
  readonly name: string
  readonly regex: RegExp

  constructor(config: ImportSectionConfig) {
    this.name = config.name

    // Garante que o regex funcione mesmo vindo de JSON
    try {
      this.regex = new RegExp(config.regex)
    } catch {
      // fallback em caso de erro no regex
      this.regex = /^$/
    }
  }

  matches(importPath: string): boolean {
    if (!importPath) return false
    return this.regex.test(importPath)
  }
}
