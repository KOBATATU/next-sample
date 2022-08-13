import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Head from "next/head";

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このサイトはISRにより生成されたページ</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行された`;
  console.log(message);
  return {
    props: {
      message,
    },
    revalidate: 5,
  };
};

export default ISR;
