import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

import * as C from "./style";

export function Header () {
    return (
        <C.Container>
            <C.Input placeholder="🔍 Buscar"/>

            <C.ContainerActions>
                <FiSend className="icon"/>
                <IoMdNotificationsOutline className="icon"/>

                <C.Button>
                    <AiOutlinePlusCircle className="icon"/>
                    Nova foto
                </C.Button>
            </C.ContainerActions>
        </C.Container>
    );
}
