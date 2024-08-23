import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersArr: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.usersArr = [...state.usersArr, action.payload];
    },
    deleteUser: (state, action) => {
      state.usersArr = state.usersArr.filter(
        (user) => user.name !== action.payload
      );
    },
    updateUser: (state, action) => {
      const users = [...state.usersArr];
      let updateArr = users.map((user) => {
        let update = action.payload.obj;
        if (user.name === action.payload.name) {
          return update;
        } else {
          return user;
        }
      });

      //user = action.payload.obj;

      console.log("+++", updateArr, "++updated");
      state.usersArr = updateArr;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
