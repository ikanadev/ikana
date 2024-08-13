import { quotes } from "@/server/utils/quotes";

export default defineEventHandler(async (event) => {
  // await new Promise((res) => setTimeout(res, 1000));
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  return quote;
});
