import { Fragment } from 'react';

export default function SEO(props) {
  const meta = {
    title: 'Proclama Ciudadana',
    description: `12 acuerdos esenciales que la ciudadanía exige ambos candidatos a la Presidencia de la República. Promovido por la Asociación Civil Transparencia.`,
    image: 'https://proclamaciudadana.pe/images/banner.png',
    type: 'website',
  };

  return (
    <Fragment>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`https://proclamaciudadana.pe`} />
      <link rel="canonical" href={`https://proclamaciudadana.pe`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="proclamaciudadana.pe" />
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
