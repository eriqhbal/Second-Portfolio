import {
  AiOutlineHome,
  AiOutlineCalculator,
  AiOutlineSetting,
  AiOutlineShareAlt,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import {
  FaRegLightbulb,
  FaInstagram,
  FaShippingFast,
  FaHackerrank,
  FaDiscord,
} from "react-icons/fa";
import { CgCardClubs } from "react-icons/cg";
import { TbMailOpened } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { GiChart } from "react-icons/gi";
import { FiLayers } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import { BsVectorPen } from "react-icons/bs";
import {
  MdShareLocation,
  MdLocalShipping,
  MdOutlineLocalShipping,
} from "react-icons/md";

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "resume",
    url: "/resume",
    icon: <RiUserLine />,
  },
  {
    id: 3,
    text: "portfolio",
    url: "/portfolio",
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
    icon: <CgCardClubs />,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />,
  },
];

export const socialIcon = [
  {
    id: 1,
    icon: <AiOutlineGithub />,
    class: "github",
  },
  {
    id: 2,
    icon: <FaHackerrank />,
    class: "hackerank",
  },
  {
    id: 3,
    icon: <AiFillLinkedin />,
    class: "linkedin",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    class: "instagram",
  },
];

export const side = [
  {
    id: 1,
    num: 90,
    text: "Frontend Development",
    class: "skill1",
  },
  {
    id: 2,
    num: 80,
    text: "Backend Development",
    class: "skill2",
  },
  {
    id: 3,
    num: 71,
    text: "Cloud Computing",
    class: "skill3",
  },
];

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "Zuleriqhbal Hendri",
        icon: <RiUserLine />,
      },
      {
        text: "My Age",
        value: "22 years old",
        icon: <AiOutlineCalculator />,
      },
      { text: "Email Address", value: "eriqhbal@gmail.com", icon: <GoMail /> },
      {
        text: "Discord Account",
        value: "Zuleriqhbal Hendri#2691",
        icon: <FaDiscord />,
      },
      {
        text: "Address",
        value: "Indonesia, Riau.",
        icon: <MdShareLocation />,
      },
    ],
    bio: [
      {
        title: "Competitive Programming UITM",
        years: "2021",
        position: "none",
      },
      {
        title: "Competitive Programming UGM",
        years: "2022",
        position: "Big 10",
      },
      {
        title: "Hackathon",
        years: "2021",
        position: "Big 50 over 500 Participant",
      },
    ],

    serives: [
      {
        id: 1,
        icon: <AiOutlineSetting />,
        title: "Web Development",
        text: "from scratch",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 2,
        icon: <BsVectorPen />,
        title: "UX recherche",
        text: "data collection",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "UI design",
        text: "creativ design",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 4,
        icon: <BsPhone />,
        title: "Application",
        text: "stand alone",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 5,
        icon: <AiOutlineShareAlt />,
        title: "Social Media",
        text: "digital product",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
      {
        id: 6,
        icon: <GiChart />,
        title: "Search Engine",
        text: "page rank",
        decs: "Sunil explicabo. Nemo enim ipsam voluptatem quia sit voluptas aspernatur.",
      },
    ],

    review: [
      {
        id: 1,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut1.jpg",
      },
      {
        id: 2,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Gork Coder",
        link: "gorkcoder.com",
        cover: "./images/aut2.jpg",
      },
      {
        id: 3,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut3.jpg",
      },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "27.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "47.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "97.00s",
      },
    ],
  },
];
