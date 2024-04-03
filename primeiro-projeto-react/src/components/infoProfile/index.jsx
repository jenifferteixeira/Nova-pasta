import { AiFillHeart } from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import { Flex, Typography } from "../../style";

import * as C from "./style";

export function InfoProfile() {
    return (
        <Flex direction="row" align="center" justify="space-between">
            <C.Container>
                <C.Link>
                    <C.ProfileImg 
                        src="https://avatars.githubusercontent.com/u/157409713?v=4"
                        alt="Imgame perfil"
                    />
                    <Typography width="300" size="13px" height="15px">Jeniffer</Typography>
                </C.Link>
            </C.Container> 

            <C.Container>
                <AiFillHeart color="red"/>
                <Typography width="300" size="13px" height="15px">128</Typography>

                <FaRegComment />
                <Typography width="300" size="13px" height="15px">223</Typography>
            </C.Container>
        </Flex>
    );
}