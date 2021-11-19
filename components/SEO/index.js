import { Fragment } from 'react';

export default function SEO() {
  const meta = {
    title: 'Vigilantes.pe',
    description:
      '12 compromisos esenciales que asumió el presidente Pedro Castillo mediante la proclama ciudadana. Promovido por la Asociación Civil Transparencia.',
    image: 'https://vigilantes.pe/images/banner.png',
    type: 'website',
  };

  return (
    <Fragment>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content="https://vigilantes.pe" />
      <link rel="canonical" href={'https://vigilantes.pe'} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="vigilantes.pe" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Fragment>
  );
}
