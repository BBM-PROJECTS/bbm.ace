import { useCallback, useState, useEffect } from "react";
import { StorageService, LookupService, TIPDetails } from "@/services";
import { isEmpty } from "@/utils";

const lookup = new LookupService();
const storage = new StorageService();

const useIPInfo = () => {
  const [ipInfo, setIPInfo] = useState<TIPDetails | null | undefined>(null);

  const getIPInfo = useCallback(async () => {
    try {
      const payload = await storage.getItem("IP_INFO");

      if (isEmpty(payload)) {
        const newIPInfo = await lookup.queryIP();
        setIPInfo(newIPInfo);
      } else {
        setIPInfo(payload);
      }
    } catch (error) {
      console.error({ error });
    }
  }, [lookup, storage]);

  useEffect(() => {
    getIPInfo();
  }, [getIPInfo]);

  return ipInfo;
};

export default useIPInfo;
