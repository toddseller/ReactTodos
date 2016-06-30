var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers')

describe('Reducers', () => {
  describe('Test searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      var res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('Test showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    })
  })

  describe('Test todosReducer', () => {
    describe('addTodo', () => {
      it('should add new todo', () => {
        var action = {
          type: 'ADD_TODO',
          text: 'Walk the dog'
        }
        var res = reducers.todosReducer(df([]), df(action))

        expect(res.length).toEqual(1)
        expect(res[0].text).toEqual(action.text)
      })
    })

    describe('toggleTodo', () => {
      it('should toggle todo', () => {
        var todos = [{
            id: 1,
            text: 'Walk the dog',
            completed: true,
            createdAt: 123,
            completedAt: 125
        }]
        var action = {
          type: 'TOGGLE_TODO',
          id: 1
        }
        var res = reducers.todosReducer(df(todos), df(action))

        expect(res[0].completed).toEqual(false)
        expect(res[0].completedAt).toEqual(undefined)
      })
    })
  })
})