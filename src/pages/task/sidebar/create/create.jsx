import {
    Back,
    Button, CloseButton,
    Container, CreateButton,
    CreatePopup,
    H3,
    H4,
    Icon,
    InpIcon, InpPhoto,
    InpTitle, Label, List,
    Photo,
    Text, WPlus, Wrap
} from "./styled";
import Popup from "reactjs-popup";
import images from "./boardPhoto";
import icons from "./styled";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBoard} from "../../../../redux/auth/slice";

export const Create = ()=>{

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [selectedIcon, setSelectedIcon] = useState(""); // Для іконки
    const [selectedImg, setSelectedImg] = useState("");

    const dispatch = useDispatch();

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
        setTitle('')
        setSelectedIcon("");
        setSelectedImg("");
    }

    const handleSubmit = (e,close) => {
        e.preventDefault();
        dispatch(addBoard({title, selectedIcon, selectedImg}))
        close()
    }

    return (
        <Container>
            <Text>Create a new board</Text>
            <Popup  open={open} onClose={handleClose} trigger={<Button><Icon/></Button>} position="right top" modal>
                {(close) => (
                    <Back onClick={close}>
                        <CreatePopup onClick={(e) => e.stopPropagation()}>
                            <CloseButton onClick={close} type='button'>&times;</CloseButton>
                            <H3>New board</H3>
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
                            <CreateButton onClick={(e)=>handleSubmit(e,close)} type='submit'><WPlus/> Create</CreateButton>
                        </CreatePopup>
                    </Back>
                    )}
            </Popup>

        </Container>
    )
}