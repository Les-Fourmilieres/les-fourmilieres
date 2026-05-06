const proxyConfigs = [
  {
    name: "CorsProxy.io",
    getUrl: (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
    parse: async (res: Response) => res.json(),
  },
  {
    name: "AllOrigins Raw",
    getUrl: (url: string) =>
      `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    parse: async (res: Response) => res.json(),
  },
  {
    name: "CodeTabs",
    getUrl: (url: string) =>
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    parse: async (res: Response) => res.json(),
  },
  {
    name: "ThingProxy",
    getUrl: (url: string) => `https://thingproxy.freeboard.io/fetch/${url}`,
    parse: async (res: Response) => res.json(),
  },
  {
    name: "AllOrigins JSON",
    getUrl: (url: string) =>
      `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
    parse: async (res: Response) => {
      return await res.json();
    },
  },
  {
    name: "Direct (CORS fallback)",
    getUrl: (url: string) => url,
    parse: async (res: Response) => res.text(),
  },
];

export async function fetchWithProxy(url: string) {
  for (const proxy of proxyConfigs) {
    try {
      console.log(`Tentative de récupération RSS via ${proxy.name}...`);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

      const response = await fetch(
        proxy.getUrl(`${url}?t=${new Date().getTime()}`),
        {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        },
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(
          `Le proxy ${proxy.name} a retourné une erreur ${response.status}`,
        );
        continue;
      }
      return await proxy.parse(response);
    } catch (error) {
      console.warn(`Échec de récupération via ${proxy.name}:`, error);
    }
  }
}
