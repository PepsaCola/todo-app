import {Container, HelpWrap, Icon, IconText, Img, Text} from "./styled";
import img from "../../../../img/helpImg.png";

export const Help = () => {
    return (
        <Container>
            <Img src={img} alt="help" />
            <Text>If you need help with TaskPro, check out our support resources or reach out to our customer support team.</Text>
            <HelpWrap>
                <Icon></Icon>
                <IconText>Need help?</IconText>
            </HelpWrap>
        </Container>
    )
}