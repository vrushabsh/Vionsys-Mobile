import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from '../src/components/InputField';
import PolicyText from '../src/components/PolicyText';
import PrimaryButton from '../src/components/PrimaryButton';

export default function Registration() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async (): Promise<void> => {
  try {
    setIsLoading(true);

    const payload = {
      name: fullName,
      email: email,
      phone: phone,
      password: password,
      isAdult: true,
    };

    console.log('Request Payload:', payload);

    const response = await fetch(
      'https://taxiuat.vionsys.com/TaxiApplicationUAT/api/rider/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const responseText = await response.text();

    console.log('Status:', response.status);
    console.log('Response:', responseText);

    if (response.ok) {
      try {
        const data = JSON.parse(responseText);
        console.log('Success:', data);
      } catch {
         alert('Registration Successful');
        console.log('Success Response:', responseText);
      }

      router.push('/login');
    }
  } catch (error) {
     alert('Email Already Exist');
    console.log('API Error:', error);
  } finally {
    setIsLoading(false);
  }
};

  const handleTermsPress = (): void =>
    console.log('Terms of Service clicked');

  const handlePrivacyPress = (): void =>
    console.log('Privacy Policy clicked');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {isLoading && (
          <ActivityIndicator
            size="large"
            style={{ marginVertical: 20 }}
          />
        )}

        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Create Account</Text>
          <Text style={styles.subtitleText}>
            Join thousands of happy riders
          </Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.tabIndicatorContainer}>
            <Text style={styles.tabText}>Basic Info</Text>
            <View style={styles.activeLine} />
          </View>

          <InputField
            label="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />

          <InputField
            label="Email Address"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <InputField
            label="Phone Number"
            placeholder="10-digit mobile number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <InputField
            label="Password"
            placeholder="Min. 6 characters"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <PolicyText
            onTermsPress={handleTermsPress}
            onPrivacyPress={handlePrivacyPress}
          />

          <PrimaryButton
            title="Create Account"
            onPress={handleCreateAccount}
          />
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.linkText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  scrollContainer: {
    paddingBottom: 40,
  },

  headerContainer: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 25,
  },

  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },

  subtitleText: {
    fontSize: 15,
    color: '#64748B',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 24,
    flex: 1,
  },

  tabIndicatorContainer: {
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },

  activeLine: {
    height: 3,
    backgroundColor: '#1D9BF0',
    borderRadius: 2,
    width: '100%',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  footerText: {
    fontSize: 14,
    color: '#1c1c1e',
  },

  linkText: {
    fontSize: 14,
    color: '#1d8cf8',
    fontWeight: '700',
  },
});