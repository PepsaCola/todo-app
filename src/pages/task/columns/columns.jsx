import {Btn, Icon, List, ListItem} from "./styled";
import {Column} from "./column/column";
import {useContext, useState} from "react";
import {BoardContext} from "../boardContext/boardContext";
import {
    Back,
    CloseButton, CreateButton,
    CreatePopup,
    H3,
    InpTitle,
     WPlus,
} from "../sidebar/create/styled";
import Popup from "reactjs-popup";
import {useDispatch} from "react-redux";
import {addColumn} from "../../../redux/auth/slice";

export const Columns = ()=>{

    const board = useContext(BoardContext);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')

    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleClose = ()=>{
        setOpen(false)
        setTitle("");
    }
    const handleSubmit = (e,close) => {
        e.preventDefault()
        dispatch(addColumn({title,boardId:board.id}))
        close()
    }

    console.log(window.outerWidth);

    return (
            <List>
                {board.columns && board.columns.map((item)=><Column key={item.id} column={item}/>)}
                <ListItem>

                    <Popup  open={open} onClose={handleClose} trigger={<Btn onClick={() => setOpen(true)}><Icon/>Add another column</Btn>} position="right top" modal>
                        {(close) => (
                            <Back onClick={close}>
                                <CreatePopup onClick={(e) => e.stopPropagation()}>
                                    <CloseButton onClick={close} type='button'>&times;</CloseButton>
                                    <H3>Add column</H3>
                                    <InpTitle onChange={handleTitleChange} type="text" name="title" placeholder='Title' value={title}/>
                                    <CreateButton onClick={(e)=>handleSubmit(e,close)} type='submit'><WPlus/> Create</CreateButton>
                                </CreatePopup>
                            </Back>
                        )}
                    </Popup>
                </ListItem>
            </List>
    )
}