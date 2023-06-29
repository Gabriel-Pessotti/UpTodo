import React from "react";
import {
  ContainerGeral,
  ContainerSlide,
  TextButton,
  TextSub,
  TextTitle,
  ViewButtonNext,
  ViewGlobal,
  ViewImage,
  ViewTextTitle,
  ViewTexts
} from "./styled";
import ButtonSkip from "../../components/buttonSkip";
import { ViewButton } from "../../components/buttonSkip/styled"
import AppIntroSlider from 'react-native-app-intro-slider'
import PrimeiraImg from "../../assets/svg";
import SegundaImg from "../../assets/svg/segundaImg";
import TerceiraImg from "../../assets/svg/terceiraImg";

export default function Onboarding({ navigation }) {  
  const slides=[
    {
      key: '1',
      title: 'Manage your tasks',
      text:'You can easily manage all of your daily tasks in DoMe for free',
      image:<PrimeiraImg/>
    },
    {
      key: '2',
      title: 'Create daily routine',
      text:'In Uptodo  you can create your personalized routine to stay productive',
      image:<SegundaImg/>
    },
    {
      key: '3',
      title: 'Orgonaize your tasks',
      text:'You can organize your daily tasks by adding your tasks into separate categories',
      image:<TerceiraImg/>
    }
  ]

  function carrosel({item}){
    return(
      <ContainerGeral>
      <ViewButton>
      <ButtonSkip
       name="SKIP"
       onPress={() => navigation.navigate("StartScreen")}
      />
      </ViewButton>
    <ViewGlobal>
    </ViewGlobal>
  
      <ContainerSlide>
        <ViewImage>
          {item.image}
        </ViewImage>
        <ViewTextTitle>
          <TextTitle>{item.title}</TextTitle>
        </ViewTextTitle>
        <ViewTexts>
          <TextSub>{item.text}</TextSub>
        </ViewTexts>
      </ContainerSlide>
    </ContainerGeral>
    )
  } 
  
  return (
    <AppIntroSlider
    renderItem={carrosel}
    data={slides}
    activeDotStyle={{
      backgroundColor:'#fff',
      width:26, 
      borderRadius:56,
      bottom:420  
    }}
    dotStyle={{
      backgroundColor:'#A9A9A9',
      bottom:420  
    }}
    renderNextButton={() =>(
      <ViewButtonNext>
        <TextButton>Next</TextButton>
      </ViewButtonNext>

    )}
    renderDoneButton={ () =>(
      <ViewButtonNext>
        <TextButton>Get Started</TextButton>
      </ViewButtonNext>
    
      )}
    onDone={() => navigation.navigate("StartScreen")}
    />
  );
}