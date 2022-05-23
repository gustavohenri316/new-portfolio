import { v4 as uuidv4 } from 'uuid';
import GreenCtgImg from '../images/alga.png';
import CavinImg from '../images/cavinimg.jpg';
import UTrackerImg from '../images/controle.png';
import CoinTrackerImg from '../images/naped.png';
import ProjectImg from '../images/projectImg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Finance Control',
    desc:'Complete application to set your spending control. I used React and saved the data in local storage',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Alga Shopping',
    desc:'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Naped',
    desc:'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
]

export default projects;
