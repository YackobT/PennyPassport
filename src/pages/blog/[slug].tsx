import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

const blogPosts = [
  {
    slug: 'top-10-budget-travel-hacks',
    title: 'Top 10 Budget Travel Hacks',
    content: 'Here are 10 tips to help you travel the world on a budget...',
    category: 'Budget Travel',
  },
  {
    slug: 'why-solo-travel-changed-my-life',
    title: 'Why Solo Travel Changed My Life',
    content: 'Solo travel is a transformative experience. Here\'s my story...',
    category: 'Solo Travel',
  },
  {
    slug: 'a-guide-to-sustainable-travel',
    title: 'A Guide to Sustainable Travel',
    content: 'Learn how to minimize your impact and be a responsible tourist.',
    category: 'Culture & History',
  },
  {
    slug: 'hiking-the-picos-de-europa',
    title: 'Hiking the Picos de Europa: A Step-by-Step Guide',
    content: 'A complete guide to one of Spain\'s most stunning national parks.',
    category: 'Hiking & Outdoors',
  },
];

interface Post {
  slug: string;
  title: string;
  content: string;
  category: string;
}

const BlogPostPage = ({ post }: { post: Post }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Head>
        <title>{`${post.title} - Travel Made Epic`}</title>
      </Head>

      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{post.category}</p>
        <div className="prose lg:prose-xl">
          {post.content}
        </div>
      </article>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  return { props: { post } };
};

export default BlogPostPage;