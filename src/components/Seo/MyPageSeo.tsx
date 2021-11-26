import NextHeadSeo from 'next-head-seo';

export type MyPageSeoProps = {
  path: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

export const MyPageSeo: React.FC<MyPageSeoProps> = (props) => {
  const {
    path,
    title = 'Default title',
    description = 'Default description',
    ogImagePath = '/default-og.png',
    noindex,
    noTitleTemplate,
  } = props;

  const APP_ROOT_URL = process.env.NEXT_PUBLIC_APP_ROOT_URL;

  const pageUrl = APP_ROOT_URL + path;

  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `Reco Spo | ${title} `}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'article',
        siteName: 'Reco Spo',
      }}
      twitter={{
        card: 'summary_large_image',
      }}
    />
  );
};
