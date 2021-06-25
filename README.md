# プロジェクトを動かすには How to start the project

## はじめに First of all

まず初めにルートディレクトリで`yarm install` を実行してください。
GitHub ではパッケージの本体である node_modules のディレクトリは管理されていないため、
このスクリプトによりインストールを行う必要があります。この作業は、チェックアウト後の初回のみ必要です。

First of all, execute `yarm install` on root directry.
'node_modules' directry, that contains the origin code of the packages, are not
managed on GitHub. So you have to install the packages by this script.
This behavior is needed just once, after you check out.

## ローカルサーバーの起動 Starting on local server

ルートディレクトリで以下を実行。Execute the below script in root directry.

```
$ yarn run start
```

自動的に既定のブラウザで[http://localhost:3000/index](http://localhost:3000/index)が開きます。
The index page will be open automatically on default bwowser.

## ビルド Build

ルートディレクトリで以下を実行。Execute the below script in root directry.

```
$ yarn run build
```

バンドルされたファイルが./dist 配下に出力される。
The bandled files are output in './dist'.

# VSCode のワークスペース設定 Setting the workspace on VSCode

以下をルートディレクトリに作成します。
Make the below file in root directry.

```workspace.code-workspace
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true, // <-- prettierで整形
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true // <-- eslintでリント
    }
  }
}
```

このファイルがあることで、ESLint の警告や、フォーマットの自動修正が有効になります。
また、VSCode の機能で ESLint の実行を許可しておいてください。

This file enables ESLint to warn grammatical error and Prettier fixes format automatically.
Make sure to permit ESLint to run on VSCode preference.

# プロジェクトについて About this project

## 言語 language

ライブラリに React を使用し、TypeScript で記述します。
Use React as a library, written by TypeScript

## スタイル style

styled-components を使用します。
Use styled-components

## webpack

コンパイル等の作業は webpack で統一して管理します。
Processes such as compeile are collectively managed in webpack.

## TypeScript Babel

トランスパイラとして使用します。
Using as trenspiler.

## ESLint Prettier

構文、フォーマットチェックに使用します。
Using to check syntax or format.

# 記事 Articles

Zenn にこのプロジェクトについての解説記事がアップロードされています。
You can read some articles about this project on Zenn.(Japanese)

[マニュアルで React のフロント環境構築(前編)]()
[マニュアルで React のフロント環境構築(後編)]()
