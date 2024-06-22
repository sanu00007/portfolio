import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import emailjs from 'emailjs-com';
import './styles.scss'
const Contact = () => {

    const initialFormData ={
        name: '',
        email: '',
        description: ''
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_7qjn9kn', 'template_l2zwcqc', formData, 'bHDS9GbBRli4tj3tB')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('You Contacted Me successfully!');
                setFormData(initialFormData); 
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to send message, please try again.');
            });
    };

    return (
        <section id="contact" className="contact">

            <PageHeaderContent
                headerText="My Contact"
                icon={<IoIosContact size={40} />}
            />

            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Connect</h3>

                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <form className="contact__content__form" onSubmit={handleSubmit}>
                        <div className="contact__content__form__controlwrapper">
                            <div>
                                <input required name="name" className="inputName" type="text" value={formData.name} onChange={handleChange} />
                                <label htmlFor="name" className="nameLabel" >Name</label>
                            </div>
                            <div>
                            <input required name="email" className="inputEmail" type="text" value={formData.email} onChange={handleChange} />
                            <label htmlFor="email" className="emailLabel" >Email</label>
                            </div>
                            <div>
                            <textarea required rows={5} name="description" className="inputDescription" type="text" value={formData.description}
                                    onChange={handleChange} />
                            <label htmlFor="description" className="descriptionLabel" >Description</label>
                            </div>
                        </div>
                        <button type="submit">Submit</button>

                    </form>

                </Animate>

            </div>

        </section>

    )

}

export default Contact;