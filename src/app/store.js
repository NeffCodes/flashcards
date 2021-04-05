import { configureStore } from "@reduxjs/toolkit";

//reducers
import topicsReducer from '../features/topics/topicsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';
import cardsReducer from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    //add topics to store (step 7)
    topics: topicsReducer,
    //add quizzes to store (step 10)
    quizzes: quizzesReducer,
    //add cards to store (step 16)
    cards: cardsReducer,
  },
});
