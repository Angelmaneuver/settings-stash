import * as vscode from 'vscode';

import { Settings } from '@/settings/extension';

const MESSAGE = {
  BACKUP: (count: number) => vscode.l10n.t('{0} properties evacuated to stash.', count),
  RESTORE: (count: number) => vscode.l10n.t('{0} properties restored from stash.', count),
  CLEAR: vscode.l10n.t("Stash properties erased."),
  UNINSTALL: vscode.l10n.t("The data for this extension has been erased."),
} as const;

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('settings-stash.backup', async () => {
      const settings = new Settings();
  
      const count = await settings.backup();
  
      vscode.window.showInformationMessage(MESSAGE.BACKUP(count));
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('settings-stash.restore', async () => {
      const settings = new Settings();
  
      const count = await settings.restore();
  
      vscode.window.showInformationMessage(MESSAGE.RESTORE(count));
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('settings-stash.clear', async () => {
      const settings = new Settings();
  
      await settings.clear();
  
      vscode.window.showInformationMessage(MESSAGE.CLEAR);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('settings-stash.uninstall', async () => {
      const settings = new Settings();
  
      await settings.uninstall();
  
      vscode.window.showInformationMessage(MESSAGE.UNINSTALL);
    })
  );
}

export function deactivate() {}
