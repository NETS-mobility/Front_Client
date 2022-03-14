import React from 'react';
import {Modal, Pressable} from 'react-native';
import Postcode from '@actbase/react-daum-postcode';

//postcode 가운데정렬 해야함
const PutAddress = ({isModal, setModal, setAddr, setSido}) => {
  return (
    <>
      <Modal
        isVisible={isModal}
        transparent={true}
        onRequestClose={() => setModal(false)}>
        {/* <View style={{alignItems: 'center', justifyContent: 'center'}}> */}
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(115, 115, 115, 0.61)',
          }}
          onPress={() => setModal(false)}
        />
        <Postcode
          style={{
            width: 320,
            height: 400,
            position: 'absolute',
            alignSelf: 'center',
          }}
          jsOptions={{animation: true, hideMapBtn: true}}
          onSelected={data => {
            setModal(false);
            setAddr(data.address);
            setSido(data.sido);
          }}
        />
        {/* </View> */}
      </Modal>
    </>
  );
};

export default PutAddress;
