import Link from "next/link";
import React from "react";
import Card from "./Card";

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

export default function CardLayout({ postsMetaData }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {postsMetaData.map((metadata, index) => {
        return (
          <Card metadata={metadata.metadata} key={metadata.metadata.title} />
        );
        return (
          <div className="card-container" key={metadata.metadata.title}>
            <div>
              <div className="img-container">
                <img
                  src={
                    "/images/" + (metadata.metadata.imgName ?? "no-image.png")
                  }
                  alt={metadata.metadata.title}
                />
              </div>

              <div className="info-container">
                <div className="description-container">
                  <Link
                    href={`/blog/${metadata.metadata.id}`}
                    key={metadata.metadata.title}
                    className="info-container-link"
                  >
                    {metadata.metadata.title}
                  </Link>
                  <p className="description">{metadata.metadata.description}</p>
                </div>

                <div className="tags-container">
                  <div className="tags-container-tag">
                    {metadata.metadata.tags?.map((tag_name, index) => {
                      return (
                        <Link
                          href={`/tags/${tag_name}`}
                          key={tag_name}
                          className="tag-link"
                        >
                          {"#" + tag_name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

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
        @media screen and (max-width: 1100px) {
          .card-layout {
            flex-direction: row;
            margin: 1vh 5vw 1vh 5vw;
          }
          .card-container {
            flex: 0 1 43vw;
            margin: 1vh 1vw 1vh 1vw;
          }
          img {
            width: 100%;
            max-width: 100%;
            height: 23vw;
            object-fit: cover;
          }
        }
        @media screen and (max-width: 480px) {
          .card-layout {
            flex-direction: row;
            margin: 1vh 5vw 1vh 5vw;
          }
          .card-container {
            flex: 0 1 90vw;
            margin: 1vh 0 1vh 0;
            border-bottom: 3px solid ${card_container_hover_border};
          }
          img {
            width: 100%;
            max-width: 100%;
            height: 45vw;
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
}
