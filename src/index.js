import app from './app.js';
import connectDB from './config/db.js';
const PORT = process.env.PORT || 3003;
connectDB()

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);

});
