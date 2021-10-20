import React from "react";
import { View, Text } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";

import { COLORS, SIZES, FONTS } from "../../../constants";
import { AuthNavigationProps } from "../../components/Navigation";
import { Container, Button } from "../../components";
import { TextInput } from "../../components/form";

import SocialLogin from "./SocialLogin";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(30, "Too long !")
    .required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  passwordConfirm: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Register = ({ navigation }: AuthNavigationProps<"Register">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: SignUpSchema,
      onSubmit: (value) => {
        const { name, email, password } = value;
        const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
        let isMounted = true;
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((result) => {
            if (isMounted) {
              firebase
                .firestore()
                .collection("usersData")
                .doc(firebase.auth().currentUser?.uid)
                .set({ upperCaseName, email });
              isMounted = false;
              navigation.navigate("AccountCreated");
            }
          })
          .catch((error) => console.log(error));
      },
    }
  );
  const email = React.useRef<typeof TextInput>(null);
  const password = React.useRef<typeof TextInput>(null);
  const passwordConfirm = React.useRef<typeof TextInput>(null);

  return (
    <Container
      pattern={1}
      footer={
        <SocialLogin
          title={"Already have an account?"}
          action={"Login here"}
          onPress={() => navigation.navigate("Login")}
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
        Create account
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginVertical: SIZES.borderRadius.m,
          color: COLORS.text.small,
          paddingBottom: 10,
          ...FONTS.body3,
        }}
      >
        Let us know your name, email, and your password
      </Text>

      <TextInput
        icon="account-outline"
        placeholder="Enter your name"
        onChangeText={handleChange("name")}
        onBlur={handleBlur("name")}
        errors={errors.name}
        touched={touched.name}
        autoCapitalize="words"
        autoCompleteType="name"
        returnKeyType="next"
        onSubmitEditing={() => email.current?.focus()}
      />
      <TextInput
        icon="email-outline"
        placeholder="Enter your email"
        ref={email}
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
        returnKeyType="next"
        onSubmitEditing={() => passwordConfirm.current?.focus()}
      />
      <TextInput
        icon="lock-outline"
        placeholder="Confirm your password"
        ref={passwordConfirm}
        secureTextEntry
        onChangeText={handleChange("passwordConfirm")}
        onBlur={handleBlur("passwordConfirm")}
        errors={errors.passwordConfirm}
        touched={touched.passwordConfirm}
        autoCompleteType="password"
        returnKeyType="go"
        onSubmitEditing={() => handleSubmit()}
      />

      <View
        style={{
          alignItems: "center",
          marginTop: SIZES.borderRadius.m,
        }}
      >
        <Button
          label="Create  your account"
          variant="primary"
          onPress={handleSubmit}
        />
      </View>
    </Container>
  );
};

export default Register;
