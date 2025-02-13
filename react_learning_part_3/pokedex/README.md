# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



** Explaination React Router **
https://pokeapi.co/api/v2/pokemon/20/
in this api there individual api for each pokemon detail with id:
whenever we clicked on pokemons ,we attach network request 
make pokemonDetails component in src folder
in order to do this =>   
1) install react router dom , wrap main App component  in main.jsx

2) import {BrowserRouter} from 'react-router-dom';
This imports the BrowserRouter component from the react-router-dom library, which is used for client-side routing in React applications.

 3) <BrowserRouter>
<App />
</BrowserRouter>
By wrapping <App /> inside BrowserRouter, it allows you to use routing features (like <Routes> and <Route> components) within your app.
Like this  this wi;; enables whole 'React Router' inside your whole app


** CONFIGURE ROUTES **

make custom component,custom routes where we add different route in Routes Component.where decide in which route ,which component renders,
in app.jsxm render customRoutes,we can add common part acroos common pages 


** AFTER CLICK IT SHOWS DETAILS OF POKEMON **
what we think of this like we have pokemon component ,pokemon component is like a div a we can do that wrap div in anchor tag. problem we get is page is refresh,it's defeat a purpose of SPA. 
instead of anchor tag we use Link tag where 'to' propertise is present insted of 'href' 

onces we click on pokemon ,pokemonDetails page opens we fetch id no: from url 

here is Hooks comes in picture useParams