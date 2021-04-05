import { createSlice } from '@reduxjs/toolkit';

//slice (step 6)
export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action)=>{
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        },

        //action to add quiz id (step 11)
        addQuizId: (state, action)=>{
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

//selectors (step 6)
export const selectTopics = state => state.topics.topics;

//actions & reducer (step 6)
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;