import {Btn, Icon} from "../../styled";
import {Back, CloseButton, CreateButton, CreatePopup, H3, InpTitle, WPlus} from "../../../../sidebar/create/styled";
import {ColorOption, InpDescription, LabelContainer, LabelText} from "../../addCard/styled";
import Calendar from "react-calendar";
import Popup from "reactjs-popup";
import {useContext, useState} from "react";
import {BoardContext} from "../../../../boardContext/boardContext";
import {useDispatch} from "react-redux";
import {changeTask} from "../../../../../../redux/auth/slice";
import {PenIcon} from "../styled";

export const Change = ({item,column}) => {

    const board = useContext(BoardContext);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [priority, setPriority] = useState(item.priority);
    const [date, setDate] = useState(new Date(item.deadline));
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
    const handleSubmit = (e) => {
        const formattedDate = date.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" });
        e.preventDefault();
        dispatch(changeTask({id:item.id, title,description, boardId: board.id, columnId: column.id, date: formattedDate, priority }));
        handleClose();
    };

    return (
        <Popup
            open={open}
            onClose={handleClose}
            trigger={<PenIcon />}
            modal
        >
            {(close) => (
                <Back onClick={close}>
                    <CreatePopup onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={close} type="button">
                            &times;
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
                            <WPlus /> Edit
                        </CreateButton>
                    </CreatePopup>
                </Back>
            )}
        </Popup>
    )
}