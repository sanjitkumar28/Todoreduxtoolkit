import { configureStore } from '@reduxjs/toolkit'
import todolistreducer from '../features/TodoSlice'
import todolistduplicatereducer from '../features/TodoSlice'
export const store = configureStore({
    reducer: {
      todos:todolistreducer,
      todosuplicate:todolistduplicatereducer,
    },
  })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch