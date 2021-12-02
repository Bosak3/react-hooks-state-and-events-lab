import {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [Mode, setMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = Mode ? "App dark" : "App light"
  


  function handleClick() {
      setMode(!Mode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
        {Mode ? "Dark" : "Light"} Mode
        </button>
          
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;






/*Deliverables

  1) Using the useState hook, create a state variable in the App component
  2) Use that variable to determine if our app should be in dark mode or light mode
  3) Create an event handler to the dark mode button, and update state when the button
     clicked
 
  4)In the Item component, when a user clicks the <button>, the item should be added
    to the cart.
    **The way to show the user that the item is in the cart, is by changing the 
    className on the <li> element.

  5)



*/