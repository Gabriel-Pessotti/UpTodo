import styled from "styled-components/native";

export const ContainerGeral = styled.SafeAreaView``;

export const ViewGlobal = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

`;

export const Textwipedout = styled.Text`
  color: #afafaf;
  font-size: 14px;
`;

export const TextSetting = styled.Text`
  color: ${(props) => props.color};
  font-size: 16px;
`;

export const View = styled.View`
  flex-direction: row;
  gap: 10px;
`;
