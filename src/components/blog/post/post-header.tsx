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

      <div className="text-gray-500 text-xs font-sans">
        <DateFormatter dateString={date} />
      </div>

      <div className="mt-8 mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>

      <div className="text-sm font-display text-gray-500">{author}</div>
    </>
  );
};

export default PostHeader;
