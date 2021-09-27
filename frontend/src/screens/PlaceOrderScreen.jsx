import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { cartEmpty } from "../features/cart/cartSlice";
import { createOrderReset } from "../features/order/orderCreateSlice";
import { createOrder } from "../features/order/pathAPI";

export default function PlaceOrderScreen(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  const newCart = { ...cart };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  newCart.itemsPrice = toPrice(
    newCart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  newCart.shippingPrice = newCart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  newCart.taxPrice = toPrice(0.15 * newCart.itemsPrice);
  newCart.totalPrice =
    newCart.itemsPrice + newCart.shippingPrice + newCart.taxPrice;
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
    dispatch(createOrder({ ...newCart, orderItems: newCart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch(createOrderReset());
      dispatch(cartEmpty());
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {newCart.shippingAddress.fullName}{" "}
                  <br />
                  <strong>Address: </strong> {newCart.shippingAddress.address},
                  {newCart.shippingAddress.city},{" "}
                  {newCart.shippingAddress.postalCode},
                  {newCart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {newCart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {newCart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${newCart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${newCart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${newCart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${newCart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={newCart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
