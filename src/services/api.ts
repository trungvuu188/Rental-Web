import { ApiProductsResponse } from '../types/api';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

// Mock data for fallback when API is not available
const mockProducts = [
  {
    "id": "e1c9d78f-9e15-4c8c-b76d-111111111111",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy khoan Bosch",
    "description": "Máy khoan da năng dùng trong xây dựng",
    "category": "Công cụ",
    "size": "Vừa",
    "color": "Xanh",
    "pricePerDay": 150000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 5,
    "createdAt": "2025-06-04T09:39:35.69",
    "updatedAt": null,
    "primaryImagesUrl": "https://www.workmanjsc.vn/wp-content/uploads/2024/04/may-khoan-bosch-gbh-220-kem-phu-kien-06112a60k1.jpg",
    "images": [
      {
        "id": "a9b8a2f4-f87a-4a2d-aaa1-222222222222",
        "productId": "e1c9d78f-9e15-4c8c-b76d-111111111111",
        "imageUrl": "https://www.workmanjsc.vn/wp-content/uploads/2024/04/may-khoan-bosch-gbh-220-kem-phu-kien-06112a60k1.jpg",
        "isPrimary": true
      }
    ]
  },
  {
    "id": "33333333-3333-3333-3333-333333333333",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy khoan bê tông Makita HR2470",
    "description": "Máy khoan bê tông công suất lớn, phù hợp thi công",
    "category": "Dụng cụ điện",
    "size": "Vừa",
    "color": "Xanh đen",
    "pricePerDay": 120000.00,
    "availabilityStatus": "available",
    "isPromoted": false,
    "rentCount": 3,
    "createdAt": "2025-05-30T03:26:47.56",
    "updatedAt": null,
    "primaryImagesUrl": "https://via.placeholder.com/300x300?text=Makita+HR2470",
    "images": []
  },
  {
    "id": "44444444-4444-4444-4444-444444444444",
    "providerId": "5517537f-3a3d-4a05-85dc-08dd9f29066f",
    "providerName": "user499225",
    "name": "Máy cắt gạch Bosch GDC 121",
    "description": "Máy cắt gạch chuyên dụng, độ chính xác cao",
    "category": "Dụng cụ cắt",
    "size": "Nhỏ",
    "color": "Xanh",
    "pricePerDay": 80000.00,
    "availabilityStatus": "available",
    "isPromoted": true,
    "rentCount": 8,
    "createdAt": "2025-06-01T10:15:20.45",
    "updatedAt": null,
    "primaryImagesUrl": "https://via.placeholder.com/300x300?text=Bosch+GDC+121",
    "images": []
  }
];

async function fetchWithFallback(url: string): Promise<ApiProductsResponse> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('API call failed, using mock data:', error);
    return mockProducts;
  }
}

// Advertised/Promoted Products
export const fetchAdvertisedProducts = async (): Promise<ApiProductsResponse> => {
  const url = `${API_BASE_URL}/home/products?$select=id,name,description,primaryImagesUrl&$filter=availabilityStatus eq available and isPromoted eq true`;
  return fetchWithFallback(url);
};

// Outstanding Products (most rented)
export const fetchOutstandingProducts = async (): Promise<ApiProductsResponse> => {
  const url = `${API_BASE_URL}/home/products?$filter=availabilityStatus eq available&$orderby=rentCount desc&$top=3`;
  return fetchWithFallback(url);
};

// Latest Products
export const fetchLatestProducts = async (): Promise<ApiProductsResponse> => {
  const url = `${API_BASE_URL}/home/products?$filter=availabilityStatus eq available&$orderby=CreatedAt desc&$top=3`;
  return fetchWithFallback(url);
}; 