var expect = require('expect')

var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('Test filterTodos function', () => {
    var todos = [{
      id: 1,
      text: 'Some text here',
      completed: true
    }, {
      id: 2,
      text: 'Other text here',
      completed: false
    }, {
      id: 3,
      text: 'Some text here',
      completed: true
    }]

    describe('showCompleted', () => {
      it('should return all todos if showCompleted is true', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '')

        expect(filteredTodos.length).toBe(3)
      })

      it('should return non-completed todos if showCompleted is false', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, false, '')

        expect(filteredTodos.length).toBe(1)
      })
    })

    describe('sort by status', () => {
      it('should sort by completed status', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '')

        expect(filteredTodos[0].completed).toBe(false)
      })
    })

    describe('searchText', () => {
      it('should filter todos by searchText', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'some')

        expect(filteredTodos.length).toBe(2)
      })

      it('should return all todos if searchText is empty', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '')

        expect(filteredTodos.length).toBe(3)
      })
    })
  })





































})