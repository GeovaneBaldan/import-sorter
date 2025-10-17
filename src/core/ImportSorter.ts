import { ImportGroup } from './ImportGroup'
import { ImportParser } from './ImportParser'
import { ImportSection } from './ImportSection'

import type { ImportConfig } from '../types'

export class ImportSorter {
  private sections: ImportSection[]

  constructor(config: ImportConfig) {
    this.sections = config.sections.map(s => new ImportSection(s))
  }

  sortImports(fileContent: string): string {
    const imports = ImportParser.extractImports(fileContent)
    const body = ImportParser.removeImports(fileContent)

    const groups = this.sections.map(section => new ImportGroup(section.name))
    const others = new ImportGroup('Others')

    for (const imp of imports) {
      const importPath = ImportParser.extractImportPath(imp)
      const matched = this.sections.find(section =>
        section.matches(importPath || '')
      )

      if (matched) {
        const group = groups.find(g => g.name === matched.name)
        group?.addImport(imp)
      } else others.addImport(imp)
    }

    const result: string[] = []
    for (const group of [...groups, others]) {
      if (!group.isEmpty()) {
        result.push(`// ${group.name}`)
        result.push(...group.getLines(), '')
      }
    }

    return `${[...result, body].join('\n').trim()}\n`
  }
}
