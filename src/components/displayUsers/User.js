import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../user/usersSlice";
import { updateUser } from "../user/usersSlice";
import { useState } from "react";

function User({ user, index }) {
  const [edit, setEdit] = useState(false);
  //use local state to gather user information from form and store in userUpdateObj
  const [userUpdateObj, setUserUpdateObj] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setUserUpdateObj((user) => ({ ...user, [name]: value }));
  }

  //get user obj based on index from users slice
  //const user = useSelector((state) => state.users.usersArr[index]);

  //dispatch deleteUser on delete button click, pass user name as argument
  //dispatch updateUser on update button click, pass user name and userUpdateObj as argument
  const dispatch = useDispatch();

  return (
    <div className="User">
      {edit ? (
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
              dispatch(updateUser({ name: user.name, obj: userUpdateObj }));
              setEdit(!edit);
            }}
          />
          <button onClick={() => setEdit(!edit)}>close</button>
        </form>
      ) : (
        <div className="user-content">
          <h5>User</h5>
          <p>{user.name}</p>
          <button onClick={() => setEdit(!edit)}>edit</button>
          <button onClick={() => dispatch(deleteUser(user.name))}>
            delete
          </button>
        </div>
      )}
    </div>
  );
}

export default User;
