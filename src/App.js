import "./App.css";
import Counter from "./components/counter/Counter";
import UserForm from "./components/user/UserForm";
import Users from "./components/displayUsers/Users";

function App() {
  return (
    <div className="App">
      <Counter />
      <UserForm />
      <Users />
    </div>
  );
}

export default App;
