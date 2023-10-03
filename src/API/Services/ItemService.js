import axios from "axios";

const API_BASE_URL = "http://localhost:8080/precificando-back/api";

class ItemService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 5000,
    });
  }

  async getAllItems() {
    try {
      const response = await this.api.get("/items");
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAllUserItems(userId) {
    try {
      const response = await this.api.get(`/users/${userId}/items`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createItem(itemData) {
    try {
      const response = await this.api.post("/items", itemData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateItem(itemId, itemData) {
    try {
      const response = await this.api.put(`/items/${itemId}`, itemData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteItem(itemId) {
    try {
      const response = await this.api.delete(`/items/${itemId}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const itemService = new ItemService();

export default itemService;
