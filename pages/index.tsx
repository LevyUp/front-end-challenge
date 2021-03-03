import { promises as fs } from "fs";
import Head from "next/head";
import path from "path";
import Calculator from "../components/Calculator";
import styles from "../styles/Home.module.css";

export default function Home({ loadout }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>TitanStar Legends - Talent Loadout</title>
      </Head>

      <main className={styles.main}>
        <Calculator {...loadout}></Calculator>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // Retreive mock Talent Tree data
  const loadoutFilePath = path.join(
    process.cwd(),
    "public/data/talentTree.json"
  );
  const rawData = await fs.readFile(loadoutFilePath, "utf8");
  const loadout = JSON.parse(rawData);

  return {
    props: {
      loadout: loadout,
    }, // will be passed to the page component as props
  };
}
