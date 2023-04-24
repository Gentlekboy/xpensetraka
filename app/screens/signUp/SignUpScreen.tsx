import {ScrollView, Text, View} from "react-native";
import React, {useState} from "react";
import {SignUpScreenNavProps} from "../../navigation/types/rootStack/navigationProp/SignUpScreenNavProps";
import InputField from "../../components/inputFields/InputField";
import PasswordInputField from "../../components/inputFields/PasswordInputField";
import CheckboxWithDescription from "../../components/checkbox/CheckboxWithDescription";
import Button from "../../components/button/Button";
import GoogleIcon from "../../assets/svg/googleIcon.svg";
import HasAccount from "../../components/has_account/HasAccount";
import {styles} from "./styles";

const SignUpScreen = ({navigation}: SignUpScreenNavProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <ScrollView
      style={{backgroundColor: "#FFF"}}
      contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <InputField
          inputValue={name}
          placeholder="Name"
          onChangeText={name => setName(name)}
          inputStyle={styles.inputStyle}
        />

        <InputField
          inputValue={email}
          placeholder="Email"
          onChangeText={email => setEmail(email)}
          inputStyle={styles.inputStyle}
          keyboardType="email-address"
        />

        <PasswordInputField
          inputValue={password}
          onChangeText={password => setPassword(password)}
          hidePassword={isPasswordHidden}
          placeholder="Password"
          setHidePassword={() => setIsPasswordHidden(!isPasswordHidden)}
        />

        <CheckboxWithDescription
          isCheckboxTicked={false}
          onCheck={() => {}}
          onPressTAndC={() => {}}
          containerStyle={styles.checkboxContainer}
        />

        <Button buttonText="Sign Up" />

        <Text style={styles.orWith}>Or with</Text>

        <Button
          buttonText="Sign Up with Google"
          icon={<GoogleIcon width={28} height={28} />}
          style={styles.googleButton}
          textStyle={styles.googleButtonText}
        />

        <HasAccount
          firstText="Already have an account? "
          secondText="Login"
          onPressSecondText={() => {}}
          style={styles.hasAccount}
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
