import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styles from "./about.module.scss"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="about" />
        <h2>Coye</h2>
        <p className={styles.about}>
          Hello, I’m Coye and I’m a film nerd turned scholar, turned (sorta
          drop-out) turned nerd and back to scholarship. Mine has been a simple
          path with this love/hate/duty of film. It began young, going to
          Blockbuster (I’ve aged myself already) and watching copious amounts of
          TV. My parents loved TV too so we had all the premium stations where I
          consumed hours and hours of pop culture.
        </p>
        <p className={styles.about}>
          Media, generally speaking, is what I went to Indiana University for.
          That and Black People (officially African American African Diaspora
          Studies). Three years after graduating from IU, I went to Ohio
          University for a MA in Film Studies. That was 9 years ago. I WILL be
          updating this &quot;about me&quot; once I graduate, but until then,
          this shall stay.
        </p>
        <p className={styles.about}>
          Please don’t let the term &apos;scholar&apos; deter you or make you
          roll your eyes. I am 100&percnt; on board for non-trained,
          non-indoctrinated persons writing and talking about film. In fact,
          it’s preferred! Though I do have my reservations about how scholarship
          has repeatedly crossed into fandom, I do full-heartedly believe we
          here at nothin good tow the line between pop and scholarship. We want
          to bring rigorous shit here, y'all, we ain’t playin.
        </p>
        <p className={styles.about}>
          Locus of study/interest: <Link to="/tags/">Horror</Link>,{" "}
          <Link to="/tags/">Action &amp; Sci-Fi</Link> (I’m obsessed with genre
          and excess), <Link to="/tags/">The Body</Link>,{" "}
          <Link to="/tags/">Blackness</Link>,{" "}
          <Link to="/tags/">Blackness in Media</Link>,{" "}
          <Link to="/tags/">Cultural Studies</Link>,{" "}
          <Link to="/tags/">Pop Culture</Link>, <Link to="/tags/">Tee Vee</Link>
          , <Link to="/tags/">Fashion</Link>, <Link to="/tags/">Art Shit</Link>,{" "}
          <Link to="/tags/">Hip Hop</Link>, <Link to="/tags/">Pop</Link>,{" "}
          <Link to="/tags/">Metal</Link>, <Link to="/tags/">R&amp;B</Link>,{" "}
          <Link to="/tags/">Electronic</Link>
        </p>
        <hr />
        <h2>R.J. Wilson</h2>
        <p className={styles.about}>
          Hi I'm a filmmaker, editor, producer, and VHS hoarder based in
          Portland, Maine. Since 2014, it's been my goal to “scare audiences in
          60 seconds or less”. My website,{" "}
          <a
            href="http://www.rjwilsonhorror.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.rjwilsonhorror.com
          </a>
          , launched in early 2019, where you can watch my original horror
          microshorts and stay up to date with productions and such. In my spare
          time, I sometimes write film theory about horror movies, my
          relationship to analog, and Satan. I also play guitar for Portland
          thrashpunk and cokecore band,{" "}
          <a
            href="https://eyeballmaine.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eyeball
          </a>
          .
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
