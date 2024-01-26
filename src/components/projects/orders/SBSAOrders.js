import React, { useContext, useState } from "react";

import classes from "./orders.modules.css";
import CourseCard from "./CourseCard";
import OrdersContext from "../../../store/orders-context";
import OrderDetails from "./OrderDetails";
import AlertComponent from "./AlertComponent";

const SBSAOrders = () => {
  const [isAlertShowing, setIsAlertShowing] = useState(false);
  const ctx = useContext(OrdersContext);
  const handleOnClose = () => {
    ctx.onClose();
  };
  const handleOnOpen = () => {
    ctx.onOpen();
  };
  const handleAddToCart = (item) => {
    ctx.addItem({
      id: item.id,
      name: item.name,
      amount: 1,
      price: item.price,
    });
    setIsAlertShowing(true);
    setTimeout(() => {
      setIsAlertShowing(false);
    }, 5000);
  };
  return (
    <React.Fragment>
      {isAlertShowing && (
        <AlertComponent variant="success" message="Product added to panel!" />
      )}

      {ctx.isOpen && (
        <OrderDetails
          onClose={handleOnClose}
          onOpen={handleOnOpen}
          addItem={handleAddToCart}
        />
      )}

      <div className="container">
        <h3 className="display-5 mb-5 text-center">Order Products</h3>
        <div className="row">
          {courses.map((item) => {
            return (
              <CourseCard
                key={item.id}
                onOpen={handleOnOpen}
                addItem={handleAddToCart}
                course={item}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default SBSAOrders;

const courses = [
  {
    id: 0,
    name: "Product name 1",
    price: 14,
    new: true,
    discount: 0,
  },
  {
    id: 1,
    name: "Product name 2",
    price: 17,
    new: false,
    discount: 5,
  },
  {
    id: 2,
    name: "Product name 3",
    price: 25,
    new: false,
    discount: 7,
  },
  {
    id: 3,
    name: "Product name 4",
    price: 30,
    new: true,
    discount: 0,
  },
  {
    id: 4,
    name: "Product name 5",
    price: 28,
    new: true,
    discount: 0,
  },
  {
    id: 5,
    name: "Product name 6",
    price: 36,
    new: true,
    discount: 0,
  },
  {
    id: 6,
    name: "Product name 7",
    price: 15,
    new: false,
    discount: 10,
  },
  {
    id: 7,
    name: "Product name 8",
    price: 37,
    new: true,
    discount: 0,
  },
];
