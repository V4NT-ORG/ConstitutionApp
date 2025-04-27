const amendmentData = {
    1: {
      title: "Amendment I",
      numberRoman: "I",
      numberOrdinal: "First",
      subtitle: "What is the First Amendment?",
      story: "At school, Maya started a podcast where students could talk about anything—from favorite books to government policies. When the principal tried to shut it down, Maya showed him the First Amendment protected her freedom of speech and the press. Inspired, her friends organized a peaceful rally in the park, celebrating their right to assemble and petition for better school rules. It turned out knowing their rights made their voices even stronger.",
      description: [
        "The First Amendment to the U.S. Constitution is one of the most important parts of American democracy. It protects five essential freedoms that allow people to express themselves, practice their beliefs, and hold the government accountable. These freedoms are the foundation for a free and open society where ideas can be shared, debated, and challenged."
      ],
      fullText: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
      plainSummary: `
        <div class="plain-summary-container">
          <h3 class="plain-summary-title">First Amendment Breakdown</h3>
          
          <details class="amendment-detail religion-detail">
            <summary><i class="fas fa-place-of-worship"></i> Establishment Clause: "Congress shall make no law respecting an establishment of religion…"</summary>
            <div class="detail-content">
              <p><i class="fas fa-check-circle"></i> The government can't set up an official religion or favor one religion over another.</p>
              <p><i class="fas fa-check-circle"></i> Schools, courts, and public institutions must stay neutral when it comes to religion.</p>
            </div>
          </details>
          
          <details class="amendment-detail religion-detail">
            <summary><i class="fas fa-pray"></i> Free Exercise Clause: "…or prohibiting the free exercise thereof…"</summary>
            <div class="detail-content">
              <p><i class="fas fa-check-circle"></i> You have the right to practice your religion freely (attend services, wear religious clothing, pray, celebrate holidays).</p>
              <p><i class="fas fa-check-circle"></i> This right applies as long as your practice doesn't break public laws (e.g., harming others).</p>
            </div>
          </details>
          
          <details class="amendment-detail speech-detail">
            <summary><i class="fas fa-comment-alt"></i> Freedom of Speech Clause: "…or abridging the freedom of speech…"</summary>
            <div class="detail-content">
              <p><i class="fas fa-check-circle"></i> You can express your opinions publicly, even criticizing the government, without fear of punishment.</p>
              <p><i class="fas fa-check-circle"></i> This includes spoken words, art, symbols, and clothing.</p>
              <p><i class="fas fa-exclamation-circle"></i> <strong>Limitations:</strong> It doesn't protect speech that incites violence, spreads harmful lies (defamation), or threatens national security.</p>
            </div>
          </details>
          
          <details class="amendment-detail press-detail">
            <summary><i class="fas fa-newspaper"></i> Freedom of the Press Clause: "…or of the press…"</summary>
            <div class="detail-content">
              <p><i class="fas fa-check-circle"></i> Journalists and media outlets can publish information, including about the government, without censorship.</p>
              <p><i class="fas fa-check-circle"></i> This protects investigative reporting, opinion pieces, and public debate in newspapers, blogs, websites, or TV.</p>
            </div>
          </details>
          
          <details class="amendment-detail assembly-detail">
            <summary><i class="fas fa-users"></i> Assembly Clause: "…or the right of the people peaceably to assemble…"</summary>
            <div class="detail-content">
              <p><i class="fas fa-check-circle"></i> People can gather in groups for protests, rallies, marches, meetings, or events.</p>
              <p><i class="fas fa-check-circle"></i> This right applies as long as the assembly remains peaceful.</p>
              <p><i class="fas fa-info-circle"></i> Cities can require permits for logistics (traffic, safety) but cannot deny assembly based on the message.</p>
            </div>
          </details>
          
          <details class="amendment-detail petition-detail">
            <summary><i class="fas fa-file-signature"></i> Petition Clause: "…and to petition the Government for a redress of grievances."</summary>
            <div class="detail-content">
              <p><i class="fas fa-check-circle"></i> You have the right to ask the government to fix problems and demand change through legal means.</p>
              <p><i class="fas fa-check-circle"></i> This includes writing letters, signing petitions, testifying at hearings, or suing the government.</p>
              <p><i class="fas fa-info-circle"></i> It protects civic engagement.</p>
            </div>
          </details>
        </div>
      `,
      keyPoints: [ // Renamed to Notes in HTML, but keep JS variable name for now to avoid breaking script.js
        {
          id: "incorporation-info",
          title: "Application to States (Incorporation Doctrine)",
          text: "Originally, the First Amendment only limited the federal government. Through the Fourteenth Amendment's Due Process Clause, most First Amendment protections have been 'incorporated' to apply to state and local governments as well."
        },
        {
          id: "state-action-info",
          title: "Government vs. Private Action (State Action Doctrine)",
          text: "The First Amendment restricts government actions ('Congress shall make no law...'). It generally does not limit the actions of private individuals, companies, or organizations (e.g., a private employer firing someone for speech, or a social media platform moderating content)."
        }
      ],
      quiz: {
        title: "Checkpoint Quiz",
        questions: [
          {
            q: "q1",
            text: "<strong>1:</strong> A public high school principal tries to start the school day with a mandatory Christian prayer over the loudspeakers. Which part of the First Amendment does this violate?",
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
            text: "<strong>2:</strong> A journalist writes an article exposing corruption by a local mayor. In response, the mayor tries to shut down the newspaper. What freedom protects the journalist?",
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
            text: "<strong>3:</strong> A group of citizens peacefully organizes a protest in a city park against a new law. The city requires them to get a permit to manage traffic flow but approves it without bias. Is this a violation of their First Amendment rights?",
            options: [
              { value: "a", text: "Yes, requiring a permit is a violation." },
              { value: "b", text: "No, as long as the permit process is fair and not based on the protest's message." },
              { value: "c", text: "Yes, because protests can never be regulated." },
              { value: "d", text: "No, but only if the protest supports government policies." }
            ],
            answer: "b"
          },
          {
            q: "q4",
            text: "<strong>4:</strong> An individual writes a letter to their state representative asking for better public transportation services. Which First Amendment freedom are they using?",
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
            text: "<strong>5:</strong> A private company fires an employee for posting controversial political opinions online. Does the First Amendment protect the employee from being fired?",
            options: [
              { value: "a", text: "Yes, because freedom of speech protects all speech everywhere." },
              { value: "b", text: "No, because the First Amendment only restricts government actions, not private companies." },
              { value: "c", text: "Yes, because political speech is always protected." },
              { value: "d", text: "No, unless the company gets funding from the government." }
            ],
            answer: "b"
          }
        ]
      },
      navigation: {
        prev: { text: "« Previous Module",      link: "#" },
        next: { text: "Next: Amendment II »",    link: "template.html?amendment=2" }
      }
    },
  }
