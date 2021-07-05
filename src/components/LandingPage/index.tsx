import * as S from './styles';

// Types
import { PostData } from '../../types/post';

// Components
import Header from '../Header';
import PostCard from '../PostCard';

// Utils
import { formatData } from '../../utils/formatData';

type Props = {
  posts: PostData[];
};

const LandingPage = ({ posts }: Props) => {
  return (
    <>
      <Header />

      <S.CoverImageContainer>
        <S.CoverImage />
      </S.CoverImageContainer>

      <S.Container>
        <S.PresentationContainer>
          <S.PresentationDescription>
            Este é um Blog utilizado para compartilhar curiosidades e informações interessantes
            sobre diversos
            filmes de diferentes gêneros. Sinta-se a vontade para comentar
            em nossos posts!
          </S.PresentationDescription>
        </S.PresentationContainer>

        <S.Post>
          {posts.map(
            ({ title, id, author, cover, slug, created_at, category }) => {
              return (
                <PostCard
                  key={id}
                  title={title}
                  author={author}
                  cover={cover}
                  slug={slug}
                  category={category}
                  created_at={formatData(created_at)}
                />
              );
            }
          )}
        </S.Post>
      </S.Container>
    </>
  );
};

export default LandingPage;
