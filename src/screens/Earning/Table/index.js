import React, { useState } from "react";
import styles from "./Table.module.sass";
import cn from "classnames";
import Item from "../../AffiliateCenter/Snapshot/Item";
import { numberWithCommas } from "../../../utils.js";
import Balance from "../../../components/Balance";

const items = [
  {
    month: "July",

    earnings: 3140,
    sales: 28,
  },
  {
    month: "June",

    earnings: 2568,
    sales: -24,
  },
  {
    month: "May",

    earnings: 1375.88,
    sales: 16,
  },
  {
    month: "April",

    earnings: 4955.86,
    sales: -48,
  },
  {
    month: "March",

    earnings: 2233.44,
    sales: 32,
  },
  {
    month: "February",

    earnings: 6140,
    sales: -64,
  },
  {
    month: "January",

    earnings: 789.32,
    sales: 8,
  },
];

const Table = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.col}>Month</div>

          <div className={styles.col}>MAU</div>
          <div className={styles.col}>% Change</div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.month}</div>

            {/* {nav.map((x, index) => (
              <Item key={index} item={x} />
            ))} */}
            {/* <div className={styles.col}>
              {x.status ? (
                <div
                  className={cn(
                    { "status-green-dark": x.status === true },
                    styles.status
                  )}
                >
                  Paid
                </div>
              ) : (
                <div
                  className={cn(
                    { "status-yellow": x.status === false },
                    styles.status
                  )}
                >
                  Pending
                </div>
              )}
            </div> */}
            <div className={styles.col}>
              ${numberWithCommas(x.earnings.toFixed(2))}
            </div>
            <div className={styles.col}>
              <Balance className={styles.balance} value={x.sales} background />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
