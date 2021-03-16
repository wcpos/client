#!/usr/bin/env bash

# https://github.com/microsoft/appcenter/issues/1285#issuecomment-549373098
GRADLE_FILE=${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android/native_modules.gradle
LOCAL_CLI=${APPCENTER_SOURCE_DIRECTORY}/packages/mobile/node_modules/react-native/local-cli/cli.js

yarn install

if [ -e "${GRADLE_FILE}" ]
then
    echo "##[info][Pre-Build Action] - native_modules.gradle file found - ok!"
else
    echo "##[error][Pre-Build Action] - native_modules.gradle file not found!"
	# ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/
    # ls ${APPCENTER_SOURCE_DIRECTORY}/node_modules/@react-native-community/cli-platform-android
fi 

if [ -e "${LOCAL_CLI}" ]
then
    echo "##[info][Pre-Build Action] - react-native/local-cli/cli.js file found - ok!"
else
    # should add @react-native-community/cli as a dependency
    echo "##[error][Pre-Build Action] - react-native/local-cli/cli.js file not found!"
fi 