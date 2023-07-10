import { Container, Link, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "24px 0",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
    },
    footerText: {
      marginBottom: "12px",
    },
    link: {
      color: "#fff",
      textDecoration: "underline",
      marginLeft: "4px",
    },
    content: {
      paddingBottom: "60px", // Add padding to the content to prevent it from being hidden behind the footer
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="h5" className={classes.footerText}>
            Get the latest updates and news.
          </Typography>
          <Typography variant="body1" className={classes.footerText}>
            Subscribe to our newsletter:
            <Link
              href="https://example.com/newsletter"
              target="_blank"
              rel="noopener"
              className={classes.link}
            >
              Sign Up Now
            </Link>
          </Typography>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} My Awesome Website. All rights
            reserved.
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
