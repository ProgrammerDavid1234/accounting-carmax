export const fields = {
  name: {
    type: 'string',
    required: true,
  },
  productCategory: {
    type: 'async',
    label: 'product Category',
    displayLabels: ['productCategory', 'name'],
    dataIndex: ['productCategory', 'name'],
    entity: 'productcategory',
    required: true,
  },
  price: {
    type: 'currency',
    required: true,
    currencySymbol: '₦', // Ensure Naira symbol is used for price input
  },
  description: {
    type: 'textarea',
  },
};
