import { contact } from '../../portfolio'
import './Contact.css'
const Contact = () => {
  if (!contact.email) return null

  return (<>
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <h3 className='section__title about__name'> <i class="fa fa-envelope "></i> {contact.email}</h3>
      <h3 className='section__title about__name'> <i class="fa fa-phone "></i> {contact.phone}</h3>
     
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
    
     
     </> )
}

export default Contact
