
document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.querySelector(".hero-text-title");
  const textElement = document.querySelector(".hero-text-title-part1");
  const button = document.querySelector(".get-started-button");

  const sentences = [
    { element: titleElement, text: titleElement.textContent.trim() },
    { element: textElement, text: textElement.textContent.trim() },
  ]; // get the two paragraph tags texts

  sentences.forEach(({ element }) => (element.innerHTML = ""));

  let currentSentenceIndex = 0;
  const typingSpeed = 100; //typing speed
  const sentenceDelay = 650; // next sentences speed

  const typeText = ({ element, text }, callback) => {
    let charIndex = 0;

    const caret = document.createElement("span"); // for cursor blinking effect;
    caret.classList.add("blinking-caret");
    element.appendChild(caret);

    const typeChar = () => {
      if (charIndex < text.length) {
        caret.before(document.createTextNode(text[charIndex]));
        charIndex++;
        setTimeout(typeChar, typingSpeed); // type character by character
      } else {
        caret.remove();
        callback();
      }
    };

    typeChar();
  };

  const typeNextSentence = () => {
    // type next sentences
    if (currentSentenceIndex < sentences.length) {
      const currentSentence = sentences[currentSentenceIndex];
      typeText(currentSentence, () => {
        currentSentenceIndex++;
        setTimeout(typeNextSentence, sentenceDelay);
      });
    } else {
      button.classList.add("glowing");
    }
  };

  setTimeout(typeNextSentence, 2000); //  delay for pop up animation to finish
});
