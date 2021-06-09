import logo from './logo.svg';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from '@material-ui/core/Box';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

export default function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          ACCESS MINDANAO
      </Text>
        <Text style={styles.headerText1}>
          Internet Speed Recorder
      </Text>
      </View>

      <Box style={styles.test}>
        <Button style={styles.buttonwidth}><Text style={styles.text}>Edit</Text></Button>
        <Text style={styles.distance}> </Text>
        <Button style={styles.buttonwidth}><Text style={styles.text}>Clear All</Text></Button>
      </Box>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            WiFi Name Here
            </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
          >
            <Text style={styles.speedTest}>Ping</Text>
            <Text style={styles.speedTest}>Download Speed</Text>
            <Text style={styles.speedTest}>Upload Speed</Text>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
          >
            <Text style={styles.testResults}>100ms</Text>
            <Text style={styles.testResults1}>100 Mbps</Text>
            <Text style={styles.testResults}>3.8 Mbps</Text>
          </Grid>
          <Typography className={classes.dateRecord} color="textSecondary" gutterBottom>
            Date Recorded
          </Typography>
        </CardContent>
      </Card>


      <View style={styles.footer}>
        <Button style={styles.buttonwidth}><Text style={styles.text1}><Link href="Test.js">
          Record Speed Test</Link>
      </Text>
        </Button>
      </View>
    </View>
  );

}
const useStyles = makeStyles({
  test: {
    paddingTop: 500,
    marginRight: 1000,
  },
  root: {
    width: 800,
    marginTop: 30,
    borderRadius: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    color: '#C66E3D',
  },
  pos: {
    marginBottom: 12,
  },
  buttonwidth: {
    width: 10,
    paddingRight: 1000,
  },
  dateRecord: {
    marginTop: 5,
  },

});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200
  },
  header: {
    backgroundColor: '#072A46',
    padding: 20,
    width: '100%',
    height: 70,
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#072A46',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
  },
  text: {
    color: '#072A46',
    fontWeight: 'bold',
  },
  text1: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  distance: {
    marginLeft: 650,

  },
  headerText1: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  speedTest: {
    color: '#072A46',
    fontWeight: 'bold',
    //paddingRight: 100,
    fontSize: '20px',
  },
  testResults: {
    color: '#C66E3D',
    fontWeight: 'bold',
    marginRight: 43,
    fontSize: '20px',
  },
  testResults1: {
    color: '#C66E3D',
    fontWeight: 'bold',
    fontSize: '20px',
    marginRight: 130
  },
  testResults2: {
    color: '#C66E3D',
    fontWeight: 'bold',
    //paddingRight: 100,
    fontSize: '20px',
    //marginLeft: 85,

  },
});