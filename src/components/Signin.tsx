import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Terminal,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* 1. Header Background Image Section */}
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/images/hero-background.webp")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.2)", "#F5F7FA"]}
            style={styles.gradient}
          />
        </ImageBackground>
      </View>

      {/* 2. Scrollable Content Layer Over the Background */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.safeArea}>
          {/* Header Text */}
          <View style={styles.headerContainer}>
            <Text style={styles.welcomeText}>Welcome Rider</Text>
            <Text style={styles.subText}>
              Book rides instantly and travel safely across the city.
            </Text>
          </View>

          {/* White Sign In Form Card */}
          <View style={styles.card}>
            <View style={styles.tabContainer}>
              <Text style={styles.tabText}>Sign In</Text>
              <View style={styles.tabIndicator} />
            </View>

            {/* Email Input Field */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>EMAIL</Text>
              <View style={styles.inputContainer}>
                <Mail size={20} color="#9ca3af" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="you@example.com"
                  placeholderTextColor="#a1a1aa"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* Password Input Field */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>PASSWORD</Text>
              <View style={styles.inputContainer}>
                <Lock size={20} color="#9ca3af" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#a1a1aa"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                  activeOpacity={0.7}
                >
                  {showPassword ? (
                    <EyeOff size={20} color="#71717a" />
                  ) : (
                    <Eye size={20} color="#71717a" />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Sign In</Text>
              <ArrowRight size={20} color="#fff" />
            </TouchableOpacity>

            {/* Forgot Password Link */}
            <TouchableOpacity
              style={styles.forgotContainer}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            {/* Footer Links */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                {"Don't have an account? "}
                <Text style={styles.signUpLink}>Create Account</Text>
              </Text>
            </View>
          </View>

          {/* Version Text */}
          <View style={styles.versionContainer}>
            <View style={styles.versionDot} />
            <Text style={styles.versionText}>V 1.0.0</Text>
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* Floating Terminal Button placed globally on screen view */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Terminal size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.45,
    width: width,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 8,
  },
  subText: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 20,
  },
  tabContainer: {
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  tabText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0f172a",
  },
  tabIndicator: {
    width: 35,
    height: 4,
    backgroundColor: "#1e88e5",
    borderRadius: 2,
    marginTop: 6,
  },
  inputWrapper: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#cbd5e1",
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 56,
    backgroundColor: "#fff",
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#334155",
    fontSize: 16,
  },
  eyeIcon: {
    padding: 4,
  },
  button: {
    backgroundColor: "#2196F3",
    flexDirection: "row",
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 8,
  },
  forgotContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 12,
  },
  forgotText: {
    color: "#64748b",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: "#f1f5f9",
    marginVertical: 8,
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 14,
  },
  footerText: {
    fontSize: 14,
    color: "#475569",
  },
  signUpLink: {
    color: "#2196F3",
    fontWeight: "700",
  },
  fab: {
    position: "absolute",
    bottom: 30,
    right: 24,
    backgroundColor: "#0f172a",
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  versionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  versionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4ade80",
    marginRight: 6,
  },
  versionText: {
    fontSize: 12,
    color: "#94a3b8",
    fontWeight: "500",
  },
});
