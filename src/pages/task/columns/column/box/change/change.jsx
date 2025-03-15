import {
    Back,
    CloseButton,
    CreateButton,
    CreatePopup,
    H3,
    InpTitle,
    WPlus,
} from "../../../../sidebar/create/styled";
import { ColorOption, InpDescription, LabelContainer, LabelText } from "../../addCard/styled";
import Calendar from "react-calendar";
import Popup from "reactjs-popup";
import { useContext, useState, useEffect } from "react";
import { BoardContext } from "../../../../boardContext/boardContext";
import { useDispatch } from "react-redux";
import { changeTask } from "../../../../../../redux/auth/slice";
import { PenIcon } from "../styled";

// Функція для парсингу дати з формату "dd.mm.yyyy" у об'єкт Date
const parseDate = (dateString) => {
    const [day, month, year] = dateString.split(".");
    return new Date(`${year}-${month}-${day}`);
};

export const Change = ({ item, column }) => {
    const board = useContext(BoardContext);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [priority, setPriority] = useState(item.priority);
    const [date, setDate] = useState(item.deadline ? parseDate(item.deadline) : new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    // Синхронізація стану з пропсами при відкритті модального вікна
    useEffect(() => {
        if (open) {
            setTitle(item.title);
            setDescription(item.description);
            setPriority(item.priority);
            setDate(item.deadline ? parseDate(item.deadline) : new Date());
        }
    }, [open, item.title, item.description, item.priority, item.deadline]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    const handleClose = () => {
        setOpen(false);
        setShowCalendar(false);
    };
    const handleSubmit = (e, close) => {
        e.preventDefault();
        const formattedDate = date.toLocaleDateString("uk-UA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        dispatch(
            changeTask({
                id: item.id,
                title,
                description,
                boardId: board.id,
                columnId: column.id,
                date: formattedDate,
                priority,
            })
        );
        close();
    };

    return (
        <Popup open={open} onClose={handleClose} trigger={<PenIcon onClick={() => setOpen(true)} />} modal>
            {(close) => (
                <Back onClick={close}>
                    <CreatePopup onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={close} type="button">
                            ×
                        </CloseButton>
                        <H3>Edit card</H3>
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
                                <ColorOption
                                    onChange={handlePriorityChange}
                                    checked={priority === "Low"}
                                    name="priority"
                                    value="Low"
                                />
                                <ColorOption
                                    onChange={handlePriorityChange}
                                    checked={priority === "Medium"}
                                    name="priority"
                                    value="Medium"
                                />
                                <ColorOption
                                    onChange={handlePriorityChange}
                                    checked={priority === "High"}
                                    name="priority"
                                    value="High"
                                />
                                <ColorOption
                                    onChange={handlePriorityChange}
                                    checked={priority === "Without"}
                                    name="priority"
                                    value="Without"
                                />
                            </LabelContainer>
                        </label>

                        <label htmlFor="deadline">
                            <LabelText>Deadline:</LabelText>
                            <button
                                type="button"
                                onClick={() => setShowCalendar(!showCalendar)}
                                className="date-picker-button"
                            >
                                {date.toLocaleDateString("uk-UA", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </button>
                        </label>

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

                        <CreateButton onClick={(e) => handleSubmit(e, close)} type="submit">
                            <WPlus /> Edit
                        </CreateButton>
                    </CreatePopup>
                </Back>
            )}
        </Popup>
    );
};