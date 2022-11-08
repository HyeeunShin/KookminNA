import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (any) {
    console.error(e.message);
  }
};