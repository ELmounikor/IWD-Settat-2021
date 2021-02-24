<template>
  <v-container fluid class="my-1">
    <v-layout
      wrap
      align-center
      justify-space-between
      row
      fill-height
      class="py-0"
    >
      <v-flex xs12 sm12 md6 lg6 xl7 class="px-0 py-0">
        <v-img
          :src="require('@/assets/img/logo.png')"
          :lazy-src="require('@/assets/img/logo.png')"
          width="30%"
          class="header-image mt-4 mb-2"
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
        <p
          class="google-font mt-0 mb-0"
          style="font-weight: 600;font-size: 32px;color:#4285F4"
        >
          International Women's Day 2021
        </p>
        <p
          class="google-font mb-0"
          style="font-size: 135%;color: rgb(23, 172, 182);font-weight: 800;"
        >
          CourageToCreate
        </p>

        <p class="google-font mb-0 home-content1">
          Women Techmakers community provides visibility, community and
          resources for women in tech to join, thrive and lead in the industry.
          As a part of our International Women’s Day celebrations, we invite
          women and allies to join us in this celebration along with their
          communities.
        </p>
        <p class="google-font mb-0 home-content1">
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
          id="modal59287007034"
          target="_blank"
          color="#1a73e8"
          class="ma-0 google-font elevation-0"
          href="https://gdg.community.dev/events/details/google-gdg-settat-presents-wtm-settat-international-womens-day-2021/"
          style="text-transform: capitalize;border-radius: 5px;color: white;background-color: #4285F4; font-size:15px; padding: 7px;margin-right: 20px !important;"
          >Register</v-btn
        >
        <v-btn
          href="http://goo.gle/wtm-membership"
          target="_blank"
          rounded
          color="#fff"
          style="text-transform: capitalize;border-radius:5px; margin-right: 5px;font-size:15px;background-color: rgb(23, 172, 182);"
          text
          class="ml-0 google-font"
          >Become a Member</v-btn
        >
      </v-flex>
      <v-flex
        xs12
        sm12
        md5
        lg5
        xl5
        class="text-xs-center d-none d-sm-block header-mobile-image"
      >
        <!-- <v-img
          :src="require('@/assets/img/home-header-new.jpg')"
          :lazy-src="require('@/assets/img/home-header-new.jpg')"
          width="100%"
          class="header-image-wrapper"
        >
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </v-img>-->
        <!-- src="https://www.youtube.com/embed/j6joNoC6bkM" -->
        <iframe
          width="100%"
          height="260px"
          src="https://drive.google.com/file/d/1DDw-yLi_m_3UjvSWFFv9xdlI0CkpF-Za/preview"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails,
    };
  },
};
</script>

<style scoped>
iframe {
  height: 260px;
}

@media only screen and (width: 768px) {
  iframe {
    height: 360px;
  }
}

@media only screen and (width: 1024px) {
  iframe {
    height: 200px;
  }
}

.home-content1 {
  font-size: 100%;
  padding-top: 20px;
  padding-right: 20px;
  color: #757575;
  text-align: justify;
}
</style>
