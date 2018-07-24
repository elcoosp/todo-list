import React from 'react'

export const mapToComp = (data, Componnent, key = 'id') =>
  data.map(props => <Componnent key={props[key]} {...props} />)

export const makeAction = (type, ...payloadEnhancers) => payload => ({
  type,
  payload: {
    ...payload,
    ...payloadEnhancers.reduce((o, f) => Object.assign(o, f(payload)), {})
  }
})

export const withFuncForKey = (key, func) => () => ({
  [key]: func()
})
