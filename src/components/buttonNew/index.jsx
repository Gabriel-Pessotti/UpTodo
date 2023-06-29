/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  ButtonFlag,
  ButtonModal,
  ButtonSend,
  ButtonTag,
  ButtonTime,
  Close,
  ContainerModal,
  Text,
  Title,
  ViewButton,
  ViewButtonsFooter,
  ViewHeader,
} from "./styled";

import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { Modal } from "react-native";
import { Input } from "../inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-date-picker";

export default function ButtonNew({ navigation }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const schema = yup.object().shape({
    task: yup
      .string()
      .required("inform your task")
      .min(3, "* Task must contain at least 3 digits"),
    description: yup
      .string()
      .required("Enter the description")
      .min(5, "* The description must contain at least 5 digits"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  async function onSubmit(input) {
    obj = {
      task: input.task,
      description: input.description,
    };
    console.log(obj);
    // navigation.navigate("HomeScreen");
  }

  const handlePress = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <ViewButton>
      <Modal animationType="slide" transparent={true} visible={visibleModal}>
        <ContainerModal>
          <ViewHeader>
            <Title>Add Task</Title>
            <Close onPress={() => setVisibleModal(!visibleModal)}>
              <Text>X</Text>
            </Close>
          </ViewHeader>
          <Input
            placeholder="Write your task"
            colorPlaceholder="#FFFFFFFF"
            name="task"
            control={control}
            errors={errors}
          />

          <Input
            placeholder="Description"
            colorPlaceholder="#FFFFFFFF"
            name="description"
            control={control}
            errors={errors}
          />

          <ViewButtonsFooter>
            <ButtonTime onPress={() => setOpen(true)}>
              <MaterialIcons name="timer" size={24} color="#F8F8F8" />
              <DatePicker 
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </ButtonTime>
            <ButtonTag>
              <AntDesign name="tagso" size={24} color="#F8F8F8" />
            </ButtonTag>
            <ButtonFlag>
              <Feather name="flag" size={24} color="#F8F8F8" />
            </ButtonFlag>
            <ButtonSend onPress={handleSubmit(onSubmit)}>
              <Ionicons name="send-outline" size={24} color="purple" />
            </ButtonSend>
          </ViewButtonsFooter>
        </ContainerModal>
      </Modal>

      <ButtonModal onPress={handlePress}>
        <AntDesign name="plus" size={24} color="#F8F8F8" />
      </ButtonModal>
    </ViewButton>
  );
}
 