import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCOunter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterAction.incerase({amount: 5}));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCOunter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
