# API Integration for Home Page

## Overview
The home page has been updated to integrate with the specified APIs for fetching different types of products. The implementation includes fallback to mock data when APIs are not available.

## API Endpoints Integrated

### 1. Advertised Products
- **Endpoint**: `/home/products?$select=id,name,description,primaryImagesUrl&$filter=availabilityStatus eq available and isPromoted eq true`
- **Component**: `AdvertisedProducts`
- **Description**: Displays promoted products

### 2. Outstanding Products  
- **Endpoint**: `/home/products?$filter=availabilityStatus eq available&$orderby=rentCount desc&$top=3`
- **Component**: `OutstandingProducts`
- **Description**: Shows the top 3 most rented products with ranking badges

### 3. Latest Products
- **Endpoint**: `/home/products?$filter=availabilityStatus eq available&$orderby=CreatedAt desc&$top=3`
- **Component**: `NewProducts` (updated existing component)
- **Description**: Displays the 3 most recently added products

## New Files Created

### Types
- `src/types/api.ts` - API response type definitions

### Services
- `src/services/api.ts` - API service functions with fallback to mock data

### Redux Store
- `src/store/slices/productsSlice.ts` - Redux slice for managing products state
- Updated `src/store/index.tsx` - Added products slice to store

### Components
- `src/components/ui/api-product-card/` - New product card component for API data
- `src/pages/home/components/advertised-products/` - Advertised products section
- `src/pages/home/components/outstanding-products/` - Outstanding products section
- Updated `src/pages/home/components/new-products/` - Latest products section

### Hooks
- `src/hooks/redux.ts` - Typed Redux hooks

## Configuration

### Environment Variables
Set the API base URL in your environment:
```
REACT_APP_API_BASE_URL=http://localhost:3001
```

If not set, it defaults to `http://localhost:3001`.

## Features

### Fallback Mechanism
- If API calls fail, the application automatically falls back to mock data
- Error messages are displayed in the UI when API calls fail
- Loading states are shown while fetching data

### Responsive Design
- All new components are fully responsive
- Mobile-first approach with breakpoints at 768px and 480px

### State Management
- Uses Redux Toolkit for state management
- Separate loading, error, and data states for each product type
- Async thunks for API calls

## Usage

The home page now automatically fetches and displays:
1. **Promoted Products** - Products marked as promoted in the system
2. **Outstanding Products** - Top 3 most rented products with ranking badges
3. **Latest Products** - 3 newest products added to the system

All sections include:
- Loading indicators
- Error handling with user-friendly messages
- Empty state messages when no products are available
- Responsive grid layouts

## Mock Data
When APIs are not available, the application uses predefined mock data that matches the expected API response structure, ensuring the UI remains functional during development and testing. 