import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';
import useLanguage from '@/locale/useLanguage';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product() {
  const translate = useLanguage();
  const entity = 'product';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: 'name',
  };
  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('Product'),
    DATATABLE_TITLE: translate('Product_list'),
    ADD_NEW_ENTITY: translate('add_new_Product'),
    ENTITY_NAME: translate('Product'),
  };

  const configPage = {
    entity,
    ...Labels,
  };

  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_SERVER}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Calculate total price whenever products change
  useEffect(() => {
    if (products.length > 1) { // Calculate total price only when there are at least 2 products
      const total = products.reduce((sum, product) => {
        const productPrice = parseFloat(product.price) || 0;
        return sum + productPrice;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0); // Reset total price if less than 2 products
    }
  }, [products]);

  const handleAddProduct = (newProduct) => {
    // Validate that the price exists and is a number
    if (newProduct.price && !isNaN(newProduct.price)) {
      const productWithParsedPrice = {
        ...newProduct,
        price: parseFloat(newProduct.price), // Ensure price is a number
      };
      setProducts((prevProducts) => [...prevProducts, productWithParsedPrice]);
    } else {
      alert(translate('Please_enter_valid_price'));
    }
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  return (
    <>
      <CrudModule
        createForm={<DynamicForm fields={fields} onSubmit={handleAddProduct} />}
        updateForm={<DynamicForm fields={fields} onSubmit={handleUpdateProduct} />}
        config={config}
      />

      {/* Display total price if there are at least two products */}
      {products.length > 1 && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          {translate('Total Price')}: ${totalPrice.toFixed(2)}
        </div>
      )}
    </>
  );
}
