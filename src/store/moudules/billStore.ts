import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 为 slice state 定义一个类型
interface CounterState {
    billList: string[];
}
  
// 使用该类型定义初始 state
const initialState: CounterState = {
    billList: []
}

const billStore = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        // 使用 PayloadAction 类型声明 `action.payload` 的内容
        setBillList: (state, action: PayloadAction<string[]>) => {
        state.billList = action.payload;
        },
    },
});

const { setBillList } = billStore.actions;

const reducer = billStore.reducer;

export default reducer;