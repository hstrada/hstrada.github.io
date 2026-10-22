import Blog, { getStaticProps as getPageProps } from './[page]';

export const getStaticProps = () => getPageProps({ params: { page: '1' } });

export default Blog;
