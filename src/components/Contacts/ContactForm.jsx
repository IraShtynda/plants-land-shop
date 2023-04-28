import { useState } from "react";
import { Typography, Card, TextField, Grid } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { Colors } from '../../styles/index'
import { styled } from '@mui/material/styles';

const Input = styled(TextField)(() => ({
    width: '100%',
}))

const ContactForm = () => {
    const initialValues = {
        firstName: "",
        phone: "",
        email: "",
        message: ""
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const [formValues, setFormValues] = useState(initialValues);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <Card sx={{ borderTop: `5px solid ${Colors.accent}`, padding: '60px' }}>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column" spacing='20px' >
                    <Typography variant='h3'>Send a Request</Typography>
                    <Typography variant='p'>If you want to buy a plant, visit our offline store or the greenhouse, leave us a message.</Typography>
                    <Grid item width='100%'>
                        <Input
                            id="firstName"
                            name="firstName"
                            label="Enter your full name*"
                            type="text"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item width='100%'>
                        <Input
                            id="phone"
                            name="phone"
                            label="Enter your phone number*"
                            type="tel"
                            value={formValues.phone}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item width='100%'>
                        <Input
                            id="email"
                            name="e-mail"
                            label="e-mail"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item width='100%'>
                        <Input
                            id="message"
                            name="message"
                            label="Type your message"
                            type="text"
                            value={formValues.message}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item width='100%'>
                        <MuiButton variant='submit'>SUBMIT</MuiButton>
                    </Grid>
                </Grid>
            </form>
        </Card>
    );
}
export default ContactForm;