import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import AppLoading from '~components/AppLoading';
import {getLoadingSelector} from '~redux/loading/selector';

function withLoading(WrappedComponent, actionTypes) {
  function HOC({...props}) {
    const isLoading = useSelector(state => getLoadingSelector(state, actionTypes));
    return (
      <View style={{flex: 1}}>
        <WrappedComponent {...props} />
        {isLoading && <AppLoading />}
      </View>
    );
  }
  return HOC;
}
export default withLoading;
