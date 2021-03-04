import { promises as fs } from "fs";
import path from "path";
import Calculator from "../components/Calculator";
import Layout from "../components/Layout";

export default function Home({ calculator }) {
  return (
    <Layout title="TitanStar Legends - Talent Loadout">
      <Calculator {...calculator}></Calculator>
    </Layout>
  );
}

export async function getStaticProps(context) {
  // Retreive mock Talent Tree data
  const calculatorFilePath = path.join(
    process.cwd(),
    "public/data/calculator.json"
  );
  const rawData = await fs.readFile(calculatorFilePath, "utf8");
  const calculator = JSON.parse(rawData);

  return {
    props: {
      calculator: calculator,
    }, // will be passed to the page component as props
  };
}
