import { BsSun, BsGear } from "react-icons/bs";
import { BiMoon, BiExit } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSearch } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { GiClapperboard } from "react-icons/gi";


import LogoInstagram from "../../assets/logo-instagram.svg";

import { Flex, Spacer, Typography } from "../../style";
import * as C from "./style";

const menuNav = [
    {
        icon: <AiOutlineHome />,
        menuName: 'Início'
    },
    {
        icon: <MdOutlineSearch />,
        menuName: 'Explorar'
    },
    {
        icon: <FiSend />,
        menuName: 'Direct'
    },
    {
        icon: <GiClapperboard />,
        menuName: 'Reels '
    },
    {
        icon: <BsGear />,
        menuName: 'Ajustes'
    },
]

export function NavBar({ themeToggler, theme }) {
    function GroupText({ title, subTitle }) {
        return (
            <Flex gap="4px">
                <Typography>{title}</Typography>
                <Typography weight="300" size="12px" height="14px">
                    {subTitle}
                </Typography>
            </Flex>
        );
    }

    return (
        <C.Conteiner>
            <Flex>
                <C.BtnTheme onClick={themeToggler} >
                    {theme === 'dark' ? <BsSun /> : <BiMoon />}
                </C.BtnTheme>
            </Flex>

            <img src={LogoInstagram} alt="Logo Instagram" />

            <Flex>
                <C.Profile>
                    <img
                        src="https://avatars.githubusercontent.com/u/157409713?v=4"
                        alt="Imgame perfil"
                    />
                </C.Profile>

                <GroupText title="Jeniffer Teixeira" subTitle="@oh.jeni" />
            </Flex>

            <Spacer margin="8px" />

            <Flex direction="row" justify="space-between">
                <GroupText title="222" subTitle="publicações" />
                <GroupText title="413" subTitle="seguidores" />
                <GroupText title="170" subTitle="seguindo" />
            </Flex>

            <Spacer />

            <Flex align="start" gap="16px">
                {menuNav.map((menu) => (
                    <C.ListIcon key={menu.menuName}>
                        {menu.icon}
                        <Typography>{menu.menuName}</Typography>
                    </C.ListIcon>
                ))}
            </Flex>

            <Spacer />
            <C.Divider />
            <Spacer margin="8px"/>

            <Flex align="start">
                <C.ListIcon>
                    <BiExit />
                    <Typography>Sair</Typography>
                </C.ListIcon>
            </Flex>
        </C.Conteiner>
    );
}
