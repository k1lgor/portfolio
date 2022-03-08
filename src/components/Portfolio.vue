<template>
  <section class="portfolio" id="portfolio">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="col-lg-8 mt-4">
          <div class="container pt-5">
            <codersrank-summary
              username="k1lgor"
              layout="auto"
            ></codersrank-summary>
          </div>
          <div class="card">
            <div class="card-body">
              More familier with
              <img
                src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
                alt="linux"
              />
              <img
                src="https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white"
                alt="arch"
              />
              <img
                src="https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white"
                alt="kali"
              />
              <img
                src="https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white"
                alt="bash"
              />
              <img
                src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                alt="git"
              />
              <img
                src="https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white"
                alt="vim"
              />
              <img
                src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                alt="vsc"
              />
              <img
                src="https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white"
                alt="pycharm"
              />
              <img
                src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"
                alt="python"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="javascript"
              />
              <hr />
              Basic knowledge of
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                alt="typescript"
              />
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                alt="sass"
              />
              <img
                src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="bootstrap"
              />
              <img
                src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
                alt="vuejs"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="col-lg-4 mt-4">
              <div class="card portfolio-content">
                <img
                  class="card-img-top"
                  src="../images/todo-app.gif"
                  alt="Todo App"
                  style="width: 100%"
                />
                <div class="card-body">
                  <h4 class="card-title">Todo App</h4>
                  <p class="card-text">
                    Simple Todo App with Drag and Drop option
                  </p>
                  <div class="text-center">
                    <a
                      href="https://github.com/k1lgor/Todo-App"
                      class="btn btn-success"
                      >GitHub</a
                    >
                    <a
                      href="http://beneficial-planes.surge.sh"
                      class="btn btn-success"
                      >Link</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-4 m-4">
              <div class="card portfolio-content">
                <img
                  class="card-img-top"
                  src="../images/wifi.gif"
                  alt="WiFi DoS"
                  style="width: 100%"
                />
                <div class="card-body">
                  <h4 class="card-title">WiFi DoS</h4>
                  <p class="card-text">Simple Bash script for DoS attack</p>
                  <div class="text-center">
                    <a
                      href="https://github.com/k1lgor/wifi-dos"
                      class="btn btn-success"
                      >GitHub</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CodersrankSummary from "@codersrank/summary";
export default {};
</script>
