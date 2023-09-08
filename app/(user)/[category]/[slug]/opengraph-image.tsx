import { ImageResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";

// Route segment config
export const runtime = "edge";

// Image metadata
// export const alt = "About Acme";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: {
    slug: string;
  };
};

// Image generation
export default async function Image({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0] {
    title, description
  }
  `;

  const data: Post = await client.fetch(query, { slug });
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundColor: "#100014",
          backgroundSize: "150px 150px",
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              fontSize: 82,
              fontStyle: "bolder",
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              color: "#ffd500",
            }}
          >
            {data.title}
          </div>
          <div
            style={{
              fontSize: 22,
              marginTop: 18,
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {data.description}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 16,
            bottom: 16,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="logo of stylized R using brackets and backward slash"
            height={100}
            src="https://raw.githubusercontent.com/kreylanc/frontend-roadmap/e913b635c65a87e5843abe2d395cdf109ed18c27/public/logo.svg"
            width={100}
          />
        </div>
      </div>
    ),
    size
  );
}
