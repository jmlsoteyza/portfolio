import kicksae from "../../assets/images/kicksae3.png";
import coinsae from "../../assets/images/coinsae3.png";
import lofi from "../../assets/images/lofi3.png";
import pae from "../../assets/images/PAE.png";
import wallclock from "../../assets/images/wallclock.png";
import Fe from "../../assets/images/FE1.png";
import portfolio from "../../assets/images/portfolio.png";
export const TabsData1 = [
  {
    id: 1,
    title: "KicksAE",
    desc: "I have built an e-commerce website called kicksAE, specializing in shoe brands available for purchase online. It offers a user-friendly experience, allowing consumers to browse and buy shoes. I've also implemented Redux, enabling features such as adding items to the cart and payments.",
    languages: ["ReactJS", "CSS", "Redux"],
    img: kicksae,
    class: "tabs-container_flex",
    link: "https://kicks-ae.vercel.app/",
    githubLink: "https://github.com/Jmlsoteyza/KicksAE",
  },
  {
    id: 2,
    title: "CoinsAE",
    desc: "I have developed a cryptocurrency platform called CoinsAE that provides real-time market data, including current market prices and trends, through an intuitive graphical interface. Clicking on the market price gives users access to an interactive graph showcasing the current state of the cryptocurrency market.",
    languages: ["ReactJS", "SCSS"],
    img: coinsae,
    class: "tabs-container_flex_reverse",
    link: "https://crypto-ae.vercel.app/",
    githubLink: "https://github.com/Jmlsoteyza/CoinsAE",
  },
  {
    id: 3,
    title: "Student's-Lofi",
    desc: "I created a website that incorporates the Pomodoro app, the Todo app, a music player, and the YouTube Search API. It is designed for people who want to study while also relaxing. The website is connected with Youtube Api v3, a popular API for youtube embeding.",
    languages: ["HTML", "CSS", "Javascript"],
    img: lofi,
    class: "tabs-container_flex",
    link: "https://studentstudysession.vercel.app/",
    githubLink: "https://studentstudysession.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    desc: "I've built my portfolio to showcase my skills and what I've learned in front-end development languages, where I've compiled all of my projects, including my mini projects, to show my growth from studying. However, I'm still learning and will continue this learning for my career.",
    languages: ["ReactJS", "SCSS"],
    img: portfolio,
    class: "tabs-container_flex_reverse",
    link: "https://jmlsoteyza.vercel.app/",
    githubLink: "https://github.com/Jmlsoteyza/Portfolio",
  },
];

export const TabsData2 = [
  {
    id: 1,
    title: "Pixel-Art-Editor",
    desc: "I have created a website that features a pixel-art editor that I learned the methods from Eloquent Javascript book. This online tool allows users to create pixel art, a graphic aesthetic that originated from 8- and 16-bit computers.",
    languages: ["HTML", "CSS", "Javascript"],
    class: "tabs-container_flex",
    link: "https://jmlsoteyza.github.io/Pixel-Art-Editor/",
    img: pae,
    githubLink: "https://github.com/Jmlsoteyza/Pixel-Art-Editor",
  },
  {
    id: 2,
    title: "Wall-Clock",
    desc: "I have developed a wall clock as a means to expand my knowledge of Javascript. Through this project, I have explored various coding structures to create both analog and digital clocks. Also, I have utilized CSS to enhance the visual design of the web page.",
    languages: ["HTML", "CSS", "Javascript"],
    class: "tabs-container_flex_reverse",
    link: "https://jmlsoteyza-clock-time.netlify.app/",
    githubLink: "https://github.com/Jmlsoteyza/Wall-Clock",
    img: wallclock,
  },
  {
    id: 3,
    title: "FE-Mentor Landing Page",
    desc: "This is a front-end mentor landing page where we, as members, receive a template design to allow me to practice and refine my front-end development skills. It's where the process of translating design mockups into functional has made me understand more of FE languages.",
    languages: ["HTML", "CSS", "Javascript"],
    class: "tabs-container_flex",
    img: Fe,
    link: "https://warm-granita-362b51.netlify.app/",
    githubLink: "",
  },
];
