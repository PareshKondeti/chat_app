const Home = () => {
	return (
		<div className='flex h-[70vh] sm:h-[70vh] md:h-[70vh] w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 py-4 mx-auto'>
			{/* Sidebar Component */}
			<Sidebar />
			{/* Message Container */}
			<MessageContainer />
		</div>
	);
};

export default Home;
