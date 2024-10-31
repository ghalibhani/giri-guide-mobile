import { Text, View } from "react-native";
import HeaderBackProfile from "../components/HeaderBackProfile";

export default function StepOrderScreen() {
	return (
		<View className="flex-1 px-6">
			<HeaderBackProfile text={"Tata Cara Pemesanan"} />
			<View className="flex-col bg-white rounded-[30] px-6 pt-[20] pb-6">
				<Text className="text-evergreen">
					Aute consectetur occaecat culpa laborum nulla. Nostrud nulla magna sunt
					exercitation Lorem sunt esse aliquip ea fugiat et ea magna id. Velit qui do anim
					elit est. Consequat nisi irure irure culpa. Irure consectetur nulla ullamco anim
					ut officia consectetur. Ea ipsum amet officia aute nulla veniam veniam
					exercitation culpa eiusmod deserunt.
				</Text>
			</View>
		</View>
	);
}
