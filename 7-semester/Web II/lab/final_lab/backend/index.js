import express from 'express'
import mongoose from'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Allows frontend to talk to backend

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jewelryDB')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

// Task 4: Define Jewelry Product Schema (Flexible Document Structure)
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String, // e.g., "Ring", "Watch"
  details: Object    // Flexible field for different product specs
});

const Product = mongoose.model('Product', ProductSchema);

// Task 3: RESTful Endpoints
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ message: "Product added!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));