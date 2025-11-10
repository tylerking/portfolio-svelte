<script lang='ts' context='module'>
	export interface Post {
		slug: string
		title: string
		date: string
		excerpt: string
	}
</script>

<script lang='ts'>
	import { postCard, postDate, postTitle, postExcerpt } from './PostCard.css'

	export let post: Post
</script>

<article class={postCard}>
	<time class={postDate}>{post.date}</time>
	<a href='/blog/{post.slug}' class={postTitle}>{post.title}</a>
	<p class={postExcerpt}>{post.excerpt}</p>
</article>
