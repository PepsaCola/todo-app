import { Container, DeleteIcon, Text, IconsWrap, PenIcon } from "./styled";
import { useDispatch } from "react-redux";
import icons, {
    Back,
    CloseButton,
    CreateButton,
    CreatePopup,
    H3,
    H4,
    InpIcon,
    InpPhoto,
    InpTitle,
    Label,
    List,
    Photo,
    WPlus,
    Wrap
} from "../../create/styled";
import images from "../../create/boardPhoto";
import Popup from "reactjs-popup";
import { useState, useEffect } from "react"; // Додано useEffect
import { changeBoard, deleteBoard } from "../../../../../redux/auth/slice";
import { useNavigate } from "react-router-dom";

export const Board = ({ item, checked, onSelect }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(item.name); // Початкове значення з item
    const [selectedIcon, setSelectedIcon] = useState(item.icon); // Початкове значення з item
    const [selectedImg, setSelectedImg] = useState(item.img); // Початкове значення з item

    // Синхронізація стану з пропсами при відкритті модального вікна
    useEffect(() => {
        if (open) {
            setTitle(item.name);
            setSelectedIcon(item.icon);
            setSelectedImg(item.img);
        }
    }, [open, item.name, item.icon, item.img]); // Залежності: open і значення з item

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleIconChange = (e) => {
        setSelectedIcon(e.target.value);
    };

    const handleImageChange = (e) => {
        setSelectedImg(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
        // Більше не скидаємо вручну до item, бо це робить useEffect при відкритті
    };

    const handleSubmit = (e, close) => {
        e.preventDefault();
        dispatch(changeBoard({ id: item.id, title, selectedIcon, selectedImg }));
        close();
    };

    const handleDelete = (e) => {
        dispatch(deleteBoard({ id: item.id }));
        checked && navigate("/tasks");
    };

    const iconIndex = parseInt(item.icon?.split('-')[1]) || 0;
    const SelectedIcon = icons[iconIndex];

    return (
        <Container checked={checked}>
            <Text checked={checked} to={item.id} onClick={onSelect}>
                <SelectedIcon />
                {item.name}
            </Text>
            {checked && (
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
                                    <H3>Edit board</H3>
                                    <InpTitle
                                        onChange={handleTitleChange}
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={title}
                                    />

                                    <Wrap>
                                        <H4>Icons</H4>
                                        <List>
                                            {icons.map((Icon, index) => (
                                                <Label htmlFor={`icon-${index}`} key={index}>
                                                    <InpIcon
                                                        onChange={handleIconChange}
                                                        type="radio"
                                                        id={`icon-${index}`}
                                                        name="icon"
                                                        value={`icon-${index}`}
                                                        checked={selectedIcon === `icon-${index}`}
                                                    />
                                                    <Icon width={18} />
                                                </Label>
                                            ))}
                                        </List>
                                    </Wrap>

                                    <Wrap>
                                        <H4>Background</H4>
                                        <List>
                                            {images.map((img, index) => (
                                                <Label htmlFor={`photo-${index}`} key={index}>
                                                    <InpPhoto
                                                        onChange={handleImageChange}
                                                        type="radio"
                                                        id={`photo-${index}`}
                                                        name="photo"
                                                        value={`photo-${index}`}
                                                        checked={selectedImg === `photo-${index}`}
                                                    />
                                                    <Photo
                                                        src={img}
                                                        alt={`Photo ${index + 1}`}
                                                        width={28}
                                                    />
                                                </Label>
                                            ))}
                                        </List>
                                    </Wrap>
                                    <CreateButton
                                        onClick={(e) => handleSubmit(e, close)}
                                        type="submit"
                                    >
                                        <WPlus /> Edit
                                    </CreateButton>
                                </CreatePopup>
                            </Back>
                        )}
                    </Popup>

                    <DeleteIcon onClick={handleDelete} />
                </IconsWrap>
            )}
        </Container>
    );
};