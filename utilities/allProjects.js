import projectMovementImg from '../public/project-moovment.jpg'
import netflixCloneImg from '../public/netflix-clone.png'
import customSportsImg from '../public/custom-sports.jpg'
import searchCountryImg from '../public/search-country.png'
import pizzaNuc from '../public/pizza-nuc.png'
import eCommerce from '../public/store.png'
import ticTactToe from '../public/tic-tac-toe.png'
import todoApp from '../public/todoApp.png'

export const allProjects = [
  {
    deploy: 'https://c854pernfront-5m8om.ondigitalocean.app/home',
    img: projectMovementImg,
    id: 1,
    title: 'MOVEment',
    overwiev: 'E-commerce realizado a manera de simulacion de trabajo real emitida por la empresa No country'
  },
  {
    deploy: 'http://ec2-18-118-29-121.us-east-2.compute.amazonaws.com',
    img: customSportsImg,
    id: 2,
    title: 'Custom Sports',
    overwiev: 'E-commerce realizado a manera de simulacion de trabajo real emitida por No country'
  },
  {
    deploy: 'https://netflix-clone-gray-eight.vercel.app/dashboard',
    img: netflixCloneImg,
    id: 3,
    title: 'Netflix Clone',
    overwiev: 'Proyecto propio, un clon de la plataforma Netflix consumiendo la API themoovieDB'
  },
  {
    deploy: 'https://e-commerce-nine-gamma.vercel.app',
    img: eCommerce,
    id: 4,
    title: 'E-commerce de practica',
    overwiev: 'Proyecto propio, en esta ocacion trate de practicar Material UI realizando un e-commerce'
  },
  {
    deploy: 'https://frontend-mentor-search-country.vercel.app',
    img: searchCountryImg,
    id: 5,
    title: 'Search Country',
    overwiev: 'Proyecto realizado replicando un challeng de FrontendMentor, un buscador de paises'
  },
  {
    deploy: 'https://nucba-proyects.vercel.app',
    img: pizzaNuc,
    id: 6,
    title: 'Pizza Nucba',
    overwiev: 'Proyecto realizado para el bootcamp de Nucba'
  },
  {
    deploy: 'https://tic-tac-toe-iota-puce.vercel.app/',
    img: ticTactToe,
    id: 7,
    title: 'Tic tac toe',
    overwiev: 'El clásico juego de tic tac toe'
  },
  {
    deploy: 'https://todo-app-redux-toolkit-kappa.vercel.app/',
    img: todoApp,
    id: 8,
    title: 'TODO',
    overwiev: 'Aplicación para listar tareas'
  }
]
