import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../core/store';

const createStyles = (theme: any) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.medium,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: theme.colors.text,
      fontSize: theme.typography.body.fontSize,
    },
  });

interface PrimaryButtonProps {
  onPress: () => void;
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onPress, text }) => {
  const theme = useSelector((state: RootState) => state.theme);
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
