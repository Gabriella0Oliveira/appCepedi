import { TouchableOpacity, Animated }  from 'react-native';
import { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import styled                           from 'styled-components/native';
import { useNavigation }                from '@react-navigation/native';
import  Logo                            from '../../components/Logo';
import { UserAvatar }                   from '../../components/UserAvatar';
import { AddButton }                    from '../../components/AddButton';
import { SeeButton }                    from '../../components/SeeButton';
import  TodayCard                       from '../../components/TodayCard';
import  NotDoneCard                     from '../../components/NotDoneCard';
import  ToDoCard                        from '../../components/ToDoCard';
import  DoneCard                        from '../../components/DoneCard';
import  AddTask                         from '../../components/AddTask';
import * as Animatable from 'react-native-animatable'
import { TaskContext } from '../../context/TaskContext';  

const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const CardsContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  
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

export interface TaskProps {
  id: number;
  status: number; 
  day: string;
  month: string;
  time: string;
  title: string;
  description: string;
};

const Home = () => {
  const navigation = useNavigation();
  const [isAddTaskVisible, setAddTaskVisible] = useState(false);
  const userAvatar = 'https://www.thesprucepets.com/thmb/FiwdgusZwmafF-Zj2wlybbMD68M=/495x0/filters:no_upscale():max_bytes(150000):strip_icc()/25013611_549953118686668_6857785409783463936_n-5a47b6ae482c520036d52a17.jpg'; 
  const userName = 'Florêncio';
  const { tasks } = useContext(TaskContext);
  
  const handleSeePress = () => {
    navigation.navigate('SeeTasks' as never);
  };
  
  const handleAddPress = () => {
    setAddTaskVisible(true);
  };

  const handleCloseAdd = () => {
    // console.log('fechei ele');
    setAddTaskVisible(false);
  };

  const countTasksByStatus = () => {
    const taskCounts = {
      today: 0,
      notDone: 0,
      toDo: 0,
      done: 0,
    };

    tasks.forEach(task => {
      switch (task.status) {
        case 2:
          taskCounts.today += 1;
          break;
        case 3:
          taskCounts.notDone += 1;
          break;
        case 1:
          taskCounts.toDo += 1;
          break;
        case 4:
          taskCounts.done += 1;
          break;
        default:
          break;
      }
    });

    return taskCounts;
  };

  const taskCounts = countTasksByStatus();

  return (
    <Container>
      <Container>
        <StatusBar style="dark" />
        <Logo />
        <UserAvatar avatar={userAvatar} userName={userName} />

        <ButtonContainer>

          <TouchableOpacity onPress={handleSeePress}>
            <SeeButton onPress={handleSeePress}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAddPress}>
            <AddButton onPress={handleAddPress} />
          </TouchableOpacity>
        </ButtonContainer>

        <CardsContainer>
          <TodayCard number={taskCounts.today}/>
          <NotDoneCard number={taskCounts.notDone} />
          <ToDoCard number={taskCounts.toDo} />
          <DoneCard number={taskCounts.done} />
        </CardsContainer>

      </Container>

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
    </Container>
  );
};

export default Home; 