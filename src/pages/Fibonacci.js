import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../configs';

const Fibonacci = ({navigation, route}) => {
  const [valueX, onChangeValueX] = useState('');
  const [result, setResult] = useState(0);

  const findFibonacci = () => {
    let arr = [];
    if (valueX === '') {
      setResult(0);
      return Alert.alert('Error', 'Number required');
    } else {
      let i,
        c = 0;
      let a = 0;
      let b = 1;
      for (i = 0; i < valueX; i++) {
        arr.push(`${c}${i === valueX - 1 ? '' : ', '}`);
        a = b;
        b = c;
        c = a + b;
      }
      setResult(arr);
    }
  };

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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
          enabled>
          <ScrollView contentContainerStyle={{paddingBottom: RFValue(100)}}>
            <Text
              style={{
                color: R.colors.baseWhite,
                fontSize: R.sizes.txtTitle,
                fontFamily: R.fonts.NunitoRegular,
                marginBottom: RFValue(4),
              }}>
              Enter the number of fibonacci numbers required
            </Text>
            <TextInput
              style={{
                borderColor: R.colors.baseWhite,
                borderWidth: 1,
                color: R.colors.baseWhite,
                fontSize: RFValue(80),
                fontFamily: R.fonts.NunitoBold,
                textAlign: 'right',
              }}
              onChangeText={(text) => onChangeValueX(text)}
              placeholder={'X'}
              placeholderTextColor={R.colors.baseGrey}
              value={valueX}
              keyboardType={'number-pad'}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => findFibonacci()}>
              <Text style={styles.buttonTextStyle}>Find</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: R.colors.baseWhite,
                fontSize: RFValue(80),
                fontFamily: R.fonts.NunitoRegular,
              }}>
              {result}
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Fibonacci;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseBlack,
  },
  canvas: {
    paddingHorizontal: RFValue(20),
    paddingTop: Platform.OS === 'android' ? RFValue(30) : RFValue(10),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8),
    paddingVertical: RFValue(12),
    marginVertical: RFValue(16),
    backgroundColor: R.colors.basePrimary,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    fontFamily: R.fonts.NunitoBold,
    fontSize: R.sizes.txtBody,
  },
});
