import styled, { css } from 'styled-components';
import {
  AiOutlineGithub as Github,
  AiOutlineLinkedin as Linkedin,
  AiOutlineTwitter as Twitter,
  AiOutlineMedium as Medium,
  AiOutlineCodepen as Codepen,
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const IconStyles = css`
  height: 1.2em;
  width: 1.2em;
`;

export const GitHubIcon = styled(Github)`
  ${IconStyles}
`;

export const TwitterIcon = styled(Twitter)`
  ${IconStyles}
`;

export const CodepenIcon = styled(Codepen)`
  ${IconStyles}
`;

export const LinkedInIcon = styled(Linkedin)`
  ${IconStyles}
`;

export const MediumIcon = styled(Medium)`
  ${IconStyles}
`;

export const MailIcon = styled(HiOutlineMail)`
  ${IconStyles}
`;
