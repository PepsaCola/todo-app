import {
    BoxWrap,
    Container,
    CreatePopup,
    Deadline,
    DeadlineWrap,
    DeleteIcon,
    Description,
    IconsWrap,
    Priority,
    PriorityWrap,
    ReplaceIcon,
    ReplText,
    Span,
    Title,
} from "./styled";
import { Change } from "./change/change";
import { useDispatch } from "react-redux";
import { deleteTask, rotateTask } from "../../../../../redux/auth/slice";
import { Back } from "../../../sidebar/create/styled";
import Popup from "reactjs-popup";
import { useState } from "react";

export const Box = ({ item, column, board }) => {
    const dispatch = useDispatch();
    const columns = board.columns;
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        dispatch(deleteTask({ itemId: item.id, columnId: column.id, boardId: board.id }));
    };

    const handleClick = (toColumnId) => {
        dispatch(rotateTask({ itemId: item.id, boardId: board.id, columnId: column.id, toColumnId }));
    };

    return (
        <Container priority={item.priority}>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <BoxWrap>
                <PriorityWrap>
                    <Span>Priority</Span>
                    <Priority priority={item.priority}>{item.priority}</Priority>
                </PriorityWrap>
                <DeadlineWrap>
                    <Span>Deadline</Span>
                    <Deadline>{item.deadline || "Not set"}</Deadline> {/* Відображаємо рядок напряму */}
                </DeadlineWrap>
            </BoxWrap>
            <IconsWrap>
                <Popup open={open} onClose={handleClose} trigger={<ReplaceIcon onClick={() => setOpen(true)} />} modal>
                    {(close) => (
                        <Back onClick={close}>
                            <CreatePopup onClick={(e) => e.stopPropagation()}>
                                {Object.values(columns)
                                    .filter((col) => col.id !== column.id) // Фільтруємо, щоб не включати поточну колонку
                                    .map((col) => (
                                        <ReplText onClick={() => handleClick(col.id)} key={col.id}>
                                            {col.name} <ReplaceIcon />
                                        </ReplText> // Виводимо назви інших колонок
                                    ))}
                            </CreatePopup>
                        </Back>
                    )}
                </Popup>

                <Change column={column} item={item} />
                <DeleteIcon onClick={handleDelete} />
            </IconsWrap>
        </Container>
    );
};