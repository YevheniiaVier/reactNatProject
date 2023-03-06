import MapView, { Marker } from "react-native-maps";

const { View, Text } = require("react-native");
import { styles } from "../main/styles/mapStyles";

export const MapScreen = ({ route }) => {
  console.log(route.params, "map");
  const { latitude, longitude } = route.params.location;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker title="тутоньки" coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
};
