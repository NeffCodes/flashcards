import { createSlice } from '@reduxjs/toolkit';

//slice (step 16)
export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const {id, front, back} = action.payload;
            state.cards[id] = { id, front, back };
        }
    }
})

//selector (step 16)
export const selectCards = state => state.cards.cards;

//actions & reducer (step 16)
export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer;