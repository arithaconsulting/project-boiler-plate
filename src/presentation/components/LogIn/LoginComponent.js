import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as yup from "yup";
import styles from "./styles";
import { scale } from "../../../Infrastructure/utils/screenUtility";
import Loader from "../../../Infrastructure/component/Loader/Loader";
import { useFormik } from "formik";
import Logo from "../../../Infrastructure/component/Logo/Logo";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../../Infrastructure/assets/colors/colors";
import CustomButton from "../../../Infrastructure/component/CustomButton/Button";
import { setLogin } from "../../../Infrastructure/utils/storageUtility";
const loginValidationSchema = yup.object().shape({
  userID: yup.string().required("User Name / ID Required"),
  password: yup.string().required("Password Required"),
});
const LoginComponent = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const formSubmitHandler = async (formData) => {
    // await setLogin(formData.userID);
    navigation.navigate("Registration");
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
    handleReset,
  } = useFormik({
    initialValues: { userID: "", password: "" },
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: () => formSubmitHandler(values),
    validationSchema: loginValidationSchema,
  });
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Loader status={status} />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity style={{ ...styles.logo }}>
                <Logo />
              </TouchableOpacity>
              <View style={styles.form}>
                <View style={styles.content}>
                  <View>
                    <Text style={styles.labelText}>User Name / ID</Text>
                    <TextInput
                      name="userID"
                      placeholder="Enter"
                      placeholderTextColor={colors.GunPowder}
                      value={values.userID}
                      onBlur={handleBlur("userID")}
                      onChangeText={handleChange("userID")}
                      style={styles.TextInput}
                    />
                    {touched.userID && errors.userID && (
                      <Text style={styles.errorMessage}>{errors.userID}</Text>
                    )}
                  </View>
                  <View style={{ marginTop: scale(10) }}>
                    <Text style={styles.labelText}>Password</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <TextInput
                        name="password"
                        placeholder="Enter"
                        placeholderTextColor={colors.GunPowder}
                        value={values.password}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        secureTextEntry={passwordVisible}
                        autoCorrect={false}
                        style={{ ...styles.TextInput, flex: 1 }}
                      />
                      <Feather
                        name={passwordVisible ? "eye" : "eye-off"}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                        size={scale(15)}
                        color="grey"
                        style={{ position: "absolute", right: 10 }}
                      />
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMessage}>{errors.password}</Text>
                    )}
                  </View>
                  <CustomButton title="Login" onPress={handleSubmit} />
                  <TouchableOpacity
                    style={styles.forgotContent}
                    onPress={() => {
                      navigation.navigate("ForgotUserName");
                    }}
                  >
                    <Text style={{ ...styles.linkText }}>
                      Forgot User Name / ID ?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginTop: scale(15) }}
                    onPress={() => {
                      navigation.navigate("ForgotPassword");
                    }}
                  >
                    <Text style={styles.linkText}>Forgot Password ?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.header}>Don’t have an account ?</Text>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  navigation.navigate("Registration");
                }}
              >
                <Text
                  style={{
                    color: "#00A0DA",
                    fontSize: scale(14),
                    fontFamily: "SourceSansPro-SemiBold",
                  }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginComponent;
