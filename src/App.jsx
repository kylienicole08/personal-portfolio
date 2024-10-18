function App() {

  return (
    <>
    {/* Getting Started */}
     	{/*[if lte IE 9]>
          <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]*/}
		
      {/* top-area Start */}
      <header className="top-area">
        <div className="header-area">
          {/* Start Navigation */}
            <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">

                <div className="container">

                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="index.html">One's Own</a>
                    </div>{/*/.navbar-header*/}
                    {/* End Header Navigation */}

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className=" smooth-menu active"></li>
                            <li className=" smooth-menu"><a href="#education">education</a></li>
                            <li className="smooth-menu"><a href="#skills">skills</a></li>
                            <li className="smooth-menu"><a href="#portfolio">portfolio</a></li>
                            <li className="smooth-menu"><a href="#contact">contact</a></li>
                        </ul>{/*/.nav */}
                    </div>{/* /.navbar-collapse */}
                </div>{/*/.container*/}
            </nav>{/*/nav*/}
            {/* End Navigation */}
        </div>{/*/.header-area*/}

          <div className="clearfix"></div>

      </header>{/* /.top-area*/}
      {/* top-area End */}
    
      {/*welcome-hero start */}
      <section id="welcome-hero" className="welcome-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>Hi! i am <br /> <span>kylie</span>   </h2>
                <p>your personal capcut editor</p>
                <a href="assets/download/resume (2).pdf" download>download resume (PDF)</a>
              </div>{/*/.header-text*/}
            </div>{/*/.col*/}
          </div>{/* /.row*/}
        </div>{/* /.container*/}

      </section>{/*/.welcome-hero*/}
      {/*welcome-hero end */}

      {/*about start */}
      <section id="about" className="about">
        <div className="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>
                    Hello! I'm Kylie Nicole Luzon, a creative video editor specializing in crafting visually stunning narratives that captivate audiences. Based in Apalit Pampanga, I utilize Capcut to bring my editing projects to life, leveraging its powerful features to enhance storytelling through video.
                  </h3>
                  <p>
                    My passion for video editing began with when my dorm mate invite me to join on her agency. At first I hesitate to join because I don't have a background in editing, but to her perseverance on me I joined on her agency. Since then, I have developed a diverse skill set that includes cutting, color grading, and sound design. CapCut has been instrumental in my growth, offering intuitive tools that allow me to experiment and refine my craft.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>+63-966-956-2783</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p>kylieluzon@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>website</h3>
                        <p>www.kylieluzon.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-offset-1 col-sm-5">
                <div className="single-about-img">
                  <img src="assets/images/about/profile.jpg" alt="profile" />
                  <div className="about-list-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i  className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i  className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                        
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i  className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i  className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>{/* / li */}
                      <li>
                        <a href="#">
                          <i  className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>{/* / li */}
                      
                      
                    </ul>{/* / ul */}
                  </div>{/* /.about-list-icon */}

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>{/*/.about*/}
      {/*about end */}
      
      {/*education start */}
      <section id="education" className="education">
        <div className="section-heading text-center">
          <h2>education</h2>
        </div>
        <div className="container">
          <div className="education-horizontal-timeline">
            <div className="row">
              <div className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2015 - 2016</h2>
                    <h3> Elementary Graduate </h3>
                  </div>{/*/.experience-time*/}
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        San Roque Elementary School
                      </h4>
                      <h5>Brgy. San Roque Mayorga, Leyte</h5>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                      </p>
                    </div>{/*/.timeline-content*/}
                  </div>{/*/.timeline*/}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2021 - 2022</h2>
                    <h3> High School Graduate </h3>
                  </div>{/*/.experience-time*/}
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal"></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        Mayorga National High School
                      </h4>
                      <h5>Poblacion Zone III Mayorga, Leyte</h5>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                      </p>
                    </div>{/*/.timeline-content*/}
                  </div>{/*/.timeline*/}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2023 - 2024</h2>
                    <h3> College student . . . </h3>
                  </div>{/*/.experience-time*/}
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                    <span className="single-timeline-horizontal spacial-horizontal-line
                    "></span>
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        La Verdad Christian College
                      </h4>
                      <h5> Mc Arthur Highway Sampaloc Apalit, Pampanga </h5>
                      <p className="description">
                        Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                      </p>
                    </div>{/*/.timeline-content*/}
                  </div>{/*/.timeline*/}
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>{/*/.education*/}
      {/*education end */}

      {/*skills start */}
      <section id="skills" className="skills">
          <div className="skill-content">
            <div className="section-heading text-center">
              <h2>skills</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">video editor</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="10" aria-valuemax="100" style={{}}>
                              
                          </div>
                        </div>
                        <h3>80%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">drawing</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" style={{}}>
                              
                          </div>
                        </div>
                        <h3>85%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">design</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{}}>
                            
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">sketch</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="87" aria-valuemin="10" aria-valuemax="100" style={{}}>
                              
                          </div>
                        </div>
                        <h3>87%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">html 5</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="10" aria-valuemax="100" style={{}}>
                            
                          </div>
                        </div>
                        <h3>20%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">animation drawing</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" style={{}}>
                              
                          </div>
                        </div>
                        <h3>85%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText">communication</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{}}>
                            
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                    <div className="barWrapper">
                      <span className="progressText"> creativity</span>
                      <div className="single-progress-txt">
                        <div className="progress ">
                          <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" style={{}}>
                              
                          </div>
                        </div>
                        <h3>90%</h3>	
                      </div>
                    </div>{/* /.barWrapper */}
                  </div>
                </div>
              </div>{/* /.row */}
            </div>	{/* /.container */}		
          </div>{/* /.skill-content*/}

      </section>{/*/.skills*/}
      {/*skills end */}

      {/*portfolio start */}
      <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>portfolio</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">

                  <div className="col-sm-4">
                    <div className="item">
                      <img src="assets/images/portfolio/k5.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="#">
                          sketch design
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                    <div className="item">
                      <img src="assets/images/portfolio/k4.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="#">
                          ui/ux design
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                  </div>{/* /.col */}

                  <div className="col-sm-4">
                    <div className="item">
                      <img src="assets/images/portfolio/cc01.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="#">
                          capcut account
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                  </div>{/* /.col */}

                  <div className="col-sm-4">
                    <div className="item">
                      <img src="assets/images/portfolio/P2.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="#">
                          web development
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                    <div className="item">
                      <img src="assets/images/portfolio/img01.jpg" alt="portfolio image"/>
                      <div className="isotope-overlay">
                        <a href="#">
                          picture
                        </a>
                      </div>{/* /.isotope-overlay */}
                    </div>{/* /.item */}
                  </div>{/* /.col */}
                </div>{/* /.row */}
              </div>{/*/.isotope*/}
            </div>{/*/.gallery-content*/}
          </div>{/*/.container*/}
        </div>{/*/.portfolio-details*/}

      </section>{/*/.portfolio*/}
      {/*portfolio end */}

      {/*contact start */}
      <section id="contact" className="contact">
        <div className="section-heading text-center">
          <h2>contact me</h2>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-form">
                    <form>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
                          </div>{/*/.form-group*/}
                        </div>{/*/.col*/}
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
                          </div>{/*/.form-group*/}
                        </div>{/*/.col*/}
                      </div>{/*/.row*/}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
                          </div>{/*/.form-group*/}
                        </div>{/*/.col*/}
                      </div>{/*/.row*/}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
                          </div>{/*/.form-group*/}
                        </div>{/*/.col*/}
                      </div>{/*/.row*/}
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="single-contact-btn">
                            <a className="contact-btn" href="#" role="button">submit</a>
                          </div>{/*/.single-single-contact-btn*/}
                        </div>{/*/.col*/}
                      </div>{/*/.row*/}
                    </form>{/*/form*/}
                  </div>{/*/.contact-form*/}
                </div>{/*/.single-contact-box*/}
              </div>{/*/.col*/}
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <div className="single-contact-box">
                  <div className="contact-adress">
                    <div className="contact-add-head">
                      <h3>Kylie Nicole Luzon</h3>
                      <p>Capcut Video Editor</p>
                    </div>
                    <div className="contact-add-info">
                      <div className="single-contact-add-info">
                        <h3>phone</h3>
                        <p>+63-966-956-2783</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>email</h3>
                        <p>kylieluzon@gmail.com</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3>website</h3>
                        <p>www.kylieluzon.com</p>
                      </div>
                    </div>
                  </div>{/*/.contact-adress*/}
                  <div className="hm-foot-icon">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>{/*/li*/}
                      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>{/*/li*/}
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>{/*/li*/}
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>{/*/li*/}
                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>{/*/li*/}
                    </ul>{/*/ul*/}
                  </div>{/*/.hm-foot-icon*/}
                </div>{/*/.single-contact-box*/}
              </div>{/*/.col*/}
            </div>{/*/.row*/}
          </div>{/*/.contact-content*/}
        </div>{/*/.container*/}

      </section>{/*/.contact*/}
      {/*contact end */}

      {/*footer-copyright start*/}
      <footer id="footer-copyright" className="footer-copyright">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <p>
              &copy; copyright Kylieluzon. design and developed by <a href="https://www.themesine.com/">themesine</a>
            </p>{/*/p*/}
          </div>{/*/.text-center*/}
        </div>{/*/.container*/}

        <div id="scroll-Top">
          <div className="return-to-top">
            <i className="fa fa-angle-up " id="scroll-top" ></i>
          </div>
          
        </div>{/*/.scroll-Top*/}
        
          </footer>{/*/.footer-copyright*/}
      {/*footer-copyright end*/}

    </>
  )
}

export default App
