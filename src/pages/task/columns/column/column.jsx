import { Container, DeleteIcon, IconsWrap, List, PenIcon, Title} from "./styled";
import {Box} from "./box/box";
import {TitleWrap} from "./styled";
import {Back, CloseButton, CreateButton, CreatePopup, H3, InpTitle, WPlus} from "../../sidebar/create/styled";
import Popup from "reactjs-popup";
import {useContext, useState} from "react";
import {BoardContext} from "../../boardContext/boardContext";
import {useDispatch} from "react-redux";
import {changeColumn, deleteColumn} from "../../../../redux/auth/slice";
import {AddCard} from "./addCard/addCard";

export const Column = ({column})=>{

    const board = useContext(BoardContext);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState(column.name)

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleClose = ()=>{
        setOpen(false)
        setTitle(column.name);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeColumn({title,boardId:board.id,columnId:column.id}))
        handleClose()
    }

    const deleteClick = ()=>{
        dispatch(deleteColumn({boardId:board.id,columnId:column.id}))
    }

    return (
        <Container>
            <TitleWrap>
                <Title>{column.name}</Title>
                <IconsWrap>
                    <Popup  open={open} onClose={handleClose} trigger={<PenIcon onClick={() => setOpen(true)}/>} modal>
                        {(close) => (
                            <Back onClick={close}>
                                <CreatePopup onClick={(e) => e.stopPropagation()}>
                                    <CloseButton onClick={close} type='button'>&times;</CloseButton>
                                    <H3>Edit column</H3>
                                    <InpTitle onChange={handleTitleChange} type="text" name="title" placeholder='Title' value={title}/>
                                    <CreateButton onClick={handleSubmit} type='submit'><WPlus/> Edit</CreateButton>
                                </CreatePopup>
                            </Back>
                        )}
                    </Popup>
                    <DeleteIcon onClick={deleteClick}/>
                </IconsWrap>
            </TitleWrap>
            {/*<Wrap>*/}
                <List>
                    {column.tasks.map(item=><Box board={board} column={column} key={item.id} item={item}/>)}
                </List>
            {/*</Wrap>*/}
                    <AddCard column={column}/>
        </Container>
    )
}