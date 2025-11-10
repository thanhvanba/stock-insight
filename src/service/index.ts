import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5050/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Admin API functions
export const adminAPI = {
  // Get all blogs (admin view)
  getAllBlogs: async () => {
    try {
      const response = await api.get("/blogs");
      return response.data;
    } catch (error) {
      console.error("Error fetching admin blogs:", error);
      throw error;
    }
  },

  getBlogsByCategory: async (categoryID: string) => {
    try {
      const response = await api.get(`/blogs/category/${categoryID}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching admin blogs:", error);
      throw error;
    }
  },

  getTags: async (token: string) => {
    try {
      const response = await api.get("/blogs/tags", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tags:", error);
      throw error;
    }
  },

  getCategory: async () => {
    try {
      const response = await api.get("/category");
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  },

  // Create new blog
  // createBlog: async (blogData: BlogData, token: string) => {
  //   try {
  //     const response = await api.post("/blogs", blogData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error creating blog:", error);
  //     throw error;
  //   }
  // },

  // Lấy blog theo ID
  getBlogById: async (id: string) => {
    try {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog by ID:", error);
      throw error;
    }
  },

  getBlogBySlug: async (slug: string) => {
    try {
      const response = await api.get(`/blogs/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      throw error;
    }
  },

  // Update blog
  // updateBlog: async (id: string, blogData: BlogData, token: string) => {
  //   try {
  //     const response = await api.patch(`/blogs/${id}`, blogData, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error updating blog:", error);
  //     throw error;
  //   }
  // },

  // Delete blog
  // deleteBlog: async (id: string, token: string) => {
  //   try {
  //     const response = await api.delete(`/blogs/${id}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error deleting blog:", error);
  //     throw error;
  //   }
  // },
};

export default api;
