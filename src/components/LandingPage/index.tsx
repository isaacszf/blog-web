import * as S from './styles';

import { PostData } from '../../types/post';

type Props = {
  posts: PostData[];
};

const LandingPage = ({ posts }: Props) => {
  return (
    <S.Wrapper>
      {posts.map(({ title, id }) => {
        return <h2 key={id}>{title}</h2>;
      })}
    </S.Wrapper>
  );
};

export default LandingPage;
