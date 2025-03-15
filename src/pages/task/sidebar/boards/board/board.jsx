import {Container, Icon, DeleteIcon, Text, IconsWrap, PenIcon} from "./styled";
import {useDispatch} from "react-redux";
import icons, {
    Back,
    CloseButton, CreateButton,
    CreatePopup,
    H3,
    H4,
    InpIcon, InpPhoto,
    InpTitle,
    Label,
    List, Photo, WPlus,
    Wrap
} from "../../create/styled";
import images from "../../create/boardPhoto";
import Popup from "reactjs-popup";
import {useState} from "react";
import {changeBoard, deleteBoard} from "../../../../../redux/auth/slice";
import {useNavigate} from "react-router-dom";

export const Board = ({ item, checked, onSelect }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(`${item.name}`);
    const [selectedIcon, setSelectedIcon] = useState(`${item.icon}`); // Для іконки
    const [selectedImg, setSelectedImg] = useState(`${item.img}`);

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
        setTitle('');
        setSelectedIcon('');
        setSelectedImg('');
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        dispatch(changeBoard({id:item.id,title, selectedIcon, selectedImg}))
        handleClose()
    }
    const handleDelete = (e) => {
        dispatch(deleteBoard({id:item.id}))
        checked && navigate("/tasks");
    }

    return (
        <Container  checked={checked} >
            <Text checked={checked} to={item.id} onClick={onSelect}><Icon/>{item.name}</Text>
            {checked && <IconsWrap>
                <Popup open={open} onClose={handleClose} trigger={<PenIcon onClick={() => setOpen(true)}/>}  modal>
                    {(close) => (
                        <Back onClick={close}>
                            <CreatePopup onClick={(e) => e.stopPropagation()}>
                                <CloseButton onClick={close} type='button'>&times;</CloseButton>
                                <H3>Edit board</H3>
                                <InpTitle onChange={handleTitleChange} type="text" name="title" placeholder='Title' value={title}/>

                                <Wrap>
                                    <H4>Icons</H4>
                                    <List>
                                        {icons.map((Icon, index) => (
                                            <Label htmlFor={`icon-${index}`} key={index}>
                                                <InpIcon onChange={handleIconChange} type="radio" id={`icon-${index}`} name="icon" value={`icon-${index}`} />
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
                                                <InpPhoto onChange={handleImageChange} type="radio" id={`photo-${index}`} name="photo" value={`photo-${index}`} />
                                                <Photo src={img} alt={`Фото ${index + 1}`} width={28} />
                                            </Label>
                                        ))}
                                    </List>
                                </Wrap>
                                <CreateButton onClick={handleSubmit} type='submit'><WPlus/> Edit</CreateButton>
                            </CreatePopup>
                        </Back>
                    )}
                </Popup>

                <DeleteIcon onClick={handleDelete}/>
            </IconsWrap>}

        </Container>
    )

}