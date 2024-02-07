import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 
import { TaskProps } from "../../screens/Home";


// Componentes estilizados
const TaskContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`;

const Hour = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

const Day = styled.Text`
  font-size: 15px;
  font-weight: 500;
  align-self: center;
`;

const Icon = styled.View`
  margin-right: 10px;
  margin-left: 10px;
`;

const Date = styled.View`
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
`;

const VerticalLine = styled.View`
  height: 90%;
  width: 3px;
  background-color: #FF2B78;
  margin-right: 5px;
  margin-left: 5px;
`;

const TaskTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
`;

const CompletedTitle = styled.Text`
textDecorationLine: line-through;
font-size: 18px;
font-weight: 600;
margin-left: 10px;
`;

const Options = styled.TouchableOpacity`
  margin-right: 10px;
  margin-top: 10px;
`

const TaskDescription = styled.Text`
  font-size: 16px;
  color: #888888;
  margin-left: 10px; 
`;

const statusIcons: Record<number, JSX.Element> = {
  1: <AntDesign name="calendar"     size={25} color="#FF9040" />,
  2: <AntDesign name="star"         size={25} color="#32B8D6" />,
  3: <AntDesign name="clockcircleo" size={25} color="#DB415D" />,
  4: <AntDesign name="checkcircleo"        size={25} color="#37C25E" />,
};

const Task = ({ status, title, description, month, day, time, onPress }: TaskProps & { onPress: () => void }) => {

  const icon = statusIcons[status];

  const isCompleted: Record<number, JSX.Element> = {
    1: <TaskTitle>{title}</TaskTitle>,
    2: <TaskTitle>{title}</TaskTitle>,
    3: <TaskTitle>{title}</TaskTitle>,
    4: <CompletedTitle>{title}</CompletedTitle>,
  };

  const teste = isCompleted[status];

  return (
    <TaskContainer>
      <Icon>{icon}</Icon>
      <Date>
      <Day>{day} {month}</Day>
      <Hour>{time}</Hour>
      </Date>
      <VerticalLine></VerticalLine>
      <View style={{ flex: 1}}>
        {teste}
        <TaskDescription>{description}</TaskDescription>
      </View>

      <Options onPress={onPress}>
        <AntDesign name="ellipsis1" size={20} color="black" />
      </Options>

    </TaskContainer>
  );
};

export default Task;
