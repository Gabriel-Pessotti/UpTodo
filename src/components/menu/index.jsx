import React from "react";
import {
  TextSetting,
  View,
  ViewGlobal,

} from "./styled";
import { Ionicons, AntDesign, } from "@expo/vector-icons";

export default function Menu(props) {
  return (
    <ViewGlobal onPress={props.onPress}>

      <View>
        {props.verify ?
        <AntDesign name={props.nameIcon} size={24} color={props.colorIcon || "white"}/>
        : <Ionicons name={props.nameIcon} size={24} color="white" />
        }
        <TextSetting color={props.textcolor || "white"}>{props.title}</TextSetting>
      </View>
      {!props.note &&
      <AntDesign name="right" size={24} color="white" />
      
      }
    </ViewGlobal>
  );
}
