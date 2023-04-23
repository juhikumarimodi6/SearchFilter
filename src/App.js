import React from "react"
import './App.css';
import JSON from "./MOCK_DATA.json"
import Table from "./Table"

function App() {

  const [name, setName] = React.useState("")

  function enteredName(event) {
    setName(() => {
      return event.target.value;
    })
  }

  const keys = ["first_name", "last_name", "email"]

  const search = (data) => {
    return (data.filter(user=> keys.some((key) => user[key].toLowerCase().includes(name.toLowerCase()))
      // user => user.first_name.toLowerCase().includes(name.toLowerCase()) 
      //                       || user.last_name.toLowerCase().includes(name.toLowerCase()) 
      //                       || user.email.toLowerCase().includes(name.toLowerCase()) 
                      ))
  }

  return (
    <div className="App">
      <input 
          type="text" 
          id="mySearch" 
          placeholder="Search..." 
          className="inputbox" 
          onChange={enteredName}
      > 
      </input>
      <Table 
          data = {search(JSON)}
      />
    </div>
  );
}

export default App;
