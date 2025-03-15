import {Container, HeaderWrap, Icon, Img, Name, Text} from "./styled";
import {useSelector} from "react-redux";
import {getUser} from "../../../redux/auth/selectors";
import img from "../../../img/user.png";

export const Header = () => {

    const user = useSelector(getUser)

    return (
        <Container>
            <Text>Theme<Icon/></Text>
            <HeaderWrap>
                <Name>{user.username}</Name>
                <Img src={user.avatar?user.avatar: img}/>
            </HeaderWrap>

        </Container>
    )
}