<template>
  <ul class="job__list">

    <li class="job__card" v-for="job in jobs" :key=job.id>
      <div class="job__logo">
        <img :src="job.logo" alt="Company logo">
      </div>
      <div class="job__info">
        <span class="job__company">{{ job.company }}</span>
        <span class="job__badge"></span>
        <span class="job__badge"></span>
        <p class="job__position">{{ job.position }}</p>
        <span class="job__date">{{ job.postedAt }}</span>
        <span class="job__contract">{{ job.contract }}</span>
        <span class="job__location">{{ job.location }}</span>
      </div>
      <div class="job__filters">
        <span v-for="language in job.languages" class="filter" :key=language.id>{{language}}</span>
      </div>
    </li>

  </ul>
</template>

<script>
import json from '../../data.json';

export default {
  name: 'Jobs',
  data() {
    return {
      jobs: json 
    };
  },
};
</script>