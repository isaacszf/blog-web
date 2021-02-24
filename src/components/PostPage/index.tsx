import Link from 'next/link';

import * as S from './styles';

import Header from '../Header';

// Types
import { PostData } from '../../types/post';

// Components
import Comments from '../Comments';

// Utils
import { formatData } from '../../utils/formatData';

type Props = {
  post: PostData;
};

const PostPage = ({ post }: Props) => {
  return (
    <S.WrapperContainer>
      <Header />

      <S.Content>
        <S.Heading>{post.title}</S.Heading>
        <S.CoverImage
          src={post.cover.formats.small.url}
          alt="Post Cover Image"
        />
        <S.Author>
          Feito por <strong>{post.author.name}</strong> em{' '}
          {formatData(post.created_at)} |{' '}
          <Link href={`/categories/${post.category.name.toLowerCase()}`}>
            {post.category.name}
          </Link>
        </S.Author>

        <S.TextContainer dangerouslySetInnerHTML={{ __html: post.content }} />

        <S.AuthorInfoContainer>
          <S.AuthorPhoto>
            <img
              src={post.author.photo.formats.thumbnail.url}
              alt="Foto do Autor"
            />
          </S.AuthorPhoto>

          <S.AuthorInfo>
            <h3>{post.author.name}</h3>
            <p>{post.author.description}</p>
          </S.AuthorInfo>
        </S.AuthorInfoContainer>

        <Comments slug={post.slug} title={post.title} />
      </S.Content>
    </S.WrapperContainer>
  );
};

export default PostPage;
