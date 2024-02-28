import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import "./card.css";
import { getPokemonDetail } from "@/lib/data";

type PokemonCardProps = {
  name: string;
  url: string;
};

export const PokemonCard: FC<PokemonCardProps> = async ({ name, url }) => {
  const id = url.match(/\/(\d+)\/$/) || ({} as RegExpExecArray);
  const pokemon = await getPokemonDetail(Number(id[1]));

  return (
    <div>
      <div className="Container">
        <Image
          className="Image"
          src={pokemon.sprites.front_default}
          priority
          alt="image"
          width={160}
          height={90}
        />
        <div className="Bottom">
          <Link href={`/pokemons/${id[1]}`}>{name}</Link>
        </div>
      </div>
    </div>
  );
};
