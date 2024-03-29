<br/>

## 🎨 デザイン

### Figma デザインカンプ

https://www.figma.com/file/Yx2kv1ZoPKrX2gngVlY6Tj/remake-PF?node-id=0%3A1

<br/>

## 📄 設計書

### ER 図

https://drive.google.com/file/d/1DDpBtK-arCb0H1jo052Qhf90IAxT7OeD/view?usp=sharing

### テーブル定義書

https://docs.google.com/spreadsheets/d/1eQOAis1HpEIBGZF8tvFJJLJ5TxZNYRh1RelUl1a2RA0/edit?usp=sharing

<br />

## 🏗 使用技術

<p align="left">
  <a href="https://www.typescriptlang.org/"><img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" height="50px;" /></a>
  <a href="https://nextjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/nextjs-3.svg" height="50px;" /></a>
  <a href="https://ja.reactjs.org/"><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" height="50px;" /></a>
  <a href="https://supabase.com/"><img src="./public/svgs/supabase.svg" height="50px;" /></a>
   <a href="https://vercel.com/"><img src="https://user-images.githubusercontent.com/65433193/118944114-3b393980-b98f-11eb-84a5-fc9a1db8ea6b.png" height="50px;" /></a
</p>
<p align="left">
  <a href="https://www.figma.com/"><img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" height="50px;" /></a>
  <a href="https://eslint.org/"><img src="https://cdn.worldvectorlogo.com/logos/eslint-1.svg" height="50px;" /></a>
  <a href="https://prettier.io/"><img src="https://cdn.worldvectorlogo.com/logos/prettier-2.svg" height="50px;" /></a>
  <a href="https://tailwindcss.com"><img src="./public/svgs/tailwind-css.svg" height="50px;"></a>
  <a href="https://chakra-ui.com/"><img src="https://bestofjs.org/logos/chakra-ui.svg" height="50px;"></a>

</p><br />

| 領域             | 技術やツール               |
| ---------------- | -------------------------- |
| デザイン/設計    | Figma                      |
| フロントエンド   | Next.js(React)/TypeScript/ |
| バックエンド     | Supabase(PostgreSQL)       |
| スタイル         | Mantine/Tailwind Css/Chakra UI/ |
| Hosting          | Vercel                     |
| 認証             | Supabase Authentication    |
| ストレージ       | Supabase Storage           |
| Linter/Formatter | ESLint/Prettier            |

<br/>

## 📦️ 技術選定

◆ Next.js

- SSR や SSG、ISR といった方式を使えば、事前にレンダリングされたページを返すことができるので初期表示が速く、またクライアントの処理能力に依存することがない。

- サーバー機能が元々あるため、サーバーとして動かせる。

- pages 配下をルーティングとして扱える。

◆ TypeScript

- ドキュメント的な役割を持つため、変数にどの型が入るのか予め予想できる。

- コンパイルを実行する前にエラーを出してくれるため、コードの品質がよくなる。

◆ Tailwind CSS

- ユーティリティクラスを使用することで CSS を記述せずにカスタムデザインを構築できる。

- クラス名を考えなくて良い CSS 設計である。

- CSS ファイルを用意する必要がない。

◆ Supabase

- 資金調達が活発で将来性もあり、今後伸びていく技術である。

- BaaS であるため、バックエンド部分の開発コストが下げられる。

- 認証やデータベースなどの機能があらかじめ備わっている。

<br/>

## 🌐 サイト概要

### Reco Spo とは

- 田舎暮らしをしてみたい人と、支援制度を利用して町に居住して欲しいという自治体の願いを結びつけるサイトです。

### テーマを選んだ理由

- 政治、経済、文化、人口など、社会における資本、資源、活動が東京に集中してます。

- そのため、地方出身者が東京などの都市部に居住し、地方の人口や税収が減少することで今後消滅の危険がある自治体が増えてきています。

- 自治体ごとに公表されている居住支援制度は意外と知られていないため、知ってもらえる場を作り、地方居住者が増えるきっかけ作りをしたいと考えました。

### ターゲット

① 人口減少に悩んでいる自治体。その自治体に住んでもらうためにどのような制度があるかなどメリットを発信したい自治体

② 若いうちからリタイア後の人生を考え、セカンドライフとして田舎に住みゆっくり余生を過ごしたいと検討している人

③ 田舎暮らしに興味があり、お試し暮らしを体験してみたい人

### 解決されること

◆ 自治体

- 自治体名と公表している支援制度を知ってもらえるきっかけになる。

- 居住者が増え、税収が増えることで自治体が活性化する。

◆ ユーザー

- 田舎暮らしするための場所や条件がとくに決まっていない人にとって、日本各地の居住支援制度、お試し暮らしを日本全国一括比較できる。

- 比較検討し、条件に合致した場所に住むことができる。

<br/>

## 💬 使い方

◆ 自治体

- 各自治体毎にアカウント登録ができ、プロフィール編集ができる。

- 支援制度に関するスポットの投稿と編集ができる。

- スポットには関連する画像、詳細、お問い合わせ先などの情報を入力することができる。

◆ ユーザー

- サイト概要からサイトの全体像と使い方を知ることができる。

- 制度概要からそれぞれの制度について知ることができる。

- 各スポットカードをクリック後にスポットの詳細を見ることができる。

- 気に入ったスポットにはいいねを付与できる。

- 都道府県もしくは制度での絞り込み検索ができる。

- 地図上から可視化して登録されているスポットを地図検索できる。
