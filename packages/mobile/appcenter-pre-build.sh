#!/usr/bin/env bash

# https://github.com/microsoft/appcenter/issues/1285#issuecomment-549373098
GRADLE_FILE=${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android/native_modules.gradle

if [ -e "${GRADLE_FILE}" ]
then
    echo "##[warning][Pre-Build Action] - native_modules.gradle file found - ok!"
else
    echo "##[error][Pre-Build Action] - native_modules.gradle file not found!"
	ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community
	ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android
fi 

yarn add @react-native-community/cli-platform-android

if [ -e "${GRADLE_FILE}" ]
then
    echo "##[warning][Pre-Build Action] - native_modules.gradle file found - ok!"
else
    echo "##[error][Pre-Build Action] - native_modules.gradle file not found!"
	ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/
    ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android
fi 