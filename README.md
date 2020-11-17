# Math-Fun
Math Fun App using React Native

---

## Clone Design App from Dribbble
Pradyut Meher - https://dribbble.com/shots/9054100-Math-Quiz-App-for-kids
![](https://cdn.dribbble.com/users/2108031/screenshots/9054100/media/4eabd0d8d1376590733d8fdd245ac792.jpg)

## Little bit modification
Splash, OnBoarding, Login
:-------------------------:
<img src="https://github.com/hanifmhd/Math-Fun/blob/main/screenshot/Screen%20Recording%202020-11-17%20at%2019.44.35.gif" width="250"/>

Home | Addition | Fibonacci | Primes
:-------------------------: | :-------------------------: | :-------------------------: | :-------------------------:
![](https://github.com/hanifmhd/Math-Fun/blob/main/screenshot/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-11-17%20at%2019.45.24.png) | ![](https://github.com/hanifmhd/Math-Fun/blob/main/screenshot/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-11-17%20at%2019.45.35.png) | ![](https://github.com/hanifmhd/Math-Fun/blob/main/screenshot/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-11-17%20at%2019.45.47.png) | ![](https://github.com/hanifmhd/Math-Fun/blob/main/screenshot/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-11-17%20at%2019.45.56.png)

## How to run project

_After clone the project you need to install deppendecy with NPM Install in terminal_

```
npm install
```

### Run in Android Platform

If using Android X, run jetifier first

```
npx jetify
```

After jetifier run, you can run in your android device / android simulator

```
npm run android
```

### Run in iOS Platform

Install ios Library using Cocoapods first

```
cd ios && pod install
```

then, you can run in your ios device / ios simulator

```
npm run ios
```

### Generate APK in Android

If using Android X, run jetifier first

```
npx jetify
```

After jetifier run, you can build APK for your android device

```
cd android && ./gradlew assembleRelease
```

You can see apk in path folder :

```
android/app/release
```

or

```
android/app/build/outputs/apk/release
```
