import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

// Конфигурация для `auth`, если хочешь исключить временные данные
const authPersistConfig = {
    key: "auth",
    storage,
    blacklist: ["error"], // Не сохраняем ошибки авторизации
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"], // Сохраняем только `auth`
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
});

export const persistor = persistStore(store);
