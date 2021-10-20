import React from "react";
import { View, Text, Linking } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { AuthNavigationProps } from "../../components/Navigation";
import { Container, Button } from "../../components";
import { TextInput } from "../../components/form";

import SocialLogin from "./SocialLogin";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: "" },
      validationSchema: ForgotPasswordSchema,
      onSubmit: (value) => {
        console.log(value);
        navigation.navigate("PasswordChanged");
      },
    }
  );

  return (
    <Container
      pattern={2}
      footer={
        <SocialLogin
          title={"Doesn't work?"}
          action={"Try another way"}
          onPress={() => Linking.openURL("mailto:fashion-help@support.com")}
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
        Forgot password?
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginVertical: SIZES.borderRadius.l,
          color: COLORS.text.small,
          paddingBottom: 20,
          ...FONTS.body3,
        }}
      >
        Enter the email address associated with your account
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
        returnKeyType="go"
        onSubmitEditing={() => handleSubmit()}
      />

      <View
        style={{
          alignItems: "center",
          marginTop: SIZES.borderRadius.l,
        }}
      >
        <Button
          label="Reset password"
          variant="primary"
          onPress={handleSubmit}
        />
      </View>
    </Container>
  );
};

export default ForgotPassword;
