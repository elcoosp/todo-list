import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import P from 'prop-types'
import { Card } from 'antd'
import { actionCreators as A } from './actions'

const Tag = ({ children }) => <p>#{children}</p>
Tag.propTypes = {
  children: P.string.isRequired
}

const TodoItem = ({ done, title, body, tags, toggleTodoDone, id }) => (
  <Card
    title={title}
    extra={
      <input
        type="checkbox"
        name="isTodoDone"
        checked={done}
        onChange={() => toggleTodoDone(id)}
      />
    }
  >
    {body ? (
      <Fragment>
        <h4>Notes:</h4>
        <p>{body}</p>
      </Fragment>
    ) : (
      <h4>No notes</h4>
    )}

    {tags.map(t => <Tag key={t}>{t}</Tag>)}
  </Card>
)
TodoItem.propTypes = {
  done: P.bool.isRequired,
  title: P.string.isRequired,
  id: P.string.isRequired,
  body: P.string.isRequired,
  tags: P.arrayOf(P.string).isRequired,
  toggleTodoDone: P.func.isRequired
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    toggleTodoDone: id => dispatch(A.toggleTodoDone({ id }))
  })
)(TodoItem)
