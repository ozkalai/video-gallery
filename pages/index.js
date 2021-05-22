import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLadt0EaV4m3AOZPbybHx0h2aEmw5ibZGx&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  console.log("data", data);
  return <div className={styles.container}></div>;
}
