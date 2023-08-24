const { createSlice } = require('@reduxjs/toolkit')
const pcBuildSlice = createSlice({
  name: 'pcBuild',
  initialState: {
    pcComponents: []
  },
  reducers: {
    addToBuild: (state, action) => {
      const indexToReplace = state.pcComponents.findIndex(
        (component) => component.categoryId === action.payload.categoryId
      )

      if (indexToReplace !== -1) {
        state.pcComponents[indexToReplace] = action.payload
      } else {
        state.pcComponents.push(action.payload)
      }
    }
  }
})
export const { addToBuild } = pcBuildSlice.actions
export default pcBuildSlice.reducer
