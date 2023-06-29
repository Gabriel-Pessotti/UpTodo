/* eslint-disable no-undef */
import React from "react";
import {
  ContainerGeral,
  ImageProfile,
  Name,
  Text,
  TextTitle,
  Textwipedout,
  ViewGlobal,
  ViewImage,
  ViewTasks,
  ViewTeskDone,
  ViewTeskLeft,
  ViewTitle,
} from "./styled";
import Menu from "../../components/menu";

export default function ProfileScreen({navigation}) {
  return (
    <ContainerGeral>
      <ViewTitle>
        <TextTitle>Profile</TextTitle>
        <ViewImage>
          <ImageProfile source={require("../../assets/png/images.png")} />
        </ViewImage>
        <Name>Hacker Bolado</Name>
      </ViewTitle>
      <ViewGlobal>
        <ViewTasks>
          <ViewTeskLeft>
            <Text>10 Task left</Text>
          </ViewTeskLeft>
          <ViewTeskDone>
            <Text>5 Task done</Text>
          </ViewTeskDone>
        </ViewTasks>
        <Textwipedout>Settings</Textwipedout>
        <Menu 
        title="App Settings" 
        nameIcon="ios-settings-outline" 
        />
        <Textwipedout>Account</Textwipedout>
        <Menu 
        title="Change account name" 
        nameIcon="user" 
        verify={true} 
        />
        <Menu 
        title="Change account password" 
        nameIcon="ios-key-outline" 
        />
        <Menu 
        title="Change account Image" 
        nameIcon="ios-camera-outline" 
        />
        <Textwipedout>Uptodo</Textwipedout>
        <Menu 
        title="About US" 
        nameIcon="ios-grid-outline" 
        />
        <Menu 
        title="FAQ" 
        nameIcon="ios-information-circle-outline" 
        />
        <Menu 
        title="Help & Feedback" 
        nameIcon="ios-flash-outline" 
        />
        <Menu 
        title="Support US" 
        nameIcon="like2" 
        verify={true} 
        />
        <Menu 
        title="Log out" 
        nameIcon="logout" 
        colorIcon="red" 
        textcolor="red"
        onPress={() => navigation.navigate("StartScreen")}
        note={true} 
        verify={true} 
        />
      </ViewGlobal>
    </ContainerGeral>
  );
}
