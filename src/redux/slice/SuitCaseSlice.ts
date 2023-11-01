import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CoinData, CoinDataResponse} from "../query/CoinQuery";

const initialState = {
    coins: [] as CoinData[],
    coin: {} as CoinData,
}

const  suitCaseSlice = createSlice({
    name : 'suitCase',
    initialState ,
    reducers : {
        SET_ONE_SUIT : (state, action : PayloadAction<CoinData>) => {
            state.coins.push(action.payload);
        },
        REMOVE_ONE_COIN_FROM_SUIT : (state, action : PayloadAction<CoinData>) => {
           state.coins = state.coins.filter(file => file.id !== action.payload.id);
        }
    }
})

export default  suitCaseSlice.reducer;

export const {

} = suitCaseSlice.actions;