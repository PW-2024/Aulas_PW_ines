import { configureStore } from '@reduxjs/toolkit';
import { catAPI } from './catAPI';  //ficheiro que criamos que faz o fetch

const store = configureStore({  //configuração inicial da store
  //estamos a dizer à store que aquela api existe e que pode ser usada
  reducer: {
    [catAPI.reducerPath]: catAPI.reducer, //buscar o reducer path
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(catAPI.middleware), //faz uma concatenação 
});

export default store;