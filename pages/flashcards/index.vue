<template>
  <div class="overall-wrapper-game">
    <NuxtLayout>
      <section class="courses">
        <div v-for="course in coursesGraph.subjectCourses.children.items" :key="course.id">
          
          <h2>{{ course.name }}</h2>
          <details class="show-detail">
            <summary class="text1">Semester {{ course.semester[0] }}</summary>
            <h4>Om semesteret:</h4>
            <p>{{ course.description }}</p>
          </details>
          <h4 class="slide">Slide fra højre - vælg et emne</h4>
          <OverviewSubject :course="course" />
          
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({ layout: "flashcards" });
// de to linier hereunder skal være pa alle sider der ønskes password beskyttet.
const token = useCookie("token").value;
if (!token) {
  navigateTo("/member/loginpage");
}


const query = gql`
  query {subjectCourses(url: "/home/overview-page/subject-courses") 
  {
    children {
      items{
        name
        id
        ... on SubjectCourse {
            description
            semester
        }
      }
    }
  }
}
`

const { data: coursesGraph } = await useAsyncQuery(query)

useHead({
  title: "MemoMD",
  meta: [
    {
      name: "description",
      content: "MemoMD App er especiel opbygget til medicinstuderende for at effektivisere deres læring indenfor det forskellige emner.",
    },
  ],
});
</script>

<style scoped>
.overall-wrapper-game {
  z-index: 1;
}

details {
  margin: 10px 0;
}

details[open] summary {
  margin: 10px 0;
}

.show-detail,
.text1 {
  margin: 10px 0;
}

summary {
  font-weight: bold;
}

.slide {
  margin-top: 10px;
}
</style>