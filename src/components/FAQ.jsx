import { Container, Typography, Grid } from '@mui/material';
import MuiBox from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiButton from '@mui/material/Button';
import MuiLink from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const FAQWrapper = styled(MuiBox)(() => ({
    paddingTop: '60px',
}))

const Accordion = styled(MuiAccordion)(() => ({
    boxShadow: 'none',
}))

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
    padding: 0,
}))
const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: 0,
}))
const FAQ = () => {
    return (
        <FAQWrapper>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <img src='https://res2.weblium.site/res/5ed0f79571a6c000211a3d8a/5ed7a9e30343780021013cf4_optimized_908_e1000x819-48x75?nowebp' alt='Illustration' width="100%"/>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ marginTop: '30px' }}>
                        <Typography variant='h2'>―FAQ―</Typography>
                        <Typography variant='h3'>Have a Question?</Typography>
                        <Typography variant='p'>We are happy to answer any questions! Come to our store or leave your question in the contact form!</Typography>
                        <Accordion sx={{ marginTop: '10px' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color='info' />}
                            >
                                <Typography variant="h5" sx={{ marginBottom: '5px' }}>Do you sell trees?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="p">
                                    Yes, in our store, you can buy decorative trees for the garden.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color='info' />}
                            >
                                <Typography variant="h5" sx={{ marginBottom: '5px' }}>Can I buy already grown-up plants?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="p">
                                    Of course, we have a large greenhouse where we grow plants. You can buy an adult plant in a pot.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color='info' />}
                            >
                                <Typography variant="h5" sx={{ marginBottom: '5px' }}>Can I buy plants online?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="p">
                                    No, we don't have an online store. To buy a plant, come to our offline store or leave us a message.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <MuiLink href="#contacts"><MuiButton variant='primary' sx={{ marginTop: '20px' }}>CONTACT US</MuiButton></MuiLink>
                    </Grid>
                </Grid>
            </Container>
        </FAQWrapper>
    )
}

export default FAQ