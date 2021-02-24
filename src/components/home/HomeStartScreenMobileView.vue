<template>
  <div>
    <br />
    <v-card
      flat
      class="mx-auto my-0 elevation-0 text-center"
      max-width
      height="90%"
    >
      <v-img
        :src="require('@/assets/img/logo.png')"
        :lazy-src="require('@/assets/img/logo.png')"
        width="40%"
        class="header-image-mobile"
      >
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-layout>
      </v-img>

      <v-card-title
        class="google-font"
        style="font-size:150%;color:#4285F4;margin-top:-10px;word-break:normal;"
        >International Women's Day 2021</v-card-title
      >
      <v-card-text>
        <p
          class="google-font mb-2"
          style="font-size: 145%;color: rgb(23, 172, 182);font-weight: 800;"
        >
          CourageToCreate
        </p>

        <p
          class="google-font mb-0"
          style="font-size: 100%;padding-top: 20px;color: #757575;text-align:justify"
        >
          Women Techmakers community provides visibility, community and
          resources for women in tech to join, thrive and lead in the industry.
          As a part of our International Women’s Day celebrations, we invite
          women and allies to join us in this celebration along with their
          communities.
        </p>
        <p
          class="google-font mb-0"
          style="font-size: 100%;padding-top: 20px;color: #757575;text-align:justify"
        >
          In honor of International Women's Day and the 2021 theme
          #CouragetoCreate WTM Settat & GDG Settat organizes the IWD event. This
          year our theme is based on the incredible strength and power women
          have shown in the face of adversity. We recognize that there were
          tremendous challenges over the past year, especially for women, from
          dealing with COVID to broader issues of racial justice and human
          rights. But we remain hopeful about the future and the belief that
          together our community can create positive change throughout the
          world.
        </p>
        <p
          class="google-font mt-5 mb-2"
          style="font-size: 115%;color: #4285F4;font-weight: 200;"
        >
          March 14rd | Online
        </p>
        <p class="google-font mb-8" style="font-size:110%;color:#9e9e9e">
          <span v-for="(item, i) in chapterDetails.ChapterHashTags" :key="i"
            >#{{ item }} &nbsp;</span
          >
        </p>
        <v-btn
          href="https://gdg.community.dev/events/details/google-gdg-settat-presents-wtm-settat-international-womens-day-2021/"
          id="modal59287007034"
          target="_blank"
          color="#1a73e8"
          class="ma-0 google-font elevation-0"
          style="text-transform: capitalize;border-radius: 5px;color: white;background-color: #4285F4; font-size:15px; padding: 7px;"
          >Register</v-btn
        >
        <br />
        <br />
        <v-btn
          href="http://goo.gle/wtm-membership"
          target="_blank"
          rounded
          color="#fff"
          style="text-transform: capitalize;border-radius:5px; font-size:15px;background-color: rgb(23, 172, 182);"
          outlined
          class="ml-0 google-font"
          >Become a Member</v-btn
        >
      </v-card-text>
    </v-card>

    <v-flex xs12>
      <!-- <v-img
        height="1x50"
        class="mb-10 mt-3"
        :src="require('@/assets/img/home-header-new.jpg')"
        :lazy-src="require('@/assets/img/home-header-new.jpg')"
      ></v-img> -->
      <!-- src="https://www.youtube.com/embed/j6joNoC6bkM" -->
      <iframe
        width="100%"
        height="300"
        src="https://drive.google.com/file/d/1DDw-yLi_m_3UjvSWFFv9xdlI0CkpF-Za/preview"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </v-flex>
  </div>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data: () => ({
    loading: false,
    selection: 1,
    chapterDetails: ChapterDetails,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
@media only screen and (width: 320px) {
  iframe {
    height: 167px;
  }
}
@media only screen and (width: 375px) {
  iframe {
    height: 198px;
  }
}
@media only screen and (width: 425px) {
  iframe {
    height: 220px;
  }
}
</style>
