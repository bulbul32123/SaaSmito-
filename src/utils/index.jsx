import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export const navLinks = [
    {
        id: 1,
        title: 'Product',
        link: '/product'
    },
    {
        id: 2,
        title: 'Plans',
        link: '/plans'
    },
    {
        id: 3,
        title: "We're Hiring! ",
        link: '/hiring'
    },
    {
        id: 4,
        title: 'Community!',
        link: '/community'
    },
]
export const profileLinks = [
    {
        id: 0,
        link: 'https://www.linkedin.com/in/webdevwithbulbul/',
        icon: <FaLinkedin size={20} />
    },
    {
        id: 1,
        link: 'https://www.instagram.com/bulbul_islam369/?hl=en',
        icon: <FaInstagram size={20} />
    },
    {
        id: 2,
        link: 'https://github.com/bulbul32123',
        icon: <FaGithub size={20} />
    },
    {
        id: 3,
        link: 'https://www.facebook.com/profile.php?id=61550563621219',
        icon: <FaFacebook size={20} />
    },
    {
        id: 4,
        link: 'https://www.fiverr.com/mdbulbulisla222?public_mode=true',
        icon: <TbBrandFiverr size={20} />
    },
    {
        id: 5,
        link: 'https://www.upwork.com/freelancers/~01db93596f847db004?viewMode=1',
        icon: <FaSquareUpwork size={20} />
    },
]