import { Octicons, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

const getIcon = (name: string, color: string) => {
  switch (name) {
    case "index":
      return <Octicons name="home" size={20} color={color} />;
    case "cart":
      return <Feather name="shopping-cart" size={20} color={color} />;
    case "payment":
      return (
        <MaterialIcons name="account-balance-wallet" size={20} color={color} />
      );
    case "profile":
      return <Octicons name="person" size={20} color={color} />;
    default:
      return null;
  }
};

export { getIcon };
