import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

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

const AutoplaySlider = withAutoplay(AwesomeSlider);

const LandingPage = ({ posts }: Props) => {
  return (
    <>
      <Header />

      <S.WrapperSlider>
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={2300}>
          <div data-src="images/favela2.jpg" />
          <div data-src="images/favela.jpg" />
        </AutoplaySlider>
      </S.WrapperSlider>

      <S.Animation />

      <S.Container>
        <S.PresentationContainer>
          <S.PresentationDescription>
            O "Blog dos Enrosca Pneu" é um lugar experimental, usamos ele
            principalmente para arquivar informações em forma de posts. Sinta-se
            a vontade para ler os posts e interagir nos comentários, apenas
            tenha em mente que o Blog não está 100% finalizado.
          </S.PresentationDescription>
        </S.PresentationContainer>

        <S.Post>
          {posts.map(({ title, id, author, cover, slug, created_at }) => {
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
          })}
        </S.Post>
      </S.Container>
    </>
  );
};

export default LandingPage;
