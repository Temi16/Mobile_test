
import axios from "axios";


const LoginUser = async (data) => {
  console.log("hii34")
    let result = { error: "No data found" };
    
    await axios
      .post(`https://bankapi.veegil.com/auth/login`, data)
      .then((res) => {
        console.log("hii35")
        console.log(res)
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
    return result;
};

const RegisterUser = async (data) => {
    let result = { error: "No data found" };

    // const headers = {
    //   'Content-Type': 'application/json',
    //   'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw=='
    // };
    console.log("23");
    await axios
    .post(`https://bankapi.veegil.com/auth/signup`, data)
      .then((res) => {
        console.log(res);
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
  
    return result;
};


export {LoginUser, RegisterUser};
