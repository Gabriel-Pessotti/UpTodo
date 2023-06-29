import styled from "styled-components/native";



export const ViewButton= styled.View`
`;
export const Buttons = styled.TouchableOpacity`
background-color:${(props) => props.background || "transparent"};
border-color:${(props) => props.border || "white"};
border-width:${(props) => props.border ? "1px" : "0px"};
width: 100%;
height: 48px;
border-radius: 4px;
flex-direction: row;
justify-content: center;
align-items: center;

`;
export const Text= styled.Text`
text-align: center;
color: #fff;
font-weight: 400;
font-size: 16px;
font-style: normal;

`;
