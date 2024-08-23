import { useSelector } from "react-redux";
import User from "./User";

function Users() {
  //get users array from users slice in store, iterate through added users
  const users = useSelector((state) => {
    console.log("array", state.users.usersArr);
    return state.users.usersArr;
  });

  return (
    <div className="Users">
      <h5>Users</h5>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <User user={user} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
