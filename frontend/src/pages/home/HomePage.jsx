import React from 'react'
import ChatIcon from "../../assets/icon-chat.png"
import MoneyIcon from "../../assets/icon-money.png"
import SecurityIcon from "../../assets/icon-security.png"

import { Banner } from '../../components/banner/Banner'
import { FeatureCard } from '../../components/featureCard/FeatureCard'

export const HomePage = () => {
  const features = [
    {
      icon: ChatIcon,
      alt: "Chat Icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      icon: MoneyIcon,
      alt: "Money Icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!"
    },
    {
      icon: SecurityIcon,
      alt: "Security Icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ];


  return (
    <main>
      <Banner/>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} alt={feature.alt} title={feature.title} text={feature.text} />
        ))}
        
      </section>
    </main>
  )
}
