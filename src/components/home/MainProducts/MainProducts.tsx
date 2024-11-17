/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from "next/image";
import styles from "./MainProducts.module.sass";

export const MainProducts = async () => {
  const response = await fetch("http://localhost:3000/api");
  const { products } = await response.json();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released 1!</h3>
      <div className={styles.MainProducts__grid}>
        {
          //@ts-ignore
          products?.map((product) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id}>
                <p>{product.title}</p>
                <Image
                  src={imageSrc}
                  fill
                  alt={product.title}
                  loading="eager"
                />
              </article>
            );
          })
        }
      </div>
    </section>
  );
};
