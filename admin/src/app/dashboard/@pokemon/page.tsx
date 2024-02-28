import { PokemonCard } from "@/components/card/card";
import { getPokemonList } from "@/lib/data";
import * as styles from "./page.css";
import { Suspense } from "react";

export default async function Home() {
  const pokemon = await getPokemonList();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Pokemon</h1>

      <section className={styles.section}>
        {pokemon.results.map((p) => (
          <Suspense key={p.name} fallback={<p>Loading data...</p>}>
            <PokemonCard key={p.name} name={p.name} url={p.url} />
          </Suspense>
        ))}
      </section>
    </main>
  );
}
