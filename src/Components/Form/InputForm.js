import React,{useState} from 'react'
import {Container,TextField,Paper,Typography,Grid,Button,CircularProgress} from '@material-ui/core/';
import styles from './Styles'
import {useHistory} from 'react-router-dom'

const InputForm = () => {
    const classes = styles()
    const history = useHistory()
    const [id, setId] = useState("")

    const handleRandom = () => {
        history.push(`/random`)
    }

    const handleClick = () => {
        history.push(`/details/${id}`)
    }
    const handleChange = (e) => {
        setId(e.target.value)
    }

    return (
        <Container  component="main" maxWidth="xs" className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">
                    Search Asteroid
                </Typography>
                    <Grid container spacing={1}>
                        <TextField
                            id="outlined-basic"
                            fullWidth label="Asteroid ID"
                            variant="outlined"
                            onChange={handleChange}
                            name='id'
                        />
                        <Button
                            type="submit"
                            fullWidth variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClick}
                            disabled={id !== '' ? false : true}
                        >
                            Submit
                        </Button>
                        <Button
                            fullWidth variant="contained"
                            className={classes.submit}
                            onClick={handleRandom}
                        >
                            Random Asteroid
                        </Button>
                    </Grid>
            </Paper>
        </Container>
    )
}

export default InputForm