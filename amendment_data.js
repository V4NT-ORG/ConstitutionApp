const amendmentData = {
  1: {
    title: "Amendment I",
    numberRoman: "I",
    numberOrdinal: "First",
    subtitle: "What is the First Amendment?",
    imageFileName: "amendment1.jpg", // Added image file name
    story: "At school, Brandon started a podcast where students could talk about anything from favorite books to different takes on school rules. The principal didn't like it and tried to shut it down. But Brandon knew her rights, the First Amendment was on her side. Soon, his friends joined in, rallying peacefully for change. Turns out, knowing your rights makes sure your voice is heard.",
    description: [
      "The First Amendment to the U.S. Constitution is one of the most important parts of American democracy. It guarantees five powerful freedoms that let people speak out, believe what they want, and challenge the government. These rights are the foundation of a society where ideas can be shared, debated, and defended."
    ],
    fullText: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">First Amendment Breakdown</h3>

        <details class="amendment-detail religion-detail">
          <summary><i class="fas fa-place-of-worship"></i> Establishment Clause: "Congress shall make no law respecting an establishment of religion…"</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> The government can't set up an official religion or give one religion special treatment.</p>
            <p><i class="fas fa-check-circle"></i> Public schools and courts must stay neutral when it comes to faith.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong>  If a public school starts the day with a Christian prayer over the loudspeaker, that's a violation of this clause.</p>
          </div>
        </details>

        <details class="amendment-detail religion-detail">
          <summary><i class="fas fa-pray"></i> Free Exercise Clause: "…or prohibiting the free exercise thereof…"</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> You can freely practice your religion—attend services, pray, wear religious clothing, and celebrate holidays.</p>
            <p><i class="fas fa-check-circle"></i> This right applies as long as your actions don’t break public laws or harm others.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example: </strong> A Muslim student using a prayer rug at lunch is protected by this freedom.</p>
          </div>
        </details>

        <details class="amendment-detail speech-detail">
          <summary><i class="fas fa-comment-alt"></i> Freedom of Speech Clause: "…or abridging the freedom of speech…"</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> You have the right to speak your mind—online, in person, or through art, music, and clothing.</p>
            <p><i class="fas fa-check-circle"></i> You can criticize the government without fear of punishment.</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Limitations:</strong> Speech isn’t protected if it incites violence, spreads harmful lies (like defamation), or threatens national security.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example: </strong> Posting a TikTok rant about unfair school rules is protected speech.</p>
          </div>
        </details>

        <details class="amendment-detail press-detail">
          <summary><i class="fas fa-newspaper"></i> Freedom of the Press Clause: "…or of the press…"</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Journalists can investigate and publish stories—even ones critical of the government—without fear of censorship.</p>
            <p><i class="fas fa-check-circle"></i> This applies to newspapers, blogs, podcasts, and news sites.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example: </strong> A reporter exposing corruption in city hall is protected by this freedom.</p>
          </div>
        </details>

        <details class="amendment-detail assembly-detail">
          <summary><i class="fas fa-users"></i> Right to Assemble: "…or the right of the people peaceably to assemble…"</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> You can gather with others for protests, marches, vigils, or rallies—as long as it’s peaceful.</p>
            <p><i class="fas fa-check-circle"></i> Governments can require permits for safety and traffic but can’t reject protests based on the message.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example: </strong> A student walkout to demand climate action is a protected assembly.</p>
          </div>
        </details>

        <details class="amendment-detail petition-detail">
          <summary><i class="fas fa-file-signature"></i> Right to Petition: "…and to petition the Government for a redress of grievances."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> You can ask the government to fix problems—through letters, petitions, lawsuits, or public comments.</p>
            <p><i class="fas fa-check-circle"></i> It’s your way to speak up and push for change.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example: </strong> Writing to your city council to ask for more bike lanes is protected by the petition clause.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "incorporation-info",
        title: "Does the First Amendment Apply to States?",
        text: "At first, the First Amendment only applied to the federal government. But over time, the Supreme Court used the Fourteenth Amendment to 'incorporate' most of its protections—meaning state and local governments must now follow it too. So your city, your state, and your school district can’t violate these rights either."
      },
      {
        id: "state-action-info",
        title: "What Counts as a Government Action?",
        text: "The First Amendment only limits what the government can do—not private people or companies. If your school is public, it must follow these rules. But if a private business or social media platform limits your speech, that’s usually not a First Amendment issue. That’s called the 'state action doctrine.'"
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> A public school principal starts the day with a required Christian prayer over the intercom. Which part of the First Amendment does this break?",
          options: [
            { value: "a", text: "Freedom of Speech" },
            { value: "b", text: "Free Exercise Clause" },
            { value: "c", text: "Establishment Clause" },
            { value: "d", text: "Freedom of the Press" }
          ],
          answer: "c"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> A reporter writes an article exposing a corrupt mayor. The mayor gets angry and tries to shut down the newspaper. Which freedom protects the reporter?",
          options: [
            { value: "a", text: "Freedom of Petition" },
            { value: "b", text: "Freedom of Speech" },
            { value: "c", text: "Freedom of the Press" },
            { value: "d", text: "Freedom of Assembly" }
          ],
          answer: "c"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> A group wants to protest in the park. The city asks them to get a permit to handle traffic and safety, and gives it to them without issue. Is this a First Amendment violation?",
          options: [
            { value: "a", text: "Yes, requiring a permit is a violation." },
            { value: "b", text: "No, as long as the permit rules are fair and not based on the protest's message." },
            { value: "c", text: "Yes, protests can never be regulated." },
            { value: "d", text: "No, but only if the protest supports the government." }
          ],
          answer: "b"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Someone writes to their state representative asking for more public buses in their town. Which First Amendment freedom are they using?",
          options: [
            { value: "a", text: "Freedom of Assembly" },
            { value: "b", text: "Freedom of Speech" },
            { value: "c", text: "Right to Petition the Government" },
            { value: "d", text: "Free Exercise of Religion" }
          ],
          answer: "c"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> A private company fires an employee for posting a strong political opinion online. Does the First Amendment protect the employee from being fired?",
          options: [
            { value: "a", text: "Yes, because free speech applies everywhere." },
            { value: "b", text: "No, because the First Amendment only restricts the government, not private companies." },
            { value: "c", text: "Yes, because political speech is always protected." },
            { value: "d", text: "No, unless the company gets money from the government." }
          ],
          answer: "b"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous Module", link: "#" },
      next: { text: "Next: Amendment II »", link: "amendments.html?amendment=2" }
    }
  },
  2: {
    title: "Amendment II",
    numberRoman: "II",
    numberOrdinal: "Second",
    subtitle: "What is the Second Amendment?",
    story: "After a string of break-ins in her rural town, Mei's family decided to purchase a firearm for home protection. They followed all state laws—took safety courses, secured proper storage, and registered it as required. When a community debate arose about local gun regulations, Mei researched the Second Amendment to understand the balance between rights and responsibilities. She learned that while the right to bear arms is protected, it comes with complex legal interpretations and community considerations.",
    description: [
      "The Second Amendment to the U.S. Constitution addresses the right to keep and bear arms. It has been one of the most debated amendments, with interpretations ranging from an individual right to gun ownership to a collective right tied to militia service. Supreme Court decisions have affirmed an individual right to possess firearms for traditionally lawful purposes, while also recognizing that this right is not unlimited."
    ],
    fullText: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Second Amendment Breakdown</h3>

        <details class="amendment-detail militia-detail">
          <summary><i class="fas fa-shield-alt"></i> Militia Clause: "A well regulated Militia, being necessary to the security of a free State..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> References the importance of militias in early American defense.</p>
            <p><i class="fas fa-check-circle"></i> Courts have debated whether this clause limits or contextualizes the right to bear arms.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Historical Context:</strong> At the time of writing, militias were groups of ordinary citizens who could be called upon to defend their communities.</p>
          </div>
        </details>

        <details class="amendment-detail arms-detail">
          <summary><i class="fas fa-gavel"></i> Right to Bear Arms: "...the right of the people to keep and bear Arms, shall not be infringed."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Protects an individual's right to possess firearms for lawful purposes like self-defense.</p>
            <p><i class="fas fa-check-circle"></i> Has been interpreted to allow certain regulations while still protecting core rights.</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Limitations:</strong> Courts have upheld restrictions on who can own firearms and what types are available to civilians.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> Laws requiring background checks have been deemed constitutional while still preserving the core right.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "historical-context",
        title: "Historical Context",
        text: "When the Second Amendment was written in 1791, America had just won independence through a revolutionary war where citizen-soldiers played a crucial role. The founders were wary of standing armies and valued the citizen militia as essential to protecting freedom and security."
      },
      {
        id: "supreme-court",
        title: "Supreme Court Interpretations",
        text: "Key Supreme Court cases have shaped our understanding of the Second Amendment. <em>District of Columbia v. Heller</em> (2008) established that the Amendment protects an individual right to possess firearms independent of militia service. <em>McDonald v. City of Chicago</em> (2010) extended these protections to state and local governments. Both cases affirmed that certain regulations are constitutional, including prohibitions on possession by felons and the mentally ill."
      },
      {
        id: "modern-debate",
        title: "The Modern Debate",
        text: "Today's debate centers on balancing the constitutional right to bear arms with public safety concerns. Courts have generally recognized both the individual right to gun ownership and the government's interest in reasonable regulation, though where exactly to draw that line remains contentious."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> According to the Supreme Court in <em>District of Columbia v. Heller</em>, what does the Second Amendment protect?",
          options: [
            { value: "a", text: "Only the right of state militias to have weapons" },
            { value: "b", text: "An individual right to possess firearms independent of militia service" },
            { value: "c", text: "Only the right to hunt" },
            { value: "d", text: "A complete ban on any gun regulations" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> Which Supreme Court case extended Second Amendment protections to state and local governments?",
          options: [
            { value: "a", text: "United States v. Miller" },
            { value: "b", text: "District of Columbia v. Heller" },
            { value: "c", text: "McDonald v. City of Chicago" },
            { value: "d", text: "New York State Rifle & Pistol Association v. Bruen" }
          ],
          answer: "c"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> According to Supreme Court interpretations, which of the following regulations could be constitutional under the Second Amendment?",
          options: [
            { value: "a", text: "Complete ban on all firearms" },
            { value: "b", text: "Prohibitions on firearms possession by convicted felons" },
            { value: "c", text: "Requiring militia membership to own any weapon" },
            { value: "d", text: "Banning all handguns" }
          ],
          answer: "b"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> What is meant by 'well regulated Militia' in the context of when the Second Amendment was written?",
          options: [
            { value: "a", text: "The standing U.S. Army" },
            { value: "b", text: "Only National Guard units" },
            { value: "c", text: "Groups of ordinary citizens who could be called to defend their communities" },
            { value: "d", text: "Professional police forces" }
          ],
          answer: "c"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> Which best describes the current legal understanding of the Second Amendment?",
          options: [
            { value: "a", text: "It provides an unlimited right to own any type of weapon" },
            { value: "b", text: "It only applies to weapons available in the 18th century" },
            { value: "c", text: "It protects an individual right to gun ownership while allowing for certain regulations" },
            { value: "d", text: "It only protects state National Guard units" }
          ],
          answer: "c"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment I", link: "amendments.html?amendment=1" },
      next: { text: "Next: Amendment III »", link: "amendments.html?amendment=3" } // Corrected link
    }
  },
  3: {
    title: "Amendment III",
    numberRoman: "III",
    numberOrdinal: "Third",
    subtitle: "What is the Third Amendment?",
    story: "During a major disaster, National Guard troops came to help Alex's community. The local armory was damaged, so officials needed places for soldiers to stay. While some towns forced residents to host troops, Alex's town remembered the Third Amendment's principles. They asked for volunteers, and many families, including Alex's neighbors, willingly offered spare rooms. Alex learned that what seemed like an outdated amendment still influences how military and civilian relationships work today—with respect for home privacy as a priority.",
    description: [
      "The Third Amendment to the U.S. Constitution protects citizens from being forced to house soldiers in their homes during peacetime without consent, and requires that such quartering during wartime be done according to law. While rarely invoked in court today, it represents important principles about the sanctity of the home, civilian control of the military, and limits on government power."
    ],
    fullText: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Third Amendment Breakdown</h3>

        <details class="amendment-detail peacetime-detail">
          <summary><i class="fas fa-home"></i> Peacetime Protection: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> During peacetime, the government cannot force you to house soldiers in your home.</p>
            <p><i class="fas fa-check-circle"></i> Your consent is absolutely required before any military personnel can be stationed in your residence.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Historical Context:</strong> This responded directly to British practices before the American Revolution, when colonists were forced to provide room and board for British troops.</p>
          </div>
        </details>

        <details class="amendment-detail wartime-detail">
          <summary><i class="fas fa-shield-alt"></i> Wartime Conditions: "...nor in time of war, but in a manner to be prescribed by law."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Even during war, quartering of soldiers must follow legal procedures established by Congress.</p>
            <p><i class="fas fa-check-circle"></i> The military cannot make its own rules about taking over private homes.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Significance:</strong> This ensures civilian control over military operations, even in wartime.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "historical-context",
        title: "Historical Context",
        text: "The Third Amendment was a direct response to the British practice of forcing American colonists to house and feed British soldiers. The Quartering Acts of 1765 and 1774 required colonists to provide accommodations for British troops, creating significant resentment. This experience was fresh in the minds of the Founders when drafting the Bill of Rights."
      },
      {
        id: "modern-relevance",
        title: "Modern Relevance",
        text: "While rarely litigated, the Third Amendment embodies important principles about privacy, property rights, and civilian-military relations. It represents one of the earliest recognitions of the home's special status in American law—a concept that influences many other legal protections today. Courts have occasionally referenced the Third Amendment when addressing broader questions about privacy rights and government intrusion."
      },
      {
        id: "legal-applications",
        title: "Legal Applications",
        text: "Though Third Amendment cases are uncommon, its principles have been invoked in a few notable instances. In <em>Engblom v. Carey</em> (1982), a court found that the Third Amendment protected prison guards from being displaced from their residences by National Guard troops during a strike. Some legal scholars suggest the amendment might apply to modern questions about government surveillance and intrusions into private spaces."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> What British policies directly influenced the creation of the Third Amendment?",
          options: [
            { value: "a", text: "The Tea Act" },
            { value: "b", text: "The Quartering Acts" },
            { value: "c", text: "The Stamp Act" },
            { value: "d", text: "The Intolerable Acts" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> During peacetime, under what condition can soldiers be quartered in a private home?",
          options: [
            { value: "a", text: "With a court order" },
            { value: "b", text: "With local government approval" },
            { value: "c", text: "With the owner's consent" },
            { value: "d", text: "With military necessity" }
          ],
          answer: "c"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> During wartime, who has the authority to establish rules for quartering soldiers?",
          options: [
            { value: "a", text: "The President as Commander-in-Chief" },
            { value: "b", text: "Military commanders" },
            { value: "c", text: "State governors" },
            { value: "d", text: "Congress through legislation" }
          ],
          answer: "d"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Which broader constitutional principle is reflected in the Third Amendment?",
          options: [
            { value: "a", text: "Freedom of religion" },
            { value: "b", text: "Privacy and sanctity of the home" },
            { value: "c", text: "Right to a fair trial" },
            { value: "d", text: "Equal protection under the law" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> In the case <em>Engblom v. Carey</em>, how was the Third Amendment applied?",
          options: [
            { value: "a", text: "To protect private homeowners from police searches" },
            { value: "b", text: "To prevent military bases from expanding into residential areas" },
            { value: "c", text: "To protect prison guards from being displaced from their residences by National Guard troops" },
            { value: "d", text: "To stop the government from installing surveillance equipment in homes" }
          ],
          answer: "c"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment II", link: "amendments.html?amendment=2" },
      next: { text: "Next: Amendment IV »", link: "amendments.html?amendment=4" }
    }
  },
  4: {
    title: "Amendment IV",
    numberRoman: "IV",
    numberOrdinal: "Fourth",
    subtitle: "What is the Fourth Amendment?",
    story: "When police arrived at Jayden's apartment building claiming they needed to search all units after a neighborhood incident, he remembered his civics class discussion about the Fourth Amendment. Politely but firmly, Jayden asked if they had a warrant. They didn't. The officers explained they were just asking for voluntary cooperation, but acknowledged Jayden's right to decline. After checking with his neighbors and finding no emergency, Jayden exercised his constitutional right to privacy. Later, at a community meeting about police practices, Jayden shared his experience, sparking an important conversation about balancing public safety with constitutional protections.",
    description: [
      "The Fourth Amendment protects people from unreasonable searches and seizures by the government. It requires warrants to be supported by probable cause and to specifically describe what will be searched or seized. This fundamental privacy protection limits how and when the government can intrude into people's private spaces and belongings, creating a critical balance between effective law enforcement and individual liberty."
    ],
    fullText: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Fourth Amendment Breakdown</h3>

        <details class="amendment-detail security-detail">
          <summary><i class="fas fa-lock"></i> Security Clause: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Protects people, homes, documents, and belongings from government intrusion.</p>
            <p><i class="fas fa-check-circle"></i> Focuses on "unreasonable" searches—reasonable searches may still be allowed.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> Police generally need a warrant to search your home, but may search your backpack at airport security without one.</p>
          </div>
        </details>

        <details class="amendment-detail warrant-detail">
          <summary><i class="fas fa-file-alt"></i> Warrant Clause: "...and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Warrants require "probable cause"—facts suggesting criminal activity, not just hunches.</p>
            <p><i class="fas fa-check-circle"></i> Law enforcement must swear to these facts under oath.</p>
            <p><i class="fas fa-check-circle"></i> Warrants must specifically describe what and where they'll search—no "fishing expeditions."</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Historical Context:</strong> This directly responded to the British use of "general warrants" or "writs of assistance" that allowed broad, unlimited searches of colonists' homes and businesses.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "warrant-exceptions",
        title: "When Warrants Aren't Required",
        text: "While warrants are generally required, the Supreme Court has recognized several exceptions where warrants aren't needed. These include: <ul><li>Consent searches (when you voluntarily agree)</li><li>Emergency situations (when there's immediate danger)</li><li>Plain view (when evidence is visible to officers legally present)</li><li>Searches incident to arrest (limited searches when someone is arrested)</li><li>Automobile searches (under specific circumstances)</li><li>Border searches (at international borders and airports)</li></ul>"
      },
      {
        id: "digital-applications",
        title: "Digital Privacy and the Fourth Amendment",
        text: "Modern technology has created new Fourth Amendment questions. In <em>Riley v. California</em> (2014), the Supreme Court ruled that police generally need a warrant to search cell phones, recognizing their vast storage of private information. In <em>Carpenter v. United States</em> (2018), the Court held that accessing significant cell phone location data requires a warrant. These cases show how Fourth Amendment principles are being applied to protect digital privacy."
      },
      {
        id: "exclusionary-rule",
        title: "The Exclusionary Rule",
        text: "A key enforcement mechanism for the Fourth Amendment is the \"exclusionary rule,\" which prevents evidence obtained through illegal searches from being used in court. This rule aims to deter police misconduct by removing the benefit of illegal searches. However, courts have created exceptions to this rule, including \"good faith\" exceptions where officers reasonably believed they were following the law."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> What historical British practice directly influenced the Fourth Amendment's warrant requirements?",
          options: [
            { value: "a", text: "The use of general warrants and writs of assistance" },
            { value: "b", text: "The quartering of troops in private homes" },
            { value: "c", text: "The imposition of excessive bail" },
            { value: "d", text: "The use of cruel and unusual punishments" }
          ],
          answer: "a"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> What is \"probable cause\" in the context of the Fourth Amendment?",
          options: [
            { value: "a", text: "Absolute certainty that a crime has been committed" },
            { value: "b", text: "A reasonable basis for believing that a crime was committed or evidence exists" },
            { value: "c", text: "A suspicion based solely on a person's appearance or background" },
            { value: "d", text: "Any tip received by law enforcement" }
          ],
          answer: "b"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> In which scenario would police NOT typically need a warrant under Fourth Amendment exceptions?",
          options: [
            { value: "a", text: "Searching through all files on your computer while you're not home" },
            { value: "b", text: "Searching your car when there's clear evidence of drugs visible through the window" },
            { value: "c", text: "Entering your apartment to look for evidence of tax fraud" },
            { value: "d", text: "Installing a tracking device on your car for a month" }
          ],
          answer: "b"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> What is the \"exclusionary rule\" related to the Fourth Amendment?",
          options: [
            { value: "a", text: "A rule excluding certain people from Fourth Amendment protections" },
            { value: "b", text: "A rule preventing evidence obtained through illegal searches from being used in court" },
            { value: "c", text: "A rule excluding certain types of property from being searched" },
            { value: "d", text: "A rule excluding police from entering private property" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> According to the Supreme Court case <em>Riley v. California</em>, what is generally required before police can search the contents of a cell phone?",
          options: [
            { value: "a", text: "The phone owner's consent" },
            { value: "b", text: "Reasonable suspicion" },
            { value: "c", text: "A warrant" },
            { value: "d", text: "Probable cause but no warrant" }
          ],
          answer: "c"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment III", link: "amendments.html?amendment=3" },
      next: { text: "Next: Amendment V »", link: "amendments.html?amendment=5" }
    }
  },
  5: {
    title: "Amendment V",
    numberRoman: "V",
    numberOrdinal: "Fifth",
    subtitle: "What is the Fifth Amendment?",
    story: "When Sofia was called to jury duty, she witnessed the Fifth Amendment in action. The defendant chose not to testify, and the judge carefully instructed the jury not to consider this as evidence of guilt. Later, during deliberations, another juror suggested the defendant's silence meant they were hiding something. Sofia explained that the Fifth Amendment protects everyone's right against self-incrimination—a fundamental safeguard against government coercion. This sparked a deeper discussion about constitutional protections and how they maintain the burden of proof on the prosecution, not the accused.",
    description: [
      "The Fifth Amendment provides several key protections for individuals in the legal system. It prohibits double jeopardy (being tried twice for the same crime), guarantees due process, protects against self-incrimination, requires grand jury indictments for federal crimes, and ensures just compensation when private property is taken for public use. These protections create crucial guardrails for government power and secure fundamental fairness in legal proceedings."
    ],
    fullText: "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor shall be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Fifth Amendment Breakdown</h3>

        <details class="amendment-detail grand-jury-detail">
          <summary><i class="fas fa-balance-scale"></i> Grand Jury Clause: "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Federal felony prosecutions must first go through a grand jury.</p>
            <p><i class="fas fa-check-circle"></i> Grand juries determine if there's enough evidence to justify a trial.</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Exception:</strong> Military cases follow different procedures.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Note:</strong> While required in federal cases, not all states use grand juries.</p>
          </div>
        </details>

        <details class="amendment-detail double-jeopardy-detail">
          <summary><i class="fas fa-gavel"></i> Double Jeopardy Clause: "...nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Prevents being tried twice for the same crime after acquittal or conviction.</p>
            <p><i class="fas fa-check-circle"></i> Protects from multiple punishments for the same offense.</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Limitation:</strong> Separate sovereigns (federal and state governments) can sometimes prosecute the same conduct under their respective laws.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> If you're found not guilty of a crime in state court, you generally can't be tried again for that exact same crime in that state.</p>
          </div>
        </details>

        <details class="amendment-detail self-incrimination-detail">
          <summary><i class="fas fa-user-shield"></i> Self-Incrimination Clause: "...nor shall be compelled in any criminal case to be a witness against himself..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> You can't be forced to provide testimony that could incriminate you.</p>
            <p><i class="fas fa-check-circle"></i> This is the right to "plead the Fifth" or remain silent.</p>
            <p><i class="fas fa-check-circle"></i> Your silence can't be used against you in criminal cases.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> Miranda warnings ("You have the right to remain silent...") stem from this protection.</p>
          </div>
        </details>

        <details class="amendment-detail due-process-detail">
          <summary><i class="fas fa-briefcase"></i> Due Process Clause: "...nor be deprived of life, liberty, or property, without due process of law..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> The government must follow fair procedures before taking your life, freedom, or property.</p>
            <p><i class="fas fa-check-circle"></i> Typically includes notice of charges/claims and a fair hearing.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Significance:</strong> This clause has been interpreted to protect many fundamental rights.</p>
          </div>
        </details>

        <details class="amendment-detail takings-detail">
          <summary><i class="fas fa-home"></i> Takings Clause: "...nor shall private property be taken for public use, without just compensation."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> If the government takes your property for public use (eminent domain), they must pay fair market value.</p>
            <p><i class="fas fa-check-circle"></i> Property can only be taken for public purposes, not to benefit private parties.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> If your land is needed for a highway, the government must compensate you fairly.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "miranda-rights",
        title: "Miranda Rights and Self-Incrimination",
        text: "The famous Miranda warnings stem from the Fifth Amendment protection against self-incrimination. In <em>Miranda v. Arizona</em> (1966), the Supreme Court ruled that police must inform suspects of their right to remain silent and right to an attorney before custodial interrogation. This ensures that any statements made to police are truly voluntary and that suspects understand their constitutional rights."
      },
      {
        id: "due-process-evolution",
        title: "Evolution of Due Process",
        text: "The Fifth Amendment's due process clause has been interpreted to protect both 'procedural due process' (fair procedures) and certain aspects of 'substantive due process' (protecting fundamental rights). Courts have used this clause to safeguard various rights not explicitly mentioned in the Constitution. The Fourteenth Amendment later extended similar due process requirements to state governments."
      },
      {
        id: "eminent-domain",
        title: "Eminent Domain Controversies",
        text: "The takings clause has generated significant debate about what constitutes'public use' and 'just compensation.' In <em>Kelo v. City of New London</em> (2005), the Supreme Court controversially held that economic development can qualify as a 'public use,' allowing private property to be transferred to private developers as part of revitalization plans. This decision prompted many states to pass laws providing stronger property protections than the federal standard."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> What right is someone exercising when they \"plead the Fifth\"?",
          options: [
            { value: "a", text: "Right to a jury trial" },
            { value: "b", text: "Right against self-incrimination" },
            { value: "c", text: "Right to due process" },
            { value: "d", text: "Right against double jeopardy" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> What is \"double jeopardy\" in the context of the Fifth Amendment?",
          options: [
            { value: "a", text: "Being punished twice for the same crime" },
            { value: "b", text: "Being tried in both civil and criminal court" },
            { value: "c", text: "Facing a more severe punishment than expected" },
            { value: "d", text: "Having two charges for different aspects of the same event" }
          ],
          answer: "a"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> What Supreme Court case established that police must inform suspects of their rights before questioning?",
          options: [
            { value: "a", text: "Brown v. Board of Education" },
            { value: "b", text: "Gideon v. Wainwright" },
            { value: "c", text: "Miranda v. Arizona" },
            { value: "d", text: "Roe v. Wade" }
          ],
          answer: "c"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Under the Fifth Amendment's Takings Clause, what must the government provide when taking private property for public use?",
          options: [
            { value: "a", text: "Alternative property of equal value" },
            { value: "b", text: "Just compensation (fair market value)" },
            { value: "c", text: "A compelling reason approved by a court" },
            { value: "d", text: "The owner's consent" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> In the controversial case <em>Kelo v. City of New London</em>, what did the Supreme Court rule about eminent domain?",
          options: [
            { value: "a", text: "Private property can never be transferred to another private entity" },
            { value: "b", text: "Economic development can qualify as a 'public use'" },
            { value: "c", text: "Just compensation must be 50% above market value" },
            { value: "d", text: "Only the federal government can exercise eminent domain" }
          ],
          answer: "b"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment IV", link: "amendments.html?amendment=4" },
      next: { text: "Next: Amendment VI »", link: "amendments.html?amendment=6" } // Assuming Amendment VI exists or will be added
    }
  },

  // Amendment 6
  6: {
    title: "Amendment VI",
    numberRoman: "VI",
    numberOrdinal: "Sixth",
    subtitle: "What is the Sixth Amendment?",
    story: "When Tyler was called for jury duty, he expected to be dismissed quickly. Instead, he was selected to serve on a criminal trial. Throughout the process, he watched the Sixth Amendment in action—the defendant faced her accusers directly, questioned witnesses through her attorney, and received representation from a public defender since she couldn't afford a lawyer. The judge repeatedly emphasized that the burden was on the prosecution to prove guilt beyond a reasonable doubt, and the jury must presume innocence. After deliberating carefully with fellow jurors, Tyler understood firsthand how these constitutional guardrails protect everyone's right to a fair trial.",
    description: [
      "The Sixth Amendment guarantees crucial rights to those accused of crimes. It ensures speedy and public trials, impartial juries, proper notice of charges, the right to confront witnesses, compulsory process to obtain favorable witnesses, and the right to counsel. These protections form the backbone of criminal procedure in America, designed to prevent government overreach and ensure fair treatment throughout the justice system."
    ],
    fullText: "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Sixth Amendment Breakdown</h3>

        <details class="amendment-detail speedy-trial-detail">
          <summary><i class="fas fa-clock"></i> Speedy Trial Clause: "In all criminal prosecutions, the accused shall enjoy the right to a speedy..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Protects defendants from being held indefinitely without trial.</p>
            <p><i class="fas fa-check-circle"></i> Many jurisdictions have "speedy trial" statutes specifying timeframes.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Purpose:</strong> Prevents long pretrial detention and ensures evidence remains fresh.</p>
          </div>
        </details>

        <details class="amendment-detail public-trial-detail">
          <summary><i class="fas fa-eye"></i> Public Trial Guarantee: "...and public trial..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Court proceedings must generally be open to the public and press.</p>
            <p><i class="fas fa-check-circle"></i> Creates transparency and accountability in the justice system.</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Limitations:</strong> Some sensitive proceedings (like those involving minors) may be closed in specific circumstances.</p>
          </div>
        </details>

        <details class="amendment-detail jury-detail">
          <summary><i class="fas fa-users"></i> Jury Trial Guarantee: "...by an impartial jury of the State and district wherein the crime shall have been committed..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Right to be judged by a jury of peers from the area where the crime occurred.</p>
            <p><i class="fas fa-check-circle"></i> Jurors must be impartial—not prejudiced against the defendant.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Note:</strong> Courts have held this applies only to "serious" crimes (typically those with potential imprisonment over 6 months).</p>
          </div>
        </details>

        <details class="amendment-detail notice-detail">
          <summary><i class="fas fa-exclamation-circle"></i> Notice Clause: "...and to be informed of the nature and cause of the accusation..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Defendants must be clearly told what they're charged with.</p>
            <p><i class="fas fa-check-circle"></i> Charges must be specific enough to prepare a defense.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> This is why defendants receive formal charging documents like indictments or complaints.</p>
          </div>
        </details>

        <details class="amendment-detail confrontation-detail">
          <summary><i class="fas fa-comments"></i> Confrontation Clause: "...to be confronted with the witnesses against him..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Defendants have the right to face and cross-examine witnesses.</p>
            <p><i class="fas fa-check-circle"></i> Prevents "trial by affidavit" where witnesses don't testify in person.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Modern Application:</strong> Courts continue to debate how this applies to video testimony and certain exceptions.</p>
          </div>
        </details>

        <details class="amendment-detail compulsory-detail">
          <summary><i class="fas fa-gavel"></i> Compulsory Process Clause: "...to have compulsory process for obtaining witnesses in his favor..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Defendants can require favorable witnesses to testify through court subpoenas.</p>
            <p><i class="fas fa-check-circle"></i> Ensures defendants can present their full defense.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Balance:</strong> Courts must weigh this right against other concerns like privilege and relevance.</p>
          </div>
        </details>

        <details class="amendment-detail counsel-detail">
          <summary><i class="fas fa-briefcase"></i> Right to Counsel: "...and to have the Assistance of Counsel for his defence."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Defendants can have a lawyer represent them in criminal proceedings.</p>
            <p><i class="fas fa-check-circle"></i> If they cannot afford one, courts must appoint a lawyer in cases where imprisonment is possible.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Landmark Case:</strong> <em>Gideon v. Wainwright</em> (1963) established the right to appointed counsel for those who cannot afford an attorney.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "right-to-counsel",
        title: "Evolution of the Right to Counsel",
        text: "The right to counsel has expanded significantly over time. In <em>Gideon v. Wainwright</em> (1963), the Supreme Court ruled that states must provide attorneys for defendants who cannot afford them in criminal cases. Later, in <em>Argersinger v. Hamlin</em> (1972), this right was extended to all cases where imprisonment might result, even minor offenses. The Court has also established that this right applies at 'critical stages' of criminal proceedings, including police interrogations, preliminary hearings, and sentencing."
      },
      {
        id: "confrontation-clause",
        title: "Modern Challenges to the Confrontation Clause",
        text: "Technology and special circumstances have created new questions about the confrontation right. In <em>Crawford v. Washington</em> (2004), the Supreme Court strengthened confrontation rights by limiting when out-of-court 'testimonial' statements can be used without cross-examination. Courts continue to balance these rights with concerns like protecting child witnesses in abuse cases or accommodating remote testimony when in-person appearance is impossible."
      },
      {
        id: "speedy-trial",
        title: "Determining Speedy Trial Violations",
        text: "The Supreme Court uses a four-factor test from <em>Barker v. Wingo</em> (1972) to determine if delays violate the speedy trial right: (1) length of delay, (2) reason for delay, (3) whether the defendant asserted the right, and (4) prejudice caused by the delay. The remedy for violations is typically dismissal of charges with prejudice, meaning they cannot be refiled. This powerful remedy encourages courts and prosecutors to move cases forward efficiently."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> In which landmark Supreme Court case did the Court rule that states must provide attorneys for defendants who cannot afford them?",
          options: [
            { value: "a", text: "Miranda v. Arizona" },
            { value: "b", text: "Gideon v. Wainwright" },
            { value: "c", text: "Brown v. Board of Education" },
            { value: "d", text: "Roe v. Wade" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> What does the Confrontation Clause of the Sixth Amendment guarantee?",
          options: [
            { value: "a", text: "The right to confront the judge if you disagree with a ruling" },
            { value: "b", text: "The right to face and cross-examine witnesses against you" },
            { value: "c", text: "The right to confront jurors who show bias" },
            { value: "d", text: "The right to face your accuser in a physical confrontation" }
          ],
          answer: "b"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> What is the typical remedy when a court finds that a defendant's speedy trial right has been violated?",
          options: [
            { value: "a", text: "Financial compensation to the defendant" },
            { value: "b", text: "A new trial with a different judge" },
            { value: "c", text: "Dismissal of the charges with prejudice (cannot be refiled)" },
            { value: "d", text: "Reduced sentence if convicted" }
          ],
          answer: "c"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Why is the public trial guarantee important?",
          options: [
            { value: "a", text: "It ensures that the defendant's family can attend" },
            { value: "b", text: "It creates transparency and accountability in the justice system" },
            { value: "c", text: "It guarantees that trials will be televised" },
            { value: "d", text: "It prevents the government from charging court attendance fees" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> What is meant by 'compulsory process' in the Sixth Amendment?",
          options: [
            { value: "a", text: "The requirement that trials follow mandatory procedures" },
            { value: "b", text: "The defendant's right to require favorable witnesses to testify through court subpoenas" },
            { value: "c", text: "The right to have charges processed quickly" },
            { value: "d", text: "The requirement that jury selection be fair" }
          ],
          answer: "b"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment V", link: "amendments.html?amendment=5" },
      next: { text: "Next: Amendment VII »", link: "amendments.html?amendment=7" }
    }
  },

  // Amendment 7
  7: {
    title: "Amendment VII",
    numberRoman: "VII",
    numberOrdinal: "Seventh",
    subtitle: "What is the Seventh Amendment?",
    story: "When Olivia discovered that her employer hadn't been paying proper overtime wages, she filed a civil lawsuit seeking back pay. The company tried to force arbitration, but her attorney successfully argued that she had a Seventh Amendment right to a jury trial since her claim exceeded the $20 threshold. During the trial, Olivia appreciated how the jury of everyday citizens carefully weighed the evidence and ultimately awarded her the wages she was owed. After the trial, a juror told her they felt empowered to serve as a community check on unfair practices in the workplace.",
    description: [
      "The Seventh Amendment preserves the right to jury trials in federal civil cases where the amount in controversy exceeds $20. While seemingly straightforward, this amendment plays a crucial role in ensuring that ordinary citizens—not just judges—have a say in resolving civil disputes. It also prohibits courts from overturning jury findings of fact except according to common law principles."
    ],
    fullText: "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Seventh Amendment Breakdown</h3>

        <details class="amendment-detail jury-trial-detail">
          <summary><i class="fas fa-balance-scale"></i> Civil Jury Trial Right: "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Guarantees jury trials in federal civil cases worth more than $20.</p>
            <p><i class="fas fa-check-circle"></i> Applies to cases that would have been heard in common law courts in 1791 (when the amendment was adopted).</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Limitation:</strong> Does not apply to "equity" cases (those seeking non-monetary remedies like injunctions).</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Historical Note:</strong> $20 was a significant sum in 1791, though inflation has made this threshold largely symbolic today.</p>
          </div>
        </details>

        <details class="amendment-detail reexamination-detail">
          <summary><i class="fas fa-search"></i> Re-examination Clause: "...and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Prevents judges from overturning jury findings of fact except under specific historical rules.</p>
            <p><i class="fas fa-check-circle"></i> Judges can still rule on questions of law and procedure.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Purpose:</strong> Protects the jury's role as the primary fact-finder and prevents judges from undermining jury decisions they disagree with.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "state-application",
        title: "Application to State Courts",
        text: "Unlike most other amendments in the Bill of Rights, the Seventh Amendment has not been 'incorporated' against the states through the Fourteenth Amendment. This means state courts are not constitutionally required to provide jury trials in civil cases, though most states do provide this right through their own constitutions or laws."
      },
      {
        id: "modern-relevance",
        title: "Modern Challenges and Relevance",
        text: "The Seventh Amendment faces modern challenges from mandatory arbitration clauses in contracts, which often require people to waive their right to a jury trial. Courts have generally upheld these clauses. Additionally, the amendment's application to complex modern cases involving technical or scientific evidence has raised questions about whether lay juries are the best way to resolve such disputes."
      },
      {
        id: "common-law-distinction",
        title: "The Common Law Distinction",
        text: "The amendment's protection applies to 'suits at common law,' which courts have interpreted to mean cases seeking monetary damages rather than equitable remedies (like injunctions). This distinction comes from England's historical division between common law courts and equity courts. Today, even though these court systems have merged, the distinction remains important for determining when the Seventh Amendment applies."
      },
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> What minimum amount in controversy triggers the Seventh Amendment right to a jury trial?",
          options: [
            { value: "a", text: "$75,000" },
            { value: "b", text: "$20" },
            { value: "c", text: "$1,000" },
            { value: "d", text: "There is no minimum amount" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> Under the Seventh Amendment, which type of cases are entitled to jury trials?",
          options: [
            { value: "a", text: "All civil cases in federal court" },
            { value: "b", text: "'Common law' cases seeking monetary damages" },
            { value: "c", text: "Only cases that existed in 2000" },
            { value: "d", text: "All cases in both federal and state courts" }
          ],
          answer: "b"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> Are state courts constitutionally required to provide jury trials in civil cases under the Seventh Amendment?",
          options: [
            { value: "a", text: "Yes, in all civil cases" },
            { value: "b", text: "Yes, but only in cases worth more than $20" },
            { value: "c", text: "No, the Seventh Amendment has not been incorporated against the states" },
            { value: "d", text: "Yes, but only in cases involving federal laws" }
          ],
          answer: "c"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> What does the 're-examination clause' of the Seventh Amendment protect?",
          options: [
            { value: "a", text: "A defendant's right to a second trial" },
            { value: "b", text: "Jury findings of fact from being overturned by judges except according to common law rules" },
            { value: "c", text: "The right to appeal a verdict to a higher court" },
            { value: "d", text: "The right to have evidence re-examined by experts" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> Which of the following is a modern challenge to the Seventh Amendment right to a civil jury trial?",
          options: [
            { value: "a", text: "The increasing use of mandatory arbitration clauses in contracts" },
            { value: "b", text: "The abolition of civil courts" },
            { value: "c", text: "The requirement that jurors have law degrees" },
            { value: "d", text: "The constitutional ban on civil trials" }
          ],
          answer: "a"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment VI", link: "amendments.html?amendment=6" },
      next: { text: "Next: Amendment VIII »", link: "amendments.html?amendment=8" }
    }
  },

  // Amendment 8
  8: {
    title: "Amendment VIII",
    numberRoman: "VIII",
    numberOrdinal: "Eighth",
    subtitle: "What is the Eighth Amendment?",
    story: "As part of his civics class project, Jordan researched the case of a teenager sentenced to life without parole for a non-homicide offense. He learned that the Supreme Court had found such sentences unconstitutional under the Eighth Amendment's cruel and unusual punishment clause, recognizing that juveniles have greater capacity for change than adults. In class discussions, Jordan and his peers debated what makes a punishment 'cruel and unusual' in today's society versus when the Constitution was written. This sparked a thoughtful conversation about how constitutional principles evolve while still protecting fundamental rights.",
    description: [
      "The Eighth Amendment prohibits excessive bail, excessive fines, and cruel and unusual punishments. This seemingly brief amendment has had profound impacts on the American justice system, influencing everything from pretrial detention practices to prison conditions to capital punishment. The amendment's interpretation continues to evolve as society's standards of decency develop over time."
    ],
    fullText: "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Eighth Amendment Breakdown</h3>

        <details class="amendment-detail bail-detail">
          <summary><i class="fas fa-unlock"></i> Excessive Bail Clause: "Excessive bail shall not be required..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Bail must not be set higher than reasonably necessary to ensure the defendant returns for trial.</p>
            <p><i class="fas fa-check-circle"></i> Courts must consider factors like flight risk and financial resources.</p>
            <p><i class="fas fa-exclamation-circle"></i> <strong>Important:</strong> This doesn't guarantee a right to bail in all cases—some charges may result in detention without bail.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Purpose:</strong> Prevents using pretrial detention as punishment before conviction.</p>
          </div>
        </details>

        <details class="amendment-detail fines-detail">
          <summary><i class="fas fa-dollar-sign"></i> Excessive Fines Clause: "...nor excessive fines imposed..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Financial penalties must be proportional to the offense.</p>
            <p><i class="fas fa-check-circle"></i> Applies to fines directly imposed as punishment and to certain forfeitures.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Recent Developments:</strong> In <em>Timbs v. Indiana</em> (2019), the Supreme Court held that this protection applies to state and local governments.</p>
          </div>
        </details>

        <details class="amendment-detail punishment-detail">
          <summary><i class="fas fa-exclamation-triangle"></i> Cruel and Unusual Punishment Clause: "...nor cruel and unusual punishments inflicted."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Prohibits punishments considered excessively harsh or barbaric.</p>
            <p><i class="fas fa-check-circle"></i> Courts evaluate punishments against "evolving standards of decency."</p>
            <p><i class="fas fa-check-circle"></i> Requires that punishment be proportional to the crime.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Application:</strong> Has been used to challenge execution methods, prison conditions, and sentences deemed disproportionate.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "evolving-standards",
        title: "Evolving Standards of Decency",
        text: "The Supreme Court has held that the Eighth Amendment's interpretation isn't frozen in time but must draw meaning from 'evolving standards of decency that mark the progress of a maturing society.' This principle has allowed the Court to reconsider practices once deemed acceptable. For example, in <em>Roper v. Simmons</em> (2005), the Court prohibited the death penalty for juveniles, and in <em>Atkins v. Virginia</em> (2002), it barred execution of people with intellectual disabilities."
      },
      {
        id: "prison-conditions",
        title: "Prison Conditions and the Eighth Amendment",
        text: "Courts have applied the Eighth Amendment to conditions of confinement, not just the sentence itself. Prison conditions that deprive inmates of basic human needs—like adequate food, medical care, or protection from violence—can violate the amendment. In <em>Brown v. Plata</em> (2011), the Supreme Court affirmed an order requiring California to reduce prison overcrowding because it led to inadequate medical and mental health care."
      },
      {
        id: "capital-punishment",
        title: "Capital Punishment Controversies",
        text: "The death penalty has generated significant Eighth Amendment litigation. While the Supreme Court has never held that capital punishment itself violates the amendment, it has placed important limitations on its use. In addition to prohibiting execution of juveniles and those with intellectual disabilities, the Court has required procedural safeguards in capital cases and restricted the death penalty to the most serious crimes, typically those involving murder."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> According to Supreme Court interpretations, the Eighth Amendment's meaning is:",
          options: [
            { value: "a", text: "Fixed by what the Founders considered cruel in 1791" },
            { value: "b", text: "Determined by 'evolving standards of decency'" },
            { value: "c", text: "Exclusively defined by state legislatures" },
            { value: "d", text: "Limited to prohibiting torture only" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> Which case established that the Excessive Fines Clause applies to state and local governments?",
          options: [
            { value: "a", text: "Miranda v. Arizona" },
            { value: "b", text: "Timbs v. Indiana" },
            { value: "c", text: "Brown v. Board of Education" },
            { value: "d", text: "Roe v. Wade" }
          ],
          answer: "b"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> Under Eighth Amendment jurisprudence, which of the following is NOT required for bail?",
          options: [
            { value: "a", text: "It must not be excessive relative to the flight risk" },
            { value: "b", text: "It must consider the defendant's financial resources" },
            { value: "c", text: "It must be available in all criminal cases" },
            { value: "d", text: "It must not be used as punishment before conviction" }
          ],
          answer: "c"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Which of these Supreme Court cases prohibited the execution of juveniles under the Eighth Amendment?",
          options: [
            { value: "a", text: "Roper v. Simmons" },
            { value: "b", text: "Brown v. Plata" },
            { value: "c", text: "District of Columbia v. Heller" },
            { value: "d", text: "Miranda v. Arizona" }
          ],
          answer: "a"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> Beyond the actual sentence, what else might violate the Eighth Amendment's prohibition on cruel and unusual punishment?",
          options: [
            { value: "a", text: "Long jury deliberations" },
            { value: "b", text: "Harsh cross-examination" },
            { value: "c", text: "Prison conditions that deprive inmates of basic human needs" },
            { value: "d", text: "Court-ordered community service" }
          ],
          answer: "c"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment VII", link: "amendments.html?amendment=7" },
      next: { text: "Next: Amendment IX »", link: "amendments.html?amendment=9" }
    }
  },

  // Amendment 9
  9: {
    title: "Amendment IX",
    numberRoman: "IX",
    numberOrdinal: "Ninth",
    subtitle: "What is the Ninth Amendment?",
    story: "In their high school debate club, Zoe argued against a school policy that limited students' personal reading choices. While researching her argument, she discovered the Ninth Amendment—the Constitution's acknowledgment that people have rights beyond just those explicitly listed. At the debate, Zoe explained how the Founders recognized they couldn't possibly list every right people should have. When her opponent argued, 'If it's not in the Constitution, it's not a right,' Zoe countered with the Ninth Amendment's powerful message: our rights aren't limited to what's written down. Her argument about the spirit of liberty underlying the Constitution ultimately won the day.",
    description: [
      "The Ninth Amendment acknowledges that the enumeration of specific rights in the Constitution should not be interpreted to deny or disparage other rights retained by the people. It serves as a reminder that the American system of government is based on the principle that rights originate with the people, not the government, and that the Constitution lists only some—not all—of these natural rights."
    ],
    fullText: "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Ninth Amendment Breakdown</h3>

        <details class="amendment-detail rights-detail">
          <summary><i class="fas fa-list-ol"></i> Enumeration Clause: "The enumeration in the Constitution, of certain rights..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Acknowledges that the Constitution explicitly lists some rights.</p>
            <p><i class="fas fa-check-circle"></i> Refers to rights specifically mentioned in the text, including those in the Bill of Rights.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Historical Context:</strong> This language addressed concerns that listing specific rights might imply these were the only rights people had.</p>
          </div>
        </details>

        <details class="amendment-detail retained-rights-detail">
          <summary><i class="fas fa-shield-alt"></i> Retained Rights Clause: "...shall not be construed to deny or disparage others retained by the people."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Makes clear that people have rights beyond those explicitly listed in the Constitution.</p>
            <p><i class="fas fa-check-circle"></i> Prevents the argument that only enumerated rights deserve protection.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Significance:</strong> Serves as a reminder that rights come from the people themselves, not as grants from the government.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "historical-context",
        title: "Historical Context",
        text: "During the ratification debates, many Federalists initially opposed adding a Bill of Rights, arguing that listing specific rights might imply that unlisted rights weren't protected. James Madison and others worried about this 'enumeration problem.' The Ninth Amendment directly addressed this concern by making it clear that listing some rights shouldn't undermine others that weren't enumerated."
      },
      {
        id: "modern-interpretation",
        title: "Modern Interpretations",
        text: "The Ninth Amendment has been invoked in debates about privacy rights, reproductive freedom, and other liberties not explicitly mentioned in the Constitution. In <em>Griswold v. Connecticut</em> (1965), Justice Goldberg's concurring opinion used the Ninth Amendment to support the existence of a constitutional right to privacy. However, courts have generally been cautious about recognizing specific unenumerated rights based solely on the Ninth Amendment."
      },
      {
        id: "constitutional-philosophy",
        title: "Constitutional Philosophy",
        text: "The Ninth Amendment reflects a natural rights philosophy—the idea that certain rights exist independently of government and cannot be taken away. It reinforces the concept that the Constitution doesn't grant rights to the people; rather, it acknowledges pre-existing rights and places limits on government power to interfere with those rights."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> What concern does the Ninth Amendment address?",
          options: [
            { value: "a", text: "The power of states versus the federal government" },
            { value: "b", text: "That listing some rights might suggest other rights don't exist" },
            { value: "c", text: "How amendments should be ratified" },
            { value: "d", text: "The structure of the federal court system" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> How was the Ninth Amendment used in <em>Griswold v. Connecticut</em>?",
          options: [
            { value: "a", text: "To argue that states have rights not listed in the Constitution" },
            { value: "b", text: "To support the existence of a constitutional right to privacy" },
            { value: "c", text: "To protect gun ownership rights" },
            { value: "d", text: "To limit federal taxation powers" }
          ],
          answer: "b"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> Which constitutional philosophy is most directly reflected in the Ninth Amendment?",
          options: [
            { value: "a", text: "Judicial supremacy" },
            { value: "b", text: "Parliamentary sovereignty" },
            { value: "c", text: "Natural rights theory" },
            { value: "d", text: "Legal positivism" }
          ],
          answer: "c"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Who initially raised concerns about the 'enumeration problem' that the Ninth Amendment addresses?",
          options: [
            { value: "a", text: "Anti-Federalists who opposed the Constitution" },
            { value: "b", text: "Federalists who initially opposed adding a Bill of Rights" },
            { value: "c", text: "Supreme Court justices in early cases" },
            { value: "d", text: "State legislatures during ratification" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> According to the Ninth Amendment, where do rights ultimately originate?",
          options: [
            { value: "a", text: "From the Constitution itself" },
            { value: "b", text: "From Supreme Court interpretations" },
            { value: "c", text: "From the people" },
            { value: "d", text: "From Congress through legislation" }
          ],
          answer: "c"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment VIII", link: "amendments.html?amendment=8" },
      next: { text: "Next: Amendment X »", link: "amendments.html?amendment=10" }
    }
  },
  10: {
    title: "Amendment X",
    numberRoman: "X",
    numberOrdinal: "Tenth",
    subtitle: "What is the Tenth Amendment?",
    story: "When his city implemented a unique environmental program that differed from federal guidelines, Marcus was confused about which rules to follow. At a town hall meeting, the mayor explained the Tenth Amendment's principle of federalism—powers not given to the federal government belong to states or the people. The federal law set minimum standards, but states could create stronger protections. This sparked Marcus's interest in how local, state, and federal governments share power. He joined a community initiative where residents worked with local officials to address environmental concerns in ways that reflected their community's specific needs and values—a living example of the Tenth Amendment's division of powers.",
    description: [
      "The Tenth Amendment establishes that powers not delegated to the federal government by the Constitution, nor prohibited to the states, are reserved to the states or to the people. This amendment reinforces the federal system created by the Constitution, limiting federal authority and preserving state sovereignty in certain domains."
    ],
    fullText: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.",
    plainSummary: `
      <div class="plain-summary-container">
        <h3 class="plain-summary-title">Tenth Amendment Breakdown</h3>

        <details class="amendment-detail federal-powers-detail">
          <summary><i class="fas fa-landmark"></i> Federal Powers Clause: "The powers not delegated to the United States by the Constitution..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> The federal government only has powers specifically granted by the Constitution.</p>
            <p><i class="fas fa-check-circle"></i> These include enumerated powers like regulating interstate commerce, coining money, and declaring war.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Significance:</strong> Creates a government of limited, specified powers rather than unlimited authority.</p>
          </div>
        </details>

        <details class="amendment-detail prohibited-powers-detail">
          <summary><i class="fas fa-ban"></i> Prohibited Powers Clause: "...nor prohibited by it to the States..."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> Some powers are denied to states by the Constitution.</p>
            <p><i class="fas fa-check-circle"></i> For example, states cannot enter treaties, coin money, or impose import/export duties.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Example:</strong> Article I, Section 10 lists several specific powers states cannot exercise.</p>
          </div>
        </details>

        <details class="amendment-detail reserved-powers-detail">
          <summary><i class="fas fa-balance-scale"></i> Reserved Powers Clause: "...are reserved to the States respectively, or to the people."</summary>
          <div class="detail-content">
            <p><i class="fas fa-check-circle"></i> All other powers belong either to state governments or directly to the people.</p>
            <p><i class="fas fa-check-circle"></i> States retain authority over many areas including education, professional licensing, family law, criminal law, and local governance.</p>
            <p><i class="fas fa-lightbulb"></i> <strong>Principle:</strong> Creates the system of federalism—dividing power between national and state governments.</p>
          </div>
        </details>
      </div>
    `,
    keyPoints: [
      {
        id: "federalism-concept",
        title: "Federalism in Practice",
        text: "The Tenth Amendment is a cornerstone of American federalism—the division of power between the national and state governments. This system creates laboratories of democracy where states can experiment with different policies. It allows for regional differences, keeps government closer to the people, and provides checks against centralized power. Areas traditionally under state control include education, professional licensing, family law, and most criminal law."
      },
      {
        id: "evolution-interpretation",
        title: "Evolution of Interpretation",
        text: "The balance of federal-state power has shifted over time. In early America, the Tenth Amendment was seen as a powerful limit on federal authority. During the New Deal era, courts interpreted federal powers more broadly. Recent decades have seen the Supreme Court revive the Tenth Amendment in cases limiting federal power to 'commandeer' state officials (<em>Printz v. United States</em>, 1997) or coerce states through funding conditions (<em>NFIB v. Sebelius</em>, 2012)."
      },
      {
        id: "modern-debates",
        title: "Modern Debates",
        text: "The Tenth Amendment remains central to debates about federal versus state authority. It's invoked in controversies about healthcare policy, environmental regulations, gun laws, immigration enforcement, and marijuana legalization. The amendment doesn't automatically resolve these issues but provides a constitutional framework for balancing national uniformity with state autonomy and local control."
      }
    ],
    quiz: {
      title: "Checkpoint Quiz",
      questions: [
        {
          q: "q1",
          text: "<strong>1 of 5:</strong> What constitutional principle is most directly supported by the Tenth Amendment?",
          options: [
            { value: "a", text: "Separation of powers" },
            { value: "b", text: "Federalism" },
            { value: "c", text: "Equal protection" },
            { value: "d", text: "Due process" }
          ],
          answer: "b"
        },
        {
          q: "q2",
          text: "<strong>2 of 5:</strong> According to the Tenth Amendment, where do powers not given to the federal government belong?",
          options: [
            { value: "a", text: "To the President" },
            { value: "b", text: "To Congress" },
            { value: "c", text: "To the states or the people" },
            { value: "d", text: "To the Supreme Court" }
          ],
          answer: "c"
        },
        {
          q: "q3",
          text: "<strong>3 of 5:</strong> In <em>Printz v. United States</em> (1997), what Tenth Amendment principle did the Supreme Court uphold?",
          options: [
            { value: "a", text: "The federal government cannot force state officials to implement federal programs" },
            { value: "b", text: "States cannot regulate interstate commerce" },
            { value: "c", text: "Federal law always overrides state law" },
            { value: "d", text: "States must follow federal environmental regulations" }
          ],
          answer: "a"
        },
        {
          q: "q4",
          text: "<strong>4 of 5:</strong> Which of the following is traditionally considered a state power under the Tenth Amendment?",
          options: [
            { value: "a", text: "Declaring war" },
            { value: "b", text: "Regulating marriage and divorce laws" },
            { value: "c", text: "Coining money" },
            { value: "d", text: "Making treaties with foreign nations" }
          ],
          answer: "b"
        },
        {
          q: "q5",
          text: "<strong>5 of 5:</strong> How has the interpretation of the Tenth Amendment changed over time?",
          options: [
            { value: "a", text: "It has consistently been interpreted the same way since 1791" },
            { value: "b", text: "It was strengthened during the New Deal era and weakened more recently" },
            { value: "c", text: "Its importance has waxed and waned, with recent cases reviving its limitations on federal power" },
            { value: "d", text: "It was largely ignored until the 21st century" }
          ],
          answer: "c"
        }
      ]
    },
    navigation: {
      prev: { text: "« Previous: Amendment IX", link: "amendments.html?amendment=9" },
      next: { text: "« Back to Overview", link: "index.html" }
    }
  }
};
