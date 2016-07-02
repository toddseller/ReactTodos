var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jquery')
var TestUtils = require('react-addons-test-utils')

import * as actions from 'actions'
var {AddTodo} = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should dispatch ADD_TODO when valid data is entered', () => {
    var todoText = 'Get Mail'
    var action = actions.startAddTodo(todoText)
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should not dispatch ADD_TODO when invalid data is entered', () => {
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = ''
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})