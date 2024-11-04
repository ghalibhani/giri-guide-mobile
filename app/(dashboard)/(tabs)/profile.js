import HomeProfileGuideScreen from "../profile/homeProfileGuide";
import HomeProfileScreen from "../profile/homeProfile";

import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const role = useSelector((state) => state.auth.role);
  const isCustomer = role === "ROLE_CUSTOMER";

  if (isCustomer) {
    return <HomeProfileScreen />;
  } else {
    return <HomeProfileGuideScreen />;
  }
}
