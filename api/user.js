const axios = require('axios');

const BASE_URL = 'https://api.club-administration.qa.qubika.com/api';

async function createUser(authToken) {
  const payload = {
    email: `test.qubika_${Date.now()}@qubika.com`,
    password: '12345678',
    roles: ['ROLE_ADMIN']
  };

  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, payload, {
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log('User created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { createUser };
