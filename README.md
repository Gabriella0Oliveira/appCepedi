# 📝To Do List simples feito em React Native⚛️
Projeto desenvolvido durante o curso de Desenvolvimento Mobile - CEPEDI. 
O app foi desenvolvido utilizando o React Native aliado ao Android Studio (expo). 

## 📌 Sobre o projeto:
Inicialmente realizamos a prototipagem no [Figma](https://www.figma.com/file/MRp7h69CPDCHmGfmAUuasY/to-do-list-Gabi?type=design&node-id=1%3A2&mode=design&t=kNu9jnw0RsODiRG9-1) e em seguida fizemos a implementação.
O aplicativo segue um CRUD bem simples. Temos apenas duas páginas, com possibilidades para: 
- criar tarefa.
- ver tarefa.
- atualizar tarefa. 
- deletar tarefa.

## 🛠 Um pouco sobre o código
O código está organizado da seguinte forma: 

![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/e6dc622c-7875-405b-820f-30449ca81e37)

📂src
- 📂 components: 
      elementos utilizados nas telas. Cada pasta é um elemento com um arquivo ```index.tsx``` contendo a estilização e as funções.
- 📂 context:
      contém os objetos manipulados pela aplicação com seus métodos e propriedades. Nesse caso o único elemento manipulado é a tarefa em si, então, temos um arquivo chamado TaskContext.tsx. Tudo que diz respeito a manipulação / armazenamento de dados e propriedades está neste código.
- 📂 images
      algumas imagens só.
- 📂 screens: 
      aqui estão as páginas usadas no app, cada pasta é uma página com um arquivo próprio ```index.tsx``` contendo os estilos e funções. Todas as manipulações do objeto, chamadas de função, animações visuais, navigations..., tudo que diz respeito ao fluxo do app está no código das páginas. 

### Algumas bibliotecas e ferramentas usadas:
 - AsyncStorage
 - Animatable
 - useNavigation
 - Android Studio com expo
 - expo/vector-icons
 - react-native-picker/picker

## 📱🖼Imagens do app: 
![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/e6340c9a-506e-41f8-8ebf-7418dc3b9ca4) 
![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/e6e0eb37-d201-4a34-a19b-a6621b4f94db)
![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/3b5284a9-6ad8-40ed-ae91-42b693c93613)
![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/a7dd2f8a-f01c-4c97-851e-51d8507653d3)
![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/722674d8-1669-4101-ad09-0342a97b89fc)
![image](https://github.com/Gabriella0Oliveira/appCepedi/assets/72841769/6db8ad33-5b7d-4e4d-a170-52ffa1346d52)

#### Gabriella Oliveira _ fevereiro / 2024







  
      
  
  
  
