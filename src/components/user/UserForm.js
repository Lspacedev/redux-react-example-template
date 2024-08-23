import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

function UserForm() {
  //use local state to gather user information from form and store in obj
  const [userObj, setUserObj] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUserObj((user) => ({ ...user, [name]: value }));
  }

  //dispatch addUser on form submit, pass userObj as argument
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Form </h1>
      <form>
        <label htmlFor="fname">
          Enter first name:
          <input type="text" name="name" id="fname" onChange={handleChange} />
        </label>
        <label htmlFor="sname">
          Enter surname:
          <input
            type="text"
            name="surname"
            id="sname"
            onChange={handleChange}
          />
        </label>
        <input
          type="submit"
          value="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addUser(userObj));
          }}
        />
      </form>
    </div>
  );
}

export default UserForm;
