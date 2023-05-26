import PostType from 'interfaces/post';

interface Props {
  posts: PostType[];
}

export const Posts = ({ posts }: Props) => {
  return (
    <div className="mt-12">
      {posts.map((post) => {
        return (
          <div className="mb-8" key={post.slug}>
            <h2 className="text-2xl leading-tight font-bold max-w-screen-lg font-sans">
              {post.title}
            </h2>
            <p className="mt-2 font-sans font-light text-justify leading-6 text-gray-600 text-sm">
              {post.excerpt}
            </p>
            <div className="flex flex-row mt-2">
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
