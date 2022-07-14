import React from "react";
import cn from "classnames";
import styles from "./Earning.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import ProductSales from "./ProductSales";
import TopCountries from "./TopCountries";
import Table from "./Table";

const Earning = () => {
  return (
    <>
      <div className={styles.section}>
        <Table />
      </div>
      <TooltipGlodal />
    </>
  );
};

export default Earning;
