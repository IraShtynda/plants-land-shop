import { Typography, Grid } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';


const DataWrapper = styled(MuiBox)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    paddingTop: 0
}))
const DataGrid = styled(Grid)(() => ({
    marginBottom: '10px',
    [`@media screen and (max-width: 900px)`]: {
        marginTop: '10px',
    },
}))
const ContactTitle = styled(Typography)(() => ({
    [`@media screen and (max-width: 600px)`]: {
        marginBottom: 0,
    },
}))

const DataContacts = () => {

    return (<>
        <DataGrid container spacing={2}>
            <Grid item xs={12} md={4}>
                <ContactTitle variant='h5'>Address</ContactTitle>
            </Grid>
            <Grid item xs={12} md={8}>
                <DataWrapper>
                    <Typography variant='p'>84-4 127th St, Kew Gardens, </Typography>
                    <Typography variant='p'>NY 11415, USA</Typography>
                </DataWrapper>
            </Grid>
        </DataGrid>
        <DataGrid container spacing={2}>
            <Grid item xs={12} md={4}>
                <ContactTitle variant='h5'>Hours</ContactTitle>
            </Grid>
            <Grid item xs={12} md={8}>
                <DataWrapper>
                    <Typography variant='p'>Monday - Saturday: 11 AM - 9 PM</Typography>
                    <Typography variant='p'>Sunday: 11 AM - 7 PM</Typography>
                </DataWrapper>
            </Grid>
        </DataGrid>
        <DataGrid container spacing={2}>
            <Grid item xs={12} md={4}>
                <ContactTitle variant='h5'>Contacts</ContactTitle>
            </Grid>
            <Grid item xs={12} md={8}>
                <DataWrapper>
                    <Typography variant='h6'>84-4 127th St, Kew Gardens, </Typography>
                    <Typography variant='h6'>NY 11415, USA</Typography>
                </DataWrapper>
            </Grid>
        </DataGrid>
    </>
    )
}

export default DataContacts