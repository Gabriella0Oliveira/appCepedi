import React, { useContext, useState } from 'react';
import DatePicker from '../DatePicker'; 
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import { TaskContext } from '../../context/TaskContext';  
import { useNavigation } from '@react-navigation/native';

const AddTaskContainer = styled.View`
height: 100%;
width: 100%;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
background-color: #FFFFFF;
padding: 30px;
`;

const PinkBorder = styled.View`
  height: 80px;
  width: 85px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #FF2B78;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;


const TitleText = styled.Text`
  text-transform: uppercase;
  color: #FF2B78;
  font-size: 16px;
  font-weight: bold;
`;

const InputField = styled.TextInput`
  font-size: 16px;
  margin-left: 10px;
  font-weight: 400;
  margin-top: 5px;
`;

const ConfirmButton = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #37C25E;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Text = styled.Text`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

const AddTask = ({}) => {

  
  const [selectedDay, setSelectedDay] = useState('1');
  const [selectedMonth, setSelectedMonth] = useState('jan');
  const [selectedHour, setSelectedHour] = useState('');
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleConfirmButtonPress = () => {
    console.log('entrei ConfirmButton');
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    } else {
      console.log('antes de CreateTask');
      createTask(title, description, selectedMonth, selectedDay, selectedHour);
      console.log("depois CreateTask");
      setTitle('');
      setDescription('');
      setSelectedDay('');
      setSelectedHour('');
      setSelectedMonth('');
      navigation.navigate('SeeTasks' as never);
    }
  };

  return (
    <AddTaskContainer>
      <PinkBorder>
          <AntDesign name="plus" size={35} color="#FFFFFF"/>
      </PinkBorder>

      <TitleText>TÍTULO</TitleText>
      <InputField 
        placeholder="Adicione um título" 
        value={title}
        onChangeText={setTitle}
      />

      <TitleText style={{ marginTop: 15 }}>DESCRIÇÃO</TitleText>
      {/*<InputField multiline numberOfLines={4} placeholder="bla bla" />*/}
      <InputField 
        placeholder="Adicione uma descrição" 
        value={description}
        onChangeText={setDescription}
      />

      <DatePicker
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedHour={selectedHour}
        setSelectedHour={setSelectedHour}
      />
      
    <ConfirmButton onPress={handleConfirmButtonPress}>
      <Text>ADICIONAR</Text>
    </ConfirmButton>
      
    </AddTaskContainer>
  );
};

export default AddTask;
