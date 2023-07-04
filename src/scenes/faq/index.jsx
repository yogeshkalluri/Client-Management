import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is Material UI?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Material UI is an open-source React component library that implements Google's Material Design. 
                    It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        How many dashboards can I have in my workspace?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can have any number of dashboards in your workspace. 
                        I recommend keeping only the dashboards that are relevant to your users.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What are the tools Used? 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ReactJs, Material UI
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Who is the Developer?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Yogesh Kalluri
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;