/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  ContainerGeral,
  ViewConnfirmSenha,
  ViewGlobal,
  ViewInput,
  ViewSenha,
} from "./styled";
import ButtonIcon from "../../components/buttonIcon";
import { ViewHeader } from "../LoginScreen/styled";
import Titles from "../../components/title";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/inputs";
import Button from "../../components/botao";
import api from "../../services/api";

export default function RegisterScreen({ navigation }) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Informe seu Nome de Usuario")
      .min(3, "* O nome deve conter pelo menos 3 digitos"),
    email: yup.string().email().required("Informe Seu Email"),
    password: yup
      .string()
      .required("Informe sua Senha")
      .min(5, "* A Senha deve conter pelo menos 5 digitos"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    try {
      const newUser = {
        username: input.username,
        email: input.email,
        password: input.password,
      };

      const response = await api.post("/auth/local/register", newUser);
      console.log(response);
      // navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error, "deu erro vagabundo");
    }
  };

  const [senhaa, setSenha] = useState(true);
  return (
    <ContainerGeral>
      <ViewHeader>
        <ButtonIcon onPress={() => navigation.navigate("StartScreen")} />
        <Titles titles="Register" />
      </ViewHeader>
      <ViewGlobal>
        <ViewInput>
          <Input
            title="Username"
            placeholder="Put Your Name"
            colorPlaceholder="#FFFFFFFF"
            name="username"
            control={control}
            errors={errors}
          />
        </ViewInput>
        <ViewSenha>
          <Input
            title="Email"
            placeholder="seuNome@gmail.com"
            colorPlaceholder="#FFFFFFFF"
            name="email"
            control={control}
            errors={errors}
          />
        </ViewSenha>
        <ViewConnfirmSenha>
          <Input
            title="Password"
            placeholder="********"
            colorPlaceholder="#FFFFFFFF"
            name="password"
            control={control}
            errors={errors}
            secureTextEntry={senhaa}
          />
        </ViewConnfirmSenha>
        <Button
          onPress={handleSubmit(onSubmit)}
          name="Register"
          background="#9b68d6"
        />
      </ViewGlobal>
    </ContainerGeral>
  );
}
