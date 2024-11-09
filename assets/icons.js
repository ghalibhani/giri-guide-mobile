import { AntDesign, Ionicons } from "@expo/vector-icons";

export  const icons = {
    index: (props) => <AntDesign name="home" size={24} {...props} />,
    transaction: (props) => <Ionicons name="receipt-outline" size={24} {...props} />,
    profile: (props) => <Ionicons name="person-outline" size={24} {...props} />
}