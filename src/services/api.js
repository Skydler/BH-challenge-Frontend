const baseURL = "http://127.0.0.1:5000";

export function createProduct(data) {
  return fetch(`${baseURL}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteProduct(data) {
  return fetch(`${baseURL}/product`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function getEmailList() {
  return fetch(`${baseURL}/email_schedule`);
}
