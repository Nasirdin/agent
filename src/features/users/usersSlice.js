import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  userFind: false,
};

// export const incrementAsync = createAsyncThunk(
//   "counter/fetchCount",
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      const findUser = state.users.filter((user) => {
        return user.email === action.payload.email;
      });
      if (findUser.length <= 0) {
        state.users = [
          {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            password: action.payload.password,
          },
          ...state.users,
        ];
      } 
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.value += action.payload;
  //     });
  // },
});

export const { addNewUser } = usersSlice.actions;
export default usersSlice.reducer;
