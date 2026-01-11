# NestJS App

NestJS + Prisma + PostgreSQL を使用したアプリケーションです。

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. DockerでPostgreSQLを起動

```bash
docker-compose up -d
```

### 3. 環境変数の設定

`.env`ファイルを作成し、データベース接続情報を設定してください：

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5433/nestjs-app?schema=public"
```

### 4. Prismaマイグレーションの実行

```bash
npx prisma migrate dev
```

### 5. Prisma Clientの生成

```bash
npx prisma generate
```

### 6. アプリケーションの起動

```bash
npm run start
```

アプリケーションは `http://localhost:3000` で起動します。

## Prismaコマンド

### マイグレーション

```bash
# 開発環境でマイグレーションを作成・適用
npx prisma migrate dev

# マイグレーション名を指定して作成
npx prisma migrate dev --name migration_name

# 本番環境でマイグレーションを適用
npx prisma migrate deploy

# マイグレーションの状態を確認
npx prisma migrate status
```

### Prisma Client

```bash
# Prisma Clientを生成
npx prisma generate

# Prisma Clientを再生成（スキーマ変更後）
npx prisma generate
```

### データベース操作

```bash
# Prisma Studioを起動（GUIでデータベースを操作）
npx prisma studio

# データベースをリセット（全データ削除）
npx prisma migrate reset

# データベースのスキーマをプッシュ（マイグレーションなし）
npx prisma db push

# データベースのスキーマをプル（既存DBからスキーマを取得）
npx prisma db pull
```

### その他

```bash
# フォーマット
npx prisma format

# バリデーション
npx prisma validate
```

## Dockerコマンド

### コンテナの起動・停止

```bash
# コンテナを起動（バックグラウンド）
docker-compose up -d

# コンテナを停止
docker-compose down

# コンテナを停止してボリュームも削除
docker-compose down -v

# コンテナの状態を確認
docker-compose ps

# ログを確認
docker-compose logs -f postgres
```

### データベースへの接続

```bash
# PostgreSQLコンテナに接続
docker-compose exec postgres psql -U postgres -d nestjs-app

# または直接接続
psql -h localhost -p 5433 -U postgres -d nestjs-app
```

### その他

```bash
# コンテナを再起動
docker-compose restart

# コンテナのログをリアルタイムで確認
docker-compose logs -f

# コンテナを再ビルド
docker-compose up -d --build
```

## NestJS CLIコマンド

### プロジェクト生成

```bash
# 新しいプロジェクトを作成
nest new project-name

# 新しいモジュールを生成
nest generate module module-name
nest g module module-name

# 新しいコントローラーを生成
nest generate controller controller-name
nest g controller controller-name

# 新しいサービスを生成
nest generate service service-name
nest g service service-name

# 新しいガードを生成
nest generate guard guard-name
nest g guard guard-name

# 新しいミドルウェアを生成
nest generate middleware middleware-name
nest g middleware middleware-name

# 新しいフィルターを生成
nest generate filter filter-name
nest g filter filter-name

# 新しいインターセプターを生成
nest generate interceptor interceptor-name
nest g interceptor interceptor-name

# 新しいパイプを生成
nest generate pipe pipe-name
nest g pipe pipe-name

# 新しいデコレーターを生成
nest generate decorator decorator-name
nest g decorator decorator-name
```

### 開発・ビルド

```bash
# 開発モードで起動（ウォッチモード）
npm run start
# または
nest start

# デバッグモードで起動
npm run start:debug

# 本番ビルド
npm run build
# または
nest build

# 本番モードで起動
npm run start:prod
```

### その他

```bash
# 利用可能なコマンドを確認
nest --help

# バージョンを確認
nest --version
```

## よく使うnpmスクリプト

```bash
# 開発サーバー起動（ウォッチモード）
npm run start

# デバッグモードで起動
npm run start:debug

# 本番ビルド
npm run build

# 本番モードで起動
npm run start:prod

# コードフォーマット
npm run format

# リンター実行
npm run lint

# テスト実行
npm run test

# テスト（ウォッチモード）
npm run test:watch

# テスト（カバレッジ）
npm run test:cov

# E2Eテスト
npm run test:e2e
```
