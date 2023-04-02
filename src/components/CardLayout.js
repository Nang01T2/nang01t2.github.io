import React from "react";
import Card from "./Card";

export default function CardLayout({ postsMetaData }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {postsMetaData.map((metadata, index) => {
        return (
          <Card metadata={metadata.metadata} key={metadata.metadata.title} />
        );
      })}
    </div>
  );
}
