import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

class ItemService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 5000,
    });
  }

  async getItems() {
    try {
      const response = await this.api.get("/api/items");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createItem(itemData) {
    try {
      const response = await this.api.post(
        "/precificando-back/api/items",
        itemData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateItem(itemId, itemData) {
    try {
      const response = await this.api.put(`/api/items/${itemId}`, itemData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(itemId) {
    try {
      const response = await this.api.delete(`/api/items/${itemId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const itemService = new ItemService();

export default itemService;
