const { createUser } = require('../api/user');

(async () => {
  try {
    console.log('Testing createUser API...');
    const member = await createUser();
    console.log('Created User Details:', member);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
})();
