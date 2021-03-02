import Head from "next/head";
import TalentTree from "../components/TalentTree";
import styles from "../styles/Home.module.css";
import { promises as fs } from "fs";
import path from "path";

export default function Home({ talentTree }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>TitanStar Legends - Talent Tree</title>
      </Head>

      <main className={styles.main}>
        <TalentTree {...talentTree}></TalentTree>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  // Retreive mock Talent Tree data
  const talentTreeFilePath = path.join(
    process.cwd(),
    "public/data/talentTree.json"
  );
  const rawData = await fs.readFile(talentTreeFilePath, "utf8");
  const talentTree = JSON.parse(rawData);

  return {
    props: {
      talentTree: talentTree,
    }, // will be passed to the page component as props
  };
}
