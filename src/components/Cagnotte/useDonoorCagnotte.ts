import { useQuery } from "@tanstack/react-query";
import { fetchCampaign } from "./Donoor";

export function useDonoorCagnotte() {
  return useQuery({
    queryKey: ["campaign"],
    queryFn: fetchCampaign,
  });
}
