import axios from "axios";

const Deposit = async (data) => {
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

const Withdraw = async (data) => {
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

const GetTransactions = async (data) => {
    let result = { error: "No data found" };

    const headers = {
      'Content-Type': 'application/json',
      'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw=='
    };
    console.log("23");
    await axios
    .get(`https://reacttask.mkdlabs.com/v2/api/lambda/register`, data, {headers})
      .then((res) => {
        console.log(res);
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
  
    return result;
};

const AccountList = async (data) => {
    let result = { error: "No data found" };

    const headers = {
      'Content-Type': 'application/json',
      'x-project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw=='
    };
    console.log("23");
    await axios
    .get(`https://reacttask.mkdlabs.com/v2/api/lambda/register`, data, {headers})
      .then((res) => {
        console.log(res);
        result = { response: res.data };
      })
      .catch((error) => {
        result = { error: error };
      });
  
    return result;
};

export {Deposit, Withdraw, GetTransactions, AccountList};
