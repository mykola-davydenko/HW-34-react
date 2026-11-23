import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/operations'
import css from './ContactItem.module.css'

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch()

  return (
    <li className={css.item}>
      <div className={css.info}>
        {contact.avatar && (
          <img className={css.avatar} src={contact.avatar} alt={contact.name} />
        )}
        <p>
          {contact.name}: {contact.number}
        </p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
}
