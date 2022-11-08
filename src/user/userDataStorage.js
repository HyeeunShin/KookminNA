import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'selectedName';

const userDataStorage = {
  async get() {
    try {
      // AsyncStorage.clear()
      const rawData = await AsyncStorage.getItem(key);
      if (!rawData) {
        throw new Error('No saved ' + key);
      }
      const savedData = JSON.parse(rawData);
      return savedData;
    } catch (e) {
      throw new Error('Failed to load ' + key);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save ' + key);
    }
  },
};

export default userDataStorage;