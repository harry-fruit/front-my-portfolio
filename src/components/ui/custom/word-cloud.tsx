"use client";

import { useRef, useState } from "react";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import Wordcloud from "@visx/wordcloud/lib/Wordcloud";
import useSize from "@/hooks/use-size";

type WordData = {
  text: string;
  value: number;
};

const colors = ["#CFC1DE", "#A743DE", "#BD87DE"];

function getRotationDegree() {
  const rand = Math.random();
  const degree = rand > 0.5 ? 60 : -60;
  return rand * degree;
}

const words = [
  { text: "Full-stack", value: 20 },
  { text: "React", value: 8 },
  { text: "TypeScript", value: 15 },
  { text: "HTML", value: 5 },
  { text: "CSS", value: 5 },
  { text: "Node.js", value: 7 },
  { text: "Go", value: 6 },
  { text: "Docker", value: 6 },
  { text: "AWS", value: 5 },
  { text: "Azure", value: 5 },
  { text: "Python", value: 15 },
  { text: "Langchain", value: 6 },
  { text: "Tailwind", value: 6 },
  { text: "Next.js", value: 8 },
  { text: "Pandas", value: 6 },
  { text: "SQL Server", value: 10 },
  { text: "MongoDB", value: 6 },
  { text: "Jest", value: 6 },
];

const fontScale = scaleLog({
  domain: [
    Math.min(...words.map((w) => w.value)),
    Math.max(...words.map((w) => w.value)),
  ],
  range: [10, 100],
});
const fontSizeSetter = (datum: WordData) => fontScale(datum.value);
const fixedValueGenerator = () => 0.5;

export function WordCloud({ className = "" }: { className?: string }) {
  const [withRotation] = useState(false);
  const ref = useRef(null);
  const { width: parentWidth, height: parentHeight } = useSize(ref);

  return (
    <div className={className} ref={ref}>
      {parentWidth && parentHeight && (
        <Wordcloud
          words={words}
          width={parentWidth -15}
          height={parentHeight -15}
          fontSize={fontSizeSetter}
          font={"Impact"}
          padding={2}
          rotate={withRotation ? getRotationDegree : 0}
          random={fixedValueGenerator}
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => (
              <Text
                key={w.text}
                fill={colors[i % colors.length]}
                textAnchor={"middle"}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
              >
                {w.text}
              </Text>
            ))
          }
        </Wordcloud>
      )}
    </div>
  );
}
