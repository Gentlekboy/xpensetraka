import {ScrollView, Text, View} from "react-native";
import React, {useState} from "react";
import InputField from "../../components/inputFields/InputField";
import PasswordInputField from "../../components/inputFields/PasswordInputField";
import Button from "../../components/button/Button";
import GoogleIcon from "../../assets/svg/googleIcon.svg";
import HasAccount from "../../components/has_account/HasAccount";
import {styles} from "./styles";
import {LoginScreenNavProps} from "../../navigation/types/rootStack/navigationProp/LoginScreenNavProps";

const LoginScreen = ({navigation}: LoginScreenNavProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <ScrollView
      style={{backgroundColor: "#FFF"}}
      contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
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

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <Button buttonText="Login" style={styles.loginButton} />

        <Text style={styles.orWith}>Or with</Text>

        <Button
          buttonText="Login with Google"
          icon={<GoogleIcon width={28} height={28} />}
          style={styles.googleButton}
          textStyle={styles.googleButtonText}
        />

        <HasAccount
          firstText="Don't have an account yet? "
          secondText="Sign Up"
          onPressSecondText={() => navigation.navigate("SignUpScreen")}
          style={styles.hasAccount}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
