/* eslint-disable no-unused-vars */
import React from "react";
import { ContainerGeral, TextOne, TextTitle, TextTwo, ViewGlobal, ViewHeader, ViewImage, ViewText } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import ImgPequena from "../../assets/svg/photoHome";
import ImageHomeMeio from "../../assets/svg/imageHome";

export default function HomeScreen({ navigation }) {
  return (
    <ContainerGeral> 
      <ViewHeader>
        <Ionicons
          // onPress={() => navigation.navigate("")}
          name="filter-outline"
          size={24}
          color="white"
        />
        <TextTitle>Hello Gabriel!</TextTitle>
        <ImgPequena />
      </ViewHeader>

      <ViewGlobal>
        <ViewImage>
          <ImageHomeMeio />
        </ViewImage>

        <ViewText>
          <TextOne>What do you want to do today?</TextOne>
          <TextTwo>Tap + to add your tasks</TextTwo>
        </ViewText>
      </ViewGlobal>
    </ContainerGeral>
  );
}
