import Head from "next/head";
import styles from "../page.module.css";

export const metadata = {
  title: "Javascript",
  description: "A roadmap for frontend web development",
};

export default function Javascript() {
  return (
    <main className={styles.main}>
      <h1>Javascript Page</h1>
    </main>
  );
}
