import { useState } from "react";
import styles from "../styles/counter.module.css";

function Counter() {
  const counter = 0;
  const [count, setCount] = useState(counter);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.counterBody}>
        <button className={styles.button} onClick={increaseCount}>
          increment
        </button>
        <div className={styles.countNumber}>{count}</div>
        <button className={styles.button} onClick={decreaseCount}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
