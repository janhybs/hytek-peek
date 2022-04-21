import * as vscode from 'vscode';
import { HytekPeekProvider } from './Hytek';

export function activate(context: vscode.ExtensionContext) {
    // on line number change
    vscode.window.onDidChangeTextEditorSelection(e => {
        const view = vscode.window.createTreeView('hytek-peek', { treeDataProvider: new HytekPeekProvider() });
        context.subscriptions.push(view);
    })

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('hytek-peek.hytek', () => {
        vscode.window.showInformationMessage(`Hytek is running`);
    });

    context.subscriptions.push(disposable);
}



// this method is called when your extension is deactivated
export function deactivate() { }
