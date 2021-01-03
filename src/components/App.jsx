import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeHandling(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      //Using Spread Operator in ES6 to simplify code
      //Thank you ES6!
      return {
        ...prevValue,
        [name]: value
      };

      //Usual code - using if else statements
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   };
      // } else {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changeHandling}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          value={contact.lName}
          onChange={changeHandling}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={changeHandling}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
