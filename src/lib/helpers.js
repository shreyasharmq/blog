// a set of pure functions to carry on basic logic

export const _genID = () => {
  return Math.floor(Math.random() * 100000)
}

export const _addItem = (item, blog) => {
  return [...blog, item]
}

export const _removeItem = (id, list) => {
  const index = list.findIndex(item => item.id === id)
  return [...list.slice(0, index), ...list.slice(index + 1)]
}

export const _updateItem = (sentItem, list) => {
  const index = list.findIndex((item) => item.id === sentItem.id)
  return [...list.slice(0, index), sentItem, ...list.slice(index + 1)]
}

export const _findItemById = (id, list) => {
  const index = list.findIndex((item) => item.id === id)
  return list.find(item => item.id === id)
}

export const _findIndex = (sentItem, list) => {
  const index = list.findIndex((item) => item.id === sentItem.id)
  return index
}