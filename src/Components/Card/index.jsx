// import { Container } from './styles';

import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  makeStyles,
} from "@material-ui/core";

import CodeIcon from "@material-ui/icons/Code";

function CardTech({ title, status, onClick }) {
  const useStyles = makeStyles({
    root: {
      width: 275,
      margin: 30,
      backgroundColor: "#00aeff65",
      border: "2px solid #45425A",
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <CodeIcon fontSize="large" />
        <Typography color="textSecondary">Tecnologia:</Typography>
        <h2>{title}</h2>
        <Typography color="textSecondary">Status:</Typography>
        <h3>{status}</h3>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" onClick={onClick}>
          Desaprendi a tecnologia
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardTech;
