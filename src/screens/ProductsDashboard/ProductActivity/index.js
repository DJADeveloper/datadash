import React, { useState } from "react";
import styles from "./ProductActivity.module.sass";
import cn from "classnames";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import Item from "./Item";
import * as ReactBootStrap from "react-bootstrap";
import { Table } from "react-bootstrap";

const items = [
  {
    title: "July",
    products: {
      counter: 8,
      color: "#B5E4CA",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#CABDFF",
      value: 37.8,
    },
    likes: {
      counter: 48,
      color: "#B1E5FC",
      value: -37.8,
    },
    comments: {
      counter: 16,
      color: "#FFD88D",
      value: -56,
    },
  },
  {
    title: "June",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
  {
    title: "May",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
  {
    title: "April",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
  {
    title: "March",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
  {
    title: "February",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
  {
    title: "January",
    products: {
      counter: 8,
      color: "#EFEFEF",
      value: 37.8,
    },
    views: {
      counter: "24k",
      color: "#EFEFEF",
      value: -37.8,
    },
    likes: {
      counter: 48,
      color: "#EFEFEF",
      value: 12.8,
    },
    comments: {
      counter: 16,
      color: "#EFEFEF",
      value: -14.1,
    },
  },
];

const ProductActivity = () => {
  const intervals = ["Last 2 weeks", "Last 7 days"];

  const [activeTab, setActiveTab] = useState(intervals[0]);

  return (
    // <table class="table table-dark table-striped hover">
    //   <tbody className="px-3 rounded-3">
    //     <tr>
    //       <td className="col">Month</td>
    //       <td className="col">MAU</td>
    //       <td className="col">% Change</td>
    //     </tr>
    //     {items.map((x, index) => (
    //       <tr key={index}>
    //         <td>{x.title}</td>
    //         <td>
    //           <Item className={styles.item} item={x.products} />
    //         </td>
    //         <td className={`$  `}>
    //           <Item className={styles.item} item={x.views} />
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>

    <Table striped variant="dark">
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr className="p-3">
        <td className="p-3">hello</td>
        <td>hey</td>
        <td>hi</td>
      </tr>
      <tr>
        <td>hello</td>
        <td>hey</td>
        <td>hi</td>
      </tr>
      <tr>
        <td>hello</td>
        <td>hey</td>
        <td>hi</td>
      </tr>
      <tr>
        <td>hello</td>
        <td>hey</td>
        <td>hi</td>
      </tr>
    </Table>
  );
};

export default ProductActivity;
