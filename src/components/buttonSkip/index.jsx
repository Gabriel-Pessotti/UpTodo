/* eslint-disable react/prop-types */
import React from 'react'
import { Buttom, TextButtom,  ViewButton } from './styled'

export default function ButtonSkip (props) {
  return (
    <ViewButton>
      <Buttom color={props.color} onPress={props.onPress}>
        <TextButtom color={props.txtColor}>{props.name}</TextButtom>
      </Buttom>
   </ViewButton>
  )
}