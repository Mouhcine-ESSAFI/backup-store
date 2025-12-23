import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'public/data');

// Get shop data
export async function getShopData() {
  const filePath = path.join(dataDirectory, 'shop.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Get all products
export async function getAllProducts() {
  const filePath = path.join(dataDirectory, 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Get featured products (first N products)
export async function getFeaturedProducts(count = 6) {
  const products = await getAllProducts();
  return products.slice(0, count);
}

// Get single product by handle
export async function getProductByHandle(handle) {
  const products = await getAllProducts();
  return products.find(product => product.handle === handle);
}

// Get all collections
export async function getAllCollections() {
  const filePath = path.join(dataDirectory, 'collections.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Get collection by handle
export async function getCollectionByHandle(handle) {
  const collections = await getAllCollections();
  return collections.find(collection => collection.handle === handle);
}