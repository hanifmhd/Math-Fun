/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../configs';

const {width, height} = Dimensions.get('screen');
let backPressed = 0;
const Home = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  const backAction = () => {
    if (!navigation.isFocused()) {
      // The screen is not focused, so don't do anything
      backPressed = 0;
      return false;
    }

    if (backPressed <= 0) {
      ToastAndroid.show('Press back again to close app', ToastAndroid.SHORT);
      backPressed = backPressed + 1;
    } else {
      BackHandler.exitApp();
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        source={R.images.background_1}
        style={{flex: 1, resizeMode: 'cover'}}>
        <View style={styles.canvas}>
          <View
            style={{paddingHorizontal: RFValue(20), paddingTop: RFValue(20)}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.title}>Hey John,</Text>
                <Text style={styles.title}>Good Morning</Text>
              </View>
              <Image
                source={R.images.profile}
                style={{
                  width: RFValue(50),
                  height: RFValue(50),
                  borderRadius: RFValue(100),
                }}
              />
            </View>
            <Text
              style={{
                marginTop: RFValue(10),
                ...styles.body,
                fontFamily: R.fonts.NunitoRegular,
              }}>
              Start your practice by picking one of the below
            </Text>
          </View>
          <View style={{marginTop: RFValue(10)}}>
            <LinearGradient
              colors={['#9CE574', '#55C260']}
              style={{
                top: height / (Platform.OS === 'android' ? 28 : 10),
                ...styles.cardContainer,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() =>
                  navigation.navigate('Addition', {title: 'Addition'})
                }>
                <Icon
                  name={'add-circle-outline'}
                  size={RFValue(80)}
                  color={R.colors.baseWhite}
                  style={{marginRight: RFValue(10)}}
                />
                <View style={{width: width / 1.5}}>
                  <Text style={styles.title}>addition</Text>
                  <Text style={styles.body}>12 + 45 = 47</Text>
                  <Text style={styles.body}>
                    Finding the total, or sum, by combining two or more numbers.
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#f92524', '#C10909']}
              style={{
                top: height / (Platform.OS === 'android' ? 4.8 : 3.6),
                ...styles.cardContainer,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() =>
                  navigation.navigate('Multiplication', {
                    title: 'Multiplication',
                  })
                }>
                <Icon
                  name={'close-circle-outline'}
                  size={RFValue(80)}
                  color={R.colors.baseWhite}
                  style={{marginRight: RFValue(10)}}
                />
                <View style={{width: width / 1.5}}>
                  <Text style={styles.title}>Multiplication</Text>
                  <Text style={styles.body}>100 x 12 = 120</Text>
                  <Text style={styles.body}>
                    In math, to multiply means to add equal groups. When we
                    multiply, the number of things in the group increases.
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#FDC027', '#AF881B']}
              style={{
                top: height / (Platform.OS === 'android' ? 2.6 : 2.2),
                ...styles.cardContainer,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() =>
                  navigation.navigate('Primes', {title: 'Primes'})
                }>
                <Icon
                  name={'git-commit-outline'}
                  size={RFValue(80)}
                  color={R.colors.baseWhite}
                  style={{marginRight: RFValue(10)}}
                />
                <View style={{width: width / 1.5}}>
                  <Text style={styles.title}>Primes</Text>
                  <Text style={styles.body}>2, 3, 5, 7</Text>
                  <Text style={styles.body}>
                    Numbers that have only 2 factors: 1 and themselves.
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#267BFA', '#013EB1']}
              style={{
                top: height / (Platform.OS === 'android' ? 1.8 : 1.6),
                ...styles.cardContainer,
              }}>
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() =>
                  navigation.navigate('Fibonacci', {title: 'Fibonacci'})
                }>
                <Icon
                  name={'infinite-outline'}
                  size={RFValue(80)}
                  color={R.colors.baseWhite}
                  style={{marginRight: RFValue(10)}}
                />
                <View style={{width: width / 1.5}}>
                  <Text style={styles.title}>Fibonacci</Text>
                  <Text style={styles.body}>0, 1, 1, 2</Text>
                  <Text style={styles.body}>
                    Each number in the sequence is the sum of the two numbers
                    that precede it.
                  </Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    paddingTop: RFValue(30),
  },
  cardContainer: {
    height: height / 5,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#93e173',
    padding: RFValue(10),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    alignItems: 'center',
    shadowColor: R.colors.baseBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: R.sizes.txtHeading3,
    fontFamily: R.fonts.NunitoBold,
    color: R.colors.baseWhite,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: R.sizes.txtBody,
    fontFamily: R.fonts.NunitoItalic,
    color: R.colors.baseWhite,
  },
});
