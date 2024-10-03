export const fields = {
  name: {
    type: 'string',
    label: 'Car Name', // Updated label
    required: true,
  },

  expenseCategory: {
    type: 'async',
    label: 'Clearing',
    displayLabels: ['expenseCategory', 'name'],
    dataIndex: ['expenseCategory', 'name'],
    entity: 'expensecategory',
    required: true,
  },

  description: {
    label: 'Shipment',
    type: 'textarea',
    required: true, // Adjust as necessary
  },
  ref: {
    label:'Fixing',
    type: 'string',
    required: 'true',
  },
  total: {
    type: 'currency',
    required: true,
  },
};
