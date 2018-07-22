import React from 'react'
import { connect } from 'react-redux'
import { actionCreators as A } from './actions'
import P from 'prop-types'

const Tag = ({ children }) => <p>#{children}</p>
Tag.propTypes = {
  children: P.string.isRequired
}

const TodoItem = ({ done, title, body, tags, toggleTodoDone, id }) => (
  <div>
    <h3>{title}</h3>
    <h4>Notes: {body}</h4>
    <input
      type="checkbox"
      name="isTodoDone"
      checked={done}
      onChange={() => toggleTodoDone(id)}
    />
    <p>{body}</p>
    {tags.map(t => <Tag key={t}>{t}</Tag>)}
  </div>
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
