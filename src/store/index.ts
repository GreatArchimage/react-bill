import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import reducer from './moudules/billSlice' // 稍后创建

const store = configureStore({
    reducer: {
        bill: reducer,
    },
});

// ⚠️ 注意这里：我们使用 ReturnType 和 typeof 来获得全局 state 的类型，供其他组件调用的使用使用
export type RootState = ReturnType<typeof store.getState>
// 利用 typeof 推断出 dispatch 的类型
export type AppDispatch = typeof store.dispatch 

// 以下两行，都是为了让 TypeScript 能够推断出状态的类型；往后，我们会在整个应用中重复使用这两个成员
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;