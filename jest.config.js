/*
  Данная настройка ограничит Jest директорией "src" в проекте,
  чтобы не возникало конфликтов с директорией "demos"

  В личных проектах данную настройку добавлять не нужно,
  потому что директория "demos" — это удел только демо-репозитория.
  А значит, в ваших проектах не будет конфликта нескольких Jest
*/

module.exports = {
  "rootDir": "./src"
}
