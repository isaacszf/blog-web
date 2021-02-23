import { DiscussionEmbed } from 'disqus-react';

import { APP_URL } from '../../config/appConfig';

import * as S from './styles';

type Props = {
  title: string;
  slug: string;
};

const Comments = ({ slug, title }: Props) => {
  return (
    <S.Container>
      <DiscussionEmbed
        shortname="blog-dos-enroca-pneu"
        config={{
          url: `${APP_URL}/post/${slug}`,
          identifier: slug,
          title,
          language: 'pt_BR',
        }}
      />
    </S.Container>
  );
};

export default Comments;
