<template>
	<div id="app">
		<Header />
		<Menu />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/template/Header"
import Menu from './components/template/Menu'
import Content from './components/template/Content'
import Footer from './components/template/Footer'

export default {
	name: "App",
	components: {Header, Menu, Content, Footer}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;1,200;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
*{
	font-family: 'Nunito Sans', sans-serif;
}

body{
	margin: 0;
	
}
#app{
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	height: 100vh;

	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;

	grid-template-areas: 
		"header header"
		"menu content"
		"menu footer"
	;
}

</style>