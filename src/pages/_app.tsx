import type { AppProps } from 'next/app';

import { ToastProvider } from '../ui-library/Toast/ToastProvider';
import '../theme/base.scss';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default App;
