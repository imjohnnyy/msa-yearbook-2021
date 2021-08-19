import React from "react";

import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { SocialIcon, SocialIconProps } from "../SocialIcon/SocialIcon";
import { SOCIAL_MEDIA } from "../../Assets/resourses";
import microsoftLogo from "../../Assets/Logos/microsoft_logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 60,
      textAlign: "center",
      fontSize: "12px",
      background: "#3c3c41",
      color: "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const MICROSOFT_LOGO = {
  name: "Microsoft logo",
  url: "https://www.microsoft.com/en-nz",
  logo: microsoftLogo,
};

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={4}>
                    <SocialIcon {...MICROSOFT_LOGO} />
                    {`Copyright © Microsoft Student Accelerator, 2021. All rights reserved`}
                </Grid>
                <Grid item xs={6}>
                        {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
                            return (
                                <SocialIcon key={icon.name} {...icon} />
                            )
                        })}
        </Grid>
      </Grid>
    </footer>
  );
};
