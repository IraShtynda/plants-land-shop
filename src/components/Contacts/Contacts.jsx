import { Container, Typography, Grid } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import DataContacts from './DataContacts';
import ContactForm from './ContactForm';

const ContactsWrapper = styled(MuiBox)(() => ({
    marginTop: '-160px',
    [`@media screen and (max-width: 900px)`]: {
        marginTop: '-40px',
        padding: '60px 0',
    },
    padding: '90px 0',
}))

const Contacts = () => {

    return (
        <ContactsWrapper id="contacts">
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2'>―PLANT STORE―</Typography>
                        <Typography variant='h3'>Contacts</Typography>
                        <DataContacts />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4843225527156!2d-73.8253871!3d40.707353499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260bbf1f6fefd%3A0xea800a8bc96a6b54!2zODQtNCAxMjd0aCBTdCwgS2V3IEdhcmRlbnMsIE5ZIDExNDE1LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1672044878233!5m2!1suk!2sua" height={300} title="map" width='100%'></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </ContactsWrapper>
    )
}

export default Contacts