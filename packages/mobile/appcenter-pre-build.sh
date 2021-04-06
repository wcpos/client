#!/usr/bin/env bash

# https://github.com/microsoft/appcenter/issues/1285#issuecomment-549373098
ANDROID_CLI=${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android/native_modules.gradle
IOS_CLI=${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-ios/build/index.js
LOCAL_CLI=${APPCENTER_SOURCE_DIRECTORY}/node_modules/react-native/local-cli/cli.js

yarn install

if [ -e "${ANDROID_CLI}" ]
then
    echo "##[info][Pre-Build Action] - android cli found - ok!"
else
    echo "##[error][Pre-Build Action] - android cli not found!"
	# ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/
    # ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android
fi 

if [ -e "${IOS_CLI}" ]
then
    echo "##[info][Pre-Build Action] - ios cli found - ok!"
else
    echo "##[error][Pre-Build Action] - ios cli not found!"
fi 

if [ -e "${LOCAL_CLI}" ]
then
    echo "##[info][Pre-Build Action] - local cli found - ok!"
else
    # should add @react-native-community/cli as a dependency
    echo "##[error][Pre-Build Action] - local cli not found!"
fi 