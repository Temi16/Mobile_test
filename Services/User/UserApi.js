import Header from "../Header";
import axios from "axios";


const LoginUser = async (data) => {
    let result = { error: "No data found" };
    const headers = {
      'Content-Type': 'application/json',
      'x-project': 'cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ=='
    };
  
    await axios
      .post(`https://reacttask.mkdlabs.com/v2/api/lambda/login`, data, {headers})
      .then((res) => {
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
    return result;
};

const RegisterUser = async (data) => {
    let result = { error: "No data found" };

    const headers = {
      'Content-Type': 'application/json',
      'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw=='
    };
    console.log("23");
    await axios
    .post(`https://reacttask.mkdlabs.com/v2/api/lambda/register`, data, {headers})
      .then((res) => {
        console.log(res);
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
  
    return result;
};

const UpdateProfile = async (data, token) => {
  let result = { error: "No data found" };

  const headers = {
    'Content-Type': 'application/json',
    'x-project': 'cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ==',
    'Authorization' : `Bearer ${token}`
  };
  console.log("23");
  await axios
  .post(`https://reacttask.mkdlabs.com/v2/api/lambda/profile`, data, {headers})
    .then((res) => {
      console.log(res);
      result = { response: res };
    })
    .catch((error) => {
      result = { error: error };
    });

  return result;
};

//Change Password
const changePassword = async (data, authorization) => {
    let result = { error: "No data found" };
  
    const headers = {
      'Content-Type': 'application/json',
      'x-project': 'cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ==',
      'Authorization' : `Bearer ${token}`
    };

    await axios
    .post(
      `https://reacttask.mkdlabs.com/v2/api/lambda/forgot`,
      data,
      authorization
    )
      .then((res) => {
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
  
    return result;
};

const passwordResetLink = async (data) => {
    let result = { error: "No data found" };
  
    const headers = {
      'Content-Type': 'application/json',
      'x-project': 'cmVhY3R0YXNrOjVmY2h4bjVtOGhibzZqY3hpcTN4ZGRvZm9kb2Fjc2t5ZQ==',
      'Authorization' : `Bearer ${token}`
    };

    await axios
    .post(
      `https://reacttask.mkdlabs.com/v2/api/lambda/reset`,
      data,
      authorization
    )
      .then((res) => {
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
  
    return result;
};

export {LoginUser, RegisterUser, UpdateProfile, changePassword, passwordResetLink};
