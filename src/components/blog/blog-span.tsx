import Link from 'next/link';

export const BlogSpan = () => {
  return (
    <div className="mb-24 mt-32 flex flex-row justify-between content-center items-center">
      <h2 className="text-5xl flex flex-row leading-tight font-bold max-w-screen-lg font-sans">
        <Link as={`/blog`} href="/blog" className="hover:underline font-sans">
          Blog<span>.</span>
        </Link>
      </h2>
    </div>
  );
};
