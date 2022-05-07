import PublicLayout from "layout/public";
import "../sass/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  );
}

export default MyApp;
