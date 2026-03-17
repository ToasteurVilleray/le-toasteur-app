import '../styles/globals.css';

import Head from 'next/head';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { letoasteur } from '../prismicio';
import Script from 'next/script';
import TestimonialsMarquee from '../components/ui/shared/TestimonialsMarquee';

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/images/logos/toast-blue-navy-ellipsed.png"
        />
        <meta name="google-site-verification" content="HjMuvqyhUevfkO0IWh-9Fw9VNVoPGw3QlPs-1ienJVs" />
      </Head>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-YXK3DPM6D4"
      />
      {/* GOOGLE ANALYTICS */}
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YXK3DPM6D4');`
        }}
      />
      <PrismicPreview repositoryName={letoasteur}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
