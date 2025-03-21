import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import uniqid from "uniqid";

const API_URL = 'http://localhost:3000';

const accessToken = localStorage.getItem("access_token");

export const loginUser = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        localStorage.setItem("access_token", response.data.accessToken);

        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Ошибка авторизации");
    }
});

export const registerUser = createAsyncThunk("auth/register", async (userData, { dispatch, rejectWithValue }) => {
    try {
        await axios.post(`${API_URL}/users/add`, { ...userData, avatar:'', userId: uniqid(), boards: []});
        // После успешной регистрации сразу логиним пользователя
        return await dispatch(loginUser({ email: userData.email, password: userData.password })).unwrap();

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Ошибка регистрации");
    }
});

export const fetchProfile = createAsyncThunk("auth/profile", async (_, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.accessToken;
        const response = await axios.get(`${API_URL}/get-user`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Ошибка загрузки профиля");
    }
});

export const addBoard = createAsyncThunk("auth/addBoard", async ({ title, selectedIcon, selectedImg }, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        const board = {id: uniqid(),name: title, icon: selectedIcon, img: selectedImg  };

        console.log(board);

        await axios.post(`${API_URL}/board`, { board, email }, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return board; // Return new board to update Redux store
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "Помилка додавання");
    }
});

export const changeBoard = createAsyncThunk("auth/changeBoard", async ({id,title,selectedIcon, selectedImg}, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        const board = {name: title, icon: selectedIcon, img: selectedImg};
        const response = await axios.put(`${API_URL}/board/${id}`, { board, email }, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const deleteBoard = createAsyncThunk("auth/deleteBoard", async ({ id },{ getState, rejectWithValue }) => {

    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        await axios.delete(`${API_URL}/board/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
            data: { email },
        })
        return id
    }
    catch (error) {
        console.log(error);
        return rejectWithValue(error.response?.data , error.message);

    }
})

export const addColumn = createAsyncThunk("auth/addColumn", async ({ title,boardId },{ getState, rejectWithValue }) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        const column = {id: uniqid(), name: title};
        await axios.post(`${API_URL}/add-column/${boardId}`, { column, email }, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return {column, boardId};
    }
    catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const changeColumn = createAsyncThunk("auth/changeColumn", async ({ columnId,boardId, title }, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        const response = await axios.put(`${API_URL}/column/${columnId}`, { boardId, email, title }, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return {column:response.data.column, boardId};
    }
    catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const deleteColumn = createAsyncThunk("auth/deleteColumn", async ({ columnId,boardId },{ getState, rejectWithValue}) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        await axios.delete(`${API_URL}/column/${columnId}`, {
            headers: { Authorization: `Bearer ${token}` },
            data: { email, boardId },
        })
        return {columnId, boardId};
    }
    catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const addTask = createAsyncThunk("auth/addTask", async ({ title, boardId, columnId, date, priority,description },{getState, rejectWithValue}) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        const task = {id: uniqid(), title, deadline: date, priority,description};
        await axios.post(`${API_URL}/task/${boardId}/${columnId}/`, { task, email }, {
            headers: { Authorization: `Bearer ${token}` },
        })
        return {task, columnId, boardId};
    }
    catch (e){

    }
})

export const changeTask = createAsyncThunk("auth/changeTask", async ({id, title, boardId, columnId, date, priority,description }, { getState, rejectWithValue }) => {
  try {
      const token = getState().auth.accessToken;
      const email = getState().auth.user.email;
      const task = {id,title, deadline: date, priority,description};
      await axios.put(`${API_URL}/task/${boardId}/${columnId}/`, { task, email }, {
          headers: { Authorization: `Bearer ${token}` },
      })
      return {task,boardId,columnId};
  }
  catch (error) {
      return rejectWithValue(error.response?.data || error.message);
  }
})

export const deleteTask = createAsyncThunk("auth/deleteTask", async ({ boardId, columnId, itemId }, { getState, rejectWithValue }) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        await axios.delete(`${API_URL}/task/${boardId}/${columnId}/${itemId}`,{
            headers: { Authorization: `Bearer ${token}` },
            data: { email},
        })
        return {itemId,columnId, boardId};
    }
    catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

export const rotateTask = createAsyncThunk("auth/rotateTask", async ({itemId, boardId, columnId,toColumnId },{getState, rejectWithValue}) => {
    try {
        const token = getState().auth.accessToken;
        const email = getState().auth.user.email;
        await axios.put(`${API_URL}/task/${boardId}/${columnId}/${toColumnId}/${itemId}`, {email},{
            headers: { Authorization: `Bearer ${token}` },
        })
        return {itemId,columnId, boardId,toColumnId};
    }
    catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})
const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: accessToken || null,
        user: null,
        isLoading: false,
        error: null,
        filter:''
    },
    reducers: {
        setFilter: (state, action) => {
          state.filter = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem("access_token");
            state.accessToken = null;
            state.user = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addBoard.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addBoard.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.user.boards = [...state.user.boards, payload];
            })
            .addCase(addBoard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(changeBoard.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changeBoard.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.user) {
                    const boardIndex = state.user.boards.findIndex((b) => b.id === payload.board.id);
                    if (boardIndex !== -1) {
                        state.user.boards[boardIndex] = payload.board;
                    }
                }
            })
            .addCase(changeBoard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteBoard.pending, (state, {payload}) => {
                state.isLoading = true;
            })
            .addCase(deleteBoard.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                const boardIndex = state.user.boards.findIndex((b) => b.id === payload);

                if (boardIndex !== -1) {
                    state.user.boards.splice(boardIndex, 1);
                }
            })
            .addCase(deleteBoard.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addColumn.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(addColumn.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                const board = state.user.boards.find((b) => b.id === payload.boardId);
                if (board) {
                    board.columns = board.columns || []; // Проверяем, есть ли уже массив колонок
                    board.columns.push({...payload.column, tasks:[]});
                }
            })
            .addCase(addColumn.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(changeColumn.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.user) {
                    const boardIndex = state.user.boards.findIndex((b) => b.id === payload.boardId);
                    if (boardIndex !== -1) {
                        const columnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.column.id);
                        state.user.boards[boardIndex].columns[columnIndex] = payload.column;

                    }
                }
            })
            .addCase(changeColumn.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(changeColumn.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(deleteColumn.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(deleteColumn.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.user) {
                    const boardIndex = state.user.boards.findIndex((b) => b.id === payload.boardId);
                    if (boardIndex !== -1) {
                        const columnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.columnId);
                        state.user.boards[boardIndex].columns.splice(columnIndex, 1);
                    }
                }
            })
            .addCase(deleteColumn.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.user) {
                    const boardIndex = state.user.boards.findIndex((b) => b.id === payload.boardId);
                    if (boardIndex !== -1) {
                        const columnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.columnId);
                        state.user.boards[boardIndex].columns[columnIndex].tasks.push(payload.task);

                    }
                }
            })
            .addCase(addTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(changeTask.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(changeTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.user) {
                    const boardIndex = state.user.boards.findIndex((b) => b.id === payload.boardId);
                    if (boardIndex !== -1) {
                        const columnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.columnId);
                        if (columnIndex !== -1) {
                            const taskIndex = state.user.boards[boardIndex].columns[columnIndex].tasks.findIndex((t) => t.id === payload.task.id);
                            state.user.boards[boardIndex].columns[columnIndex].tasks[taskIndex]= payload.task;
                        }
                    }
                }
            })
            .addCase(changeTask.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = payload;
            })
            .addCase(deleteTask.pending, (state, { payload }) => {
                state.isLoading = true;
            })
            .addCase(deleteTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (state.user) {
                    const boardIndex = state.user.boards.findIndex((b) => b.id === payload.boardId);
                    if (boardIndex !== -1) {

                        const columnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.columnId);
                        if (columnIndex !== -1) {
                            const taskIndex = state.user.boards[boardIndex].columns[columnIndex].tasks.findIndex((t) => t.id === payload.itemId);
                            state.user.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex,1)
                        }
                    }
                }
            })
            .addCase(deleteTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(rotateTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(rotateTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;

                if (!state.user) return;

                const boardIndex = state.user.boards.findIndex((b) => b.id === payload.boardId);
                if (boardIndex === -1) return;

                const columnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.columnId);
                const toColumnIndex = state.user.boards[boardIndex].columns.findIndex((t) => t.id === payload.toColumnId);

                if (columnIndex === -1 || toColumnIndex === -1) return;

                const taskIndex = state.user.boards[boardIndex].columns[columnIndex].tasks.findIndex((t) => t.id === payload.itemId);
                if (taskIndex === -1) return;

                const [task] = state.user.boards[boardIndex].columns[columnIndex].tasks.splice(taskIndex, 1);
                if (task) {
                    state.user.boards[boardIndex].columns[toColumnIndex].tasks.push(task);
                }
            })
            .addCase(rotateTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });


    }
});

export const { logout,setFilter } = authSlice.actions;
export const authReducer =  authSlice.reducer;
