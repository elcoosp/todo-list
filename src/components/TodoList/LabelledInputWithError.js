import React, { Fragment } from 'react'
import { lengthMoreThan } from '../../utils'
import P from 'prop-types'

const LabelledInputWithError = ({ label, error, component: C, ...props }) => (
  <Fragment>
    <label htmlFor={label.toLowerCase()}>{label}</label>
    <C name={label.toLowerCase()} {...props} />
    {lengthMoreThan(0, error) && <span>{error}</span>}
  </Fragment>
)

LabelledInputWithError.propTypes = {
  label: P.string.isRequired,
  error: P.string.isRequired,
  component: P.func.isRequired
}
export default LabelledInputWithError
