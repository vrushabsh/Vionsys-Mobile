import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export default function PrimaryButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button, 
        disabled || loading ? styles.disabledButton : null, 
        style
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.85} // Smooth feedback fade when tapped
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1D9BF0', // Matches the vibrant blue button color from your UI
    height: 56,                // Matching height with inputs for consistent rhythm
    borderRadius: 16,          // Clean rounded corners matching the screen reference
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#1D9BF0',     // Subtle elevation shadow for professional finish
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,              // Shadow style fallback for Android devices
    marginVertical: 16,
  },
  disabledButton: {
    backgroundColor: '#93C5FD', // Lighter faded blue when input is loading/disabled
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',        // Bold text configuration
    letterSpacing: 0.3,
  },
});