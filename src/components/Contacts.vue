<template>
  <section id="contacts" class="contacts">
    <div class="container mt-4">
      <div class="row mt-5">
        <div class="col-lg-6">
          <form
            name="contact"
            netlify
            action="https://formspree.io/f/xbjwyqyd"
            method="POST"
          >
            <input
              type="text"
              name="name"
              class="form-control form-control-lg"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              class="form-control mt-3"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              class="form-control mt-3"
              placeholder="Subject"
              required
            />
            <div class="mb-3 mt-3">
              <textarea
                class="form-control"
                rows="5"
                id="comment"
                name="text"
                placeholder="Project Details"
                required
              >
              </textarea>
            </div>
            <button type="submit" class="btn btn-success mt-3">
              Contact Me
            </button>
          </form>
          <a
            href="https://drive.google.com/file/d/1e4E0Bb_TkxQ9taT0UZOjlOd7pSRpNZoq/view?usp=sharing"
            target="_blank"
          >
            <button class="btn btn-success mt-3">My CV</button>
          </a>
          <div class="social-icons mt-4">
            <a
              href="https://www.linkedin.com/in/plamen-ivanov-33a851226/"
              target="_blank"
              ><i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/k1lgor" target="_blank"
              ><i class="fab fa-github"></i>
            </a>
            <a href="https://profile.codersrank.io/user/k1lgor" target="_blank"
              ><i class="codersrank"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
