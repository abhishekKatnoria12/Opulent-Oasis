import { repositoryName } from "@/prismicio";
import "@/styles/globals.scss";
import { PrismicPreview } from "@prismicio/next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  )
}
