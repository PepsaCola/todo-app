import { Container, DeleteIcon, IconsWrap, List, PenIcon, Title } from "./styled";
import { Box } from "./box/box";
import { TitleWrap } from "./styled";
import {
    Back,
    CloseButton,
    CreateButton,
    CreatePopup,
    H3,
    InpTitle,
    WPlus,
} from "../../sidebar/create/styled";
import Popup from "reactjs-popup";
import { useContext, useState, useEffect } from "react"; // Додано useEffect
import { BoardContext } from "../../boardContext/boardContext";
import { useDispatch, useSelector } from "react-redux";
import { changeColumn, deleteColumn } from "../../../../redux/auth/slice";
import { AddCard } from "./addCard/addCard";
import { getFilter } from "../../../../redux/auth/selectors";

export const Column = ({ column }) => {
    const board = useContext(BoardContext);
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(column.name);

    // Синхронізація стану title з column.name при відкритті модального вікна
    useEffect(() => {
        if (open) {
            setTitle(column.name);
        }
    }, [open, column.name]); // Залежності: open і column.name

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
        // Більше не скидаємо title вручну, це робить useEffect
    };

    const handleSubmit = (e, close) => {
        e.preventDefault();
        dispatch(changeColumn({ title, boardId: board.id, columnId: column.id }));
        close();
    };

    const deleteClick = () => {
        dispatch(deleteColumn({ boardId: board.id, columnId: column.id }));
    };

    return (
        <Container>
            <TitleWrap>
                <Title>{column.name}</Title>
                <IconsWrap>
                    <Popup
                        open={open}
                        onClose={handleClose}
                        trigger={<PenIcon onClick={() => setOpen(true)} />}
                        modal
                    >
                        {(close) => (
                            <Back onClick={close}>
                                <CreatePopup onClick={(e) => e.stopPropagation()}>
                                    <CloseButton onClick={close} type="button">
                                        ×
                                    </CloseButton>
                                    <H3>Edit column</H3>
                                    <InpTitle
                                        onChange={handleTitleChange}
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={title}
                                    />
                                    <CreateButton onClick={(e) => handleSubmit(e, close)} type="submit">
                                        <WPlus /> Edit
                                    </CreateButton>
                                </CreatePopup>
                            </Back>
                        )}
                    </Popup>
                    <DeleteIcon onClick={deleteClick} />
                </IconsWrap>
            </TitleWrap>
            <List>
                {column.tasks
                    .filter((item) => {
                        if (!filter) return true; // Якщо фільтр порожній, показуємо все
                        return item.priority === filter; // Фільтрація за пріоритетом
                    })
                    .map((item) => (
                        <Box board={board} column={column} key={item.id} item={item} />
                    ))}
            </List>
            <AddCard column={column} />
        </Container>
    );
};