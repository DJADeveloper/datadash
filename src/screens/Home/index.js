import React from "react";
import cn from "classnames";
import styles from "./Home.module.sass";
import TooltipGlodal from "../../components/TooltipGlodal";
import Overview from "./Overview";
import PopularProducts from "../../components/PopularProducts";
import Comments from "./Comments";
import RefundRequests from "../../components/RefundRequests";
import ProTips from "./ProTips";
import MoreCustomers from "./MoreCustomers";
import ProductViews from "./ProductViews";
import ProductActivity from "../ProductsDashboard/ProductActivity";
import Table from "../Comments/Table";
import Earning from "../Earning";
import Tooltip from "../../components/Tooltip";
import AffiliateCenter from "../AffiliateCenter";

const Home = () => {
  return (
    <div>
      <ProductViews className={styles.card} />
      <Earning />
    </div>
  );
};

export default Home;
