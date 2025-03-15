import {Button, Container, FormWrapper, Input, PasswordInput, Tab, Tabs} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAuth} from "../../redux/auth/selectors";
import {registerUser} from "../../redux/auth/slice";

export const Registration = () => {


    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error, accessToken } = useSelector(getAuth);

    useEffect(() => {
        if (accessToken) navigate("/tasks");
    }, [accessToken, navigate]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(registerUser(formData));
        if (registerUser.fulfilled.match(result)) setFormData({ username: "", email: "", password: "" });
    }

    return (
        <Container>
            <FormWrapper onSubmit={handleSubmit}>
                <Tabs>
                    <Tab to='/registration' active>Registration</Tab>
                    <Tab to='/log-in'>Log In</Tab>
                </Tabs>
                <Input onChange={handleChange} type="text" name='username' placeholder="Enter your name" />
                <Input onChange={handleChange} type="email" name='email' placeholder="Enter your email" />
                <PasswordInput onChange={handleChange} type="password" name='password' placeholder="Create a password" />
                {error && <p style={{color: "red"}}>{error}</p>}
                <Button type="submit" disabled={isLoading}> {isLoading ? "Loading..." : "Register Now"}</Button>
            </FormWrapper>
        </Container>
    );
};