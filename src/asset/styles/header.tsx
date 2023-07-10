import { useScreen } from "../screen/Screen";

const useHeaderStyles = () => {
  const { isScreen1024, isScreen1240, isScreen774, isScreen960 } = useScreen();
  const LogoutBtn = {
    marginLeft: "auto",
    right: 30,
    height: 50,
    width: 150,
    alignSelf: "center",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "#f0f0f0",
      boxShadow:
        "5px 4px 10px 10px rgba(227,95,95,0.15);-webkit-box-shadow: 5px 4px 10px 10px rgba(227,95,95,0.15);-moz-box-shadow: 5px 4px 10px 10px rgba(227,95,95,0.15),",
      height: 51,
      width: 151,
    },
    ...(isScreen960 && {
      width: 100,
      height: 40,
      "&:hover": {
        width: 101,
        height: 41,
        backgroundColor: "red",
        color: "#f0f0f0",
        boxShadow:
          "5px 4px 10px 10px rgba(227,95,95,0.15);-webkit-box-shadow: 5px 4px 10px 10px rgba(227,95,95,0.15);-moz-box-shadow: 5px 4px 10px 10px rgba(227,95,95,0.15),",
      },
    }),
  };
  const containerHeader = {
    backgroundColor: "#ffffff",
    color: "#000000",
    display: "flex",
    flexDirection: "row",
  };
  
  const hoverText = {
    "&:hover": {
      color: "red",
      fontSize: 14.5,
    },
  };  
  return { LogoutBtn, containerHeader, hoverText };
};

export default useHeaderStyles;
