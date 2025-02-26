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



EXPLANATION ABOUT MANEAGEING USESTATES

🎯 Why Do We Use the Spread Operator (...state)?
Imagine you have a notebook where you write different types of notes:

Page 1: Pokémon List
Page 2: Loading Status
Page 3: Next/Previous Page Links
Now, if you only want to update Page 2 (Loading Status) but keep the other pages unchanged, what would you do?

You don’t want to erase the whole notebook! Instead, you just update Page 2 while keeping Pages 1 and 3 the same.

This is exactly why we use the spread operator (...state) in React.

✅ Example: Using the Spread Operator (...state)
Imagine your pokemonListState looks like this:


const [pokemonListState, setpokemonListState] = useState({
    PokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: ""
});
Now, let's say you only want to update isLoading but keep everything else the same.

❌ Wrong way (without spread)

setpokemonListState({ isLoading: true });
🚨 Problem: This will remove PokemonList, pokedexUrl, nextUrl, and prevUrl, leaving only isLoading.

✅ Correct way (with spread)

setpokemonListState((state) => ({ ...state, isLoading: true }));
🟢 Why?

...state copies everything (keeps PokemonList, pokedexUrl, etc.).
Only isLoading is updated.
🤔 When Do We NOT Need the Spread Operator?
If you're completely replacing the state with a new value (not updating part of it), you don’t need the spread operator.

✅ Example: Simple Counter (No Need for Spread)

const [count, setCount] = useState(0);

// No need for spread, we just replace the value
setCount(5);
count is just a number, not an object.
We don’t need to keep anything from the previous state.
🛠 How This Applies to Your Code
Example 1: Updating Only isLoading

setpokemonListState((state) => ({ ...state, isLoading: true }));
✔ Keeps everything else the same (Pokemon list, URLs, etc.).
✔ Only updates isLoading.

Example 2: Updating pokedexUrl in Next/Prev Buttons

<button 
    disabled={pokemonListState.prevUrl == null} 
    onClick={() => setpokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}>
    Prev
</button>
✔ Keeps everything the same, only updates pokedexUrl.

⚡ Key Takeaways
1️⃣ Use the spread operator (...state) when updating only part of an object.
2️⃣ If replacing the entire state (like a simple number or string), don’t use the spread operator.
3️⃣ Without spreading, you might accidentally delete parts of the state!