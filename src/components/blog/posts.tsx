import TPost from 'interfaces/post';
import Link from 'next/link';

interface Props {
  posts: TPost[];
}

export const Posts = ({ posts }: Props) => {
  return (
    <div className="mt-24">
      {posts.map((post) => {
        return (
          <div className="mb-16" key={post.slug}>
            <h2 className="text-2xl leading-tight font-bold max-w-screen-lg font-sans">
              <Link
                as={`/blog/post/${post.slug}`}
                href="/blog/post/[slug]"
                className="hover:underline font-sans"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-1 font-display font-light text-justify leading-6 text-gray-600 text-sm">
              {post.excerpt}
            </p>
            <div className="flex flex-row mt-3">
              {post.categories.map((category) => {
                return (
                  <span
                    key={category}
                    className="bg-slate-200 px-3 py-1 rounded font-sans text-gray-600 mr-2 text-xs flex items-center"
                  >
                    {category}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
