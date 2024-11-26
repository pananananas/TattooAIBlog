import React from "react";
import Link from "next/link";
import Image from "next/image";
import CardStack from "./card-stack";
import { highlight } from "sugar-high";
import { MDXRemote } from "next-mdx-remote/rsc";
import { images_folder_1 } from "../lib/imageData";
import TopicAreaChart from "./charts/topic-area-chart";
import TattooStylesAreaChart from "./charts/popularity-area-chart";
import StyleSentimentAreaChart from "./charts/sentiment-area-chart";
import SentimentMeanBarChart from "./charts/sentiment-mean-bar-chart";

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg max-w-full h-auto" {...props} />;
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  CardStack,
  TattooStylesAreaChart,
  StyleSentimentAreaChart,
  SentimentMeanBarChart,
  TopicAreaChart,
};

export function CustomMDX(props) {
  const { source, ...rest } = props;
  return (
    <div className="mdx-content">
      <MDXRemote
        {...rest}
        source={source}
        components={components}
        scope={{ images_folder_1 }}
      />
    </div>
  );
}
