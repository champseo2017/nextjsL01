import React, { Component } from 'react'
import Layout from "../components/Layout";
import $ from "jquery";
import NextSeo from 'next-seo';

// let's create a configuration for next-seo
const DEFAULT_SEO = {
  title: 'About',
  description: 'About'
};

class About extends Component {
  componentDidMount() {
    let heightcheck = this.divheight.offsetHeight
    if(heightcheck < 600){
      $('body').find('.heightcon').addClass('fullHeight')
    }else{
      $('body').find('.heightcon').removeClass('fullHeight')
    }

  }
 
  render() {
    return (
      <Layout>
      <div ref={(div) =>{this.divheight = div; }}>
        <h1>About Idol Of Me</h1>
        <p>Steve Jobs co-founded Apple Computers with Steve Wozniak. Under Jobs' guidance, the company pioneered a series of revolutionary technologies, including the iPhone and iPad.
        Who Was Steve Jobs?
        Steven Paul Jobs was an American inventor, designer and entrepreneur who was the co-founder, chief executive and chairman of Apple Computer. Apple's revolutionary products, which include the iPod, iPhone and iPad, are now seen as dictating the evolution of modern technology. 

        Born in 1955 to two University of Wisconsin graduate students who gave him up for adoption, Jobs was smart but directionless, dropping out of college and experimenting with different pursuits before co-founding Apple with Steve Wozniak in 1976. Jobs left the company in 1985, launching Pixar Animation Studios, then returned to Apple more than a decade later. Jobs died in 2011 following a long battle with pancreatic cancer. 
        
        </p>
        <p>
          Steve Jobs’ Parents and Adoption
          Jobs was born to Joanne Schieble (later Joanne Simpson) and Abdulfattah "John" Jandali, two University of Wisconsin graduate students. The couple gave up their unnamed son for adoption.
        </p>
        <p>
        Jobs’ father, Jandali, was a Syrian political science professor. His mother, Schieble, worked as a speech therapist. Shortly after Jobs was placed for adoption, his biological parents married and had another child, Mona Simpson. It was not until Jobs was 27 that he was able to uncover information on his biological parents.

        As an infant, Jobs was adopted by Clara and Paul Jobs and named Steven Paul Jobs. Clara worked as an accountant and Paul was a Coast Guard veteran and machinist.

        Early Life
        Jobs was born on February 24, 1955, in San Francisco, California. He lived with his adoptive family in Mountain View, California, within the area that would later become known as Silicon Valley.

        As a boy, Jobs and his father worked on electronics in the family garage. Paul showed his son how to take apart and reconstruct electronics, a hobby that instilled confidence, tenacity and mechanical prowess in young Jobs.

        Steve Jobs’ Education and College
        While Jobs was always an intelligent and innovative thinker, his youth was riddled with frustrations over formal schooling. Jobs was a prankster in elementary school due to boredom, and his fourth-grade teacher needed to bribe him to study. Jobs tested so well, however, that administrators wanted to skip him ahead to high school — a proposal that his parents declined.
        </p>
        <p>
        After high school, Jobs enrolled at Reed College in Portland, Oregon. Lacking direction, he dropped out of college after six months and spent the next 18 months dropping in on creative classes at the school. Jobs later recounted how one course in calligraphy developed his love of typography.

        In 1974, Jobs took a position as a video game designer with Atari. Several months later he left the company to find spiritual enlightenment in India, traveling further and experimenting with psychedelic drugs.

        Steve Wozniak and Steve Jobs
        Back when Jobs was enrolled at Homestead High School, he was introduced to his future partner and co-founder of Apple Computer, Wozniak, who was attending the University of California, Berkeley.

        In a 2007 interview with PC World, Wozniak spoke about why he and Jobs clicked so well: "We both loved electronics and the way we used to hook up digital chips," Wozniak said. "Very few people, especially back then, had any idea what chips were, how they worked and what they could do. I had designed many computers, so I was way ahead of him in electronics and computer design, but we still had common interests. We both had pretty much sort of an independent attitude about things in the world.”
        </p>
       </div>
       <NextSeo config={DEFAULT_SEO} /> 
    </Layout>
    )
  }
}

export default About;