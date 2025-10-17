import * as vscode from 'vscode'
import { ImportSorter } from '../core/ImportSorter'
import { ConfigService } from './../core/ConfigService'

export class SortImportsCommand {
  static async execute() {
    const editor = vscode.window.activeTextEditor
    if (!editor) return

    const document = editor.document
    const text = document.getText()

    const config = ConfigService.getImportConfig()
    const sorter = new ImportSorter(config)
    const newText = sorter.sortImports(text)

    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(text.length)
    )

    await editor.edit(editBuilder => {
      editBuilder.replace(fullRange, newText)
    })
  }
}
