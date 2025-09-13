import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import config from "../src/config";

export default getRequestConfig(async () => {
  // Read locale from cookies
  const requestedLocale = (await cookies()).get("locale")?.value;

  // Default to Bengali if no cookie is set
  const locales = config.locales;
  const currentLocale =
    requestedLocale && locales.includes(requestedLocale)
      ? requestedLocale
      : locales[0]; // Default to 'bn'
  return {
    locale: currentLocale,
    messages: (await import(`../locale/${currentLocale}.json`)).default,
  };
});
