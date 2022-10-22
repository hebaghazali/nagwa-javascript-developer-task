import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
