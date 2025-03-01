import { SliceZone } from '@prismicio/react';
import Head from 'next/head';
import { createClient } from '../../prismicio';
import { components } from '../../slices';
import { resolveLocaleFromNext } from '../../lib/resolveLocaleFromNext';
import { withAlternateLanguageURLs } from '../../lib/withAlternateLanguageURLs';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import BlogModal from '../../components/ui/shared/BlogModal';

const BlogHome = (props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const { metaTitle, metaDescription, ogImage, ogImageAlt, page } = props;
  const canonicalUrl = `https://letoasteur.com` + page.url;

  return (
    <Layout alternateLanguages={page.alternate_languages}>
      {/* <BlogModal /> */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} key="desc" />
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="page" />
        <meta property="og:url" content={currentRoute} />
        <meta property="og:image" content={ogImage} alt={ogImageAlt} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Le Toasteur Villeray" />
        <meta name="robots" content="noindex" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default BlogHome;

export async function getStaticProps({ previewData, locale }) {
  const client = createClient({ previewData });
  const resolvedLocale = resolveLocaleFromNext(locale);

  const page = await client.getSingle('blog_home', {
    lang: resolvedLocale
  });
  const pageWithAlternateLanguageURLs = await withAlternateLanguageURLs(
    page,
    client
  );

  return {
    props: {
      metaTitle: page.data.meta_title ? page.data.meta_title : '',
      metaDescription: page.data.meta_description
        ? page.data.meta_description
        : '',
      ogImage: page.data.og_image.url
        ? page.data.og_image.url
        : 'https://images.prismic.io/letoasteur/05ef725c-3208-41e6-a44a-cd38e6f25471_logo-toasteur-villeray-navy.png?auto=compress,format',
      ogImageAlt: page.data.og_image.alt
        ? page.data.og_image.alt
        : 'Le Toasteur brunch restaurant',
      title: page.data.title ? page.data.title : '',
      page: pageWithAlternateLanguageURLs
    }
  };
}
