type className = string | null | undefined | false | (() => string)
export const classNames = (...classNames: className[]): string =>
  classNames.filter(Boolean).join(' ').replace(/\s\s+/g, ' ').trim()
// Função fornecida por Leandro Reis em projeto posterior https://github.com/leandroepr
