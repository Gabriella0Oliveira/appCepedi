import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';


interface TaskProps {
  id: number;
  status: number; 
  day: string;
  month: string;
  time: string;
  title: string;
  description: string;
};

/* Status :
1 - to do
2 - today 
3 - not done 
4 - done
*/ 

interface TaskContextProps {
  task: TaskProps;
  tasks: TaskProps[];
  storeTasks: (tasks: TaskProps[]) => void;
  markAsDone: (currentTask: TaskProps) => void;
  markToDo:   (currentTask: TaskProps) => void;
  markForToday: (currentTask: TaskProps) => void;
  markNotDone: (currentTask: TaskProps) => void;
  deleteTask: (currentTask: TaskProps) => void;
  selectTask: (task: TaskProps) => void;
  clearTask: () => void;
  createTask: (
    title: string,
    description: string,
    month: string,
    day: string,
    time: string
  ) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
  task: { id: 0, status: 1, day: "01", month: "jan", time: "00:00", title: "", description: ""  },
  tasks: [],
  storeTasks: () => {},
  selectTask: () => {},
  clearTask: () => {},
  createTask: () => {},
  markAsDone: () => {},
  markNotDone: () => {},
  markToDo: () => {},
  markForToday: () => {},
  deleteTask: () => {},
});


const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [task, setTask] = useState<TaskProps>({} as TaskProps);
  const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);
  const [count, setCount] = useState<number>(0);
  const navigation = useNavigation();

  const storeTasks = async (tasks: TaskProps[]) => {
    try {
      if (tasks.length === 0) {
        // preciso reiniciar o async pra não bagunçar o count.
        await AsyncStorage.removeItem("@tasks");
      } else {
        await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
      }
    } catch (e) {
      Alert.alert("Opa!", "Não foi possível salvar as tarefas");
    }
  };

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (e) {
      Alert.alert("Opa!", "Não foi possível carregar as tarefas");
    }
  };

  const createTask = async (title: string, description: string, month: string, day: string, time: string) => {
    
    console.log('estou criando:', title, description, month, day, time);
  
    const newTask: TaskProps = {
      id: count,
      status: 1, 
      day,
      month,
      time,
      title,
      description,
    };
    setCount(count + 1);
    setTasks([...tasks, newTask]);
  }
  

  const deleteTask = (currentTask: TaskProps) => {
      // console.log(`Eu tentei excluir ${currentTask.id}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== currentTask.id));
      
    
  };

  const updateTask = (taskId: number, updatedTask: TaskProps) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? updatedTask : t))
    );
  };

  const selectTask = (selectedTask: TaskProps) => {
    setTask(selectedTask);
  };

  const clearTask = () => {
    setTask({} as TaskProps);
  };

  const markAsDone = (currentTask: TaskProps) => {
      updateTask(currentTask.id, { ...currentTask, status: 4 });
      clearTask();
  };

  const markToDo = (currentTask: TaskProps) => {
      updateTask(currentTask.id, { ...currentTask, status: 1 });
      clearTask();
    
  };

  const markNotDone = (currentTask: TaskProps) => {
    updateTask(currentTask.id, { ...currentTask, status: 3 });
    clearTask();
  
};

  const markForToday = (currentTask: TaskProps) => {
      updateTask(currentTask.id, { ...currentTask, status: 2 });
      clearTask();
    
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ 
        task,
        storeTasks,
        selectTask,
        clearTask,
        createTask,
        tasks,
        markAsDone,
        markNotDone,
        markToDo,
        markForToday,
        deleteTask, 
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

