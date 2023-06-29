import React from "react";
import { Buttons, Text, ViewButton } from "./styled";





export default function Button(props) {  
  
  return (
    <ViewButton>
    <Buttons onPress={props.onPress} background={props?.background} border={props?.border}>
        <Text>{props.name}</Text>
    </Buttons>
    </ViewButton>
  );
}