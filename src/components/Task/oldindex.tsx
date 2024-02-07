/* import { useContext, useState } from "react";
import { TaskProps } from "../../screens/Home";
import { Container, TaskDelete, TaskDone, TaskText } from "./styles";
import { Feather } from '@expo/vector-icons';
import { TaskContext } from "../../context/TaskContext";

import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Detail: TaskProps;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function Task({ id, title, done, ...others }: TaskProps) {

  const [task, setTask] = useState<TaskProps>({ id, title, done });
  const {selectTask} = useContext(TaskContext);

  const navigation = useNavigation<Props['navigation']>();

  function handlePress(){
    selectTask(task);
    navigation.navigate('Detail', task);
  }

  return (
    <Container {...others} onPress={() => handlePress()}>
      <TaskDone>
        <Feather name="square" size={24} color="white" />
      </TaskDone>

      <TaskText>{title}</TaskText>

      <TaskDelete>
        <Feather name="trash-2" size={24} color="white" />
      </TaskDelete>
    </Container>
  );
}
*/