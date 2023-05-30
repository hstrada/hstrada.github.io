import DateFormatter from '../date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-base font-display text-center text-gray-500">{author}</div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-6 text-gray-500 text-xs font-sans">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mt-12 mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
