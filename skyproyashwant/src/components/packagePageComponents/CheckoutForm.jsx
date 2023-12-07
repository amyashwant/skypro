import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
    }
  }

  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   PaymentElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     // Trigger form validation and wallet collection
//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       // Show error to your customer
//       setErrorMessage(submitError.message);
//       return;
//     }

//     // Create the PaymentIntent and obtain clientSecret from your server endpoint
//     const res = await fetch("/create-intent", {
//       method: "POST",
//     });

//     const { client_secret: clientSecret } = await res.json();

//     const { error } = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });

//     if (error) {
//       // This point will only be reached if there is an immediate error when
//       // confirming the payment. Show error to your customer (for example, payment
//       // details incomplete)
//       setErrorMessage(error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button type="submit" disabled={!stripe || !elements}>
//         Pay
//       </button>
//       {/* Show error message to your customers */}
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

// const options = {
//   mode: "payment",
//   amount: 1099,
//   currency: "usd",
//   // Fully customizable with appearance API.
//   appearance: {
//     /*...*/
//   },
// };

// const Checkout = () => (
//   <Elements stripe={stripePromise} options={options}>
//     <CheckoutForm />
//   </Elements>
// );

// export default Checkout;
