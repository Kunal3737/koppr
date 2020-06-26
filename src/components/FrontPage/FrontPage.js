import React, { Component } from "react";
import styles from "../FrontPage/FrontPage.module.css";
import employeeAllowancesSalaried from "../../images/employeeAllowancesSalaried.jpg";

class FrontPage extends Component {
  render() {
    return (
      <div className={styles.frontPageWrapper}>
        <div className={styles.left50}>
          <h1 className={styles.leftHeader}>
            Koppr for HR Admins & Business Leaders
          </h1>
          <h3 className={styles.leftSubHeader}>
            Manage employees, salaries & tax benefits with Koppr
          </h3>
          <div className={styles.employeeAllowancesSalariedBorder}>
            <img
              src={employeeAllowancesSalaried}
              alt="Employee Allowances Salaried"
              className={styles.employeeAllowancesSalaried}
            />
          </div>
          <br />
          <span className={styles.helpText}>
            Need help with your Koppr Account? Get in touch
          </span>
          <br />
          <div className={styles.helpContacts}>
            <span>(+91) 8879600206</span>
            <span>care@koppr.in</span>
          </div>
        </div>

        <div className={styles.right50}>
          <div className={styles.signupText}>
            <h2>
              Sign up for your <span className={styles.freeText}>FREE</span>{" "}
              Koppr Corporate account
            </h2>
          </div><br/><br/>
          <div className={styles.formWrapper}>
            <form className={styles.signUpForm}>
              <div className={styles.inputStyles}>
                <input type="text" className={styles.commonInputs} placeholder="Company Name *" />
              </div>
              <div className={styles.inputStyles}>
                <input type="text" className={styles.commonInputs} placeholder="First Name *" />
              </div>
              <div className={styles.inputStyles}>
                <input type="text" className={styles.commonInputs} placeholder="Last Name *" />
              </div>
              <div className={styles.inputStyles}>
                <input type="emailid" className={styles.commonInputs} placeholder="Corporate Email Id *" />
              </div>
              <div className={styles.inputStyles}>
                <select className={styles.countryCode}>
                  <option value="+91">+91</option>
                </select>
                <input type="number" className={styles.phoneNumberInputID} placeholder="Phone Number *" />
              </div>
              <div className={styles.inputStyles}>
                <select className={styles.genderDropDown}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.inputStyles}><button>Next</button></div>
            </form>
            <br />
            <span className={styles.alreadyKopprAccount}>
              Already have a Koppr Account? Sign in <span className={styles.signInHereText}>here</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
