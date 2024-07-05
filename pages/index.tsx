import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices/index";
import { createClient } from "@/prismicio";
import Layout from "@/components/Layout";

export default function Page({
  page,
  navbar,
  footer,
  topNavbar,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        {isFilled.keyText(page.data.meta_description) ? (
          <meta name="description" content={page.data.meta_description} />
        ) : null}
      </Head>
      <Layout navbar={navbar} footer={footer} topNavbar={topNavbar}>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  // The `previewData` parameter allows your app to preview
  // drafts from the Page Builder.
  const client = createClient({ previewData });

  // The query fetches the page's data based on the current URL.
  const page = await client.getSingle("Home");
  const navbar = await client.getSingle("navbar");
  const footer = await client.getSingle("footer");
  const topNavbar = await client.getSingle("top_navbar");

  return {
    props: { page, navbar, footer, topNavbar },
  };
}
