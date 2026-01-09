// src/api.js

const API_BASE = import.meta.env.VITE_API_BASE;

if (!API_BASE) {
  throw new Error("VITE_API_BASE is not defined in .env");
}

// ====================== HELPERS ======================

// Get JWT token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Handle API responses safely
const handleResponse = async (res) => {
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

// ====================== AUTH ======================

export const loginUser = async (payload) => {
  const res = await fetch(`${API_BASE}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
};

export const registerUser = async (payload) => {
  const res = await fetch(`${API_BASE}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
};

// ====================== TASKS ======================

export const fetchTasks = async (status = "") => {
  const query = status ? `?status=${encodeURIComponent(status)}` : "";

  const res = await fetch(`${API_BASE}/tasks${query}`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  return handleResponse(res);
};

export const addTask = async (task) => {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(task),
  });

  return handleResponse(res);
};

export const updateTask = async (id, data) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
};

export const deleteTask = async (id) => {
  const res = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });

  return handleResponse(res);
};

export const markTaskDone = async (id) => {
  const res = await fetch(`${API_BASE}/tasks/${id}/done`, {
    method: "PATCH",
    headers: {
      ...getAuthHeaders(),
    },
  });

  return handleResponse(res);
};

// ====================== NOTIFICATIONS ======================

export const fetchNotifications = async () => {
  const res = await fetch(`${API_BASE}/notifications`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  return handleResponse(res);
};
