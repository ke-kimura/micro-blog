import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "kimu-micro-blog",
  apiKey: process.env.API_KEY,
});
