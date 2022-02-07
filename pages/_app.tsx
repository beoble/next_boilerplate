import type { AppProps } from "next/app";
import { wrapper } from "../src/app/store";
import { GlobalStyle } from "../styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

// Inject redux with wrapper using React.HOC
export default wrapper.withRedux(MyApp);
