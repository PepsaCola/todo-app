import {BottomDiv, Button, Container, H3, Icon, LogOutIcon, Title, TopDiv} from "./styled";
import {Create} from "./create/create";
import {Boards} from "./boards/boards";
import {Help} from "./help/help";

export const Sidebar = ({handleLogout,boards}) => {

    return (
        <Container>
            <TopDiv>
                <Title>
                    <Icon/>
                    Task Pro
                </Title>
                <H3>My boards</H3>
                <Create/>
            </TopDiv>

            {boards&&<Boards data={boards}/>}
            <BottomDiv>
                <Help/>
                <Button  onClick={handleLogout}>
                    <LogOutIcon/>Log out</Button>
            </BottomDiv>

        </Container>
    )
}