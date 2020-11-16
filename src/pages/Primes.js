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

const Primes = ({navigation, route}) => {
  const [valueX, onChangeValueX] = useState('');
  const [result, setResult] = useState(0);

  const findPrime = () => {
    var i = 3;
    var c;
    let count = 2;
    let temp = 0;
    if (valueX === '') {
      setResult(0);
      return Alert.alert('Error', 'Number required');
    } else {
      if (valueX >= 1) {
        temp = '2';
      }
      for (count = 2; count <= valueX; i++) {
        for (c = 2; c < i; c++) {
          if (i % c == 0) break;
        }
        if (c == i) {
          temp = temp + `, ${i}`;
          count++;
        }
      }
      setResult(temp);
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
              Enter the number of prime numbers required
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
            <TouchableOpacity style={styles.button} onPress={() => findPrime()}>
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

export default Primes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseBlack,
  },
  canvas: {
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(10),
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
