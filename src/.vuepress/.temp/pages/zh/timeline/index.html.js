import comp from "/home/root888/projects/blog/blog-front/src/.vuepress/.temp/pages/zh/timeline/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/timeline/\",\"title\":\"时间轴\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"时间轴\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"timeline\"},\"layout\":\"Timeline\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/timeline/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"李其鸿\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"时间轴\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"时间轴\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
