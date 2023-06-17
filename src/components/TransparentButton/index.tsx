import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text } from 'react-native';
import { styles } from './styles';

interface TransparentButtonProps {
  title: string;
  src: ImageSourcePropType;
}

export function TransparentButton({ title, src }: TransparentButtonProps) {
  return (
    <Pressable style={styles.transparentButton}>
      <Image style={styles.image} source={src} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
