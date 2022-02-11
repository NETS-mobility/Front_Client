import PropTypes from 'prop-types';
import React, {Fragment, useCallback, useEffect} from 'react';
import {
  NativeModules,
  Platform,
  requireNativeComponent,
  StyleSheet,
  View,
} from 'react-native';

const {RNTMap: TMap} = NativeModules;

const IS_IOS = Platform.OS === 'ios';

function MapView(props) {
  const {appKey, lat, lng} = props;

  useEffect(() => {
    if (IS_IOS) {
      setMapKey(appKey);
      if (lat && lng) {
        TMap.setCoordinates(lat, lng);
      }
    }
  });

  useEffect(() => {
    if (lat && lng && IS_IOS) {
      TMap.setCoordinates(lat, lng);
    }
  }, [lat, lng]);

  const setMapKey = useCallback(key => {
    IS_IOS && TMap.setApiKey(key);
  }, []);

  return (
    <Fragment>
      <RNTMap {...props} />
    </Fragment>
  );
}

MapView.propTypes = {
  appKey: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  zoomWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 90,
    justifyContent: 'space-evenly',
  },
});

const RNTMap = requireNativeComponent('RNTMap', MapView);

export default MapView;
