import styles from "./Hero.module.sass";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <h1 className={cinzel.className}>DOG</h1>
      <h2>The best friend of the human</h2>
    </section>
  );
};
