import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';

type CustomButtonProps = {
  title: string;
  handlePress?: () => void;
  containerStyle?: string;
  testStyles?: string;
  isLoading?: boolean;
  textStyle?: string;
  value?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyle,
  testStyles,
  isLoading,
  textStyle,
  value,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`  py-4 rounded-full w-[96%] flex flex-row justify-center items-center  ${containerStyle} ${
        isLoading || value === '' ? 'opacity-50' : ''
      }  `}
      disabled={value === ''}>
      <Text className={`text-white  text-2xl ${textStyle} `}>{title}</Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={'#fff'}
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
