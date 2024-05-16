import { useState, useCallback, useEffect } from "react";
import ContactUsPage from "../Component/Body/ContactUsPage";

const ContactUs = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContactData = useCallback(() => {
    setLoading(true);
    fetch(
      "https://ecommercewebsite-4f5d5-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedContact = Object.keys(data).map((key) => {
          const contactData = data[key];
          return {
            id: key,
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone,
          };
        });
        setContact(transformedContact);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Something went wrong ....Retrying ", error);
        setLoading(false);
      });
  }, []);

  const handleAddContact = async (newContact) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://ecommercewebsite-4f5d5-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
        }
      );
      if (response.ok) {
        fetchContactData();
      }
    } catch (error) {
      console.log("Error adding movie: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, [fetchContactData]);

  return <ContactUsPage onAddContact={handleAddContact} />;
};
export default ContactUs;
