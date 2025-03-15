import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchProfile, logout} from "../../redux/auth/slice";
import {Sidebar} from "./sidebar/sidebar";
import {ColumnsWrap, Container, Filter, Icon, Message, TaskWrap, Title, TitleWrap} from "./styled";
import {Header} from "./header/header";
import {getAccessToken, getUser} from "../../redux/auth/selectors";
import {BoardContext} from "./boardContext/boardContext";

export const Task = () => {
    console.log("Task component rendered");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {boardId}= useParams();
    const user = useSelector(getUser);
    const accessToken = useSelector(getAccessToken);
    console.log(user)
    let curBoard=null;
    if (user){
        if (user.boards)
        curBoard = user.boards.find((board) => board.id === boardId);
    }

    useEffect(() => {
        if (!accessToken ) {
            navigate("/");
            return;
        }
        if (!user) {
            dispatch(fetchProfile());
        }
    }, [accessToken, user,dispatch,navigate]);

    const handleLogout = () => {
       dispatch(logout())
        // dispatch(logoutApp())
        navigate("/"); // Переход на главную после выхода
    };
    if (user) {
        console.log(user);
        return <Container>
            <Sidebar boards={user.boards} handleLogout={handleLogout}></Sidebar>
            <TaskWrap>
                <Header/>
                    <ColumnsWrap>
                        <TitleWrap>
                            {boardId&&<Title>{curBoard.name}</Title>}
                            <Filter><Icon/>Filter</Filter>
                        </TitleWrap>
                        {boardId?<BoardContext.Provider value={curBoard}><Outlet /></BoardContext.Provider>:<Message>Before starting your project, it is essential to create a board to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.</Message>}
                    </ColumnsWrap>
            </TaskWrap>
        </Container>
    }
    return <></>

}