import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import typoStyles from '../../../assets/fonts/typography';

Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

const styles = StyleSheet.create({
  frame: {
    width: 75,
    height: 52,
    borderTopColor: '#DAD8E0',
    borderTopWidth: 2,
    borderBottomColor: '#DAD8E0',
    borderBottomWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateline: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  timetext: {
    fontSize: 18,
    fontWeight: '700',
    color: '#737373',
  },
});

const ServiceDatePicker = ({setDate}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickdate, setPickdate] = useState('--');
  const [datearr, setDatearr] = useState([]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setPickdate(date.format('yyyy-MM-dd'));
    hideDatePicker();
  };

  useEffect(() => {
    setDatearr(pickdate.split('-'));
    setDate(pickdate);
  }, [pickdate]);

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.dateline}>
          <View style={styles.frame}>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              {datearr[0] + '년'}
            </Text>
          </View>
          <View style={styles.frame}>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              {datearr[1] + '월'}
            </Text>
          </View>
          <View style={styles.frame}>
            <Text
              style={[
                typoStyles.fs18,
                typoStyles.fwBold,
                typoStyles.textExplain,
              ]}>
              {datearr[2] + '일'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const ServiceTimePicker = ({time, setTime, propName}) => {
  const newTime = time[propName];
  // 문제... ->  <button onClick={testFunc()}/>

  // <button onClick={()=>testFunc()}/>
  // <button onClick={testFunc}/>

  // useEffect(() => {
  //   if (newTime.timetype != '' && newTime.hour != '' && newTime.min != '') {
  //     if (newTime.timetype == '오후') {
  //       if (newTime.hour == '12') {
  //         setTime({
  //           ...time,
  //           [propName]: {
  //             ...time[propName],
  //             time: `${newTime.hour}:${newTime.min}:00`,
  //           },
  //         });
  //       } else {
  //         setTime({
  //           ...time,
  //           [propName]: {
  //             ...time[propName],
  //             time: `${parseInt(newTime.hour) + 12}:${newTime.min}:00`,
  //           },
  //         });
  //       }
  //     } else {
  //       if (newTime.hour == '12') {
  //         setTime({
  //           ...time,
  //           [propName]: {
  //             ...time[propName],
  //             time: `${parseInt(newTime.hour) - 12}:${newTime.min}:00`,
  //           },
  //         });
  //       } else {
  //         setTime({
  //           ...time,
  //           [propName]: {time: `${newTime.hour}:${newTime.min}:00`},
  //         });
  //       }
  //     }
  //   }
  // }, [newTime.hour, newTime.min, newTime.timetype]);

  const onChangeTimeType = value => {
    setTime({...time, [propName]: {...newTime, timetype: value}});
  };

  const onChangeHour = value => {
    setTime({...time, [propName]: {...newTime, hour: value}});
  };

  const onChangeMin = value => {
    setTime({...time, [propName]: {...newTime, min: value}});
  };

  return (
    <View style={styles.dateline}>
      <View style={[styles.frame]}>
        <RNPickerSelect
          textInputProps={{underlineColorAndroid: 'transparent'}}
          placeholder={{
            label: '시간대',
          }}
          placeholderTextColor="black"
          fixAndroidTouchableBug={true}
          value={newTime.timetype}
          onValueChange={value => onChangeTimeType(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            {label: '오전', value: '오전', key: '1'},
            {label: '오후', value: '오후', key: '2'},
          ]}
          style={{
            placeholder: styles.timetext,
            inputAndroid: styles.timetext,
            inputIOS: styles.timetext,
          }}
        />
      </View>
      <View style={[styles.frame]}>
        <RNPickerSelect
          textInputProps={{underlineColorAndroid: 'transparent'}}
          placeholder={{
            label: '시',
          }}
          placeholderTextColor="black"
          fixAndroidTouchableBug={true}
          value={newTime.hour}
          onValueChange={value => onChangeHour(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            {label: '01', value: '01', key: '1'},
            {label: '02', value: '02', key: '2'},
            {label: '03', value: '03', key: '3'},
            {label: '04', value: '04', key: '4'},
            {label: '05', value: '05', key: '5'},
            {label: '06', value: '06', key: '6'},
            {label: '07', value: '07', key: '7'},
            {label: '08', value: '08', key: '8'},
            {label: '09', value: '09', key: '9'},
            {label: '10', value: '10', key: '10'},
            {label: '11', value: '11', key: '11'},
            {label: '12', value: '12', key: '12'},
          ]}
          style={{
            placeholder: styles.timetext,
            inputAndroid: styles.timetext,
            inputIOS: styles.timetext,
          }}
        />
      </View>
      <View style={[styles.frame]}>
        <RNPickerSelect
          textInputProps={{underlineColorAndroid: 'transparent'}}
          placeholder={{
            label: '분',
          }}
          placeholderTextColor="black"
          fixAndroidTouchableBug={true}
          value={newTime.min}
          onValueChange={value => onChangeMin(value)}
          useNativeAndroidPickerStyle={false}
          items={[
            {label: '00', value: '00', key: '0'},
            {label: '20', value: '20', key: '20'},
            {label: '40', value: '40', key: '40'},
          ]}
          style={{
            placeholder: styles.timetext,
            inputAndroid: styles.timetext,
            inputIOS: styles.timetext,
          }}
        />
      </View>
    </View>
  );
};

export {ServiceDatePicker, ServiceTimePicker};
