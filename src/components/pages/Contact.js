import React, { Component } from 'react';
import Field from '../common/Field';
import {withFormik} from "formik";

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text',placeholder: 'your name*'},
            {name: 'email', elementName: 'input', type: 'email',placeholder: 'your email*'},
            {name: 'phone', elementName: 'input', type: 'text',placeholder: 'your phone number*'}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text',placeholder: 'Type your message*'}
        ]
    ]
}



class Contact extends Component {
    
    submitForm = (e) => {
        alert("Form submitted. Thank you!");
    }
    render(){
        return(
            <section id="contact">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form onSubmit={e => this.submitForm(e)} name="sentMessage" novalidate="novalidate">
                        <div className="row">
                            {fields.sections.map((section, sectionIndex) => {
                                console.log("Rendering section", sectionIndex, "with", section);
                                return (
                                    <div className="col-med-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field 
                                                        {...field} 
                                                        key={i} 
                                                        
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        
                            
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button 
                                    className="btn btn-primary btn-xl text-uppercase" 
                                    type="submit"
                                    
                                    >Send Message
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
  </section>

        )
    }
}


export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validate: values => {
        const errors = {};
        Object.keys(values).map(v => {
            if(!values[v]){
                errors[v] = "Required";
            }
        })
        return errors;
        
    },
    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form");
    }
})(Contact);