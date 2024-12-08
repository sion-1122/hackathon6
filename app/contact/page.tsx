import ContactForm from '@/components/Contactform'
import { HeroHeader } from '@/components/hero-header'
import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div>
      <HeroHeader
        backgroundImage="/Rectangle 1.png"
        breadcrumbItems={[
          { href: "/", label: "home" },
          { href: "/Contact", label: "Contact" },
        ]}
        title="Contact"
      />
      <ContactForm />
      <div>
                <Image height={270} width={1440} alt="logo" src="/fr.png" />
                </div>
    </div>
  )
}

export default ContactPage
