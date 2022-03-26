import { useRouter } from 'next/router';
import BaseLayout from 'components/layout/BaseLayout';

const PortfolioDetail = ({ query }) => {
  console.log('====================================');
  console.log(query);
  console.log('====================================');
  //   const {
  //     query: { id },
  //   } = useRouter();
  return (
    <BaseLayout head={'Portfolio | Detail'}>
      PortfolioDetail {query.id}
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};
export default PortfolioDetail;
