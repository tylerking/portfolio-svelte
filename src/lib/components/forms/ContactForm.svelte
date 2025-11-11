<script lang='ts'>
	import {
		contactForm,
		formGroup,
		formLabel,
		formInput,
		formTextarea,
		formSelect,
		submitButton,
		successMessage,
		errorMessage
	} from './ContactForm.css'

	let formElement: HTMLFormElement
	let showSuccess = false
	let showError = false
	let errorText = ''
	let isSubmitting = false

	async function handleSubmit(event: Event) {
		event.preventDefault()
		
		if (isSubmitting) return
		
		isSubmitting = true
		showSuccess = false
		showError = false
		errorText = ''

		const formData = new FormData(formElement)
		
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: formData
			})

			if (!response.ok) {
				let errorMessage = 'Failed to send message'
				try {
					const data = await response.json()
					errorMessage = data.error || errorMessage
				} catch {
					errorMessage = await response.text() || errorMessage
				}
				throw new Error(errorMessage)
			}

			showSuccess = true
			formElement.reset()

			setTimeout(() => {
				showSuccess = false
			}, 5000)
		} catch (error) {
			showError = true
			errorText = error instanceof Error ? error.message : 'An error occurred. Please try again.'
		} finally {
			isSubmitting = false
		}
	}
</script>

<form class={contactForm} bind:this={formElement} on:submit={handleSubmit}>
  <input type='text' name='bot-field' style='display:none' tabindex='-1' autocomplete='off' />

  <div class={formGroup}>
    <label for='name' class={formLabel}>Name</label>
    <input type='text' id='name' name='name' class={formInput} required disabled={isSubmitting} />
  </div>

  <div class={formGroup}>
    <label for='email' class={formLabel}>Email</label>
    <input type='email' id='email' name='email' class={formInput} required disabled={isSubmitting} />
  </div>

  <div class={formGroup}>
    <label for='phone' class={formLabel}>Phone</label>
    <input type='tel' id='phone' name='phone' class={formInput} disabled={isSubmitting} />
  </div>

  <div class={formGroup}>
    <label for='reason' class={formLabel}>Reason</label>
    <select id='reason' name='reason' class={formSelect} required disabled={isSubmitting}>
      <option value=''>Select a reason...</option>
      <option value='project'>New Project</option>
      <option value='consultation'>Consultation</option>
      <option value='collaboration'>Collaboration</option>
      <option value='general'>General</option>
    </select>
  </div>

  <div class={formGroup}>
    <label for='message' class={formLabel}>Message</label>
    <textarea id='message' name='message' class={formTextarea} placeholder='Tell me about your project or how I can help...' required disabled={isSubmitting}></textarea>
  </div>

  <button type='submit' class={submitButton} disabled={isSubmitting}>
		{isSubmitting ? 'Sending...' : 'Send Message'}
	</button>

	{#if showSuccess}
		<div class={successMessage}>
			<p>Thank you! Your message has been sent successfully.</p>
		</div>
	{/if}

	{#if showError}
		<div class={errorMessage}>
			<p>{errorText}</p>
		</div>
	{/if}
</form>