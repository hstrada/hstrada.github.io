import DateFormatter from '../date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
  categories?: string[];
};

const PostHeader = ({ title, coverImage, date, author, categories }: Props) => {
  return (
    <header className="mt-8">
      <PostTitle>{title}</PostTitle>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-600">
        <span className="font-medium text-ink">{author}</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-yellow-600" />
        <DateFormatter dateString={date} />
      </div>

      {categories?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-paper-300 px-2.5 py-0.5 text-xs text-ink-600"
            >
              {category}
            </span>
          ))}
        </div>
      )}

      <div className="my-10 overflow-hidden rounded-2xl border border-paper-300">
        <CoverImage title={title} src={coverImage} />
      </div>
    </header>
  );
};

export default PostHeader;
