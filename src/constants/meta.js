export default metadata = {
  signupPage: [
    {
      label: "Full Name",
      type: "fullName",
      text: "name", // input field textContentType
    },
    {
      label: "Email",
      type: "email",
      text: "emailAddress", // input field textContentType
    },
    {
      label: "Password",
      type: "password",
      text: "password", // input field textContentType
      secureTextEntry: true
    },
    {
      label: "Country of residence",
      type: "countryOfResidence",
      text: "countryName", // input field textContentType
    },
    {
      label: "Phone",
      type: "phone",
      text: "telephoneNumber", // input field textContentType
    }
  ],
  loginPage: [
    {
      label: "Email",
      type: "email",
      text: "emailAddress", // input field textContentType
    },
    {
      label: "Password",
      type: "password",
      text: "password", // input field textContentType
      secureTextEntry: true
    },
  ]
};
