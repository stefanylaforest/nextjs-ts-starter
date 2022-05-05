import type { AppProps } from 'next/app';
import '../theme/base.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
