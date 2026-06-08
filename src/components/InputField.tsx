import { Ionicons } from '@expo/vector-icons'; // Pre-installed in Expo projects
import React, { useState } from 'react';
import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
}: InputFieldProps) {
  // Local state to toggle password visibility if it's a password field
  const [passwordHidden, setPasswordHidden] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {/* Field Label */}
      <Text style={styles.label}>{label}</Text>
      
      {/* Input Wrapper */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8" // Matches the muted grey placeholder style
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={passwordHidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        
        {/* Render Eye Icon only if secureTextEntry is true */}
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setPasswordHidden(!passwordHidden)}
            style={styles.iconContainer}
            activeOpacity={0.7}
          >
            <Ionicons
              name={passwordHidden ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color="#94A3B8"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B', // Dark charcoal color matching your design
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#CBD5E1', // Subtle grey border from image
    borderRadius: 12,      // Smooth rounded corners
    backgroundColor: '#FFFFFF',
    height: 56,            // Comfortable touch target height
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#0F172A',
  },
  iconContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});