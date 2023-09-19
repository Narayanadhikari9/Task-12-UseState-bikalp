import { useState } from "react";
import styles from "../styles/counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.counterBody}>
        <button
          className={styles.button}
          onClick={() => setCount((currCount) => count + 1)}
        >
          increment
        </button>
        <div className={styles.countNumber}>{count}</div>
        <button
          className={styles.button}
          onClick={() => setCount((currCount) => count - 1)}
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
