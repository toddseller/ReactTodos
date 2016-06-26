var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jquery')
var TestUtils = require('react-addons-test-utils')

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  })

  describe('Test handleAddTodo function', () => {
    it('should add todo to the todos state on handleAddTodo', () => {
      var todoText = 'test text'
      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)

      todoApp.setState({todos: []})
      todoApp.handleAddTodo(todoText)

      expect(todoApp.state.todos[0].text).toBe(todoText)
      expect(todoApp.state.todos[0].createdAt).toBeA('number')
    })
  })

  describe('Test handleToggle function', () => {

    it('should toggle completed value when handleToggle called', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: false,
        createdAt: 1466981827,
        completedAt: undefined
      }

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
      todoApp.setState({todos: [todoData]})

      expect(todoApp.state.todos[0].completed).toBe(false)
      todoApp.handleToggle(11)
      expect(todoApp.state.todos[0].completed).toBe(true)
    })

    it('should add completedAt timestamp when handleToggle called', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: false,
        createdAt: 1466981827,
        completedAt: undefined
      }

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
      todoApp.setState({todos: [todoData]})

      expect(todoApp.state.todos[0].completedAt).toBe(undefined)
      todoApp.handleToggle(11)
      expect(todoApp.state.todos[0].completedAt).toBeA('number')
    })

    it('should remove completedAt timestamp when handleToggle is set from true to false', () => {
      var todoData = {
        id: 11,
        text: 'Test features',
        completed: true,
        createdAt: 1466981827,
        completedAt: 1466981828
      }

      var todoApp = TestUtils.renderIntoDocument(<TodoApp/>)
      todoApp.setState({todos: [todoData]})

      expect(todoApp.state.todos[0].completedAt).toBeA('number')
      todoApp.handleToggle(11)
      expect(todoApp.state.todos[0].completedAt).toNotExist()
    })
  })
})