export default function About(){
    return (
      <>
        <section id="about" className="about">
          <div className="container">
            <div class="section-title">
              <h2>About</h2>
              {/* <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p> */}
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/profile.png" class="img-fluid" alt="" />
              </div>
              <div
                className="col-lg-8 pt-4 pt-lg-0 content"
                data-aos="fade-left"
              >
                <h3>Chief Financial Officer.</h3>
                {/* <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> */}
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>30 October 1986</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Jakarta, Indonesia</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>37</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>akhmad.dody86@gmail.com</span>
                      </li>
                      {/* <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li> */}
                    </ul>
                  </div>
                </div>
                {/* <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p> */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
}