import { ApiProductsResponse } from '../types/api';
import { mockApiProducts } from '../data';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

async function fetchWithFallback(url: string): Promise<ApiProductsResponse> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API call failed, using mock data:', error);
    return mockApiProducts;
  }
}

// Advertised/Promoted Products
export const fetchAdvertisedProducts = async (): Promise<ApiProductsResponse> => {
  const url = `${API_BASE_URL}/odata/products?$select=id,name,description,primaryImagesUrl&$filter=availabilityStatus eq 'available' and isPromoted eq true`;
  return fetchWithFallback(url);
};

// Outstanding Products (most rented)
export const fetchOutstandingProducts = async (): Promise<ApiProductsResponse> => {
  const url = `${API_BASE_URL}/odata/products?$filter=availabilityStatus eq 'available'&$orderby=rentCount desc&$top=3`;
  return fetchWithFallback(url);
};

// Latest Products
export const fetchLatestProducts = async (): Promise<ApiProductsResponse> => {
  const url = `${API_BASE_URL}/odata/products?$filter=availabilityStatus eq 'available'&$orderby=CreatedAt desc&$top=3`;
  return fetchWithFallback(url);
}; 