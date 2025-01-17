import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Avatar, Backdrop, Button, Container, Fade, Grid, Modal } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  body:{
    height: "100%",
    margin: 0,
},
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 2, 10, 2),
    height: "40%",
    width: "35%",
    marginBottom: "19%",
    maxWidth: "100%",
    margin: "auto",
  },
  textbox :{
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "100%",
    width: "100%",
  },
  text: {
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    padding: theme.spacing(2, 4, 3),
    color: theme.palette.primary.main
  },
  avatar: {

  }
}));

export default function AddPost(props) {
  const classes = useStyles();
  
  function updatePostData(data) {
    props.onChange(data)
  }

  const { user, postData } = props;
  const { text, pictures } = postData;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal }
        open={props.open}
        onClose={() => props.onClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Container >
            <Grid container justify={"center"} spacing={3}>
              <Grid item xs={2}>
                <div className={classes.avatar}>
                  <Avatar 
                      src={user.profilePicture}
                    >
                      {user.firstName.substr(0, 1) + user.lastName.substr(0, 1)}
                  </Avatar>
                </div>
              </Grid>
              <Grid item xs={10} >
                <TextField
                  style={{
                    width: "100%",
                    height: "10%"
                  }}
                  id="text-text-input"
                  variant="outlined"
                  label="What is on your mind..."
                  value={text}
                  multiline
                  rowsMax={8}
                  rows={10}
                  onChange={(event) => updatePostData({ text: event.target.value })}
                />
              </Grid>
              <Grid item xs={12} >
                  <TextField
                    style={{
                      width: "100%",
                    }}
                    value={pictures}
                    id="picture-text-input"
                    variant="outlined"
                    label="Add image URLs, separate with comma (,)"
                    onChange={(event) => updatePostData({ pictures: event.target.value })}
                  />
              </Grid>
                <Grid item xs={5} justify={"center"} padding={5}>
                  <Button
                    style={{
                      width: "100%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    variant="contained" 
                    color="primary"
                    id="post-button"
                    endIcon={<PostAddIcon />}
                    onClick={() => props.onPost()}
                  >
                    POST
                  </Button>
                </Grid>   
              </Grid>
            </Container>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}