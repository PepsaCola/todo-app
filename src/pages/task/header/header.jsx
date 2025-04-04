import {Button, Container, HeaderWrap, IconP, Img, Inp, Name, PopImg, Wrap} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {getTheme, getUser} from "../../../redux/auth/selectors";
import imgD from "../../../img/user.png";
import imgL from "../../../img/user-l.png";
import {
    Back,
    CloseButton, CreateButton,
    CreatePopup,
    H3,
    WPlus
} from "../sidebar/create/styled";
import Popup from "reactjs-popup";
import { useState} from "react";
import {changeProfile} from "../../../redux/auth/slice";
import {MenuIcon} from "../styled";
import {Theme} from "./theme";


export const Header = ({toggleSidebar}) => {
    const user = useSelector(getUser)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');

    const theme = useSelector(getTheme);
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleClose = () => {
        setOpen(false);
        setName(user.username);
        setEmail(user.email);
        setPassword('');

    }

    const handleSubmit = (e,close) => {
        e.preventDefault();
        dispatch(changeProfile({newName:name,newEmail:email,newPass:password}))
        close()
    }
    return (
        <Container >
            <MenuIcon onClick={toggleSidebar}/>
            <Theme/>
            <Popup  open={open} onClose={handleClose} trigger={<HeaderWrap>
                <Name>{user.username}</Name>
                <Img src={user.avatar?user.avatar: theme==='dark'?imgD:imgL}/>
            </HeaderWrap>} position="right top" modal>
                {(close) => (
                    <Back onClick={close}>
                        <CreatePopup onClick={(e) => e.stopPropagation()}>
                            <CloseButton onClick={close} type='button'>&times;</CloseButton>
                            <H3>Edit  profile</H3>
                            <Wrap>
                                <PopImg src={user.avatar?user.avatar: theme==='dark'?imgD:imgL}/>
                                <Button><IconP/></Button>
                            </Wrap>

                            <Inp onChange={handleNameChange} type="text" name="name" placeholder='New name' value={name}/>
                            <Inp onChange={handleEmailChange} type="email" name="email" placeholder='New email' value={email}/>
                            <Inp onChange={handlePasswordChange} type="password" name="password" placeholder='New password' value={password}/>


                            <CreateButton onClick={(e)=>handleSubmit(e,close)} type='submit'><WPlus/> Send</CreateButton>
                        </CreatePopup>
                    </Back>
                )}
            </Popup>
        </Container>
    )
}