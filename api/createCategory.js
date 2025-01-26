const axios = require('axios');

const BASE_URL = 'https://api.club-administration.qa.qubika.com/api';

async function createCategory(authToken, categoryName) {
  const payload = {
    name: categoryName,
    root: true
  };

  try {
    const response = await axios.post(`${BASE_URL}/category-type/create`, payload, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });
    if (response.status === 200) {
      console.log('Category created successfully:', response.data);
    } else {
      console.error('Unexpected response status:', response.status);
    }
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { createCategory }; 