import React from "react";
import { IconButton } from "@material-ui/core";

export interface SocialIconProps {
   /**
   * Name of the social icon
   */
  name: string;
    /**
   * URL that the social icon links to
   */
  url: string;
   /**
   * Imported svg file for the social icon to render its logo.
   */
  logo: string;
}

/**
 * Social Icon used to render social media icons
 */
export const SocialIcon: React.FC<SocialIconProps> = ({ name, url, logo }) => {
  return (
    <IconButton href={url}>
      <img src={logo} id={logo} height="20px" alt={name} />
    </IconButton>
  );
};
