const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposableToggleDarkLightMode = vscode.commands.registerCommand('cengage.toggleDarkLightMode', function () {
    const currentTheme = vscode.workspace.getConfiguration('workbench').get('colorTheme');
    const newTheme = currentTheme.includes('Dark') ? 'Default Light+' : 'Default Dark+';
    vscode.workspace.getConfiguration('workbench').update('colorTheme', newTheme, true);
  });

  let disposableOpenCommandPalette = vscode.commands.registerCommand('cengage.openCommandPalette', function () {
    vscode.commands.executeCommand('workbench.action.showCommands');
  });

  let disposableToggleTerminal = vscode.commands.registerCommand('cengage.toggleTerminal', function () {
    vscode.commands.executeCommand('workbench.action.terminal.toggleTerminal');
  });

  context.subscriptions.push(disposableToggleDarkLightMode);
  context.subscriptions.push(disposableOpenCommandPalette);
  context.subscriptions.push(disposableToggleTerminal);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
