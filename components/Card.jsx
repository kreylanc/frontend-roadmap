import Image from "next/image";
import urlFor from "../lib/urlFor";

function Card({ title, description, imgUrl }) {
  return (
    <div className="relative bg-neutral-700 h-full p-4 md:p-8 hover:translate-x-3 hover:-translate-y-3 transition-transform">
      <h3 className="text-lg md:text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-base md:text-lg">{description}</p>
      {/* <Image
        className="absolute bottom-8 right-8"
        src={urlFor(imgUrl).url()}
        alt={title}
        width={60}
        height={60}
      /> */}
    </div>
  );
}

export default Card;
