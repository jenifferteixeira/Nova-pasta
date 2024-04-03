import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";

export function Publications() {
    return (
        <C.Container>
            <Typography> Publicações</Typography>

            <C.ContainerPubli>
                {Array.from(Array(20)).map((item, index) => (
                    <C.Content>
                        <C.PubliImage
                            src="https://avatars.githubusercontent.com/u/157409713?v=4"
                            alt="Imgame perfil"
                        />

                        <InfoProfile />
                    </C.Content>
                ))}


            </C.ContainerPubli>
        </C.Container>
    )
}