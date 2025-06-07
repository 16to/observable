<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps({
  service: {
    type: String,
    default: 'AOM'
    
  },
  lang: {
    type: String,
    default: 'zh-cn'
  }
})

const fetchLoginUrl = async (service,lang) => {
  try {
    const response = await fetch('/login?service=' + service + '&lang=' + lang)
    if (!response.ok) {
      throw new Error('Failed to fetch login URL')
    }
    const data = await response.json()
    console.log(data)
    return data.login_url
  } catch (error) {
    console.error('Error fetching login URL:', error)
  }
}

onMounted( async () => {
  console.log(props.service)
  console.log(props.lang)
  const loginUrl = await fetchLoginUrl(props.service,props.lang)
  window.location.href = loginUrl
})

</script>

<template>
  Loading...
</template>

<style scoped>
.frame {
  height: calc(100vh - (var(--navbar-height)));
  width: 100vw;
  border: none;
  outline: none;
  max-width: var(--sls-page-max-width);
  margin: auto;
}

</style>