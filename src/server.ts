import app from './app';
require('dotenv').config();

const PORT = process.env.PORT || 3012;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});
