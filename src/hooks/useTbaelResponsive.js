import { useState } from "react";

export const useTableResponsive = () => {
  const [isSmallView, setIsSmallView] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsSmallView(window.innerWidth <= 768);
  };

  return { isSmallView, handleResize };
};
