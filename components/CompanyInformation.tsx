// components/CompanyInformationForm.tsx
import React from 'react';
import { TfiControlBackward } from 'react-icons/tfi';

interface Props {
    formData: any;
    setFormData: (data: any) => void;
    previousStep: () => void;
    submitForm: () => void;
}

const CompanyInformationForm: React.FC<Props> = ({ formData, setFormData, previousStep, submitForm }) => {
    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='mt-5'>
            <form className=''>
                <h5 className='mb-3'>Company Information:</h5>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyName" className='text-secondary'>Company Name*</label>
                        <input className='form-control' type="text" name="companyName" placeholder="Company Name*" value={formData.companyName} onChange={handleChange} required/>

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyEmail" className='text-secondary'>Company Email*</label>
                        <input className='form-control' type="email" name="companyEmail" placeholder="Company Email" value={formData.companyEmail} onChange={handleChange} required/>

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companylogo" className='text-secondary'>Company Logo*</label>
                        <input className='form-control' type="file" name="companyLogo" placeholder="Company Logo" onChange={handleChange} accept=".png,.jpg,.jpeg,.webp" required/>

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyWebsite" className='text-secondary'>Company Website</label>
                        <input className='form-control' type="url" name="companyWebsite" placeholder="Company Website" value={formData.companyWebsite} onChange={handleChange} />

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="contactNumber" className='text-secondary'>Company Contact Number</label>
                        <input className='form-control' type="text" name="contactNumber" placeholder="Company Number" value={formData.contactNumber} onChange={handleChange} />

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyAddress" className='text-secondary'>Company Address</label>
                        <input className='form-control' type="text" name="companyAddress" placeholder="Company Address" value={formData.companyAddress} onChange={handleChange} />

                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="companyWebsite" className='text-secondary'>Linkedin</label>
                        <input className='form-control' type="url" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} />

                    </div>
                    <div className="col-lg-6 mb-3">
                        <label htmlFor="fasciaName" className='text-secondary'>Fascia Name</label>
                        <input className='form-control' type="text" name="fasciaName" placeholder="Fascia Name" value={formData.fasciaName} onChange={handleChange} />

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="projectInterest" className='text-secondary'>Project Interest</label>
                        <input className='form-control' type="text" name="projectInterest" placeholder="Project of Interest" value={formData.projectInterest} onChange={handleChange} />

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="companyOverview" className='text-secondary'>companyOverview</label>
                        <textarea rows={3} className='form-control' name="companyOverview" placeholder="Company Overview" value={formData.companyOverview} onChange={handleChange}  required/>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-3 d-flex justify-content-between align-items-center">
                        <button type="button" onClick={previousStep} className='d-flex gap-2 align-items-center bg-white'>
                            <TfiControlBackward />
                            <span>Previous</span></button>
                        <button type="button" className='btn btn-primary text-white' onClick={submitForm}>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};



export default CompanyInformationForm;
