import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function User(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // +++++++++++++++++++ schema ++++++++++++++++++++++
    let schema = yup.object().shape({
        name: yup.string().required("Name Is Required Field."),
        age: yup.number().required("age Is Required Field.").positive("please enter positive number"),
        email: yup.string().email("invalid email").required("email Is Required Field.")
    })

    const formobj = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: ''
        },

        validationSchema: schema,
        onSubmit: values => {
            console.log(values);
            setOpen(false);
        }
    })

    const { handleBlur, handleChange, handleSubmit, errors, touched, setFieldTouched } = formobj

    return (
        <>
            <h1>User Component ..</h1>
            <Divider />

            <div>
                <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    sx={{ top: "20px", left: "50px", backgroundColor: "#aeb1d1", color: "black", fontWeight: "bold" }}
                >
                    User
                </Button>

                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogTitle>User</DialogTitle>
                    <Divider />
                    <Formik values={formobj} >
                        <Form onSubmit={handleSubmit}  >
                            <DialogContent >
                                <DialogContentText>
                                    Add Your Basic Information.
                                </DialogContentText>

                                <TextField
                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    // what is differnce bitween up and down
                                    // onChange={e => {setFieldTouched('name');  handleChange(e)}}
                                    onBlur={handleBlur}
                                />
                                {errors.name !== '' && touched.name ? <p className='form-error'>{errors.name}</p> : null}

                                <TextField
                                    margin="dense"
                                    id="age"
                                    name="age"
                                    label="Age"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    // onChange={e => {setFieldTouched('name');  handleChange(e)}}
                                    onBlur={handleBlur}
                                />
                                {errors.age !== '' && touched.age ? <p className='form-error'>{errors.age}</p> : null}

                                <TextField
                                    margin="dense"
                                    type="text"
                                    name="email"
                                    id="email"
                                    label="E-mail"
                                    fullWidth
                                    variant="standard"
                                    onBlur={handleBlur}
                                    onChange={e => { setFieldTouched('email'); handleChange(e) }}
                                // onChange={e => {setFieldTouched('name');  handleChange(e)}}

                                />
                                {errors.email !== "" && touched.email ? <p>{errors.email}</p> : null}
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Add</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>

        </>
    );
}

export default User;