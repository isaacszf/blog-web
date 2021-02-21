import * as S from './styles';

// Types
import { PostData } from '../../types/post';

// Components
import PostCard from '../PostCard';

type Props = {
  posts: PostData[];
};

const LandingPage = ({ posts }: Props) => {
  return (
    <S.Wrapper>
      <S.Post>
        {posts.map(({ title, id, author, cover, slug }) => {
          return (
            <PostCard
              key={id}
              title={title}
              author={author}
              cover={cover}
              slug={slug}
            />
          );
        })}
      </S.Post>
    </S.Wrapper>
  );
};

export default LandingPage;
