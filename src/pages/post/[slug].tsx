import { GetStaticPaths, GetStaticPropsContext, GetStaticProps } from 'next';

import { getPosts } from '../../data/posts/getPosts';
import { getPost } from '../../data/posts/getPost';
import { countPosts } from '../../data/posts/countPosts';

import { PostData } from '../../types/post';

type Props = {
  post: PostData;
};

const DynamicPost = ({ post }: Props) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
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
