import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
    <S.Wrapper>
      <Header />

      <S.WrapperSlider>
        <AwesomeSlider animation="cubeAnimation">
          <div data-src="images/favela.jpg" />
          <div data-src="images/favela2.jpg" />
        </AwesomeSlider>
      </S.WrapperSlider>

      <S.Post>
        {posts
          .map(({ title, id, author, cover, slug, created_at }) => {
            return (
              <PostCard
                key={id}
                title={title}
                author={author}
                cover={cover}
                slug={slug}
                created_at={formatData(created_at)}
              />
            );
          })
          .reverse()}
      </S.Post>
    </S.Wrapper>
  );
};

export default LandingPage;
