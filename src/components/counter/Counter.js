import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

function Counter() {
  //local state to store increment and decrement input values
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);

  //define state from useSelector, useDispatch
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        Increment <span>+1</span>
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrement <span>-1</span>
      </button>
      <div className="increment-by-own">
        <label htmlFor="incre-num">
          <input
            type="number"
            id="incre-num"
            placeholder="enter number to increment"
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
          />
        </label>
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment by number: <span></span>
        </button>
      </div>
      <div className="decrement-by-own">
        <label htmlFor="decre-num">
          <input
            type="number"
            id="decre-num"
            placeholder="enter number to decrement"
            onChange={(e) => setDecrementAmount(Number(e.target.value))}
          />
        </label>
        <button onClick={() => dispatch(decrementByAmount(decrementAmount))}>
          Decrement by number: <span></span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
