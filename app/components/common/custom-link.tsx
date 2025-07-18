import NextLink from "next/link";
import { Link as MuiLink, SxProps } from "@mui/material";

type TProps = {
  href: string;
  children?: React.ReactNode;
  rel?: boolean;
  underline?: "none" | "hover" | "always" | undefined;
  sx?: SxProps;
};

const CustomLink: React.FC<TProps> = ({
  href,
  children,
  rel = false,
  underline,
  sx,
}) => {
  return (
    <NextLink href={href} legacyBehavior>
      {rel ? (
        <MuiLink
          target="_blank"
          rel="noopener noreferrer"
          underline={underline}
          sx={sx}
        >
          {children}
        </MuiLink>
      ) : (
        <MuiLink underline={underline} sx={sx}>
          {children}
        </MuiLink>
      )}
    </NextLink>
  );
};

export default CustomLink;
