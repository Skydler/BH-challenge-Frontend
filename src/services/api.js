const baseURL = "http://127.0.0.1:5000";

export function createProduct(data) {
  return fetch(`${baseURL}/product`, {
    method: "POST",
    body: data,
  });
}
