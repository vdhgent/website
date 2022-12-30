<script>
import RatingRow from "@/components/RatingRow";
export default {
  components: {RatingRow},
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<template>
  <div class="wrapper">

    <header>
      <div class="language-menu">
        <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="language-link no-styling">
          <img
              :src="'https://flagcdn.com/' + locale.flag + '.svg'"
              height="14"
              :alt="locale.name">
        </nuxt-link>
      </div>
      <h1>Thomas<br/>Vanderhaeghen</h1>
      <div class="bar"/>
    </header>

    <main>
      <h2>Freelance developer and coach</h2>
      <h3>PHP, React and DevOps</h3>
      <h4>{{ $t('about_me.title') }}</h4>
      <p>{{ $t('about_me.paragraph_1') }}</p>
      <p>{{ $t('about_me.paragraph_2') }}</p>
      <p>{{ $t('about_me.paragraph_3') }}</p>
      <p>
        <img src="~/assets/images/download.svg" height="14" :alt="$t('download_cv')">
        <a href="/cv.pdf">{{ $t('download_cv') }}</a>
      </p>
      <address>
        <h4>{{ $t('contact.title') }}</h4>
        <p>Parklaan 60, 9000 Gent</p>
        <p><a href="tel:+32472484530">+32 472 48 45 30</a></p>
        <p><a href="mailto:info@vdh.gent">info@vdh.gent</a></p>
      </address>
      <h4>{{ $t('skills.title') }}</h4>
      <ul>
        <li>
          <span>PHP / Symfony</span>
          <RatingRow :rating="5" />
        </li>
        <li>
          <span>React / Typescript / Javascript</span>
          <RatingRow :rating="5" />
        </li>
        <li><span>SQL</span>
          <RatingRow :rating="5" />
        </li>
        <li>
          <span>Redis</span>
          <RatingRow :rating="4" />
        </li>
        <li>
          <span>Elastic</span>
          <RatingRow :rating="3" />
        </li>
        <li>
          <span>AWS DevOps</span>
          <RatingRow :rating="3" />
        </li>
        <li>
          <span>Kubernetes / Docker</span>
          <RatingRow :rating="4" />
        </li>
        <li>
          <span>HTML & CSS</span>
          <RatingRow :rating="5" />
        </li>
        <li>
          <span>{{ $t('skills.agile') }}</span>
          <RatingRow :rating="4" />
        </li>
        <li>
          <span>{{ $t('skills.leadership') }}</span>
          <RatingRow :rating="4" />
        </li>
        <li>
          <span>{{ $t('skills.customer_relations') }}</span>
          <RatingRow :rating="4" />
        </li>
      </ul>
      <h4>{{ $t('experience.title') }}</h4>
      <dl>
        <dt><a href="https://www.optios.net" class="no-styling"><img src="~/assets/images/optios 2.png" width="200" alt="Optios"></a></dt>
        <dd>{{ $t('experience.2018') }}</dd>
        <dt><img src="~/assets/images/diligentia 2.png" height="50" alt="Diligentia uitgeverij"></dt>
        <dd>{{ $t('experience.2015') }}</dd>
        <dt><img src="~/assets/images/icontroller 2.png" width="200" alt="iController"></dt>
        <dd>{{ $t('experience.2013') }}</dd>
        <dt><img src="~/assets/images/aware 2.png" width="200" alt="aware"></dt>
        <dd>{{ $t('experience.2011') }}</dd>
      </dl>
      <h4>{{ $t('education.title') }}</h4>
      <h5>KaHo Sint-Lieven<br /><small>Sep 2007 — Jun 2011</small></h5>
      <p>{{ $t('education.kaho') }}T</p>
      <h5>Visitatie Mariakerke<br /><small>Sep 2004 — Jun 2006</small></h5>
      <p>{{ $t('education.visitatie') }}</p>
      <h4>{{ $t('languages.title') }}</h4>
      <ul>
        <li><span>Nederlands</span><RatingRow :rating="5" /></li>
        <li><span>English</span><RatingRow :rating="4" /></li>
        <li><span>français</span><RatingRow :rating="1" /></li>
        <li><span>Italiano</span><RatingRow :rating="1" /></li>
      </ul>
      <p>
        <img src="~/assets/images/download.svg" height="14" :alt="$t('download_cv')">
        <a href="/cv.pdf">{{ $t('download_cv') }}</a>
      </p>
    </main>
  </div>
</template>
