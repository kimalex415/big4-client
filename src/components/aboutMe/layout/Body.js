import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const style = {
    paper: { padding: 20, marginTop: 10, marginButton: 20 }

}


export default () => (

    <Grid container sm={12}>
        <Grid item sm>
            <Paper style={style.paper}>
                Left Pane
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.paper}>

                Right Pane
            </Paper>
        </Grid>
    </Grid>

)
