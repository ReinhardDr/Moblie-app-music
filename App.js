import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorApp from "./app/screens/Navigation/NavigatorApp";

export default function App(){
  return <NavigationContainer>
      <NavigatorApp/>
  </NavigationContainer>
}