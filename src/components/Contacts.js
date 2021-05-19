import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import Section from "./section/Section";
import { connect } from "react-redux";
import ContactsFilter from "./filter/ContactsFilter";
import { addContact, deleteContact, filterContacts, getAllContacts } from "../redux/contacts/contactsAction";
import { addContactOperation, deleteContactsOperation, getAllContactsOperation } from "../redux/contacts/contactsOperation";
import { errorContactSelector, filterContactSelector, getContactSelector } from "../redux/contacts/contactsSelectors";

class Contacts extends Component {
  state = {
    contacts: {
      items: [],
      filter: ""
    }
  };

  async componentDidMount() {
    this.props.getAllContactsOperation();

    // try {
    //   const { data } = await axios.get(`https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts.json`);
    //   if (data) {
    //     const contacts = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    //     this.props.getAllContacts(contacts);
    //   }
    //   console.log(data);
    // } catch (error) {}
  }

  addContact = async contact => {
    this.props.addContactOperation(contact);

    // try {
    //   const { data } = await axios.post(`https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts.json`, contact);
    //   this.props.addContact({ ...contact, id: data.name });
    //   console.log(data);
    // } catch (error) {}
  };

  onDeleteContact = async e => {
    const { id } = e.target;
    this.props.deleteContactsOperation(id);
    // try {
    //   const { id } = e.target;
    //   await axios.delete(`https://phonebook-d0d0b-default-rtdb.firebaseio.com/contacts/${id}.json`);
    //   this.props.deleteContact(id);
    // } catch (error) {}
  };

  checkDublicateName = name => {
    return this.props.contacts.some(contact => contact.name === name);
  };

  setFilter = e => {
    const { value } = e.target;
    this.props.filterContacts(value);
  };

  getFilteredContacts = () => {
    console.log(this.props);
    return this.props.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter.toLowerCase()));
  };

  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading....</h2>}
        <Section title="Phonebook">
          <ContactsForm addContact={this.addContact} checkDublicateName={this.checkDublicateName} />
        </Section>

        <Section title="Find contact by name">
          <ContactsFilter filter={this.props.filter} setFilter={this.setFilter} />
        </Section>

        <Section title="Contacts">
          <ContactsList
            contacts={this.props.contacts}
            onDeleteContact={this.onDeleteContact}
            contacts={this.getFilteredContacts()}
          />
        </Section>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: getContactSelector(state),
    filter: filterContactSelector(state),
    error: errorContactSelector(state)
  };
};

const mapDispatchToProps = {
  getAllContactsOperation,
  addContactOperation,
  deleteContactsOperation,
  filterContacts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
