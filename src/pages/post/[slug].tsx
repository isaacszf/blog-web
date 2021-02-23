import { GetStaticPaths, GetStaticPropsContext, GetStaticProps } from 'next';

import { getPosts } from '../../data/posts/getPosts';
import { getPost } from '../../data/posts/getPost';
import { countPosts } from '../../data/posts/countPosts';

import { PostData } from '../../types/post';

import PostPage from '../../components/PostPage';

type Props = {
  post: PostData;
};

const DynamicPost = ({ post }: Props) => {
  return <PostPage post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countPosts();
  const posts = await getPosts(`_limit=${numberOfPosts}`);

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const posts = await getPost(ctx.params?.slug);

  return {
    props: {
      post: posts[0],
    },
  };
};
