import Image from "next/image";
import urlFor from "../lib/urlFor";

function Card({ title, description, imgUrl }) {
  return (
    <div className="relative flex flex-col bg-zinc-700 h-full p-4 md:p-6 border-2 border-zinc-700 hover:border-primaryYellow hover:text-zinc-200 group transition-colors">
      <h3 className="text-3xl font-semibold">{title}</h3>
      {imgUrl ? (
        <Image
          className=" w-auto h-24 md:h-28 object-contain py-4 self-start"
          src={urlFor(imgUrl).url()}
          alt={imgUrl.alt}
          width={80}
          height={80}
        />
      ) : (
        <div className="h-24 py-4 text-rose-500">Cant load image</div>
      )}
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default Card;
