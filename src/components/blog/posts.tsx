import TPost from 'interfaces/post';
import Link from 'next/link';
import DateFormatter from './date-formatter';

interface Props {
  posts: TPost[];
}

export const Posts = ({ posts }: Props) => {
  return (
    <ul className="divide-y divide-paper-300 border-y border-paper-300">
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            <Link
              href={`/blog/post/${post.slug}`}
              className="group grid gap-2 py-8 md:grid-cols-12 md:gap-6"
            >
              <span className="text-sm tabular-nums text-ink-400 md:col-span-3 md:pt-1.5">
                <DateFormatter dateString={post.date} />
              </span>
              <div className="md:col-span-9">
                <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-yellow-600">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-2xl text-ink-600">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.categories?.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-paper-300 px-2.5 py-0.5 text-xs text-ink-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
