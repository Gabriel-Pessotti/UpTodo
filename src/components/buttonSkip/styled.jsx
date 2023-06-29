import styled from "styled-components/native";

export const ViewButton = styled.View`
`;
export const Buttom = styled.TouchableOpacity`
  width: 20%;
  height: 30px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-left: 10px;
`;
export const TextButtom = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: ${(props) => props.color || "#696969"};
`;