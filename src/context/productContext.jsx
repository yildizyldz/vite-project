import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../api";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // Api istegi at
  useEffect(() => {
    // Eğer seçili bir kategori varsa buna istek at yoksa tüm ürünlere istek at
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;
    api.get(url).then((res) => {
      setProducts(res.data);
    });
  }, [selectedCategory]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
