import {Button, Container, FormWrapper, Input, PasswordInput, Tab, Tabs} from "../registration/styled";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAuth} from "../../redux/auth/selectors";
import {loginUser} from "../../redux/auth/slice";



export const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, accessToken } = useSelector(getAuth);

    useEffect(() => {
        if (accessToken) navigate("/tasks");
    }, [accessToken, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(loginUser({ email, password })).unwrap(); // Получаем данные без `fulfilled`
            setEmail("");
            setPassword("");
            navigate("/tasks");
        } catch (err) {
            console.error("Ошибка входа:", err); // Выведет текст ошибки
        }
    };

    return (
        <Container>
            <FormWrapper onSubmit={handleSubmit}>
                <Tabs>
                    <Tab to='/registration' >Registration</Tab>
                    <Tab to='/log-in' active >Log In</Tab>
                </Tabs>
                <Input name='email' onChange={handleChange} type="email" placeholder="Enter your email" />
                <PasswordInput name='password' onChange={handleChange} type="password" placeholder="Enter your password" />
                {error &&
                    <p style={{color: "red"}}>{typeof error === "string" ? error : "Login failed. Please try again."}</p>}
                <Button disabled={isLoading} type='submit' >{isLoading ? "Logging in..." : "Log In Now"}</Button>
            </FormWrapper>
        </Container>
    )

}