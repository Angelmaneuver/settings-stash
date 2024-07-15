<div align="center" style="text-align:center;">
	<h1>Settings Stash</h1>
	<p>Configuration value saving extension for extension developers.</p>
	<div>
		<img alt="Version" src="https://img.shields.io/visual-studio-marketplace/v/angelmaneuver.settings-stash?color=blue" />
		<img alt="Language" src="https://img.shields.io/badge/Language-en%2Cja-brightgreen?logo=Language">
		<img alt="Installs" src="https://img.shields.io/visual-studio-marketplace/i/Angelmaneuver.settings-stash" />
		<a href="https://github.com/Angelmaneuver/settings-stash/issues">
			<img alt="Issues" src="https://img.shields.io/github/issues/Angelmaneuver/settings-stash?color=#86D492" />
		</a>
	</div>
</div>

## Usage

![Usage1](docs/usage/001.png)

Press `⇧⌘P` to bring up the command pallete and enter `Open Application Settings`, and enter the key of the properties to be evacuated into the `settings-stash.properties.global`.

![Usage2](docs/usage/002.png)

Press `⇧⌘P` to bring up the command pallete and enter `Settings State Backup`.

![Usage3](docs/usage/003.png)

The specified property is then evacuated.

![Usage4](docs/usage/004.png)

After evacuation, change the value of the original property.

![Usage5](docs/usage/005.png)

Press `⇧⌘P` to bring up the command pallete and enter `Settings State Restore`.

![Usage6](docs/usage/006.png)

It is restored with the value that was evacuated.

## Uninstall

Press `⇧⌘P` to bring up the command pallete and enter `Settings State Uninstall`.

The data for this extension for erased.

## Caution

### How will this extension affect your environment ?

This extension modifies the following files.

1. settings.json

### Profile configuration files (Profile's settings.json) are not covered

because a dedicated profile is all that is required.

### External libraries used by this extension

1. [vscode/l10n](https://github.com/microsoft/vscode-l10n)
1. [lodash](https://github.com/lodash/lodash)
