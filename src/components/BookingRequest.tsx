import validator from 'email-validator'
import emailjs from '@emailjs/browser';
import { Box, Button, Icon, Paper, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import AppBarBerlin from "./AppBarBerlin";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers";

/*
email service er hos https://www.emailjs.com/
*/

export default function BookingRequest() {

  // A field on the form
  interface Field {
    name: string,
    label: string,
    edit: boolean,
    type: string,
  }

  // All fields on the form
  const fields: Array<Field> = [
    {
      name: "name",
      label: 'Navn',
      edit: true,
      type: 'text',
    },
    {
      name: 'addr1',
      label: 'Adresse. Vej, nr. sal etc',
      edit: true,
      type: 'text',
    },
    {
      name: 'addr2',
      label: 'Adresse. Postnummer og by',
      edit: true,
      type: 'text',
    },
    {
      name: 'phone',
      label: 'Telefonnummer',
      edit: true,
      type: 'text',
    },
    {
      name: 'email',
      label: 'e-mail',
      edit: true,
      type: 'text',
    },
    {
      name: 'numberofguests',
      label: 'Antal gæster',
      edit: true,
      type: 'number',
    },
    {
      name: 'datestart',
      label: 'Ankomst',
      edit: true,
      type: 'date',
    },
    {
      name: 'numberofnights',
      label: 'Antal overnatninger, min 3.',
      edit: true,
      type: 'number',
    },
    // tps 28/3/25 Remove two fields that are not supposed to be here!
    // {
    //   name: 'datefrom',
    //   label: 'Fra',
    //   edit: false,
    //   type: 'date',
    // },
    // {
    //   name: 'dateto',
    //   label: 'Til',
    //   edit: false,
    //   type: 'date',
    // },
    {
      name: 'price',
      label: 'Pris',
      edit: false,
      type: 'text',
    },
    {
      name: 'remarks',
      label: 'Bemækrninger',
      edit: false,
      type: 'text',
    },
  ]

  // Type for values on the form
  interface Values {
    name: string,
    addr1: string,
    addr2: string,
    phone: string,
    email: string,
    numberofguests: number,
    datestart: Dayjs,
    numberofnights: number
    datefrom: Dayjs | null,
    dateto: Dayjs | null,
    price: number,
    remarks: string,

  }

  // Values on the form
  const [values, setValues] = useState<Values>({
    name: '',
    addr1: '',
    addr2: '',
    phone: '',
    email: '',
    numberofguests: 0,
    datestart: dayjs(),
    numberofnights: 3,
    datefrom: null,
    dateto: null,
    price: 999,
    remarks: ''
  })

  // Set prices based on number of nights. Get price / night from editable imported public/config.js. Import is handled by index.html
  useEffect(() => {
    setValues({ ...values, price: values.numberofnights * parseInt(window.config.price) })
  }, [values.numberofnights])

  const validateInput = () => {
    if (values.name.trim() === '') {
      alert('Anfør navn')
      return false
    }

    if (values.addr1.trim() === '') {
      alert('Anfør vej, nr, sal etc hvortil nøgle sendes')
      return false
    }

    if (values.addr2.trim() === '') {
      alert('Anfør postnummer og by hvortil nøgle sendes')
      return false
    }

    if (values.phone.trim() === '') {
      alert('Anfør telefonnummer')
      return false
    }

    if (values.email.trim() === '' || !validator.validate(values.email.trim())) {
      alert('Anfør email')
      return false
    }

    if (values.numberofguests < 1) {
      alert('Anfør antal gæster')
      return false
    }

    if (!values.datestart) {
      alert('Anfør ankomstdato')
      return false
    }

    if (values.numberofnights < 3) {
      alert('Anfør antal overnatninger, minimum 3')
      return false
    }

    return true
  }

  const handleSubmit = () => {
    if (!validateInput()) {
      return
    }

    // console.log(values);
    const templateParams = JSON.parse(JSON.stringify(values));

    // Formating
    templateParams.datestart = new Date(templateParams.datestart).toLocaleString('da-DK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    templateParams.datefrom = templateParams.datestart + ' kl. 12:00';
    templateParams.dateto = new Date(values.datestart.add(values.numberofnights, 'day').toISOString()).toLocaleString('da-DK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + ' kl. 11:00'
    templateParams.price += ' kr.';
    console.log(templateParams);

    // Send email
    emailjs.send('thomasseilund_gmail_com', 'berlin_booking_request', templateParams, 'user_8Uo69EKMoCvpQYjt7RjYy')
      .then(function (response) {
        alert('Message send successfully')
        console.log('SUCCESS!', response.status, response.text)
      }, function (err) {
        alert(err)
        console.log(err)
      });
  }

  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppBarBerlin />
        <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>
          Skriv og hør nærmere:
          <br></br>
          Annette og Thomas Seilund
          <br></br>
          Mail: <a href="mailto:a_seilund@hotmail.com">a_seilund@hotmail.com</a>
          <br></br>
          <br></br>

          <Typography variant="h6">
            Booking forespørgsel
          </Typography>
          <Typography variant="body1">
            Anfør adresse nøgle skal sendes til
          </Typography>

          {
            fields.map((field, index) => (
              <Box key={index}>
                {
                  field.type === 'date' ?
                    <DatePicker
                      value={values[field.name as keyof Values]}
                      onChange={(newValue) => {
                        setValues({
                          ...values,
                          [field.name as keyof Values]: dayjs(newValue),
                          datefrom: dayjs(newValue),
                          dateto: dayjs(newValue).add(values.numberofnights, 'day'),
                        });
                      }}
                      label={field.label}
                      sx={{ m: 1 }}
                      // fullWidth
                      format="DD-MM-YYYY"
                      readOnly={!field.edit}
                    /> :
                    <TextField
                      value={values[field.name as keyof Values]}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValues({
                          ...values,
                          [field.name as keyof Values]: event.target.value,
                          dateto: field.name === 'numberofnights' ? values.datestart.add(parseInt(event.target.value), 'day') : values.dateto,
                        })
                      }}
                      label={field.label}
                      sx={{ m: 1 }}
                      type={field.type}
                    />
                }
              </Box>
            ))
          }

          <Button
            variant="contained"
            startIcon={<Icon>send</Icon>}
            onClick={handleSubmit}
          >
            Indsend
          </Button>
        </Paper>
      </LocalizationProvider>
    </Fragment>
  )
}
