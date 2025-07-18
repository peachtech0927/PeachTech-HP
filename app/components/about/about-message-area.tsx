import { Box, Typography } from "@mui/material";
import Image from "next/image";

type TProps = {
  title: string;
  comment: string;
};

const AboutMessageArea: React.FC<TProps> = ({ title, comment }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      px={{ xs: 3, md: 30 }}
    >
      <Box
        my={4}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #E6E6E6"}
        borderRadius={"8px"}
        p={{ xs: 2, md: 8 }}
      >
        <Box display={"flex"} alignItems={"center"} mr={{ md: 4 }}>
          <Image src="/peachtech.png" alt="logo" width={120} height={120} />
        </Box>
        <Box>
          <Typography
            component={"h3"}
            fontWeight={"bold"}
            fontSize={{ xs: 18, sm: 20 }}
            mb={1}
          >
            {title}
          </Typography>
          <Typography
            fontSize={{
              xs: 13,
              md: 14,
            }}
            letterSpacing={0.8}
          >
            {comment}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMessageArea;
