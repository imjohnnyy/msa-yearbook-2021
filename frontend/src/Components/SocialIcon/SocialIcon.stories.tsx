import React from 'react';
import microsoftLogo from "../../Assets/Logos/microsoft_logo.svg"
import discordLogo from "../../Assets/Logos/discord_logo.svg"
import facebookLogo from "../../Assets/Logos/facebookgroup_logo.svg"
import youtubeLogo from "../../Assets/Logos/youtube_logo.svg"
import githubLogo from "../../Assets/Logos/github_logo.svg"

import { Story, Meta } from '@storybook/react';
import { SocialIconProps, SocialIcon } from './SocialIcon';


export default {
    title: 'Example/SocialIcon',
    component: SocialIcon,
} as Meta;

const Template: Story<SocialIconProps> = (args) => (
    <div style={{ backgroundColor: "black" }}>
        <SocialIcon {...args} />
    </div>
)

export const GithubIcon = Template.bind({});
GithubIcon.args = {
    name: "GitHub",
    url: "https://github.com/nzmsa",
    logo: githubLogo
};

export const MicrosoftIcon = Template.bind({});
MicrosoftIcon.args = {
  name: "Microsoft logo",
  url: "https://www.microsoft.com/en-nz",
  logo: microsoftLogo,
};

export const FacebookIcon = Template.bind({});
FacebookIcon.args = {
  name: "Facebook",
  url: "https://www.facebook.com/studentaccelerator/",
  logo: facebookLogo,
};
export const DiscordIcon = Template.bind({});
DiscordIcon.args = {
  name: "Discord",
  url: "https://discord.gg/c4Y5SAZ",
  logo: discordLogo,
};

export const YoutubeIcon = Template.bind({});
YoutubeIcon.args = {
  name: "YouTube",
  url: "https://www.youtube.com/channel/UCCegNuS_AZjK-P3ZMN3JXNw",
  logo: youtubeLogo,
};
