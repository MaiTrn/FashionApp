import React, { useEffect } from "react";
import {
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

import { COLORS, FONTS, SIZES } from "../../../constants";
import { genders } from "../../components/DummyData";
import { fetchUserData } from "../../redux/actions";

import RenderCheckbox from "./components/RenderCheckbox";

interface ProfileProps {
  fetchUserData: () => void;
  currentUser: {
    name: undefined;
    email: undefined;
  };
}

const PersonalInfo = (props: ProfileProps) => {
  useEffect(() => {
    props.fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "center",
        padding: SIZES.spacing.m,
        paddingBottom: 100,
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          paddingHorizontal: SIZES.spacing.m,
          color: COLORS.text.small,
          ...FONTS.body1,
        }}
      >
        Account information
      </Text>
      <View style={styles.container}>
        <TextInput
          value={props.currentUser.email}
          autoCapitalize="none"
          autoCompleteType="email"
          returnKeyType="next"
          style={styles.textInput}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value={props.currentUser.name}
          autoCapitalize="words"
          autoCompleteType="name"
          returnKeyType="next"
          style={styles.textInput}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          value="46 St Andrews Lane, London, UK"
          autoCapitalize="words"
          autoCompleteType="name"
          returnKeyType="next"
          style={styles.textInput}
        />
      </View>
      <RenderCheckbox options={genders} style={styles.button} />
      <TouchableOpacity
        style={{
          paddingHorizontal: SIZES.spacing.s,
          height: 50,
          borderRadius: SIZES.borderRadius.l,
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: COLORS.white,
        }}
        onPress={() => console.log("password change")}
      >
        <Text style={{ color: COLORS.danger, ...FONTS.label }}>
          Change Password
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const mapStateToProps = (store: {
  currentUser: {
    name: undefined;
    email: undefined;
  };
}) => ({ currentUser: store.currentUser });
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ fetchUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 320,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: SIZES.borderRadius.s,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 2,
    alignItems: "center",
    marginVertical: SIZES.borderRadius.m,
    borderColor: COLORS.darkGray,
  },
  textInput: {
    width: 250,
    height: 50,
    color: COLORS.secondary,
    ...FONTS.body1,
  },
  button: {
    width: 150,
    height: 40,
    marginHorizontal: SIZES.spacing.m,
  },
});
