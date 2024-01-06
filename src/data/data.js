const headerData = [
  {
    brand: {
      image: "logo.png",
    },
    menuItems: [
      {
        id: 1,
        name: "Home",
        hasSubmenu: false,
      },
      {
        id: 2,
        name: "Products",
        hasSubmenu: true,
      },
      {
        id: 3,
        name: "Buy unix token",
        hasSubmenu: true,
      },
      {
        id: 4,
        name: "Community",
        hasSubmenu: true,
      },
    ],
    links: {
      linkName: "Login",
    },
  },
];

const servicesData = [
  {
    id: 1,
    count: "11.2k",
    image: "artwork.png",
    name: "Artwork",
  },
  {
    id: 2,
    count: "11.2k",
    image: "designs.png",
    name: "Designs",
  },
  {
    id: 3,
    count: "11.2k",
    image: "development.png",
    name: "Development",
  },
  {
    id: 4,
    count: "11.2k",
    image: "marketing.png",
    name: "Marketing",
  },
];

const ecosystemData = [
  {
    id: 1,
    question: "Platform for gamers1",
    description:
      "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.",
    points: [
      "Sdk for games",
      "Web3 social app",
      "Multi-chain launchpad",
      "Gaming Studio",
    ],
  },
];

const partnershipsData = [
  {
    id: 1,
    image: "z.png",
    name: "z",
  },
  {
    id: 2,
    image: "m.png",
    name: "m",
  },
  {
    id: 3,
    image: "t.png",
    name: "t",
  },
  {
    id: 4,
    image: "jp-gaming.png",
    name: "jp-gaming",
  },
  {
    id: 5,
    image: "geek-gaming.png",
    name: "geek-gaming",
  },
  {
    id: 6,
    image: "zirus.png",
    name: "zirus",
  },
  {
    id: 7,
    image: "ea.png",
    name: "ea",
  },
  {
    id: 8,
    image: "pixel-legend.png",
    name: "pixel-legend",
  },
  {
    id: 9,
    image: "ubi-soft.png",
    name: "ubi-soft",
  },
];

const socialLinksData = [
  {
    id: 1,
    name: "whatsapp",
    icon: "whats-app.png",
    link: "http://web.wahatsapp.com",
  },
  {
    id: 2,
    name: "instagram",
    icon: "instagram.png",
    link: "http://instagram.com",
  },
  {
    id: 3,
    name: "facebook",
    icon: "facebook.png",
    link: "http://facebook.com",
  },
];
export default headerData;
export { servicesData, partnershipsData, socialLinksData, ecosystemData };
