<script lang='ts'>
	import { PUBLIC_API_URL } from '$env/static/public'
	import {
		chatBotButton,
		chatBotWindow,
		chatHeader,
		chatHeaderTitle,
		chatHeaderSubtitle,
		chatHeaderButton,
		chatMessages,
		chatMessage,
		chatMessageUser,
		chatMessageBot,
		chatInputContainer,
		chatInput,
		chatSendButton,
		chatWindowOpen,
		chatWindowClosed
	} from './ChatBot.css'

	let isOpen = false
	let messages: Array<{ text: string; isUser: boolean; sources?: Array<{ title: string; source: string }> }> = []
	let inputValue = ''
	let isLoading = false
	let messagesContainer: HTMLDivElement

	// Scroll to bottom when new messages are added
	$: if (messages.length && messagesContainer) {
		setTimeout(() => {
			messagesContainer.scrollTop = messagesContainer.scrollHeight
		}, 100)
	}

	function toggleChat() {
		isOpen = !isOpen
		if (isOpen && messages.length === 0) {
			// Add welcome message
			messages = [
				{
					text: 'Hi! I\'m Tyler\'s AI assistant. Ask me anything about their projects, experience, or skills!',
					isUser: false
				}
			]
		}
	}

	async function sendMessage() {
		if (!inputValue.trim() || isLoading) return

		const question = inputValue.trim()
		inputValue = ''

		// Add user message
		messages = [...messages, { text: question, isUser: true }]
		isLoading = true

		try {
			const response = await fetch(`${PUBLIC_API_URL}/qa`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ question })
			})

			if (!response.ok) {
				throw new Error('Failed to get response')
			}

			const data = await response.json()

			// Add bot response
			messages = [
				...messages,
				{
					text: data.answer,
					isUser: false,
					sources: data.sources
				}
			]
		} catch (error) {
			console.error('Chatbot error:', error)
			console.error('API URL:', PUBLIC_API_URL)
			messages = [
				...messages,
				{
					text: 'Sorry, I\'m having trouble connecting right now. Please try again later.',
					isUser: false
				}
			]
		} finally {
			isLoading = false
		}
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault()
			sendMessage()
		}
	}
</script>

<!-- Floating button -->
<button class={chatBotButton} on:click={toggleChat} aria-label='Open chat'>
	<i class='iconoir-chat-bubble-question'></i>
</button>

<!-- Chat window -->
<div class={`${chatBotWindow} ${isOpen ? chatWindowOpen : chatWindowClosed}`}>
	<!-- Header -->
	<div class={chatHeader}>
		<div>
			<h3 class={chatHeaderTitle}>Ask Tyler Anything</h3>
			<p class={chatHeaderSubtitle}>Powered by AI</p>
		</div>
		<button class={chatHeaderButton} on:click={toggleChat} aria-label='Close chat'>
			<i class='iconoir-xmark'></i>
		</button>
	</div>

	<!-- Messages -->
	<div class={chatMessages} bind:this={messagesContainer}>
		{#each messages as message}
			<div class={`${chatMessage} ${message.isUser ? chatMessageUser : chatMessageBot}`}>
				<div class='message-content'>
					{message.text}
				</div>
				{#if message.sources && message.sources.length > 0}
					<div class='sources'>
						<small>Sources: {message.sources.map(s => s.title).join(', ')}</small>
					</div>
				{/if}
			</div>
		{/each}
		{#if isLoading}
			<div class={`${chatMessage} ${chatMessageBot}`}>
				<div class='message-content'>
					<span class='typing-indicator'>Thinking...</span>
				</div>
			</div>
		{/if}
	</div>

	<!-- Input -->
	<div class={chatInputContainer}>
		<input
			type='text'
			class={chatInput}
			placeholder='Ask about projects, experience, skills...'
			bind:value={inputValue}
			on:keydown={handleKeyDown}
			disabled={isLoading}
		/>
		<button
			class={chatSendButton}
			on:click={sendMessage}
			disabled={!inputValue.trim() || isLoading}
			aria-label='Send message'
		>
			<i class='iconoir-send'></i>
		</button>
	</div>
</div>
