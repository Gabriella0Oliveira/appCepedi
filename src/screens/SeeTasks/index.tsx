import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { TaskContext } from '../../context/TaskContext';  
import Task from '../../components/Task'; 
import Logo from '../../components/Logo';
import { StatusBar } from "expo-status-bar";
import { AddButtonIcon }   from '../../components/AddButtonIcon';
import  AddTask        from '../../components/AddTask';
import Options from '../../components/Options'; 
import * as Animatable from 'react-native-animatable'
import { AntDesign } from '@expo/vector-icons';


const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: 50px;
  top: 0; 
`;

const ListContainer = styled.View`
  justify-content: center;
  align-itens: center;
`;

const OptionsContainer = styled.View`
  widht: 10px;
  height: 10px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px;
`;

const TransparentLayer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000080; 
  justify-content: center;
  align-items: center;
`;

const Warn = styled.Text`
  align-self: center;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
`
export interface TaskProps {
  id: number;
  status: number; 
  day: string;
  month: string;
  time: string;
  title: string;
  description: string;
};

const SeeTasks = () => {
  const { tasks, markAsDone, markToDo, markForToday, markNotDone, deleteTask } = useContext(TaskContext);
  const [isAddTaskVisible, setAddTaskVisible] = useState<null | boolean>(null);
  const [isOptionsVisible, setOptionsVisible] = useState<null | boolean>(null); // Controla a visibilidade do componente Options
  const [selectedTask, setSelectedTask] = useState<TaskProps | null>(null); // Armazena a tarefa selecionada

  const handleAddPress = () => {
    setAddTaskVisible(true);
  };

  const handleCloseAdd = () => {
    
    setAddTaskVisible(false);
  }
  useEffect(() => {
  }, []);

  const handleTaskPress = (taskId: number) => {
    // console.log(`Cliquei na tarefa ${taskId}`);
    const selected = tasks.find((task) => task.id === taskId);
    setSelectedTask(selected || null);
    setOptionsVisible(true);
  };  

  const handleOptionPress = (option: string) => {
    switch (option) {
      case 'Feita':
        console.log(`Marquei como feita ${option}`);
        if (selectedTask) {
          markAsDone(selectedTask);
        }
        break;
      case 'Fazer':
        if (selectedTask) {
          markToDo(selectedTask);
        }
        break;
      case 'Hoje':
        if (selectedTask) {
          markForToday(selectedTask);
        }
        break;
      case 'Atrasada':
        if (selectedTask) {
          markNotDone(selectedTask);
        }
        break;  
      case 'Excluir':
        console.log(`Eu apertei para excluir}` );
        if (selectedTask) {
          deleteTask(selectedTask);
        }
        break;
      default:
        break;
    }
    setOptionsVisible(false); 
  };


  return (
    <Container>
        <Logo />
        <ButtonContainer>
          <AddButtonIcon onPress={handleAddPress} />
        </ButtonContainer>

          {tasks.length > 0 ? (    
            <ListContainer>  

              <FlatList style={{ width: "100%",}}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: { item: TaskProps }) => (
                  <Task
                    id={item.id}
                    status={item.status}
                    title={item.title}
                    description={item.description}
                    month={item.month}
                    day={item.day}
                    time={item.time}
                    onPress={() => handleTaskPress(item.id)} 
                  />
                )}
              />
            </ListContainer>
        ) : (
          <Warn>
            Adicione uma tarefa  _ <AntDesign name= "heart" size={16} color="#FF25A8"/>
          </Warn>
          
        )}
        
        {isAddTaskVisible && (
        <TransparentLayer onPress={handleCloseAdd}></TransparentLayer> 
      )}

       {isAddTaskVisible ?  (
          <Animatable.View
            animation="fadeInUp"
            duration={500}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <AddTask />
          </Animatable.View>
        ):(
          <Animatable.View
            animation="fadeOutDown"
            duration={100}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <AddTask />
          </Animatable.View>
        )}
        
        {isOptionsVisible && (
          <Animatable.View animation="slideInRight"
          duration={500}
          style={{
            position: 'absolute',
            zIndex: 1,
            right: 0,
            top: 320,
          }}>
            <Options onOptionPress={handleOptionPress} />
          </Animatable.View>
          )}   
    </Container>
  );
};

export default SeeTasks;
