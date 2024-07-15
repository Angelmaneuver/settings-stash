import _ from 'lodash';
import { ConfigurationTarget } from 'vscode';

import { SettingBase } from './base';

const ID = {
  'properties.global': 'properties.global',
  'stash.global': 'stash.global',
} as const;

export class Settings {
  private manage: SettingBase;
  private connection: SettingBase;

  constructor() {
    this.manage = new SettingBase('settings-stash', ConfigurationTarget.Global);
    this.connection = new SettingBase(undefined, ConfigurationTarget.Global);
  }

  protected get properties(): Array<string> {
    return this.manage.get(ID['properties.global']) ?? [];
  }

  protected get stash(): Record<string, unknown> {
    const stash = this.manage.get<Record<string, unknown>>(ID['stash.global']);

    return stash ? _.cloneDeep(stash) : {};
  }

  public async backup(): Promise<number> {
    const properties: Record<string, unknown> = {};

    for (const property of this.properties) {
      const value = this.connection.get(property);

      if (value) {
        properties[property] = value;
      }
    }

    await this.manage.set(ID['stash.global'], properties);

    return Object.keys(properties).length;
  }

  public async restore(): Promise<number> {
    let count = 0;

    for (const key of Object.keys(this.stash)) {
      await this.connection.set(key, this.stash[key]);

      count++;
    }

    return count;
  }

  public async uninstall(): Promise<void> {
    await this.manage.remove(ID['properties.global']);
    return this.manage.remove(ID['stash.global']);
  }
}
