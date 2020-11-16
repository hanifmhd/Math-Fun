import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../configs';

const {width} = Dimensions.get('screen');
const Additionn = ({navigation, route}) => {
  const [valueX, onChangeValueX] = useState(0);
  const [valueY, onChangeValueY] = useState(0);
  let valueZ = parseFloat(valueX) + parseFloat(valueY);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.canvas}>
        <Icon
          name={'chevron-back-outline'}
          size={RFValue(28)}
          color={R.colors.baseWhite}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            color: R.colors.baseWhite,
            fontSize: R.sizes.txtHeading1,
            fontFamily: R.fonts.NunitoBold,
          }}>
          {route.params.title}
        </Text>
        <View style={{alignItems: 'flex-end'}}>
          <TextInput
            style={{
              color: R.colors.baseWhite,
              fontSize: RFValue(80),
              fontFamily: R.fonts.NunitoBold,
              width: width / 2,
              textAlign: 'right',
            }}
            onChangeText={(text) => onChangeValueX(text)}
            placeholder={'X'}
            placeholderTextColor={R.colors.baseGrey}
            value={valueX}
            keyboardType={'decimal-pad'}
          />
          <Icon
            name={'add-outline'}
            size={RFValue(100)}
            color={'#9CE574'}
            style={{alignSelf: 'center'}}
          />
          <TextInput
            style={{
              color: R.colors.baseWhite,
              fontSize: RFValue(80),
              fontFamily: R.fonts.NunitoBold,
              width: width / 2,
              textAlign: 'right',
            }}
            onChangeText={(text) => onChangeValueY(text)}
            placeholder={'Y'}
            placeholderTextColor={R.colors.baseGrey}
            value={valueY}
            keyboardType={'decimal-pad'}
          />
          <View
            style={{
              backgroundColor: R.colors.baseGrey,
              height: 2,
              width: width / 2,
              marginVertical: RFValue(10),
            }}
          />
          <Text
            style={{
              color: R.colors.baseWhite,
              fontSize: RFValue(80),
              fontFamily: R.fonts.NunitoBold,
              width: width / 1.5,
              textAlign: 'right',
            }}>
            {parseFloat(valueZ).toFixed(2)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Additionn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseBlack,
  },
  canvas: {
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(10),
  },
});
