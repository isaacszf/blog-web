import Link from 'next/link';

import * as S from './styles';

type Props = {
  title: string;
  slug: string;
  category: {
    name: string;
  };
  author: {
    name: string;
  };
  cover: {
    formats: {
      small: {
        url: string;
      };
    };
  };
  created_at: string;
};

const PostCard = ({
  title,
  cover,
  author,
  slug,
  created_at,
  category,
}: Props) => {
  return (
    <S.Container>
      <Link href="/post/[slug]" as={`/post/${slug}`}>
        <S.Image src={cover.formats.small.url} alt="Small Blog Image" />
      </Link>

      <S.Details>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
        </S.TitleContainer>
        <S.Author>
          Feito por <strong>{author.name}</strong>
        </S.Author>
      </S.Details>

      <S.Tags>
        Tags:{' '}
        <Link href={`/categories/${category.name.toLowerCase()}`}>
          {category.name}
        </Link>
      </S.Tags>

      <S.DataContainer>
        <S.Data>{created_at}</S.Data>
      </S.DataContainer>
    </S.Container>
  );
};

export default PostCard;
