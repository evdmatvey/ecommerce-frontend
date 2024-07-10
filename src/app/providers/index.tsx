import type { AppProps } from 'next/app';
import PageLayout from '@/shared/ui/PageLayout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
};

export default App;
