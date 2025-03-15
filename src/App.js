import {Route, Routes, useLocation} from "react-router-dom";
import {Start} from "./pages/start/start";
import {Registration} from "./pages/registration/registration";
import {LogIn} from "./pages/log-in/log-in";
import {Task} from "./pages/task/task";
import {useEffect} from "react";
import {Columns} from "./pages/task/columns/columns";

export const App = () => {
    const location = useLocation();
    useEffect(() => {
        console.log("Current route:", location.pathname);
    }, [location]);
  return (
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/log-in' element={<LogIn/>} />
        <Route path='/tasks' element={<Task/>}>
            <Route path=':boardId' element={<Columns/>} />
        </Route>
      </Routes>
  )
}
