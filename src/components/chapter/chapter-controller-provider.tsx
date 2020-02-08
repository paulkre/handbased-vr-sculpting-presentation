import React from "react";

type ChapterControllerProviderProps = {
  setSlideTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const ChapterControllerContext = React.createContext<ChapterControllerProviderProps | null>(
  null
);

export const ChapterControllerProvider: React.FC<ChapterControllerProviderProps> = ({
  children,
  setSlideTitle
}) => (
  <ChapterControllerContext.Provider value={{ setSlideTitle }}>
    {children}
  </ChapterControllerContext.Provider>
);
