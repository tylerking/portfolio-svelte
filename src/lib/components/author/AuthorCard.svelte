<script lang='ts'>
	import authorPhoto from '$lib/assets/tyler-king.jpg'
	import {
		authorCard,
		authorAvatarWrapper,
		authorAvatar,
		authorInfo,
		authorName,
		authorBio
	} from './AuthorCard.css'
</script>

<div class={authorCard}>
	<div class={authorAvatarWrapper}>
		<img src={authorPhoto} alt='Tyler King' class={authorAvatar} />
	</div>
	<div class={authorInfo}>
		<span class={authorName}>Tyler King</span>
		<p class={authorBio}>
			Software engineer and creative technologist based in Portland. Passionate about building modern web applications and solving complex technical challenges.
		</p>
	</div>
</div>
