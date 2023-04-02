import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

const card_container_hover_border = c5;
const info_container_link = c4,
  info_container_link_hover = c3,
  info_container_link_active = c5,
  description = c1 + "cc";
const tag_link = c4,
  tag_link_border = c5,
  tag_link_hover = c2,
  tag_link_hover_background = c3,
  tag_link_hover_border = c2;
const tag_link_active_background = c5;

export default function Card({ metadata }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/blog/${metadata.id}`}>
        <Image
          src={"/images/" + (metadata.imgName ?? "no-image.png")}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold">{metadata.title}</h2>
          <p className="line-clamp-2 text-md">{metadata.description}</p>
          <p className="flex items-center">{metadata.date}</p>
        </div>
        <div className="tags-container">
          <div className="tags-container-tag">
            {metadata.tags?.map((tag_name, index) => {
              return (
                <Link legacyBehavior href={`/tags/${tag_name}`} key={tag_name}>
                  <a className="tag-link">{"#" + tag_name}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </Link>
      <style jsx>{`
        .card-layout {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 1vh 11vw 1vh 11vw;
        }
        .card-container {
          display: flex;
          flex: 0 1 24vw;
          flex-direction: column;
          flex-wrap: wrap;
          box-sizing: border-box;
          margin: 1vh 0.87vw 1vh 0.87vw;
          border-bottom: 3px solid transparent;
        }
        .card-container:hover {
          border-bottom: 3px solid ${card_container_hover_border};
          transform: scale(0.99);
        }
        .img-container {
          width: 100%;
          max-width: 100%;
        }
        img {
          width: 100%;
          max-width: 100%;
          height: 12vw;
          object-fit: cover;
          border-radius: 5px;
        }
        .info-container {
          display: flex;
          flex: 100%;
          max-width: 100%;
          flex-direction: column;
          flex-wrap: wrap;
          overflow-wrap: break-word;
        }
        .info-container-link {
          font-family: "Maven Pro", sans-serif;
          font-weight: bold;
          font-size: calc(20px + (26 - 20) * ((100vw - 300px) / (1600 - 300)));
          text-decoration: none;
          overflow-wrap: break-word;
          color: ${info_container_link};
        }
        .info-container-link:hover {
          color: ${info_container_link_hover};
        }
        .info-container-link:active {
          color: ${info_container_link_active};
        }
        .description-container {
          display: flex;
          flex-direction: column;
          max-width: 100%;
        }
        .description {
          font-family: "Source Sans Pro", sans-serif;
          font-size: calc(15px + (18 - 15) * ((100vw - 300px) / (1600 - 300)));
          color: ${description};
          max-width: 100%;
        }
        .tags-container {
          display: flex;
          flex: 100%;
          max-width: 100%;
          flex-direction: column-reverse;
          margin: 2vh 0 2vh 0;
        }
        .tags-container-tag {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .tag-link {
          font-family: "Share Tech Mono", monospace;
          font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
          color: ${tag_link};
          text-decoration: none;
          margin-right: 1em;
          border-bottom: 1px dashed ${tag_link_border};
        }
        .tag-link:hover {
          background: ${tag_link_hover_background};
          color: ${tag_link_hover};
          border-bottom: 1px dashed ${tag_link_hover_border};
        }
        .tag-link:active {
          background: ${tag_link_active_background};
        }
      `}</style>
    </div>
  );
}
