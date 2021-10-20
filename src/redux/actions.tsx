import firebase from "firebase";

import { USER_DATA_STATE_CHANGE } from "./constants";

export function fetchUserData() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("usersData")
      .doc(firebase.auth().currentUser?.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({
            type: USER_DATA_STATE_CHANGE,
            currentUser: snapshot.data(),
          });
        } else {
          console.log("User doesn't exist");
        }
      });
  };
}
