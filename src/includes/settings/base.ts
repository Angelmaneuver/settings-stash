import * as vscode from 'vscode';

export class SettingBase {
  private key?: string;
  private config: vscode.WorkspaceConfiguration;
  private target?: vscode.ConfigurationTarget;

  constructor(
    key?: string,
    target?: vscode.ConfigurationTarget,
    scoop?: vscode.ConfigurationScope,
  ) {
    this.key = key;
    this.config = vscode.workspace.getConfiguration(this.key, scoop);
    this.target = target;
  }

  public async set(key: string, value: unknown): Promise<void> {
    return this.config.update(key, value, this.target);
  }

  public get<T>(key: string): T | undefined {
    return this.config.get<T>(key);
  }

  public async remove(key: string): Promise<void> {
    return this.set(key, undefined);
  }
}
