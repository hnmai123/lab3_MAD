import { StyleSheet, View, Text, Button} from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';


const LOCATION_TASK_TIME = 'background-location-task';

const requestPermission = async () => {
  const {status: foregroundStatus} = await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === 'granted') {
    const {status: backgroundStatus} = await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_TIME, {
        accuracy: Location.Accuracy.Balanced
      });
    }
  }
};

const PermissionsButton = () => {
  <View style = {styles.container}>
    <Button onPress={requestPermission} title = "Enable background location"/>
  </View>
};

TaskManager.defineTask(LOCATION_TASK_TIME, ({data, error}) => {
  alert("Start Task Manager");
  if (error) {
    console.log(error.message);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;
    let speed = locations[0].coords.speed;
    let heading = locations[0].coords.heading;
    let accuracy = location[0].coords.accuracy;

    alert(
      `${new Date(Date.now()).toLocaleString()}: ${lat}, ${long} - Speed: ${speed} - Precision: ${accuracy} - Heading: ${heading}`
    );
  }
}); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default PermissionsButton;
