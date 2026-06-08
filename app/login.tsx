import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Image Section */}
      <ImageBackground
        source={require("../assets/images/hero-background.webp")}
        resizeMode="cover"
        style={styles.imageSection}
      >
        <View style={styles.overlay} />

        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome Rider</Text>
          <Text style={styles.subtitleText}>
            Book rides instantly and travel safely across the city.
          </Text>
        </View>
      </ImageBackground>

      {/* Bottom Form Section */}
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.signInTitle}>Sign In</Text>

            <View style={styles.tabIndicator} />

            {/* Email */}
            <Text style={styles.label}>EMAIL</Text>

            <View style={styles.inputContainer}>
              <MaterialIcons name="mail-outline" size={20} color="#8e8e93" />

              <TextInput
                style={styles.input}
                placeholder="you@example.com"
                placeholderTextColor="#a1a1a6"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password */}
            <Text style={styles.label}>PASSWORD</Text>

            <View style={styles.inputContainer}>
              <MaterialIcons name="lock-outline" size={20} color="#8e8e93" />

              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#a1a1a6"
                secureTextEntry={secureText}
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Feather
                  name={secureText ? "eye-off" : "eye"}
                  size={20}
                  color="#8e8e93"
                />
              </TouchableOpacity>
            </View>

            {/* Button */}
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Sign In</Text>

              <MaterialIcons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            {/* Footer */}
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don't have an account?</Text>

              <TouchableOpacity>
                <Text style={styles.linkText}> Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  imageSection: {
    height: "38%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  headerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  welcomeText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitleText: {
    fontSize: 15,
    color: "#e5e5ea",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },

  keyboardView: {
    flex: 1,
    marginTop: -40, // Card overlaps image
  },

  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 8,
  },

  signInTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1c1c1e",
  },

  tabIndicator: {
    width: 45,
    height: 3,
    backgroundColor: "#1d8cf8",
    borderRadius: 2,
    marginTop: 6,
    marginBottom: 25,
  },

  label: {
    fontSize: 11,
    fontWeight: "700",
    color: "#636366",
    letterSpacing: 0.5,
    marginBottom: 8,
    marginTop: 14,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#e5e5ea",
    borderRadius: 14,
    height: 56,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#1c1c1e",
  },

  button: {
    backgroundColor: "#1d8cf8",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    height: 56,
    marginTop: 24,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 6,
  },

  forgotBtn: {
    alignSelf: "center",
    marginVertical: 10,
  },

  forgotText: {
    color: "#8e8e93",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  divider: {
    height: 1,
    backgroundColor: "#f2f2f7",
    marginVertical: 20,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerText: {
    fontSize: 14,
    color: "#1c1c1e",
  },

  linkText: {
    fontSize: 14,
    color: "#1d8cf8",
    fontWeight: "700",
  },
});
