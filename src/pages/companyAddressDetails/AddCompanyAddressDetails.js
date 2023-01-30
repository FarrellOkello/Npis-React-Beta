import { Publish } from "@material-ui/icons";
import React from "react";
import { toAbsoluteUrl } from "../../Helper";

export default function AddCompanyAddressDetails() {
  return (
    <div className="companyAddressDetails">
      <div className="newUser">
        <h1 className="newUserTitle">Company Address Details</h1>
        <br />
        <form className="newUserForm">
          <fieldset>
            <legend>Ceo Details</legend>
            <div className="newUserItem">
              <label>Ceo Image</label>
              <img
                src={toAbsoluteUrl("/assets/img/CoatOfArms.jpg")}
                alt=""
                className="compMasterUpdateImg"
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                // value={CompanyLogoExtension}
                // onChange={(e) => setCompanyLogoExtension(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                // value={CompanyCode}
                // onChange={(e) => setCompanyCode(e.target.value)}
              />
            </div>

            <div className="newUserItem">
              <label>Email Id</label>
              <input
                type="email"
                placeholder="Email Id"
                // value={Email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="Contact Number"
                // value={ContactNumber}
                // onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Address 1</label>
              <textarea
                placeholder="Address 1"
                // value={RegisterAddress}
                // onChange={(e) => setRegisterAddress(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Address 2</label>
              <textarea
                placeholder="Address 2"
                // value={AlternateAddress}
                // onChange={(e) => setAlternateAddress(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Region</label>
              <select className="newUserSelect" name="Region" id="Region">
                <option
                //   value={CompanyRegion}
                //   onChange={(e) => setCompanyRegion(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>District</label>
              <select className="newUserSelect" name="District" id="district">
                <option
                //   value={District}
                //   onChange={(e) => setDistrict(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>County</label>
              <select className="newUserSelect" name="County" id="County">
                <option
                //   value={County}
                //   onChange={(e) => setCounty(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>SubCounty</label>
              <select className="newUserSelect" name="SubCounty" id="SubCounty">
                <option
                //   value={Subcounty}
                //   onChange={(e) => setSubcounty(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>Parish/Yard</label>
              <input
                type="text"
                placeholder="Parish / Yard"
                // value={Parish}
                // onChange={(e) => setParish(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Village/Cell</label>
              <input
                type="text"
                placeholder="Contact Person"
                // value={Zone_LC1}
                // onChange={(e) => setZone_LC1(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Postal Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                // value={PostalCode}
                // onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Fax</label>
              <input
                type="text"
                placeholder="Fax"
                // value={Fax}
                // onChange={(e) => setFax(e.target.value)}
              />
            </div>
            <button
              className="newUserButton"
              // onClick={handleSubmit}
            >
              Create Address
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
