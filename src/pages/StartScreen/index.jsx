import React from "react";
import {
  ContainerGeral,
  TextSubTitle,
  TextTitle,
  ViewButton,
  ViewGlobal,
  ViewHeader,
  ViewTitle
} from "./styled";
import Button from "../../components/botao";
import ButtonIcon from "../../components/buttonIcon";

export default function StartScreen({navigation}) {  
  return (
    <ContainerGeral>
      <ViewHeader>
      <ButtonIcon onPress={() => navigation.navigate("Onboarding")}
      />
      <ViewTitle>
        <TextTitle>Welcome to UpTodo</TextTitle>
        <TextSubTitle>Please login to your account or create new account to continue</TextSubTitle>
      </ViewTitle>
      </ViewHeader>      
      <ViewGlobal>
        <ViewButton>
        <Button
        onPress={() => navigation.navigate("LoginScreen")}
        name='LOGIN'
        background='#9b68d6'        
        />
        <Button 
        onPress={() => navigation.navigate("RegisterScreen")}
        name='CREATE ACCONT'
        border='#9b68d6'        
        />
        </ViewButton>
      </ViewGlobal>
    </ContainerGeral>
  );
}