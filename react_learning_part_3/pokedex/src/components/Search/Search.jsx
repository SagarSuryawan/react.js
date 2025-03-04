import "../Search/Search.css"


function Search ({updateSearchTerm}){
    
    return(
        <div className='search-wrapper'>
            <input id='input-wrapper' type="text" placeholder="pokemon name ..."
            onChange={(e) =>updateSearchTerm(e.target.value)}
            />
           
        </div>
    )
}

export default Search   



/*
Understanding onChange in Detail
In React, onChange is an event handler that fires when the value of an input field (or any other form element) changes. It is used to capture user input and update the state dynamically.


1. Basic Working of onChange
Whenever the user types something inside the input field, the onChange event is triggered. React captures this event and allows us to update the state accordingly.

How It Works:
:- User starts typing → onChange fires on every keystroke.
:- event.target.value → Captures the current value of the input field.
:- setsearchTerm(e.target.value) → Updates the state (text).
:- React re-renders the component with the updated state.


2. onChange with Different Input Types
onChange works with all types of input elements, including text, checkboxes, radio buttons, dropdowns, and more.
(A) Text Input
<input type="text" onChange={(e) => console.log(e.target.value)} />
📌 Fires every time a user types in the field.

(B) Checkbox
const [isChecked, setIsChecked] = useState(false);

<input
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>;
📌 e.target.checked gives true (if checked) or false (if unchecked).

(C) Radio Button
const [selectedOption, setSelectedOption] = useState("");

<input
  type="radio"
  value="option1"
  checked={selectedOption === "option1"}
  onChange={(e) => setSelectedOption(e.target.value)}
/>;
📌 e.target.value stores the selected radio option.

(D) Dropdown (Select)

const [selectedValue, setSelectedValue] = useState("");

<select onChange={(e) => setSelectedValue(e.target.value)}>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>
📌 e.target.value captures the selected dropdown value.


3. Event Object (e) in onChange
onChange provides an event object (e), which gives information about the input field.
The most useful properties:
e.target.value → Current value of input.
e.target.checked → true/false for checkboxes.
e.target.name → Name of the input field (useful for handling multiple inputs).
e.preventDefault() → Prevents default behavior (useful in forms).


"As soon as the input changes, we try to update the value."
1. What is onChange?
onChange is an event handler in React that triggers every time the value of the input field changes.
It listens for user input and executes a function when the input changes.

2. What Happens Here?
Whenever a user types something in the input field, the onChange event fires.
The function (e) => setsearchTerm(e.target.value) runs.
e.target.value captures the latest value entered in the input field.
setsearchTerm(e.target.value) updates the searchTerm state with the new input value.

3. How Does It Work?
Assume searchTerm is a state variable (const [searchTerm, setsearchTerm] = useState("");).
Initially, searchTerm is an empty string.
If the user types "pikachu", the state updates on every keystroke:
"p", "pi", "pik", "pika", "pikac", "pikach", "pikachu"

4. Real-Time Display ({searchTerm})
{searchTerm} is inside JSX, so the updated state is displayed instantly as the user types.
*/