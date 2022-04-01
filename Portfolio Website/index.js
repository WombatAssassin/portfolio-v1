let leafButton = document.getElementById("leaf-icon-button");
let codeButton = document.getElementById("code-icon-button");
let ghostButton = document.getElementById("ghost-icon-button");
let aboutMeGridContent = document.getElementById("about-me-grid-content")

leafButton.addEventListener("click", () => {
    ghostButton.firstChild.classList.remove("selected")
    leafButton.firstChild.classList.remove("selected")
    codeButton.firstChild.classList.remove("selected")
    leafButton.firstChild.classList.add("selected")
    aboutMeGridContent.innerHTML = `
    <p>Who am leaf? That's a good question.</p>
    <p>
      I'm based in London, UK, and on the surface I'm a junior developer
      with a background in copywriting. At the core, I'm a creative,
      humourous and silly individual with a passion for beauty, efficiency
      and happiness.
    </p>
    <p>I have a passion for eggs - yum yum yum!</p>
    <p>And I own a cactus named Spikes.</p>`
})

codeButton.addEventListener("click", () => {
    ghostButton.firstChild.classList.remove("selected")
    leafButton.firstChild.classList.remove("selected")
    codeButton.firstChild.classList.remove("selected")
    codeButton.firstChild.classList.add("selected")
    aboutMeGridContent.innerHTML = `
    <p>Who am code? That's a good question.</p>
    <p>
      I'm based in London, UK, and on the surface I'm a junior developer
      with a background in copywriting. At the core, I'm a creative,
      humourous and silly individual with a passion for beauty, efficiency
      and happiness.
    </p>
    <p>I have a passion for eggs - yum yum yum!</p>
    <p>And I own a cactus named Spikes.</p>`
})

ghostButton.addEventListener("click", () => {
    ghostButton.firstChild.classList.remove("selected")
    leafButton.firstChild.classList.remove("selected")
    codeButton.firstChild.classList.remove("selected")
    ghostButton.firstChild.classList.add("selected")
    aboutMeGridContent.innerHTML = `
    <p>Who am I? That's a good question.</p>
    <p>
      I'm based in London, UK, and on the surface I'm a junior developer
      with a background in copywriting. At the core, I'm a creative,
      humourous and silly individual with a passion for beauty, efficiency
      and happiness.
    </p>
    <p>I have a passion for eggs - yum yum yum!</p>
    <p>And I own a cactus named Spikes.</p>`
})