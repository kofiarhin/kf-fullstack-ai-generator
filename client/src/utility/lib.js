const BASE_URL = import.meta.env.VITE_BASE_URL;
const DEV_ENV = import.meta.env.VITE_DEV_ENV;

const generate = async () => {
  const prodUrl = `${BASE_URL}/api/generate`; // full path for production
  const devUrl = "/api/generate"; // proxy path handled by Vite

  const url = DEV_ENV === "development" ? devUrl : prodUrl;

  console.log({ url, DEV_ENV });

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    return data.response;
  } catch (error) {
    console.error("Error in generate():", error.message);
    return null;
  }
};

export { generate };
