/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ContainerGeral, ViewGlobal, ViewHeader, ViewInput, ViewSenha } from "./styled";
import ButtonIcon from "../../components/buttonIcon";
import Titles from "../../components/title";
import { Input } from "../../components/inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../components/botao";
import api from "../../services/api";

export default function LoginScreen({ navigation }) {
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Informe seu Nome de Usuário")
      .min(3, "* O nome deve conter pelo menos 3 dígitos"),
      password: yup
      .string()
      .required("Informe sua Senha")
      .min(5, "* A senha deve conter pelo menos 5 dígitos"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    try {
      const newUser = {
        identifier: input.identifier,
        password: input.password,
      };

      const response = await api.post("/auth/local/register", newUser);
      console.log(response);
      // navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error, "gaigdisaiudgwd");
    }
  };

  const [senhaa, setSenha] = useState(true);

  return (
    <ContainerGeral>
      <ViewHeader>
        <ButtonIcon onPress={() => navigation.navigate("StartScreen")} />
        <Titles titles="Login" />
      </ViewHeader>
      <ViewGlobal>
        <ViewInput>
          <Input
            title="Username"
            placeholder="Enter your Username"
            colorPlaceholder="#FFFFFFFF"
            name="identifier"
            control={control}
            errors={errors}
          />
        </ViewInput>
        <ViewSenha>
          <Input
            title="Password"
            placeholder="Password"
            colorPlaceholder="#FFFFFFFF"
            name="password"
            control={control}
            errors={errors}
            secureTextEntry={senhaa}
          />
        </ViewSenha>
        <Button onPress={handleSubmit(onSubmit)} name="LOGIN" background="#9b68d6" />
      </ViewGlobal>
    </ContainerGeral>
  );
}
