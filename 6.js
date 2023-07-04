function calculateTotalPrice(allProducts, productName) {
    const totalPrice = 0;
  
    for (const i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
  

  const products = [
    {
    name: 'Product 1',
    price: 10,
    quantity: 2 
    },

    { 
    name: 'Product 2',
    price: 5,
    quantity: 4 
    },

    { 
    name: 'Product 3',
    price: 8,
    quantity: 3 
    },
  ];
  
  const productName = 'Product 2';
  
  const totalPrice = calculateTotalPrice(products, productName);
  console.log(totalPrice);
  