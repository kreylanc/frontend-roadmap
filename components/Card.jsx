import Image from "next/image";
import urlFor from "../lib/urlFor";

function Card({ title, description, imgUrl }) {
  return (
    <div className="relative flex flex-col gap-y-2 h-full p-4 lg:p-6">
      {imgUrl ? (
        <Image
          className=" w-auto h-16 md:h-24 lg:h-28 object-contain self-start"
          src={urlFor(imgUrl).url()}
          alt={imgUrl.alt}
          width={96}
          height={96}
        />
      ) : (
        <div className="h-24 text-rose-500">Cant load image</div>
      )}
      <h3 className="text-3xl mt-4 break-words font-semibold text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>

      <p className="mt-2">{description}</p>
    </div>
  );
}

export default Card;
