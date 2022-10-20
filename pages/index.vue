<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<template>
  <div>
    <h1>Thomas Vanderhaeghen</h1>
    <div class="sub-header">
      <div class="sub-header-inner">
        <div>
          <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="language-link">
            <img
                :src="'https://flagcdn.com/' + locale.flag + '.svg'"
                height="14"
                :alt="locale.name">
          </nuxt-link>
          Vol, I
        </div>
        <div class="sub-header-date">{{ $d(new Date(), 'long') }}</div>
        <div>{{ $t('availability') }}</div>
      </div>
    </div>
    <main>
      <h2>PHP Developer</h2>
      <h3>{{ $t('subtitle') }}</h3>
      <div class="content">
        <div class="left-content">
          <div>
            <h4>{{ $t('about_me.title') }}</h4>
            <article>
              <p>{{ $t('about_me.paragraph_1') }}</p>
              <p>{{ $t('about_me.paragraph_2') }}</p>
              <p>{{ $t('about_me.paragraph_3') }}</p>
            </article>
          </div>
        </div>
        <div class="middle-content">
          <img src="~assets/images/profile2.jpeg" :alt="$t('profile_picture.caption')"/>
          <figcaption>{{ $t('profile_picture.caption') }}</figcaption>
        </div>
        <div class="right-content">
          <h4>{{ $t('skills.title') }}</h4>

          <article>
            <img src="~assets/images/php.svg" width="130" class="float-left" alt="PHP Logo"/>
            <p v-html="$t('skills.php')" />
          </article>

          <article>
            <img src="~assets/images/react.png" width="90" class="float-right" alt="React logo"/>
            <p v-html="$t('skills.react')" />
          </article>

          <article>
            <img src="~assets/images/docker.webp" width="85" class="float-left" alt="Docker logo"/>
            <!--            <img src="~assets/images/kubernetes.png" width="100" class="float-right"/>-->
            <p v-html="$t('skills.docker')" />
          </article>

          <article>
            <img src="~assets/images/aws.png" width="90" class="float-right" alt="AWS Logo"/>
            <p v-html="$t('skills.aws')" />
          </article>
        </div>
      </div>
    </main>

    <article class="bottom-bar">
      <h4>{{ $t('experience.title') }}</h4>
      <div class="timeline">
        <div class="timeline-year">
          <h5>2011</h5>
          <p>🎓 {{ $t('experience.2011') }}</p>
        </div>

        <div class="timeline-year">
          <h5>2013</h5>
          <p>📈 {{ $t('experience.2013') }}</p>
        </div>
        <div class="timeline-year">
          <h5>2015</h5>
          <p>📚 {{ $t('experience.2015') }}</p>
        </div>
        <div class="timeline-year">
          <h5>2018</h5>
          <p>🚀 {{ $t('experience.2018') }}</p>
        </div>
        <div class="timeline-year">
          <h5>2023</h5>
          <p>🎉 {{ $t('experience.2023') }}</p>
        </div>
      </div>
    </article>

    <address>
      <div class="address-inner">
        <h4>{{ $t('contact.title') }}</h4>
        <span>{{ $t('contact.email') }} <a href="mailto:info@vdh.gent">info@vdh.gent</a></span>
        <span>{{ $t('contact.phone') }} <a href="tel:+32472484530">+32 472 48 45 30</a></span>
        <span style="position: relative; margin-right: 20px">
          <a href="https://www.linkedin.com/in/thomasvanderhaeghen" target="_blank">
            Linked<img src="~/assets/images/linkedin.svg" height="20" style="position: absolute; bottom: .05em" alt="LinkedIn logo" />
          </a>
        </span>
      </div>
    </address>
    <footer>{{ $t('footer') }}</footer>
  </div>
</template>
