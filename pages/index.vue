


<template>
  <div>
    <h1>Thomas Vanderhaeghen</h1>
    <div class="sub-header">
      <div class="sub-header-inner">
        <div>Vol, I</div>
        <div class="sub-header-date">zaterdag, 9 juli 2022</div>
        <div>vanaf &euro;390/dag</div>
      </div>
    </div>
    <main>
      <h2>PHP Developer</h2>
      <h3>Developer, project manager, analyst and DevOps</h3>
      <div class="content">
        <div class="left-content">
          <div>
            <h4>About me</h4>
            <article>
              <p>My name is Thomas Vanderhaeghen and specialise in PHP development. In my 11 years as a professional
                developer I also picked up skills in React (typescript), devops and project management.</p>
              <p>I believe that alone or together with your team my experience and skill can make a difference in your
                company.</p>
              <p>While developing help is always welcome, either building a good foundation for new applications or
                improving on already existing applications. Either way I will work hard to set you up for success.</p>
            </article>
          </div>

          <div>
            <h4 style="margin-top: 1em">Pricing</h4>
            <dl class="pricing">
              <dt>Day price</dt><dd>€&nbsp;&nbsp;430&nbsp;&nbsp;</dd>
              <dt>Week price</dt><dd>€&nbsp;1950&nbsp;&nbsp;</dd>
              <dt>Transport cost</dt><dd>€&nbsp;0,4/km</dd>
              <dt>Advice / introduction conversation</dt><dd>Free&nbsp;&nbsp;</dd>
            </dl>
          </div>
        </div>
        <div class="middle-content">
          <img src="~assets/images/profile.jpeg"/>
          <figcaption>Profile picture taken on September 2022.</figcaption>
        </div>
        <div class="right-content">
          <h4>Skills</h4>

          <article>
            <img src="~assets/images/php.svg" width="130" class="float-left"/>
            <p>
              Using <strong>PHP</strong> since 2004 (5.0 until 8.1) together with frameworks and libraries like symfony,
              laravel, codeigniter, doctrine and propel.
            </p>
          </article>

          <article>
            <img src="~assets/images/react.png" width="90" class="float-right"/>
            <p>
              In the last years frontend development started to play a bigger role, starting out with angular2 later
              moved on to <strong>react</strong>. This website is created with NuXT (vue.js).
            </p>
          </article>

          <article>
            <img src="~assets/images/docker.webp" width="85" class="float-left"/>
            <!--            <img src="~assets/images/kubernetes.png" width="100" class="float-right"/>-->
            <p>
              <strong>Docker</strong> has been my primary setup for local development. Expanded into
              <strong>kubernetes</strong> for production and test servers.
            </p>
          </article>

          <article>
            <img src="~assets/images/aws.png" width="90" class="float-right"/>
            <p>
              When doing devops my go-to is mostly <strong>AWS&ensp;services</strong>. Cloudformation, Cloudfront,
              Beanstalk, EC2, S3, Simple Search, SES, ElastiCache, IAM,
              Certificate manager
            </p>
          </article>
        </div>
      </div>
    </main>

    <article class="bottom-bar">
      <h4>Experience</h4>
      <div class="timeline">
        <div class="timeline-year">
          <h5>2011</h5>
          <p>🎓 Made-to-measure application to improve efficiency within the company. PHP Developer</p>
        </div>

        <div class="timeline-year">
          <h5>2013</h5>
          <p> 📈 iController.eu. Application for credit control and management. Where I first came into contact with
            Agile and project management. PHP Developer.</p>
        </div>
        <div class="timeline-year">
          <h5>2015</h5>
          <p>📚 Diligentia uitgeverij. Digital courses and school management. PHP Developer.</p>
        </div>
        <div class="timeline-year">
          <h5>2018</h5>
          <p>🚀 Optios. Salon management software, online booking, register and marketing. Lead developer.</p>
        </div>
        <div class="timeline-year">
          <h5>2023</h5>
          <p>🎉 Start as a freelance developer.</p>
        </div>
      </div>
    </article>

    <address>
      <div class="address-inner">
        <h4>
          Contact
        </h4>
        <span>E-mail <a href="mailto:info@vdh.gent">info@vdh.gent</a></span>
        <span>Phone <a href="tel:+32472484530">+32 472 48 45 30</a></span>
        <span style="position: relative; margin-right: 20px">
          <a href="https://www.linkedin.com/in/thomasvanderhaeghen" target="_blank">
            Linked<img src="~/assets/images/linkedin.svg" height="20" style="position: absolute; bottom: .05em" />
          </a>
        </span>
      </div>
    </address>
    <footer>Design inspired by The washington post front page</footer>
  </div>
</template>
