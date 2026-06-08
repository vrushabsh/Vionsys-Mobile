import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../src/components/InputField';
import PolicyText from '../src/components/PolicyText';
import PrimaryButton from '../src/components/PrimaryButton';

export default function Registration() {
  // Form input state configurations
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Interaction handlers
  const handleCreateAccount = (): void => {
    console.log('Form Submitted:', { fullName, email, phone, password });
  };

  const handleTermsPress = (): void => console.log('Terms of Service clicked');
  const handlePrivacyPress = (): void => console.log('Privacy Policy clicked');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Top Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Create Account</Text>
          <Text style={styles.subtitleText}>Join thousands of happy riders</Text>
        </View>

        {/* Form Card Layout wrapper */}
        <View style={styles.formCard}>
          <View style={styles.tabIndicatorContainer}>
            <Text style={styles.tabText}>Basic Info</Text>
            <View style={styles.activeLine} />
          </View>

          {/* Form Input Fields */}
          <InputField
            label="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
            autoCapitalize="words"
          />

          <InputField
            label="Email Address"
            placeholder="you@example.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

          <InputField
            label="Phone Number"
            placeholder="10-digit mobile number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />

          <InputField
            label="Password"
            placeholder="Min. 6 characters"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

          {/* Legal Policies Inline Block */}
          <PolicyText 
            onTermsPress={handleTermsPress} 
            onPrivacyPress={handlePrivacyPress} 
          />

          {/* Core Submit Button */}
          <PrimaryButton 
            title="Create Account" 
            onPress={handleCreateAccount} 
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// THIS STYLING BLOCK RECTIFIES ALL THE RED UNDERLINES SHOWING IN VS CODE
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
});