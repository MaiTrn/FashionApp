import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CommonActions } from "@react-navigation/routers";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { AuthNavigationProps } from "../../components/Navigation";
import { Container, Button } from "../../components";
import { Checkbox, TextInput } from "../../components/form";

import SocialLogin from "./SocialLogin";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: "", password: "", remember: false },
    validationSchema: LoginSchema,
    onSubmit: (value) => {
      const { email, password } = value;
      let isMounted = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          if (isMounted) {
            isMounted = false;
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Home" }],
              })
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const password = React.useRef<typeof TextInput>(null);

  return (
    <Container
      pattern={0}
      footer={
        <SocialLogin
          title={"Don't have an account?"}
          action={"Sign Up here"}
          onPress={() => navigation.navigate("Register")}
        />
      }
    >
      <Text
        style={{
          textAlign: "center",
          color: COLORS.text.primary,
          ...FONTS.h1,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginVertical: SIZES.borderRadius.l,
          color: COLORS.text.small,
          paddingBottom: 10,
          ...FONTS.body3,
        }}
      >
        Enter your credentials below and login to your account
      </Text>
      <TextInput
        icon="email-outline"
        placeholder="Enter your email"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        errors={errors.email}
        touched={touched.email}
        autoCapitalize="none"
        autoCompleteType="email"
        returnKeyType="next"
        onSubmitEditing={() => password.current?.focus()}
      />
      <TextInput
        icon="lock-outline"
        placeholder="Enter your password"
        ref={password}
        secureTextEntry
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        errors={errors.password}
        touched={touched.password}
        autoCompleteType="password"
        returnKeyType="go"
        onSubmitEditing={() => handleSubmit()}
      />

      <View
        style={{
          flexDirection: "row",
          width: SIZES.width * 0.8,
          justifyContent: "space-between",
          marginVertical: SIZES.borderRadius.m,
        }}
      >
        <Checkbox
          label="Remember me"
          value={values.remember}
          onChange={() => setFieldValue("remember", !values.remember)}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={{ color: COLORS.primary, ...FONTS.label }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: SIZES.borderRadius.l,
        }}
      >
        <Button
          label="Log into your account"
          variant="primary"
          onPress={handleSubmit}
        />
      </View>
    </Container>
  );
};

export default Login;
