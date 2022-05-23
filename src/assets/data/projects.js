import { v4 as uuidv4 } from 'uuid';
import GreenCtgImg from '../images/alga.png';
import UTrackerImg from '../images/controle.png';
import Multi from '../images/multi.png';
import CoinTrackerImg from '../images/naped.png';
import Nlw from '../images/nlw.png';
import phoenix from '../images/phoenix.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Finance Control',
    desc:'Complete application to set your spending control. I used React and saved the data in local storage',
    img: UTrackerImg,
    GitHub: 'https://github.com/gustavohenri316/controle-de-financas',
    Preview: 'https://controle-de-financas.vercel.app/'
  },
  {
    id: uuidv4(),
    name: 'Alga Shopping',
    desc:'Using this app you can know how much to spend on shopping in the market',
    img: GreenCtgImg,
    GitHub: 'https://github.com/gustavohenri316/algashopping ',
    Preview: 'https://algashopping-omega.vercel.app/'
  },
  {
    id: uuidv4(),
    name: 'Naped',
    desc:'Have all the knowledge of the nerd world in one place',
    img: CoinTrackerImg,
    GitHub: 'https://github.com/gustavohenri316/desafio10-naped',
    Preview: 'https://desafio10-naped.vercel.app/'
  },
  {
    id: uuidv4(),
    name: 'Feedback',
    desc:'Project of a floating feedback button made in the nlw return of 2022',
    img: Nlw,
    GitHub: 'https://github.com/gustavohenri316/nlw-impulse',
    Preview: 'https://nlw-impulse-tan.vercel.app/'
  },
  {
    id: uuidv4(),
    name: 'Multi-Languages',
    desc:'Project made for the internationalization of the company where I work',
    img: Multi,
    GitHub: 'https://github.com/gustavohenri316/multi-languages',
    Preview: 'https://multi-languages.vercel.app/'
  },
  {
    id: uuidv4(),
    name: 'Landing Page Phoenix',
    desc:'landing page clone of ar phoenix website',
    img: phoenix,
    GitHub: 'https://github.com/gustavohenri316/phoenix',
    Preview: 'https://phoenix-iota.vercel.app/'
  },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
]

export default projects;
