import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PolicyTextProps {
  onTermsPress: () => void;
  onPrivacyPress: () => void;
}

export default function PolicyText({ onTermsPress, onPrivacyPress }: PolicyTextProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        By registering, you agree to our{' '}
        <Text style={styles.linkText} onPress={onTermsPress}>
          Terms of Service
        </Text>
        {' '}and{' '}
        <Text style={styles.linkText} onPress={onPrivacyPress}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    paddingHorizontal: 10,
  },
  baseText: {
    fontSize: 13,
    color: '#94A3B8', // Muted slate gray matching your design image
    textAlign: 'center',
    lineHeight: 20, // Adds breathing room if the text wraps to two lines
  },
  linkText: {
    color: '#1D9BF0', // The vibrant blue brand color for links
    fontWeight: '600',
  },
});