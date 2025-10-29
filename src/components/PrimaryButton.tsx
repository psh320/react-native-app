import React from 'react';
import { Button } from 'react-native-paper';

interface PrimaryButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  text,
  disabled = false,
}) => {
  return (
    <Button mode="contained" onPress={onPress} disabled={disabled}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
