
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './userSlice'

 export const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer
  }
})

// export default store;