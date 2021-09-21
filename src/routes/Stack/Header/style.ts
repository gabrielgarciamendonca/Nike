import styled from 'styled-components/native';

export const Container = styled.View``;

export const SearchBar = styled.View`
  width: 200px;
  height: 40px;
  background-color: #fff;
  border: 1px black solid;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding-left: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
`;
