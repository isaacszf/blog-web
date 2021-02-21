import { GetStaticProps } from 'next';

import { getPosts } from '../data/posts/getPosts';
import { PostData } from '../types/post';

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
