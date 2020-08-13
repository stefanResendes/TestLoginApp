import React, { memo, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { NavigationContext } from 'react-navigation';
import { nameValidator, emailValidator, passwordValidator } from '../core/utils';

const Dashboard = ({ navigation, route }) => {

  const { token } = route.params;

  const [firstname, setFirstName] = useState({ value: '', error: '' });
  const [lastname, setLastName] = useState({ value: '', error: '' });
  const [middlename, setMiddleName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [updateuserpass, setUpdateUserPass] = useState({ value: '', error: '' });
  const [homephone, setHomePhone] = useState({ value: '', error: '' });
  const [workphone, setWorkPhone] = useState({ value: '', error: '' });
  const [cellphone, setCellPhone] = useState({ value: '', error: '' });
  const [address, setAddress] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [newpassword, setNewPassword] = useState({ value: '', error: '' });

  const _logout = () => {
    fetch('http://159.89.153.162:5000/api/v1/auth/logout', {
      method: 'GET'
    });
    navigation.navigate('Home');
  }

  const _loggedInUser = () => {
    fetch('http://159.89.153.162:5000/api/v1/auth/me', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
  }

  const _updatePassword = () => {
    const passwordError = passwordValidator(password.value);
    const newPasswordError = passwordValidator(newpassword.value);

    if (passwordError || newPasswordError) {
      setPassword({ ...password, error: passwordError });
      setNewPassword({ ...newpassword, error: newPasswordError });
      return;
    } else {
      var data = {
        currentPassword: password.value,
        newPassword: newpassword.value
      }
      fetch('http://159.89.153.162:5000/api/v1/auth/updatepassword', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      });
    }
  }

  const _updateUser = () => {
    const firstNameError = nameValidator(firstname.value);
    const lastNameError = nameValidator(lastname.value);
    const middleNameError = nameValidator(middlename.value);
    const emailError = nameValidator(email.value);
    const updateuserpassError = passwordValidator(updateuserpass.value);
    const homePhoneError = nameValidator(homephone.value);
    const workPhoneError = nameValidator(workphone.value);
    const cellPhoneError = nameValidator(cellphone.value);
    const addressError = nameValidator(address.value);

    if (firstNameError || lastNameError || middleNameError || homePhoneError || workPhoneError || cellPhoneError || addressError || emailError || updateuserpassError) {
      setFirstName({ ...firstname, error: firstNameError });
      setMiddleName({ ...middlename, error: middleNameError });
      setLastName({ ...lastname, error: lastNameError });
      setHomePhone({ ...homephone, error: homePhoneError });
      setWorkPhone({ ...workphone, error: workPhoneError });
      setCellPhone({ ...cellphone, error: cellPhoneError });
      setAddress({ ...address, error: addressError });
      setEmail({ ...email, error: emailError });
      setUpdateUserPass({ ...updateuserpass, error: updateuserpassError });
      return;
    } else {
      var data = {
        firstName: firstname.value,
        middleName: middlename.value,
        lastName: lastname.value,
        email: email.value,
        password: updateuserpass.value,
        homePhone: homephone.value,
        workPhone: workphone.value,
        cellPhone: cellphone.value,
        address: address.value
      }

      fetch('http://159.89.153.162:5000/api/v1/auth/updatedetails', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
      });

    }

  }

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={_logout}>
        Logout
      </Button>
      <Button mode="outlined" onPress={_loggedInUser}>
        Get Logged in User
      </Button>

      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstname.value}
        onChangeText={text => setFirstName({ value: text, error: '' })}
        error={!!firstname.error}
        errorText={firstname.error}
      />

      <TextInput
        label="Middle Name"
        returnKeyType="next"
        value={middlename.value}
        onChangeText={text => setMiddleName({ value: text, error: '' })}
        error={!!middlename.error}
        errorText={middlename.error}
      />

      <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastname.value}
        onChangeText={text => setLastName({ value: text, error: '' })}
        error={!!lastname.error}
        errorText={lastname.error}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={updateuserpass.value}
        onChangeText={text => setUpdateUserPass({ value: text, error: '' })}
        error={!!updateuserpass.error}
        errorText={updateuserpass.error}
        secureTextEntry
      />

      <TextInput
        label="Home Phone"
        returnKeyType="next"
        value={homephone.value}
        onChangeText={text => setHomePhone({ value: text, error: '' })}
        error={!!homephone.error}
        errorText={homephone.error}
      />

      <TextInput
        label="Work Phone"
        returnKeyType="next"
        value={workphone.value}
        onChangeText={text => setWorkPhone({ value: text, error: '' })}
        error={!!workphone.error}
        errorText={workphone.error}
      />

      <TextInput
        label="Cell Phone"
        returnKeyType="next"
        value={cellphone.value}
        onChangeText={text => setCellPhone({ value: text, error: '' })}
        error={!!cellphone.error}
        errorText={cellphone.error}
      />

      <TextInput
        label="Address"
        returnKeyType="next"
        value={address.value}
        onChangeText={text => setAddress({ value: text, error: '' })}
        error={!!address.error}
        errorText={address.error}
      />

      <Button mode="outlined" onPress={_updateUser}>
        Update User
      </Button>

      <TextInput
        label="Current Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label="New Password"
        returnKeyType="done"
        value={newpassword.value}
        onChangeText={text => setNewPassword({ value: text, error: '' })}
        error={!!newpassword.error}
        errorText={newpassword.error}
        secureTextEntry
      />

      <Button mode="outlined" onPress={_updatePassword}>
        Update Password
      </Button>

    </Background>
  );
}

export default memo(Dashboard);
