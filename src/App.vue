<template>
  <v-app
    id="app"
    :style="{background: colorScheme1}"
  >
    <v-row
      class="pageHeader"
      :style="{color: colorScheme1}"
    >
      <v-col
        align="start"
        offset-md="1"
        cols="8"
      >
        <div id="pageHeaderDiv">
          <h1 id="pageTitle">
            devjobs
          </h1>
        </div>
      </v-col>
      <v-col cols="3">
        <div id="themeSwitch">
          <v-switch
            v-model="darkMode"
            :color="'white'"
          />
        </div>
      </v-col>
    </v-row>
    <v-row
      v-if="!jobSelected"
      id="filterRow"
      class="ml-md-11"
      cols="12"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="jobCriteria"
          :class="darkMode ? 'light-text-field' : 'dark-text-field'"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
          label="Filter by title, companies, expertise..."
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <v-text-field
          v-model="locationCriteria"
          :class="darkMode ? 'light-text-field' : 'dark-text-field'"
          prepend-inner-icon="mdi-map-marker"
          outlined
          dense
          label="Filter by location..."
        />
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <div id="checkboxDiv">
          <v-checkbox
            v-model="fullTime"
            :class="darkMode ? 'light-text-checkbox' : 'dark-text-checkbox'"
            label="Full Time Only"
          />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="3"
        align="end"
      >
        <v-btn
          id="searchBtn"
          color="#5865E0"
          @click="filterByCriteria"
        >
          Search
        </v-btn>
      </v-col>
    </v-row>
    <DetailedJobInformation
      v-if="jobSelected"
      :theme-color="{colorScheme1: colorScheme1, colorScheme2: colorScheme2}"
      :job-details="jobSelected"
      @jobDescriptionClosed="closeJobModal"
    />
    <v-row
      v-if="!jobSelected"
      class="ml-10"
      cols="12"
    >
      <v-col
        v-for="(job,index) in filteredJobs"
        id="jobInfo"
        :key="index"
        cols="12"
        md="4"
      >
        <GeneralJobInformation
          :theme-color="{colorScheme1: colorScheme1, colorScheme2: colorScheme2}"
          :job-information="job"
          @jobClicked="openJobDetailModal"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset-md="1">
      </v-col>
    </v-row>
    <v-pagination v-if="!jobSelected" @input="getMoreJobs" v-model="page" :length="length">
    </v-pagination>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex';
import GeneralJobInformation from './components/GeneralJobInformation.vue';
import DetailedJobInformation from './components/DetailedJobInformation.vue';

export default {
  name: 'App',
  components: {
    GeneralJobInformation,
    DetailedJobInformation,
  },
  data: () => ({
    filteredJobs: null,
    jobSelected: null,
    jobCriteria: '',
    locationCriteria: '',
    fullTime: '',
    darkMode: false,
    length: 5,
    page: 1,
  }),
  computed: {
    ...mapGetters({
      jobList: 'jobList',
    }),
    theme() {
      return this.darkMode ? 'dark' : 'light';
    },
    colorScheme1() {
      return this.$vuetify.theme.themes[this.theme].colorScheme1;
    },
    colorScheme2() {
      return this.$vuetify.theme.themes[this.theme].colorScheme2;
    },
  },
  created() {
    this.$store
      .dispatch('getJobList', this.page)
      .then(() => {
        this.filterByCriteria();
      });
  },
  methods: {
    openJobDetailModal(job) {
      this.jobSelected = job;
    },
    filterByCriteria() {
      if (!this.jobCriteria && !this.locationCriteria && !this.fullTime) {
        this.filteredJobs = this.jobList;
      } else {
        const jobCriteriaRegex = new RegExp(this.jobCriteria.split(' ').join('|'), 'i');
        const locationCriteriaRegex = new RegExp(this.locationCriteria, 'i');
        const fullTimeRegex = new RegExp(this.fullTime ? 'Full Time' : '', 'i');
        this.filteredJobs = this.jobList.filter((job) => jobCriteriaRegex.test(`${job.company} ${job.title}`) && locationCriteriaRegex.test(job.location) && fullTimeRegex.test(job.type));
      }
    },
    getMoreJobs() {
      this.$store
        .dispatch('getJobList', this.page)
        .then((jobList) => {
          if (jobList.length === 0) {
            this.getMoreJobs();
          } else {
            this.filterByCriteria();
            this.$vuetify.goTo(0);
          }
        });
    },
    closeJobModal() {
      this.jobSelected = null;
    },
  },
};
</script>
<style>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#themeSwitch{
  position: relative;
  top: -10px;
}

.pageHeader{
    background-color: #5865E0;
}

#jobInfo {
    margin-bottom: 130px;
}

#searchBtn {
    top: 7%;
    left: -30%;
    color: white;
}

#showMoreBtn {
    color: white;
}

#checkboxDiv {
    margin-top: -9px;
}

#pageTitle {
    color: white;
}

.light-text-checkbox .v-label, .light-text-checkbox .v-icon{
    color: #1976d2 !important;
}

.dark-text-checkbox .v-input--selection-controls__ripple{
    color: black !important;
}

.light-text-field .v-text-field__slot input, .light-text-field .v-icon, .light-text-field .v-label, .light-text-field fieldset{
  color: #1976d2 !important;
}

.dark-text-field .v-label,.dark-text-field .v-text-field__slot label,.dark-text-field .v-icon, .dark-text-field fieldset, .v-text-field__slot input{
    color: black !important;
}

</style>
