import { Btn, Icon } from "../styled";
import { useContext, useState } from "react";
import { BoardContext } from "../../../boardContext/boardContext";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../../redux/auth/slice";
import {
    Back,
    CloseButton,
    CreateButton,
    CreatePopup,
    H3,
    InpTitle,
    WPlus
} from "../../../sidebar/create/styled";
import Popup from "reactjs-popup";
import {
    ColorOption,
    InpDescription,
    LabelContainer,
    LabelText
} from "./styled";
import Calendar from "react-calendar";
import './style.css'

export const AddCard = ({ column }) => {
    const board = useContext(BoardContext);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handlePriorityChange = (e) => {
        setPriority(e.target.value);

    }
    const handleDateChange = (e) => {
        setDate(e);
    }
    const handleClose = () => {
        setOpen(false);
        setTitle("");
        setDescription("");
        setPriority("");
        setDate(new Date())
        setShowCalendar(false);
    };
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Місяці з 0-11
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = formatDate(date);
        dispatch(addTask({ title,description, boardId: board.id, columnId: column.id, date: formattedDate, priority }));
        handleClose();
    };

    return (
        <Popup
            open={open}
            onClose={handleClose}
            trigger={<Btn onClick={() => setOpen(true)}><Icon />Add another card</Btn>}
            modal
        >
            {(close) => (
                <Back onClick={close}>
                    <CreatePopup onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={close} type="button">
                            &times;
                        </CloseButton>
                        <H3>Add card</H3>
                        <InpTitle
                            onChange={handleTitleChange}
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={title}
                        />
                        <InpDescription
                            onChange={handleDescriptionChange}
                            placeholder="Description"
                            value={description}
                        />

                        <label htmlFor="priority">
                            <LabelText>Label color</LabelText>
                            <LabelContainer>
                                <ColorOption onChange={handlePriorityChange} checked={priority === "Low"} name="priority" value="Low" />
                                <ColorOption onChange={handlePriorityChange} checked={priority === "Medium"} name="priority" value="Medium" />
                                <ColorOption onChange={handlePriorityChange} checked={priority === "High"} name="priority" value="High" />
                                <ColorOption onChange={handlePriorityChange} checked={priority === "Without"} name="priority" value="Without" />
                            </LabelContainer>
                        </label>

                        {/* Кнопка для відкриття календаря */}
                        <label htmlFor="deadline">
                            <LabelText>Deadline:</LabelText>
                            <button
                                type="button"
                                onClick={() => setShowCalendar(!showCalendar)}
                                className="date-picker-button"
                            >
                                {date.toLocaleDateString()}
                            </button>
                        </label>

                        {/* Календар */}
                        {showCalendar && (
                            <div className="calendar-container">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={date}
                                    locale="en-US"
                                    className="custom-calendar"
                                />
                            </div>
                        )}

                        <CreateButton onClick={handleSubmit} type="submit">
                            <WPlus /> Add
                        </CreateButton>
                    </CreatePopup>
                </Back>
            )}
        </Popup>
    );
};
