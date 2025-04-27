const amendmentData = {
    1: {
      title: "Amendment I",
      numberRoman: "I",
      numberOrdinal: "First",
      subtitle: "What is the First Amendment?",
      story: "Lily opened a tiny news blog where she posted funny cartoons poking fun at the mayor. One day, the mayor got mad and tried to shut her website down, saying he didn’t like what she was writing. Lily laughed and kept posting anyway — because the government can’t silence free speech. Well, that's not allowed because of the First Amendment.",
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
          text: "Originally, the Bill of Rights (including the First Amendment) only limited the federal government. Through the Fourteenth Amendment's Due Process Clause, most First Amendment protections have been 'incorporated' to apply to state and local governments as well."
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
            text: "<strong>1 of 4:</strong> Which clause prevents Congress from establishing an official religion?",
            options: [
              { value: "a", text: "Free Exercise Clause" },
              { value: "b", text: "Establishment Clause" },
              { value: "c", text: "Speech Clause" },
              { value: "d", text: "Assembly Clause" }
            ],
            answer: "b"
          },
          {
            q: "q2",
            text: "<strong>2 of 4:</strong> True or false: \"The press has the same absolute free-speech protections as private citizens.\"",
            options: [
              { value: "true",  text: "True" },
              { value: "false", text: "False" }
            ],
            answer: "false"
          },
          {
            q: "q3",
            text: "<strong>3 of 4:</strong> What right allows citizens to gather peacefully in a park?",
            options: [
              { value: "a", text: "Freedom of speech" },
              { value: "b", text: "Right to petition" },
              { value: "c", text: "Right to assembly" },
              { value: "d", text: "Freedom of the press" }
            ],
            answer: "c"
          },
        ]
      },
      navigation: {
        prev: { text: "« Previous Module",      link: "#" },
        next: { text: "Next: Amendment II »",    link: "template.html?amendment=2" }
      }
    },
  }
