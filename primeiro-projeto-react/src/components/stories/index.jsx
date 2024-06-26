import { useState } from "react";

import { Button, Flex, Typography } from "../../style";
import * as C from './style';

export function Stories() {
    const [showAll, setShowAll] = useState(false);

    const numberArray = showAll ? 20 : 12;

    function handleShowAll() {
        setShowAll(!showAll);
    }

    return (
        <Flex padding="8px 20px" align="start" gap="4px">
            <Typography weight="400" size="18px" height="21px">
                Histórias
            </Typography>

        
            <Flex align="end">
                <C.Button onClick={() => handleShowAll()}>
                    <Typography size="14px">
                        {showAll ? "Ver menos" : "Ver mais"}
                    </Typography>
                </C.Button>
            </Flex>
            

            <C.Container>
                {Array.from(Array(numberArray)).map((item, index) => (
                    <C.Profile key={index}>
                        <img
                            src="https://avatars.githubusercontent.com/u/157409713?v=4"
                            alt="Imgame perfil"
                        />
                    </C.Profile>
                ))}
            </C.Container>

        </Flex>
    )
}
