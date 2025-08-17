<template>
    <main class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full mx-4 p-8 bg-white rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-center text-primary-700 mb-8">Welcome to benappiahpoku</h1>

            <form class="space-y-6" @submit.prevent>
                <!-- Username Input -->
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
id="username" type="text" name="username"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your username" required>
                </div>

                <!-- Password Input -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
id="password" type="password" name="password"
                        class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter your password" required>
                </div>

                <!-- Submit Button -->
                <button
type="submit"
                    class="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Sign In
                </button>
            </form>
        </div>
    </main>
</template>

<script setup lang="ts">
// Form will be non-functional as requested
</script>
