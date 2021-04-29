<template>
  <v-card
    :class="themeColor.colorScheme1 === '#131822' ? 'light-card' : ''"
    :color="themeColor.colorScheme1"
    height="300px"
    width="80%"
    @click="openJobDescription"
  >
    <img
      class="companyLogo"
      :src="setImageAddress(jobInformation.company_logo)"
    >
    <v-row
      :style="{color: themeColor.colorScheme2}"
    >
      <v-col cols="6">
        <h5>{{ formatDate(jobInformation.created_at) }}</h5>
      </v-col>
      <v-col cols="6">
        <h5>{{ jobInformation.type }}</h5>
      </v-col>
    </v-row>
    <v-row
      :style="{color: themeColor.colorScheme2}"
    >
      <v-col cols="12">
        <h3>{{ jobInformation.title }}</h3>
      </v-col>
    </v-row>
    <v-row
      :style="{color: themeColor.colorScheme2}"
    >
      <v-col cols="12">
        <h5>{{ jobInformation.company }}</h5>
      </v-col>
    </v-row>
    <v-row
      :style="{color: themeColor.colorScheme2}"
    >
      <v-col cols="12">
        <h5><b>{{ jobInformation.location }}</b></h5>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import moment from 'moment';

export default {
  name: 'GeneralJobInformation',
  props: {
    jobInformation: Object,
    themeColor: Object,
  },
  methods: {
    openJobDescription() {
      this.$emit('jobClicked', this.jobInformation);
    },
    setImageAddress(imageAddress) {
      return imageAddress;
    },
    formatDate(data) {
      return moment(data).format('MM-DD-YY');
    },
  },
};
</script>
<style>
    .companyLogo{
        height: 60px;
        width:  60px;
        position: relative;
        left:-40%;
    }
    .light-card{
        border: 1px solid white !important;
    }

    #jobInfoRow_1{
        position: absolute;
        top:20%;
    }

    #jobInfoRow_2{
        position: absolute;
        top: 35%;
        left: 5%;
    }
    #jobInfoRow_3{
        position: absolute;
        top: 60%;
        left: 35%;
    }
     #jobInfoRow_4{
        position: absolute;
        top: 75%;
        left: 35%;
    }
</style>
