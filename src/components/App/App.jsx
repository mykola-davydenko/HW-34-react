import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/operations'
import { selectIsLoading, selectError } from '../../redux/selectors'
import { ContactForm } from '../ContactForm/ContactForm'
import { Filter } from '../Filter/Filter'
import { ContactList } from '../ContactList/ContactList'
import css from './App.module.css'

export const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className={css.box}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p className={css.loading}>Loading...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <ContactList />
    </div>
  )
}
