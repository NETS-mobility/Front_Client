import React from 'react';
import {View, Modal, Pressable, KeyboardAvoidingView} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PutAddress = ({isModal, setModal, setAddr, setSido}) => {
  return (
    <>
      <Modal
        isVisible={isModal}
        transparent={true}
        onRequestClose={() => setModal(false)}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(115, 115, 115, 0.61)',
          }}
          onPress={() => setModal(false)}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Postcode
            style={{
              width: 320,
              height: 350,
            }}
            jsOptions={{animation: true, hideMapBtn: true}}
            onSelected={data => {
              setModal(false);
              setAddr(data.address);
              setSido(data.sido);
            }}
          />
        </View>
      </Modal>
    </>
  );
};

export default PutAddress;
