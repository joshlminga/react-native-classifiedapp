// icons.js
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const ChevronDownIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome name="angle-down" size={size} color={color} />
);

// Fashion
export const FashionIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome5 name="cubes" size={size} color={color} />
);

// Asterisk
export const AsteriskIcon = ({ size = 20, color = "red" }) => (
  <MaterialCommunityIcons name="asterisk" size={size} color={color}/>
);