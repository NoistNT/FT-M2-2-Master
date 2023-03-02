const traverseDomAndCollectElements = (matchFunc, startEl = document.body) => {
  let resultSet = []

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  if (matchFunc(startEl)) resultSet.push(startEl)

  for (let i = 0; i < startEl.children.length; i++) {
    const result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    // Funcionaria como un acumulador.
    resultSet = [...resultSet, ...result]
  }
  return resultSet
}

// Detecta y devuelve el tipo de selector
// Devuelve uno de estos tipos: id, class, tag.class, tag
// Si me pasaron un string que comienza con # return 'id'
// Si me pasaron un string que comienza con . return 'class'
// Si me pasaron un string que contiene . return 'tag.class'
// Si me pasaron un string que comienza sin # ni . return 'tag'

const selectorTypeMatcher = (selector) => {
  if (selector[0] === '#') return 'id'
  if (selector[0] === '.') return 'class'
  if (selector.includes('.')) return 'tag.class'
  return 'tag'
}

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = (selector) => {
  const selectorType = selectorTypeMatcher(selector)
  let matchFunction

  switch (selectorType) {
    case 'id':
      matchFunction = (element) => element.id === selector.slice(1)
      return matchFunction

    case 'class':
      matchFunction = (element) => element.classList.contains(selector.slice(1))
      return matchFunction

    case 'tag':
      matchFunction = (element) => element.tagName.toLowerCase() === selector
      return matchFunction

    case 'tag.class':
      matchFunction = (element) => {
        // [tag, className] = split('.')
        const tag = selector.split('.')[0]
        const className = selector.split('.')[1]
        return (
          element.tagName.toLowerCase() === tag && element.classList.contains(className)
          // matchFunctionMaker(tag)(element) && matchFunctionMaker('.' + className)(element)
        )
      }
      return matchFunction

    default:
      return matchFunction
  }
}

const $ = (selector) => {
  const selectorMatchFunc = matchFunctionMaker(selector)
  const elements = traverseDomAndCollectElements(selectorMatchFunc)
  return elements
}
