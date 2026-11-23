import { useSelector } from 'react-redux'
import { selectContacts, selectFilter } from '../../redux/selectors'
import { ContactItem } from '../ContactItem/ContactItem'
import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <ul className={css.list}>
      {visibleContacts.map(item => (
        <ContactItem key={item.id} contact={item} />
      ))}
    </ul>
  )
}
