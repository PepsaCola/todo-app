import {createContext, useEffect} from "react";
import {useSelector} from "react-redux";
import {getTheme} from "../redux/auth/selectors";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const theme = useSelector(getTheme);

    useEffect(() => {
        document.body.removeAttribute("class");
        document.body.classList.add(theme);
    },[theme])
    return(<ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>)
}