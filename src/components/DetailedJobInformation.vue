<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        xs="12"
        md="6"
        class="offset-md-3"
      >
        <v-icon
          id="closeButton"
          :style="{color: themeColor.secondary}"
          @click="closeDetailedJobDescription"
        >
          mdi-close-circle-outline
        </v-icon>
        <v-card
          :class="themeColor.secondary === '#FFFFFF' ? 'light-text-card' : ''"
          :color="themeColor.primary"
        >
          <img
            class="companyLogoDetailedInformation"
            :src="setImageAddress(jobDetails.company_logo)"
          >
          <h4 :style="{color: themeColor.secondary}">
            {{ jobDetails.company }}
          </h4>
          <h6 :style="{color: themeColor.secondary}">
            {{ jobDetails.company_url }}
          </h6>
          <v-btn
            id="companySiteBtn"
            color="#e6e6fa"
            x-small
          >
            Company Site
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
        class="offset-md-3"
      >
        <v-card
          :class="themeColor.secondary === '#FFFFFF' ? 'light-text-card' : ''"
          :color="themeColor.primary"
          class="mb-7"
        >
          <v-row :style="{color: themeColor.secondary}">
            <v-col cols="5">
              <h5>{{ jobDetails.created_at }}</h5>
            </v-col>
            <v-col cols="2">
              <span />
            </v-col>
            <v-col cols="5">
              <h5>{{ jobDetails.type }}</h5>
            </v-col>
          </v-row>
          <v-row :style="{color: themeColor.secondary}">
            <v-col cols="5">
              <h5>{{ jobDetails.title }}</h5>
            </v-col>
            <v-col cols="2">
              <span />
            </v-col>
            <v-col cols="5">
              <v-btn
                id="applyNowBtn"
                color="#5865E0"
                small
              >
                Apply Now
              </v-btn>
            </v-col>
          </v-row>
          <v-row :style="{color: themeColor.secondary}">
            <v-col
              cols="3"
              class="offset-5"
            >
              <h5>{{ jobDetails.location }}</h5>
            </v-col>
          </v-row>
          <v-row :style="{color: themeColor.secondary}">
            <v-col cols="12">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, nunc quis ullamcorper volutpat, mauris leo dignissim mauris, rhoncus placerat quam leo ac ipsum. Sed tincidunt dictum nisl, id gravida urna finibus eu. Vivamus vel ligula imperdiet, faucibus massa egestas, ultrices nisl. Integer porttitor dui non nibh malesuada luctus. Nulla facilisi. Mauris vestibulum auctor dolor, vitae efficitur nulla tempus id. Pellentesque blandit dolor eu orci tempus egestas. Nam eu odio eu erat vehicula blandit et ac nulla.
                Integer quis ipsum justo. Nam sagittis sem ullamcorper mauris congue, iaculis laoreet velit luctus. Phasellus interdum augue eros. Suspendisse elementum porttitor ligula in finibus. Praesent viverra gravida tincidunt. Duis mattis lacus non suscipit pellentesque. Integer accumsan vitae dolor at ultricies. Nulla laoreet suscipit justo non scelerisque. Nunc vel tincidunt purus, pharetra feugiat urna.
              </div>
            </v-col>
          </v-row>
          <v-row :style="{color: themeColor.secondary}">
            <v-col cols="12">
              <h2>Requirements</h2>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, nunc quis ullamcorper volutpat, mauris leo dignissim mauris, rhoncus placerat quam leo ac ipsum. Sed tincidunt dictum nisl, id gravida urna finibus eu. Vivamus vel ligula imperdiet, faucibus massa egestas, ultrices nisl. Integer porttitor dui non nibh malesuada luctus. Nulla facilisi. Mauris vestibulum auctor dolor, vitae efficitur nulla tempus id. Pellentesque blandit dolor eu orci tempus egestas. Nam eu odio eu erat vehicula blandit et ac nulla.</div>
              <ul id="requirementList">
                <li>
                  Lorem ipsum 1
                </li>
                <li>
                  Lorem ipsum 2
                </li>
                <li>
                  Lorem ipsum 3
                </li>
                <li>
                  Lorem ipsum 4
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-row :style="{color: themeColor.secondary}">
            <v-col cols="12">
              <h2>What You Will Do</h2>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, nunc quis ullamcorper volutpat, mauris leo dignissim mauris, rhoncus placerat quam leo ac ipsum. Sed tincidunt dictum nisl, id gravida urna finibus eu. Vivamus vel ligula imperdiet, faucibus massa egestas, ultrices nisl. Integer porttitor dui non nibh malesuada luctus. Nulla facilisi. Mauris vestibulum auctor dolor, vitae efficitur nulla tempus id. Pellentesque blandit dolor eu orci tempus egestas. Nam eu odio eu erat vehicula blandit et ac nulla.</div>
              <ul id="tasksList">
                <li>
                  Lorem ipsum 5
                </li>
                <li>
                  Lorem ipsum 6
                </li>
                <li>
                  Lorem ipsum 7
                </li>
                <li>
                  Lorem ipsum 8
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
        <v-card
          id="applyCard"
          color="#5865E0"
        >
          <v-row>
            <v-col cols="12">
              <h2>How to Apply</h2>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus, nunc quis ullamcorper volutpat, mauris leo dignissim mauris, rhoncus placerat quam leo ac ipsum. Sed tincidunt dictum nisl, id gravida urna finibus eu. Vivamus vel ligula imperdiet, faucibus massa egestas, ultrices nisl. Integer porttitor dui non nibh malesuada luctus.</div>
              <span>www.examplelink.com</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'DetailedJobInformation',
  props: {
    jobDetails: Object,
    themeColor: Object,
  },
  data: () => ({
    dialog: true,
  }),
  methods: {
    closeDetailedJobDescription() {
      this.$emit('jobDescriptionClosed');
    },
    setImageAddress(imageAddress) {
      return imageAddress;
    },
  },
};
</script>
<style>
#requirementList,
#tasksList {
    list-style-position: inside;
}

#companySiteBtn {
    color: #7b68ee;
}

#applyNowBtn {
    color: white;
}

#applyCard {
    color: white;
}

#closeButton {
    left: 46%;
    top: 25px;
    z-index: 2;
}

.companyLogoDetailedInformation{
    width: 50%;
    height: 50%
}

.light-text-card{
     border: 1px solid white !important
}
</style>
