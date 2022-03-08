<template>
  <section id="contacts" class="contacts">
    <div class="container mt-4">
      <div class="row mt-5">
        <div class="col-lg-6">
          <form netlify action="https://formspree.io/f/xbjwyqyd" method="POST">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Name"
            />
            <input type="email" class="form-control mt-3" placeholder="Email" />
            <input
              type="text"
              class="form-control mt-3"
              placeholder="Subject"
            />
            <div class="mb-3 mt-3">
              <textarea
                class="form-control"
                rows="5"
                id="comment"
                name="text"
                placeholder="Project Details"
              ></textarea>
            </div>
          </form>
          <button type="button" class="btn btn-success mt-3">Contact Me</button>
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