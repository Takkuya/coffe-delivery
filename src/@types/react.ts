import React from 'react'

export type ReactState<Value> = [
  Value,
  React.Dispatch<React.SetStateAction<Value>>,
]
