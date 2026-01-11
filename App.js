import React from "react";
import ProductCRUD from "./components/ProductCRUD";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Management (CRUD using Axios)</h2>
      <ProductCRUD />
    </div>
  );
}

export default App;
