import React from 'react'
import { _addItem, _genID, _removeItem, _updateItem, _findItemById, _findIndex } from './helpers'

it('adds an item to a given list', () => {
  const initialList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'hello3' }
  ]
  const myId = _genID()
  const itemToAdd = { id: myId, desc: 'hellonew' }
  const expectedList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'hello3' },
    { id: myId, desc: 'hellonew' }
  ]

  const result = _addItem(itemToAdd, initialList)

  expect(result).toEqual(expectedList)
})

it('remove an item', () => {
  const oldList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'hello3' }
  ]
  const idToRemove = 2
  const newList = [
    { id: 1, desc: 'hello' },
    { id: 3, desc: 'hello3' }
  ]
  const result = _removeItem(idToRemove, oldList)
  expect(result).toEqual(newList)
})

it('updates an item', () => {
  const oldList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'hello3' }
  ]
  const updatedItem = { id: 3, desc: 'helloooo' }
  const updatedList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'helloooo' }
  ]
  const result = _updateItem(updatedItem, oldList)
  expect(result).toEqual(updatedList)
})

it('find item by ID', () => {
  const initialList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'hello3' }
  ]
  const idToFind = 2
  const itemFound = { id: 2, desc: 'hello2' }
  const result = _findItemById(idToFind, initialList)
  expect(result).toEqual(itemFound)
})

it('finds index of item', () => {
  const initialList = [
    { id: 1, desc: 'hello' },
    { id: 2, desc: 'hello2' },
    { id: 3, desc: 'hello3' }
  ]
  const itemToFind = { id: 2, desc: 'hello2' }
  const indexOfItem = 1
  const result = _findIndex(itemToFind, initialList)
  expect(result).toEqual(indexOfItem)
})
