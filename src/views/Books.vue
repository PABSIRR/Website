<template>
  <div class="max-w-5xl mx-auto py-10">
    <h1 class="text-4xl font-bold mb-8">Books</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!--:description="book.description"-->
      <BookCard
        v-for="book in sortedBooks"
        :key="book.name"
        :name="book.name"
        :author="book.author"
        :date="book.date"
        :img="book.img"
        :rating="book.rating"
      >
        {{ book.review }}
      </BookCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookCard from '../components/BookCard.vue';
import { ref, onMounted, computed } from 'vue'

type Book = {
  name: string
  author: string
  //description: string
  date: string // ISO format
  img: string 
  rating: number
  review: string
}

const initialBooks: Array<{ name: string; date: string; rating: number; review: string }> = [
  {
    name: "Atomic Habits",
    date: "2025-08-10",
    rating: 4.5,
    review: "Interesting but a bit slow."
  },
  {
    name: "Dark Age Red Rising",
    date: "2025-07-01",
    rating: 5,
    review: "Hunger Games but better?"
  }
]

const books = ref<Book[]>([])

async function fetchBook(book: { name: string; date: string; rating: number; review: string }): Promise<Book> {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(book.name)}&langRestrict=en`)
  const data = await response.json()
  let author = ''
  let img = ''
  let title = ''
  // Need to define google api type?
  const english = data.items?.find(item => item.volumeInfo.language === 'en')
  //let description = ''
  if (english) {
    const info = english.volumeInfo
    console.log(info)
    author = info.authors?.[0] || ''
    img = info.imageLinks?.thumbnail || ''
    title = info.title || ''
    //description = info.description || ''
  }
  return {
    name: title,
    author,
    //description,
    date: book.date,
    img,
    rating: book.rating,
    review: book.review
  }
}

onMounted(async () => {
  const full: Book[] = []
  for (const book of initialBooks) {
    full.push(await fetchBook(book))
  }
  books.value = full
})

const sortedBooks = computed(() =>
  [...books.value].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)

</script>