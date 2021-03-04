import Head from "next/head";
import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

export type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.layout_main}>{children}</main>
    </div>
  );
};

export default Layout;
