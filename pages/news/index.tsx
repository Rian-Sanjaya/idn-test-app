// import type { GetServerSideProps } from "next";
// import { useEffect } from 'react';
import styles from "../../src/styles/News.module.scss";

type Props = {
  data: {
    id: string,
    name: string,
  }
}

const NewsPage = ({ data }: Props) => {
  // useEffect(() => {
  //   console.log('data dalem: ', data);
  // }, [data]);

  return (
    <div className={styles.container}>
      News Page
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const res = await fetch(`http://localhost:3000/api/profile`);
//   const data = await res.json();
//   return { props: { data } };
// }

export default NewsPage;