import { Platform } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";
import { Task } from "../../components/Task/oldindex";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #FFFFFF;
  padding: 0 2px;
  padding-top: ${Platform.OS === "android" ? 0 : 0}px;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  background-color: #222;
  border-radius: 4px 0 0 4px;
  flex: 1;
  height: 56px;
  padding: 16px;
  color: #ffffff;
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 16px;
  background-color: #1E1E1E;
  border-radius: 0 4px 4px 0;
`;

export const StyledTask = styled(Task)`
  background-color: #fff;
`;