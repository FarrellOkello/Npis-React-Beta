import "./CompanyMasters.css";
import { useMutation } from "@apollo/client";
import { Publish } from "@material-ui/icons";
import { toAbsoluteUrl } from "../../Helper";
import { CREATE_COMPANY_MASTER } from "../Common/Constants/Mutations/CompanyMasters";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddCompanyMaster() {
  const [CompanyCode, setCompanyCode] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [CompanyRegistrationNumber, setCompanyRegistrationNumber] =
    useState("");
  const [Email, setEmail] = useState("");
  const [ContactPersonName, setContactPersonName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [Nationality, setNationality] = useState("");
  const [CompanyType, setCompanyType] = useState("");
  const [Corporatestatus, setCorporatestatus] = useState("");
  const [AlternateEmail, setAlternateEmail] = useState("");
  const [AlternateContactNumber, setAlternateContactNumber] = useState("");
  const [Fax, setFax] = useState("");
  const [TaxIdentificationNumber, setTaxIdentificationNumber] = useState("");
  const [RegisterAddress, setRegisterAddress] = useState("");
  const [AlternateAddress, setAlternateAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [CompanyRegion, setCompanyRegion] = useState("");
  const [County, setCounty] = useState("");
  const [Subcounty, setSubcounty] = useState("");
  const [Parish, setParish] = useState("");
  const [Zone_LC1, setZone_LC1] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [CompanyRole, setCompanyRole] = useState("");
  const [CompanyLogoExtension, setCompanyLogoExtension] = useState("");
  const [PermitType, setPermitType] = useState("");
  const [PermitNumber, setPermitNumber] = useState("");
  const [PermitStatus, setPermitStatus] = useState("");
  const [Company_Site, setCompany_Site] = useState("");
  const [PermitDetails, setPermitDetails] = useState("");

  const [addCompanyMaster] = useMutation(CREATE_COMPANY_MASTER);

  const handleSubmit = () => {
    addCompanyMaster({
      variables: {
        CompanyCode: CompanyCode,
        CompanyName: CompanyName,
        CompanyRegistrationNumber: CompanyRegistrationNumber,
        Email: Email,
        ContactPersonName: ContactPersonName,
        ContactNumber: ContactNumber,
        Nationality: Nationality,
        Corporatestatus: Corporatestatus,
        CompanyType: CompanyType,
        IsActive: 1,
        AlternateEmail: AlternateEmail,
        AlternateContactNumber: AlternateContactNumber,
        Fax: Fax,
        TaxIdentificationNumber: TaxIdentificationNumber,
        IsSubmitted: 1,
        RegisterAddress: RegisterAddress,
        AlternateAddress: AlternateAddress,
        District: District,
        CompanyRegion: CompanyRegion,
        County: County,
        Subcounty: Subcounty,
        Parish: Parish,
        Zone_LC1: Zone_LC1,
        PostalCode: PostalCode,
        CreatedBy: 1,
        ModifiedBy: 1,
        CompanyRole: CompanyRole,
        CompanyLogoExtension: CompanyLogoExtension,
        PermitType: PermitType,
        PermitNumber: PermitNumber,
        PermitStatus: PermitStatus,
        Company_Site: Company_Site,
        PermitDetails: PermitDetails,
      },
    })
      .then(({ data: { createCompanyMaster } }) => {
        if (createCompanyMaster) {
          toast("Company Master Added", {
            position: "top-right",
            autoClose: 500000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast("Company Master Not Added", {
            position: "top-right",
            autoClose: 500000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error, null, 2));
        toast(JSON.parse(JSON.stringify(error, null, 2)).message);
      });
  };

  return (
    <div className="addCompanyMasters">
      <div className="newUser">
        <h1 className="newUserTitle">Company Master</h1>
        <br />
        <form className="newUserForm">
          <fieldset>
            <legend>REGISTER DETAILS</legend>
            <div className="newUserItem">
              <label>Company Logo</label>
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
                value={CompanyLogoExtension}
                onChange={(e) => setCompanyLogoExtension(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Company Code</label>
              <input
                type="number"
                placeholder="Company Code"
                value={CompanyCode}
                onChange={(e) => setCompanyCode(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                value={CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Company Reg No.</label>
              <input
                type="text"
                placeholder="Company Reg No."
                value={CompanyRegistrationNumber}
                onChange={(e) => setCompanyRegistrationNumber(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Contact Person</label>
              <input
                type="text"
                placeholder="Contact Person"
                value={ContactPersonName}
                onChange={(e) => setContactPersonName(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Email Id</label>
              <input
                type="email"
                placeholder="Email Id"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Contact Person</label>
              <input
                type="textarea"
                placeholder="Contact Person"
                value={ContactPersonName}
                onChange={(e) => setContactPersonName(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="Contact Number"
                value={ContactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Address 1</label>
              <textarea
                placeholder="Address 1"
                value={RegisterAddress}
                onChange={(e) => setRegisterAddress(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Address 2</label>
              <textarea
                placeholder="Address 2"
                value={AlternateAddress}
                onChange={(e) => setAlternateAddress(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Region</label>
              <select className="newUserSelect" name="Region" id="Region">
                <option
                  value={CompanyRegion}
                  onChange={(e) => setCompanyRegion(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>District</label>
              <select className="newUserSelect" name="District" id="district">
                <option
                  value={District}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>County</label>
              <select className="newUserSelect" name="County" id="County">
                <option
                  value={County}
                  onChange={(e) => setCounty(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <div className="newUserItem">
              <label>SubCounty</label>
              <select className="newUserSelect" name="SubCounty" id="SubCounty">
                <option
                  value={Subcounty}
                  onChange={(e) => setSubcounty(e.target.value)}
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
                value={Parish}
                onChange={(e) => setParish(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Village/Cell</label>
              <input
                type="text"
                placeholder="Contact Person"
                value={Zone_LC1}
                onChange={(e) => setZone_LC1(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Postal Code</label>
              <input
                type="text"
                placeholder="Postal Code"
                value={PostalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Fax</label>
              <input
                type="text"
                placeholder="Fax"
                value={Fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Tin No.</label>
              <input
                type="text"
                placeholder="Tin No."
                value={TaxIdentificationNumber}
                onChange={(e) => setTaxIdentificationNumber(e.target.value)}
              />
            </div>
            <div className="newUserItem">
              <label>Co-operate Status of Ownership</label>
              <select className="newUserSelect" name="active" id="active">
                <option
                  value={Corporatestatus}
                  onChange={(e) => setCorporatestatus(e.target.value)}
                >
                  Other
                </option>
              </select>
            </div>
            <button className="newUserButton" onClick={handleSubmit}>
              Create
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
