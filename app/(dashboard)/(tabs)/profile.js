import HomeProfileGuideScreen from "../profile/homeProfileGuide";
import HomeProfileScreen from "../profile/homeProfile";

export default function ProfileScreen({ isTourGuide = true }) {
  if (isTourGuide) {
    return <HomeProfileGuideScreen />;
  } else {
    return <HomeProfileScreen />;
  }
}
