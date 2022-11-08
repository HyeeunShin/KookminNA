import { CommonActions } from '@react-navigation/native';
import { Alert } from 'react-native';
let _navigator;
function setTopLevelNavigator(r) {
    _navigator = r;
}
function navigate(routeName, params, ref) {
    if (!_navigator) {
        setTimeout(() => {
            navigate(routeName, params, ref)
        }, 100);
        return;
    }
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params,
        }),
    );
}
export default { navigate, setTopLevelNavigator }