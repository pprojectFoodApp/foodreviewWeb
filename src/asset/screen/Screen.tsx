import { useMediaQuery } from "@mui/material";

export const useScreen = () => {
  const isScreen1024 = useMediaQuery("(max-width:1024px)");
  const isScreen1240 = useMediaQuery("(max-width:1240px)");
  const isScreen960 = useMediaQuery("(max-width:960px)");
  const isScreen774 = useMediaQuery("(max-width:774px)");

  return { isScreen1024, isScreen1240, isScreen774, isScreen960 };
};
