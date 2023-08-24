import { configureStore } from '@reduxjs/toolkit'
import pcBuildReducer from './features/pcBuildSlice'
const store = configureStore({
  reducer: { pcBuild: pcBuildReducer }
})
export default store
