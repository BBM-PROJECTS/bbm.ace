// SERVICES
import { systemErrorMsg } from "@/constants";
import { StorageService } from "./storage.service";
import { HttpService, THttpResponse } from "./http.service";

// API ROUTES
import { apiRoutes } from "@/routes";

export type TIPDetails = {
  asn: string;
  isp: string;
  loc: string;
  org: string;
  ipv4: string;
  ipv6: string;
  city: string;
  postal: string;
  region: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
  assignment: string;
  countryCode: string;
  services: "Unicast" | "Anycast" | null;
};

const http = new HttpService();
const storage = new StorageService();

export class LookupService {
  constructor() {}

  async queryIP(): Promise<TIPDetails | undefined> {
    try {
      const response = await http
        .service()
        .pull<THttpResponse<TIPDetails>>(apiRoutes.IP_DETAILS);

      const { isSuccessful, data, message } = response.data;

      if (isSuccessful && http.isResolved(response)) {
        console.log({ data, message });

        // SAVE TO INDEXDB
        await storage.setItem("IP_INFO", data);
        return data;
      } else {
        const errorMessage = message || systemErrorMsg;
        alert(errorMessage); // ! Replace with toast

        http.cancelRequest();
      }
    } catch (error: any) {
      const message = error?.response?.data?.message;
      const errorMessage = message || systemErrorMsg;

      http.cancelRequest();
    }
  }
}
