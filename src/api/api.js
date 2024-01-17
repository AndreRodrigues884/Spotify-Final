export async function get(url, headers, name) {
  try {
    const response = await fetch(url, { headers });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching ${name}:`, error);
    throw error;
  }
}

async function handleResponse(response) {
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(
      `API request failed with status ${response.status}: ${errorMessage}`
    );
  }
  const data = await response.json();
  return data;
}