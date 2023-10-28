import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../index';
import axios from 'axios';
// 为 slice state 定义一个类型
interface billState {
    billList: string[];
}
  
// 使用该类型定义初始 state
const initialState: billState = {
    billList: []
}

export const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        // 使用 PayloadAction 类型声明 `action.payload` 的内容
        setBillList: (state, action: PayloadAction<string[]>) => {
            state.billList = action.payload;
            },
    },
  })
  
// 导出actions，所以我们在业务组件中可以 导出然后 dispatch 
export const { setBillList } = billSlice.actions
const getBillList = () => async (dispatch: AppDispatch) => {
    const res = await axios.get('http://localhost:8888/ka');
    dispatch(setBillList(res.data));
}

export { getBillList };

export default billSlice.reducer
  