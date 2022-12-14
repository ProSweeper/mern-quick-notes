import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function getAll() {
  return sendRequest(BASE_URL);
}

export async function create(data) {
  return sendRequest(BASE_URL, 'POST', data);
}