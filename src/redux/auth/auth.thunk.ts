import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_USERS_ACTION } from "./actions";
import { getUser } from "../../service/userService";

export const getUsers: any = createAsyncThunk(
  GET_ALL_USERS_ACTION,
  async () => {
    const response = await getUser();
    return response;
  }
);
