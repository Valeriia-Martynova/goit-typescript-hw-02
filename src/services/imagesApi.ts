import axios from "axios";
import { ImagesResponse } from "../types";

const API_KEY = "5z2NCFe9Xkt2gpWNtBVpjMeVR34G2CyUUkdgXx5YT0g";
const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async (
  query: string,
  page = 0,
  perPage = 12
): Promise<ImagesResponse> => {
  const response = await axios.get<ImagesResponse>(
    `${BASE_URL}/search/photos`,
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    }
  );

  return response.data;
};
