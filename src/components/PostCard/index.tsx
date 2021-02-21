import * as S from './styles';

type Props = {
  title: string;
  slug: string;
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
};

const PostCard = ({ title, cover, author, slug }: Props) => {
  return (
    <S.Container>
      <a href={`http://localhost:3000/${slug}`}>
        <S.Image src={cover.formats.small.url} alt="Small Blog Image" />
      </a>

      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Author>
          Feito por <strong>{author.name}</strong>
        </S.Author>
      </S.Details>
    </S.Container>
  );
};

export default PostCard;
