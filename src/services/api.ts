import axios from 'axios';
import type { Partner, Product } from '../types/partner';

const api = axios.create({
  baseURL: import.meta.env.VITE_AIRTABLE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/Products');
    return response.data.records;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getPartnerProducts = async (partnerId: string): Promise<Product[]> => {
  try {
    const partnerResponse = await api.get(`/Partners/${partnerId}`);
    const linkedProductIds = partnerResponse.data.fields['Linked Products'] || [];
    
    if (linkedProductIds.length === 0) return [];

    const products = await Promise.all(
      linkedProductIds.map(async (id: string) => {
        const response = await api.get(`/Products/${id}`);
        return response.data;
      })
    );

    return products;
  } catch (error) {
    console.error('Error fetching partner products:', error);
    return [];
  }
};

export const createPartner = async (email: string): Promise<Partner | null> => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const response = await api.post('/Partners', {
      records: [{
        fields: {
          "Work Email": email,
          "Joined Date": today,
          "PartnerID": Date.now()
        }
      }]
    });
    return response.data.records[0];
  } catch (error) {
    console.error('Error creating partner:', error);
    return null;
  }
};

export const createProduct = async (product: Partial<Product>): Promise<Product | null> => {
  try {
    const response = await api.post('/Products', {
      records: [{
        fields: product.fields
      }]
    });
    return response.data.records[0];
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};

export const updateProduct = async (productId: string, updates: Partial<Product>): Promise<Product | null> => {
  try {
    const response = await api.patch(`/Products/${productId}`, {
      fields: updates.fields
    });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
};

export const deleteProduct = async (productId: string): Promise<boolean> => {
  try {
    await api.delete(`/Products/${productId}`);
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    return false;
  }
};