import startImg from "../../img/startImg.png";
import {A, Button, Container, Description, Icon, Img, StartWrap, Title} from "./styled";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getAccessToken} from "../../redux/auth/selectors";
import {useNavigate} from "react-router-dom";

export const Start = () => {

    const navigate = useNavigate();

    const accessToken = useSelector(getAccessToken)

    useEffect(() => {
        if (accessToken) navigate("/tasks");
    }, [accessToken, navigate]);

    return <Container>
        <Img src={startImg} alt="start"/>
        <Title>
            <Icon/>
            Task Pro
        </Title>
        <Description>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</Description>
        <StartWrap>
            <Button to='/registration'>Registration</Button>
            <A to='/log-in'>Log In</A>
        </StartWrap>

    </Container>
}