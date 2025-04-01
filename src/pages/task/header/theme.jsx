import {CreatePopup, Icon, Item, Text, Wrapper} from "./styled";
import {useEffect, useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../../redux/auth/slice";

export const Theme = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleThemeChange = (theme) => {
        dispatch(setTheme(theme));
        setOpen(false);
    };

    const popupRef = useRef(null);


    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <Wrapper>
            <Text onClick={() => setOpen(true)}>Theme<Icon /></Text>
            {open && (
                <CreatePopup ref={popupRef} onClick={(e) => e.stopPropagation()}>
                    <Item onClick={() => handleThemeChange("light")}>Light</Item>
                    <Item onClick={() => handleThemeChange("dark")}>Dark</Item>
                    <Item onClick={() => handleThemeChange("violet")}>Violet</Item>
                </CreatePopup>
            )}
        </Wrapper>
    );
};
