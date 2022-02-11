import React from 'react';
import Logo from '../../assets/image/logo.svg';
import Call from '../../assets/icon/call.svg';
import {View, TouchableOpacity, StyleSheet, Linking} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <View>
          <Logo width={70} height={28} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:02-0000-0000`)}>
        <View>
          <Call width={98} height={28} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 57,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default Header;
