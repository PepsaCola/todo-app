import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchProfile, logout, setFilter} from "../../redux/auth/slice";
import {Sidebar} from "./sidebar/sidebar";
import {
    backgrounds,
    ColumnsWrap,
    Container,
    Filter,
    Icon,
    Label,
    LabelContainer, LabelSpan, LabelText, LabelWrap,
    Message,
    TaskWrap,
    Title,
    TitleWrap
} from "./styled";
import {Header} from "./header/header";
import {getAccessToken, getFilter, getUser} from "../../redux/auth/selectors";
import {BoardContext} from "./boardContext/boardContext";
import {Back, CloseButton, CreatePopup, H3} from "./sidebar/create/styled";
import Popup from "reactjs-popup";
import {ColorOption} from "./columns/column/addCard/styled";


export const Task = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {boardId}= useParams();
    const user = useSelector(getUser);
    const accessToken = useSelector(getAccessToken);
    const filter = useSelector(getFilter);

    const [open, setOpen] = useState(false)
    const [priority, setPriority] = useState(filter);

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleClose = ()=>{
        setOpen(false)
    }


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

        navigate("/");
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
        dispatch(setFilter(e.target.value));
    }

    const selectedBackground = curBoard && curBoard.img && backgrounds[curBoard.img] ? backgrounds[curBoard.img] : null;

    if (user) {
        return <Container>
            <Sidebar boards={user.boards} handleLogout={handleLogout} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <TaskWrap>
                <Header toggleSidebar={toggleSidebar}/>

                    <ColumnsWrap back={selectedBackground}>
                        <TitleWrap>
                            {boardId&&<Title>{curBoard.name}</Title>}

                            <Popup  open={open} onClose={handleClose} trigger={<Filter onClick={()=>setOpen(true)}><Icon/>Filter</Filter>} position="right top" modal>
                                {(close) => (
                                    <Back onClick={close}>
                                        <CreatePopup onClick={(e) => e.stopPropagation()}>
                                            <CloseButton onClick={close} type='button'>&times;</CloseButton>
                                            <H3>Filters</H3>
                                            <LabelWrap>
                                                <LabelText>Label color</LabelText>
                                                <LabelSpan onClick={()=> {
                                                    setPriority('')
                                                    dispatch(setFilter(''));
                                                }}>Show all</LabelSpan>
                                            </LabelWrap>
                                            <LabelContainer>
                                                <Label checked={priority === "Without"} htmlFor='priorityWithout'><ColorOption onChange={handlePriorityChange} checked={priority === "Without"} id='priorityWithout' name="priority" value="Without" />Without</Label>
                                                <Label checked={priority === "Low"} htmlFor='priorityLow'><ColorOption onChange={handlePriorityChange} checked={priority === "Low"} id='priorityLow' name="priority" value="Low" />Low</Label>
                                                <Label checked={priority === "Medium"} htmlFor='priorityMedium'><ColorOption onChange={handlePriorityChange} checked={priority === "Medium"} id='priorityMedium' name="priority" value="Medium" />Medium</Label>
                                                <Label checked={priority === "High"} htmlFor='priorityHigh'><ColorOption onChange={handlePriorityChange} checked={priority === "High"} id='priorityHigh' name="priority" value="High" />High</Label>


                                            </LabelContainer>
                                        </CreatePopup>
                                    </Back>
                                )}
                            </Popup>
                        </TitleWrap>
                        {boardId?<BoardContext.Provider value={curBoard}><Outlet /></BoardContext.Provider>:<Message>Before starting your project, it is essential to create a board to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.</Message>}
                    </ColumnsWrap>
            </TaskWrap>
        </Container>
    }
    return <></>

}