import MapView, { Marker } from "react-native-maps";

const { View, Text } = require("react-native");
import { styles } from "../main/styles/mapStyles";

export const MapScreen = ({ navigation, route }) => {
  const { latitude, longitude } = route.params.location;
  return (
    <View style={styles.container}>
      <View style={styles.mapBox}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>
    </View>
  );
};
