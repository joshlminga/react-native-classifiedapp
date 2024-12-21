// icons.js
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Home
export const HomeIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome name="home" size={size} color={color} />
);

// Arrow Down
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

// Search
export const SearchIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome name="search" size={size} color={color} />
);

// Plus
export const PlusIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome5 name="plus" size={size} color={color} />
);

// User
export const UserIcon = ({ size = 20, color = "black" }) => (
  <FontAwesome5 name="user" size={size} color={color}/>
);
