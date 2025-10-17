// vscode/ConfigService.ts
import * as vscode from 'vscode'
import type { ImportConfig, ImportSectionConfig } from '../types'

const FALLBACK_SECTIONS: ImportSectionConfig[] = [
  { name: 'Components', regex: '^@components/' },
  { name: 'Assets', regex: '^@assets/' },
  { name: 'Hooks', regex: '^@hooks/' }
]

export class ConfigService {
  static getImportConfig(): ImportConfig {
    const root = vscode.workspace.getConfiguration('importSections.sorter')
    let sections = root.get<ImportSectionConfig[]>('sections')

    if (!Array.isArray(sections) || sections.length === 0) {
      sections = FALLBACK_SECTIONS
    }

    sections = sections
      .filter(
        s => s && typeof s.name === 'string' && typeof s.regex === 'string'
      )
      .map(s => ({ name: s.name.trim(), regex: s.regex.trim() }))

    return { sections }
  }
}
