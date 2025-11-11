<script lang='ts'>
	import {
		contactForm,
		formGroup,
		formLabel,
		formInput,
		formTextarea,
		formSelect,
		submitButton
	} from './ContactForm.css'
</script>

<form class={contactForm} name='contact-form' method='POST' netlify-honeypot='bot-field' data-netlify='true'>
  <input type='hidden' name='form-name' value='contact-form' />
	<div class={formGroup}>
		<label for='name' class={formLabel}>Name</label>
		<input type='text' id='name' name='name' class={formInput} required />
	</div>

	<div class={formGroup}>
		<label for='email' class={formLabel}>Email</label>
		<input type='email' id='email' name='email' class={formInput} required />
	</div>

	<div class={formGroup}>
		<label for='phone' class={formLabel}>Phone</label>
		<input type='tel' id='phone' name='phone' class={formInput} />
	</div>

	<div class={formGroup}>
		<label for='reason' class={formLabel}>Reason</label>
		<select id='reason' name='reason' class={formSelect} required>
			<option value=''>Select a reason...</option>
			<option value='project'>New Project</option>
			<option value='consultation'>Consultation</option>
			<option value='collaboration'>Collaboration</option>
			<option value='other'>Other</option>
		</select>
	</div>

	<div class={formGroup}>
		<label for='message' class={formLabel}>Message</label>
		<textarea id='message' name='message' class={formTextarea} placeholder='Tell me about your project or how I can help...' required></textarea>
	</div>

	<button type='submit' class={submitButton}>Send Message</button>
</form>
