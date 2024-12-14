// icons.js
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const ChevronDownIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome name="angle-down" size={size} color={color} />
);

// Fashion
export const FashionIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome5 name="cubes" size={size} color={color} />
);