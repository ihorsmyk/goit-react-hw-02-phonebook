import PropTypes from 'prop-types';
import s from './ContactTable.module.css';

const ContactTable = ({ contacts, onDeleteContact }) => {
  //   const delContact = (id) => {
  //     onDeleteContact(id);
  // }

  return (
    <table className={s.contactListTable}>
      <thead className={s.thead}>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {contacts.map(({ id, name, number }) => {
          return (
            <tr key={id}>
              <td>{name} </td>
              <td>{number}</td>
              <td>
                <button className={s.btn} onClick={() => onDeleteContact(id)}>
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactTable;
