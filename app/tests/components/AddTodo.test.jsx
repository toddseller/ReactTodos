var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jquery')
var TestUtils = require('react-addons-test-utils')

var AddTodo = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  describe('onAddTodo', () => {
    it('should call onAddTodo if valid data is entered', () => {
      var todoText = 'Get Mail'
      var spy = expect.createSpy()
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
      var $el = $(ReactDOM.findDOMNode(addTodo))

      addTodo.refs.todoText.value = todoText
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toHaveBeenCalledWith(todoText)
    })

    it('should not call onAddTodo if invalid data is entered', () => {
      var spy = expect.createSpy()
      var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
      var $el = $(ReactDOM.findDOMNode(addTodo))

      addTodo.refs.todoText.value = ''
      TestUtils.Simulate.submit($el.find('form')[0])

      expect(spy).toNotHaveBeenCalled()
    })
  })
})