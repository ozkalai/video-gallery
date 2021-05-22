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
  return (
    <div className={styles.wrapper}>
      <h2>Adem İlter React ile Twitter Klonu</h2>
      <ul className={styles.grid}>
        {data.items.map(({ id, snippet = {} }) => {
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { medium } = thumbnails;
          return (
            <li key={id} className={styles.card}>
              <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                <p>
                  <img
                    width={medium.width}
                    height={medium.height}
                    src={medium.url}
                    alt=""
                  />
                </p>
                <h3>{title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
