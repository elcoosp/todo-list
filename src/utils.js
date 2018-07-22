import React from 'react'

export const mapToComp = (data, Componnent, key = 'id') =>
  data.map(props => <Componnent key={props[key]} {...props} />)

export const makeAction = (type, payloadEnhancer) => payload => ({
  type,
  payload: {
    ...payload,
    ...payloadEnhancer(payload)
  }
})
