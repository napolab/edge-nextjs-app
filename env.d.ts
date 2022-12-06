interface Env {
  readonly APP_NAME: string
  readonly DB: D1Database;
}

declare namespace NodeJS {
  interface ProcessEnv extends Env {}
}