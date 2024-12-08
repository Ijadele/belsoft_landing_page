import React from 'react'
import Nav from './Nav'
import RootLayout from '@/app/layout'
import List from './List'
import Section from './Section'
import NextSection from './NextSection'
import EventSection from './EventSection'
import Footer from './Footer'
import Register from './Register'
import Testimonial from './Testimonial'

const MainLayout = () => {
  return (
    <RootLayout>
        <header>
            {/* Navbar */}
            <Nav logo="/logoIcon.png" logoText="Founder's Friday" />
        </header>
        <main>
            {/* Hero Section */}
            <Section
            paraHead="Join our premier monthly meetup for startup founders and tech visionaries"
            paraText="Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities."
            para="Join Us for our next meetup on the 26th of July 2024"
            paraShow="Become a collaborator today"
            arrow="/BoxArrowUpRight.png"
            group="/GroupPic.png"
            />

            {/* What we offer Section */}
            <List />

            {/* Sponsors section */}
        
            <NextSection
            paraText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            group='/Frame.png'
            />

            {/* Event section */}
            <EventSection
            paraText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            group='/logoIcon.png'
            />

            {/* Register section */}
            <Register/>

            {/* Another section */}
            <Testimonial/>

        </main>
        {/* footer */}
        <Footer
          logo='/logoIcon.png'
          logoText="Founder's"
          logoSpan="Friday"
          />
    </RootLayout>
  )
}

export default MainLayout
