import React, { Component } from 'react';
import { loginSignupApi } from '../../config';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      passwordReCheck: '',
      name: '',
      phoneNumber: '',
    };
  }

  requestSignin = e => {
    e.preventDefault();

    const { email, password, name, phoneNumber } = this.state;
    fetch(`${loginSignupApi}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        phone_number: phoneNumber,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(`result`, result);
        if (result.status === 'SUCCESS') {
          this.props.history.push('./login');
        } else if (result.status === 'DUPLICATED_ENTRY_ERROR') {
          alert('중복된 전화번호입니다.');
        } else {
          alert('error');
        }
      });
  };

  inputHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, passwordReCheck, name, phoneNumber } = this.state;
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 8;
    const isPasswordReCheckValid =
      passwordReCheck.length > 1 && passwordReCheck === password;
    return (
      <div className="signupWrap">
        <div className="signup">
          <h1 className="logo">kokoa</h1>
          <form className="inputFrom" onSubmit={this.requestSignin}>
            <h1>코코아 계정 정보를 입력해 주세요.</h1>
            <div className="inputWrap">
              <h2>코코아 계정 이메일</h2>
              <input
                name="email"
                type="email"
                placeholder="이메일 주소 입력"
                onChange={this.inputHandler}
              />
              {!isEmailValid && (
                <p className="inValidmsg">이메일 형식에 맞게 작성해주세요.</p>
              )}
            </div>
            <div className="inputWrap">
              <h2>비밀번호</h2>
              <input
                name="password"
                type="password"
                placeholder="비밀번호(8~32자리)"
                onChange={this.inputHandler}
              />
              {!isPasswordValid && (
                <p className="inValidmsg">8자리 이상 작성해 주세요</p>
              )}
              <input
                name="passwordReCheck"
                type="password"
                placeholder="비밀번호 재입력"
                onChange={this.inputHandler}
              />
              {!isPasswordReCheckValid && (
                <p className="inValidmsg">위와 동일하게 작성해 주세요 </p>
              )}
            </div>
            <div className="inputWrap">
              <h2>이름</h2>
              <input
                name="name"
                type="text"
                placeholder="이름을 입력해 주세요."
                onChange={this.inputHandler}
              />
            </div>
            <div className="inputWrap">
              <h2>전화번호</h2>
              <div className="inputNum">
                <select>
                  <option>+82</option>
                </select>
                <input
                  name="phoneNumber"
                  type="tell"
                  placeholder="전화번호"
                  onChange={this.inputHandler}
                />
              </div>
            </div>
            <button className="numBtn">인증번호 발송</button>
            <button
              className="nextBtn"
              disabled={!(isEmailValid && isPasswordValid)}
              onClick={this.requestSignin}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
