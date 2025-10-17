import * as vscode from 'vscode'
import { SortImportsCommand } from './commands/SortImportsCommand'

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'importSorter.sortImports',
    SortImportsCommand.execute
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
