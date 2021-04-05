import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';


//slice (step 10)
export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }     
        }
    }
})

//thunk to dispatch addQuiz and addQuizId (step 12)
export const addQuiz_and_addQuizId = quizPayload => {
    const { name, topicId, cardIds, id } = quizPayload;
    return (dispatch) => {
        dispatch( quizzesSlice.actions.addQuiz( quizPayload ) );
        dispatch( addQuizId( {quizId: id, topicId: topicId} ) );
    }
};

//selector (step 10)
export const selectQuizzes = state => state.quizzes.quizzes;

// actions & reducer (step 10)
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;