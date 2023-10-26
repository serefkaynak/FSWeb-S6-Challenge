// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


export default function Karakter(props) {
    const kisi = props.kisi
    const [gezegen, setGezegen] = useState(''); 

    useEffect(() => {
        axios.get(kisi.homeworld)
            .then(function (res) {
                setGezegen(res.data.name)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
       <Accordion className='accordion-item'>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar src="/static/images/avatar.jpg" sx={{ width: 24, height: 24 }}
          alt={kisi.name}
          style={{
            backgroundColor: 'black',
            border: '1px solid #ccc',
                 }
                }
            />
          <Typography variant='overline' sx={{ ml: 2 }}
          fontWeight='bold'
          fontSize='1rem'
          color='text.primary'
           >{ kisi.name }
           </Typography>
           
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Gender: <strong>{kisi.gender}</strong></p>
            <p>Hair color: <strong>{kisi.hair_color}</strong> </p>
            <p>Height: <strong>{kisi.height}</strong></p>
            <p>Homeworld: <strong>{ gezegen }</strong></p>
            <p>Mass:<strong>{kisi.mass}</strong></p>
            <p>Skin color: <strong>{kisi.skin_color}</strong></p>
            <p>Movies:<strong>{ kisi.films.join(', ') }</strong></p>
         </Typography>
        </AccordionDetails>
      </Accordion>
    )
}
