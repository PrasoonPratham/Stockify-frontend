<nav class="p-1 my-2 sticky z-10 top-0 bg-inherit">
	<div class="navbar bg-primary text-primary-content rounded-box shadow">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost btn-circle" for="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>

				<ul tabindex="0" class="menu bg-base-100 w-56 rounded-xl mt-3 p-2 dropdown-content border-2 border-base-300 shadow">
					<li><a href="/">Home</a></li>
					<li><a href="/">Simulator</a></li>
					<li><a href="/about">About</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost normal-case text-xl font-serif" href="/"
				><div class="w-7">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
						><title>Pie Chart</title><path
							d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0189.12 330.65"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-miterlimit="10"
							stroke-width="32"
						/><path
							d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0018.09 85L256 256z"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/></svg
					>
				</div>
				<p class="ml-1">Stockify</p></a
			>
		</div>
		<div class="navbar-end">
			<label class="swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" data-toggle-theme="emerald,forest" />

				<span class="btn btn-ghost btn-circle swap-on"
					><div class="w-7">
						<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
							><title>Moon</title><path
								d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/></svg
						>
					</div></span
				>
				<div class="btn btn-ghost btn-circle swap-off">
					<div class="w-7">
						<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
							><title>Sunny</title><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-miterlimit="10"
								stroke-width="32"
								d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
							/><circle
								cx="256"
								cy="256"
								r="80"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-miterlimit="10"
								stroke-width="32"
							/></svg
						>
					</div>
				</div></label
			>

			<button class="btn btn-ghost btn-circle">
				<div class="w-7">
					<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
						><path
							d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="32"
						/></svg
					>
				</div>
			</button>

			<div class="dropdown dropdown-end ">
				<label tabindex="0" class="btn btn-ghost btn-circle" for="">
					<div class="w-7">
						<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"
							><title>Person</title><path
								d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							/><path
								d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
								fill="none"
								stroke="currentColor"
								stroke-miterlimit="10"
								stroke-width="32"
							/></svg
						>
					</div>
				</label>
				<ul
					tabindex="0"
					class="menu bg-base-100 w-56 rounded-xl mt-3 p-2 dropdown-content border-2 border-base-300 shadow"
				>
					<li>
						<a class="justify-between" href="/"> Profile </a>
					</li>
					<li><a href="/">Settings</a></li>
					<li><a href="/">Logout</a></li>
				</ul>
			</div>
		</div>
	</div>
</nav>
