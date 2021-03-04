import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Calculator from "../../components/Calculator";
import Layout from "../../components/Layout";

const loadoutDir = "public/data/loadouts";

const Loadouts = ({ calculator, loadout }) => {
  return (
    <Layout title="TitanStar Legends - Talent Loadout">
      <Calculator {...calculator} {...loadout}></Calculator>
    </Layout>
  );
};

export default Loadouts;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = await getAllLoadoutIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const loadout = await getLoadoutData(params.id);
  const calculator = await getCalculatorData();
  return {
    props: {
      calculator,
      loadout,
    },
  };
};

const getAllLoadoutIds = async () => {
  const fileNames = await fs.readdir(loadoutDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
};

const getLoadoutData = async (id) => {
  const fullPath = path.join(loadoutDir, `${id}.json`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  const loadout = JSON.parse(fileContents);

  // Combine the data with the id
  return loadout;
};

const getCalculatorData = async () => {
  // Retreive mock Talent Tree data
  const calculatorFilePath = path.join(
    process.cwd(),
    "public/data/calculator.json"
  );
  const rawData = await fs.readFile(calculatorFilePath, "utf8");
  const calculator = JSON.parse(rawData);

  return calculator;
};
