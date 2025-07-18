import { Box, Typography, Divider, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Heading from "../common/heading";

type TProps = {
  title: string;
  subtitle: string;
  src: string;
  description: string;
};

const FormBar: React.FC<TProps> = ({ title, subtitle, src, description }) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      py={{ xs: 6, sm: 10 }}
    >
      <Heading title={title} />
      <Box width={{ xs: "90%", sm: "60%" }} mt={{ xs: 3, sm: 5 }}>
        <Divider />
        <Link
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none", color: "black" }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            px={3}
            py={2}
            position={"relative"}
          >
            <Box>
              <Typography
                fontSize={{ xs: 17, sm: 18 }}
                fontWeight={"bold"}
                mb={1}
              >
                {subtitle}
              </Typography>
              <Typography fontSize={{ xs: 13, sm: 13 }} color="gray" pr={4}>
                {description}
              </Typography>
            </Box>
            <ChevronRightIcon
              fontSize="large"
              sx={{ position: "absolute", right: 5 }}
            />
          </Box>
        </Link>
        <Divider />
      </Box>
    </Box>
  );
};

export default FormBar;
