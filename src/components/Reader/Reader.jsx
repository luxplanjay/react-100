import { useEffect, useState } from "react";
import Controls from "../Controls/Controls";
import Progress from "../Progress/Progress";
import ArticleView from "../ArticleView/ArticleView";

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(() => {
    const savedIdx = localStorage.getItem("article-idx");
    return savedIdx !== null ? JSON.parse(savedIdx) : 0;
  });

  useEffect(() => {
    localStorage.setItem("article-idx", selectedIdx);
  }, [selectedIdx]);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const totalItems = items.length;
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === totalItems - 1;
  const currentItem = items[selectedIdx];

  return (
    <div>
      <Controls
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={isFirst}
        isLast={isLast}
      />
      <Progress current={selectedIdx + 1} total={totalItems} />
      <ArticleView article={currentItem} />
    </div>
  );
}
