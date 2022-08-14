<script>
	import { NotificationsSharp, PersonSharp, PieChartOutline, Sunny, Moon } from 'svelte-ionicons';
</script>

<nav class="p-3">
	<div class="navbar bg-primary text-primary-content rounded-2xl shadow">
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
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href="/">Homepage</a></li>
					<li><a href="/">Simulator</a></li>
					<li><a href="/">About</a></li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="btn btn-ghost normal-case text-xl font-serif" href="/"
				><PieChartOutline size="24" class="opacity-70" />
				<p class="p-1">Stockify</p></a
			>
		</div>
		<div class="navbar-end">
			<label class="swap swap-rotate">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" />

				<span class="btn btn-ghost btn-circle swap-on "><Moon size="20" class="opacity-70" /></span>
				<span class="btn btn-ghost btn-circle swap-off"><Sunny size="20" class="opacity-70" /></span
				>
			</label>

            <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <NotificationsSharp size="20" class="opacity-70"/>
        <!-- <span class="badge badge-xs badge-neutral indicator-item"></span> -->
      </div>
    </button>

			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost btn-circle" for="">
					<PersonSharp size="20" class="opacity-70" />
				</label>
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
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
