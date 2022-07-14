import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../../components/Icon";
import Tooltip from "../../../../components/Tooltip";
import Balance from "../../../../components/Balance";

const Item = ({ className, onActive, item }) => {
  return (
    <div className={cn(styles.item, className)} onClick={onActive}>
      <Balance className={styles.balance} value={item.value} background />
    </div>
  );
};

export default Item;
