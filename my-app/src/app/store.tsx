import { configureStore } from '@reduxjs/toolkit'
import todolistreducer from '../features/TodoSlice'
import todolistduplicatereducer from '../features/TodoSearchSlice'
import userSlicereducer from '../features/userSlice'
export const store = configureStore({
    reducer: {
      todos:todolistreducer,
      todosuplicate:todolistduplicatereducer,
      user:userSlicereducer
    },
  })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch