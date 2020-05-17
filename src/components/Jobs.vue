<template>
  <ul class="job__list">

    <li class="job__card" v-bind:class="{ 'job__card--evidence': job.new }" v-for="job in jobs" :key=job.id>
      <div class="job__logo">
        <img :src="job.logo" alt="Company logo">
      </div>
      <div class="job__info">
        <span class="job__company">{{ job.company }}</span>
        <span v-if="job.new === true" class="job__badge">New!</span>
        <span v-if="job.featured === true" class="job__badge job__badge--featured">Featured</span>
        <p class="job__position">{{ job.position }}</p>
        <span class="job__date">{{ job.postedAt }}</span>
        <span class="job__contract">{{ job.contract }}</span>
        <span class="job__location">{{ job.location }}</span>
      </div>
      <div class="job__filters">
        <span class="filter" @click="addFilter(job.role)">{{ job.role }}</span>
        <span class="filter">{{ job.level }}</span>
        <span v-for="language in job.languages" class="filter" :key=language.id>{{language}}</span>
        <template v-if="job.tools">
          <span v-for="tool in job.tools" class="filter" :key=tool.id>{{tool}}</span>
        </template>
      </div>
    </li>

  </ul>
</template>

<script>
import json from '../../data.json';

export default {
  name: 'Jobs',
  data: () => {
    return {
      jobs: json 
    };
  },
  methods: {
    addFilter: filter => { 
      alert('Add '+ filter);
    }
  }
};
</script>