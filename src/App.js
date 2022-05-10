import React, { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




function App() {
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [userdetails, setUserDetails] = useState([]);

  const deleteevent = (id) => {
    let userdetailsupdate = userdetails.filter(item => item.id !=id)
    setUserDetails(userdetailsupdate)
  }

  const handlesubmit = (e) => {

    if (name, fname, email, phoneno, place) {
      let details = {
        id: Math.random(), name, fname, email, phoneno, place

      }
      setUserDetails([...userdetails, details]);
      setName("")
      setFname("")
      setEmail("")
      setPhone("")
      setPlace("")
    }
    else {
      alert("enter all the values");
    }

  }

  console.log(userdetails);
  return (

    <div className="App">
      <Box >
        <AppBar position="static">
         
            <h1>
              CRUD
            </h1>
        
        </AppBar>
      </Box>

      <Box
        
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}

      >
        <TextField id="name" value={name} label="NAME"  onChange={(e) => setName(e.target.value)} /><br />
        <TextField id="fname" value={fname} label="FATHER NAME"  onChange={(e) => setFname(e.target.value)} /><br />
        <TextField id="email" value={email} label="E-MAIL"  onChange={(e) => setEmail(e.target.value)} /><br />
        <TextField id="phoneno" value={phoneno} label="Mobile number"  onChange={(e) => setPhone(e.target.value)} /><br />
        <TextField id="place" value={place} label="PLACE" variant="outlined" onChange={(e) => setPlace(e.target.value)} /><br />
        <Button id="button" onClick={handlesubmit}>Submit</Button>

      </Box><br />

      {userdetails && userdetails.map(eachDetail => {
        return (
          <Card  sx={{ maxWidth: 345, margin: '20px 0 0 180px', padding: '50px' }}>
            
            <CardMedia
              component="img"
              height="194"
              image="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
              alt="normalimage"
              
            />
            

            <CardContent>
              <h4 >NAME:{eachDetail.name}
              </h4>
              <h4  >FATHER NAME:{eachDetail.fname}
              </h4>
              <h4 >EMAIL:{eachDetail.email}
              </h4>
              <h4  >MOBILE NUMBER:{eachDetail.phoneno}
              </h4>
              <h4  >PLACE:{eachDetail.place}
              </h4>

            </CardContent>
            <Button padding="10px" onClick={ () => deleteevent(eachDetail.id)} >
              Delete
            </Button>
    

          </Card>
        )

      })}





    </div>
  );
}

export default App;
