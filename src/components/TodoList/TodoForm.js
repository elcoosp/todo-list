import React from 'react'
import P from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import LabelledInputWithError from './LabelledInputWithError'
import { actionCreators as A } from './actions'
import { lengthMoreThan } from '../../utils'

class TodoForm extends React.Component {
  state = {
    errors: {
      title: '',
      body: '',
      tags: ''
    },
    values: { ...this.props.values }
  }

  setErrors = newErrors =>
    this.setState(s => ({
      ...s,
      errors: { ...s.errors, ...newErrors }
    }))

  validate = () => {
    const errors = {}
    const {
      values: { title, body, tags }
    } = this.state

    lengthMoreThan(20, title) &&
      (errors.title =
        'Length of the title can not be greater than 20 characters')
    lengthMoreThan(80, body) &&
      (errors.body = 'Length of the body can not be greater than 80 characters')
    lengthMoreThan(10, tags) &&
      (errors.tags = 'You can not have more than 10 tags in a todo')

    this.setErrors(errors)
  }

  onChange = ({ target: { name, value } }) => {
    this.setState(s => ({
      ...s,
      values: { ...s.values, [name]: value }
    }))

    this.validate()
  }

  hasNoErrors = () => Object.values(this.state.errors).every(x => x === '')

  onSubmit = e => {
    console.log(e)
    e.preventDefault()
    if (this.hasNoErrors()) {
      this.props.createTodo(this.state.values)
      this.props.history.push('/todos')
    }
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <LabelledInputWithError
          component={Input}
          label="Title"
          onChange={this.onChange}
          error={this.state.errors.title}
        />
        <LabelledInputWithError
          label="Body"
          component={Input.TextArea}
          onChange={this.onChange}
          error={this.state.errors.body}
        />
        <Button onClick={this.onSubmit} type="submit">Add a todo</Button>
      </form>
    )
  }
}

TodoForm.propTypes = {
  values: P.shape({
    done: P.bool,
    title: P.string,
    body: P.string,
    tags: P.arrayOf(P.string)
  }),
  createTodo: P.func.isRequired,
  history: P.shape({
    push: P.func.isRequired
  })
}
TodoForm.defaultProps = {
  values: {
    done: false,
    title: '',
    body: '',
    tags: []
  }
}

export default withRouter(
  connect(
    null,
    (dispatch, ownProps) => ({
      createTodo: values => dispatch(A.createTodo(values))
    })
  )(TodoForm)
)
