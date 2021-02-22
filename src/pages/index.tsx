import { GetStaticProps } from 'next';

// Data (utils)
import { getPosts } from '../data/posts/getPosts';

// Utils
import { PostData } from '../types/post';

// Components (Pages)
import LandingPage from '../components/LandingPage';

type MainProps = {
  posts: PostData[];
};

export default function Index({ posts }: MainProps) {
  return (
    <>
      <LandingPage posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};
