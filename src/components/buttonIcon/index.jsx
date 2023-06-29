import React from "react";
import { Buttons} from "./styled";
import { AntDesign } from '@expo/vector-icons';





export default function ButtonIcon(props) {  
  
  return (
    <Buttons onPress={props.onPress} >
    <AntDesign name="left" size={24} color="#FFFFFF"/>
    </Buttons>
  );
}