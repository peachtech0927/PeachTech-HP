"use client";

import {
  AccordionDetails,
  AccordionProps,
  AccordionSummaryProps,
  Typography,
  styled,
} from "@mui/material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordion from "@mui/material/Accordion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { accordionContentDataProps } from "@/app/const/accordion-contene-data";

const AccordionBar: React.FC<accordionContentDataProps> = ({
  accordionTitle,
  description,
}) => {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography fontSize={{ xs: 14, sm: 18 }} fontWeight={"bold"}>
          {accordionTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ py: 0.5 }}>
        <Typography pl={{ xs: 1.5, sm: 4 }} fontSize={{ xs: 13, sm: 15 }}>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "white",
  padding: "5px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    padding: "5px 0px",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronRightIcon fontSize={"medium"} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginLeft: "2px",
    },
  },
}));

export default AccordionBar;
