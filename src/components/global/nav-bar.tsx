import { useState } from "react";
import {
    Menu,
    NavBox,
    NavBoxOne,
    NavBoxThree,
    NavBoxTwo,
} from "../../styles/nav/nav";

export function NavBar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <NavBox>
            <NavBoxOne></NavBoxOne>
            <NavBoxTwo>
                <p>Web Developer</p>
                <p>Web Designer</p>
            </NavBoxTwo>
            <NavBoxThree onClick={() => setIsActive(!isActive)}>
                <p>Menu</p>
            </NavBoxThree>
            {isActive && (
                <Menu>
                    <a>Home</a>
                    <a>About</a>
                    <a>Services</a>
                    <a>Contact</a>
                </Menu>
            )}
        </NavBox>
    );
}
