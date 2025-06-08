import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ApiProduct } from '../../types/api';
import { fetchAdvertisedProducts, fetchOutstandingProducts, fetchLatestProducts } from '../../services/api';

interface ProductsState {
  advertisedProducts: {
    data: ApiProduct[];
    loading: boolean;
    error: string | null;
  };
  outstandingProducts: {
    data: ApiProduct[];
    loading: boolean;
    error: string | null;
  };
  latestProducts: {
    data: ApiProduct[];
    loading: boolean;
    error: string | null;
  };
}

const initialState: ProductsState = {
  advertisedProducts: {
    data: [],
    loading: false,
    error: null,
  },
  outstandingProducts: {
    data: [],
    loading: false,
    error: null,
  },
  latestProducts: {
    data: [],
    loading: false,
    error: null,
  },
};

// Async thunks
export const fetchAdvertisedProductsAsync = createAsyncThunk(
  'products/fetchAdvertised',
  async () => {
    const response = await fetchAdvertisedProducts();
    return response;
  }
);

export const fetchOutstandingProductsAsync = createAsyncThunk(
  'products/fetchOutstanding',
  async () => {
    const response = await fetchOutstandingProducts();
    return response;
  }
);

export const fetchLatestProductsAsync = createAsyncThunk(
  'products/fetchLatest',
  async () => {
    const response = await fetchLatestProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Advertised Products
    builder
      .addCase(fetchAdvertisedProductsAsync.pending, (state) => {
        state.advertisedProducts.loading = true;
        state.advertisedProducts.error = null;
      })
      .addCase(fetchAdvertisedProductsAsync.fulfilled, (state, action: PayloadAction<ApiProduct[]>) => {
        state.advertisedProducts.loading = false;
        state.advertisedProducts.data = action.payload;
      })
      .addCase(fetchAdvertisedProductsAsync.rejected, (state, action) => {
        state.advertisedProducts.loading = false;
        state.advertisedProducts.error = action.error.message || 'Failed to fetch advertised products';
      })
      // Outstanding Products
      .addCase(fetchOutstandingProductsAsync.pending, (state) => {
        state.outstandingProducts.loading = true;
        state.outstandingProducts.error = null;
      })
      .addCase(fetchOutstandingProductsAsync.fulfilled, (state, action: PayloadAction<ApiProduct[]>) => {
        state.outstandingProducts.loading = false;
        state.outstandingProducts.data = action.payload;
      })
      .addCase(fetchOutstandingProductsAsync.rejected, (state, action) => {
        state.outstandingProducts.loading = false;
        state.outstandingProducts.error = action.error.message || 'Failed to fetch outstanding products';
      })
      // Latest Products
      .addCase(fetchLatestProductsAsync.pending, (state) => {
        state.latestProducts.loading = true;
        state.latestProducts.error = null;
      })
      .addCase(fetchLatestProductsAsync.fulfilled, (state, action: PayloadAction<ApiProduct[]>) => {
        state.latestProducts.loading = false;
        state.latestProducts.data = action.payload;
      })
      .addCase(fetchLatestProductsAsync.rejected, (state, action) => {
        state.latestProducts.loading = false;
        state.latestProducts.error = action.error.message || 'Failed to fetch latest products';
      });
  },
});

export default productsSlice.reducer; 