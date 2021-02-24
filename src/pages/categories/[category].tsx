import { GetServerSideProps } from 'next';

// Components
import CategoryPage from '../../components/CategoryPage';

// Utils
import { getPosts } from '../../data/posts/getPosts';

// Types
import { PostData } from '../../types/post';

type Props = {
  posts: PostData[];
  category?: string;
};

const DynamicPost = ({ posts, category }: Props) => {
  return <CategoryPage category={category} posts={posts} />;
};

export default DynamicPost;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`;
  const posts = await getPosts(urlQuery);

  return {
    props: {
      posts,
      category: ctx.query.category,
    },
  };
};
