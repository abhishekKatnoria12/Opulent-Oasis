import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

const routes: prismic.ClientConfig["routes"] = [
  { type: "Home", path: "/" },
  { type: "test", path: "/:uid" },
  // Add other routes here
];

export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
